/* eslint-disable no-console */
/* eslint-disable no-process-exit */
import * as fs from 'fs';

// First param: folder
// Second param: Component name
// Third param: Component folder
// Fourth param: Animation length

const [
  folder,
  componentName,
  componentFolder,
  animationLength,
] = process.argv.slice(2);

if (!folder || !componentName || !componentFolder || !animationLength) {
  console.log('Usage: yarn animation:import <folder> <componentName> <componentFolder> <animationLength>');
  process.exit(1);
}

// Get the list of all the animation files in the folder
let animationFiles = fs.readdirSync(folder);

// Filter the list to only include the animation files
animationFiles = animationFiles.filter((file) => file.match(/\d+\.svg$/));

// Sort the list
animationFiles.sort((a, b) => {
  const aNumber = +a.split('.')[0];
  const bNumber = +b.split('.')[0];
  return aNumber - bNumber;
});

// Read the first file toget the animation variables
const firstFile = fs.readFileSync(`${folder}/${animationFiles[0]}`, 'utf8');
const firstFileLines = firstFile.split('\n');
const height = firstFileLines[1].match(/height="([\d.]+)px"/)?.[1];
const width = firstFileLines[1].match(/width="([\d.]+)px"/)?.[1];
const offsetX = firstFileLines[2].match(/matrix\(1.0, 0.0, 0.0, 1.0, ([\d.]+), [\d.]+\)/)?.[1];
const offsetY = firstFileLines[2].match(/matrix\(1.0, 0.0, 0.0, 1.0, [\d.]+, ([\d.]+)\)/)?.[1];
const frames = animationFiles.length;

// Store the SVG definitions from the last file
const lastFile = fs.readFileSync(`${folder}/${animationFiles[animationFiles.length - 1]}`, 'utf8');
const lastFileLines = lastFile.split('\n');
const definitions = lastFileLines.slice(lastFileLines.findIndex((line) => line.match(/<defs>/)), lastFileLines.findIndex((line) => line.match(/<\/defs>/)) + 1);

// Create the component file
const componentFile = `/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface ${componentName}Props extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const ${componentName}_WIDTH = ${width || 0};
export const ${componentName}_HEIGHT = ${height || 0};
export const ${componentName}_FRAMES = ${frames};
export const ${componentName}_X_OFFSET = ${offsetX || 0};
export const ${componentName}_Y_OFFSET = ${offsetY || 0};
export const ${componentName}_MARGIN = 30;

const ${componentName} = ({ id, inverted, sx, ...rest }: ${componentName}Props) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: ${componentName}_WIDTH,
      height: ${componentName}_HEIGHT,
      ...sx,
    }}
    {...rest}
  >
    <Box
      component="svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        top: 0,
        left: inverted
          ? -(${componentName}_WIDTH + ${componentName}_MARGIN)
            * (${componentName}_FRAMES - 1)
            - ${componentName}_MARGIN
          : 0,
        width: (${componentName}_WIDTH + ${componentName}_MARGIN) * ${componentName}_FRAMES,
        animation: \`${componentName}\${inverted ? 'Inverted' : ''} ${animationLength} steps(\${${componentName}_FRAMES}, jump-none) infinite\`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
${animationFiles.map((file, index) => {
    const svgFile = fs.readFileSync(`${folder}/${file}`, 'utf8');

    // Remove first two lines and last line
    let svgFileLines = svgFile.split('\n').slice(2, -2);

    // Remove SVG definitions
    svgFileLines = svgFileLines.splice(0, svgFileLines.findIndex((line) => line.match(/<defs>/)));
    svgFileLines = svgFileLines.splice(svgFileLines.findIndex((line) => line.match(/<\/defs>/)) + 1);

    // Replace the matrix in the first line
    const firstLine = svgFileLines[0].replace(/transform="matrix\(1.0, 0.0, 0.0, 1.0, [\d.]+, [\d.]+\)"/, `transform={\`matrix(1.0, 0.0, 0.0, 1.0, \${${componentName}_X_OFFSET + (${componentName}_WIDTH + ${componentName}_MARGIN) * ${index}}, \${${componentName}_Y_OFFSET})\`}`);
    svgFileLines[0] = `  ${firstLine}`;

    return `      {/* FRAME ${index + 1} */}
  ${svgFileLines.join('\n    ')
    .replace(/xlink:href="#([^"]*)"/g, `xlinkHref={\`#${componentName}-\${id}-$1\`}`)
    .replace(/id="([^"]*)"/g, `id={\`${componentName}-\${id}-$1\`}`)
    .replace(/fill-rule="([^"]*)"/g, 'fillRule="$1"')
    .replace(/fill-opacity="([^"]*)"/g, 'fillOpacity="$1"')
    .replace(/stroke-linecap="([^"]*)"/g, 'strokeLinecap="$1"')
    .replace(/stroke-linejoin="([^"]*)"/g, 'strokeLinejoin="$1"')
    .replace(/stroke-opacity="([^"]*)"/g, 'strokeOpacity="$1"')
    .replace(/stroke-width="([^"]*)"/g, 'strokeWidth="$1"')
    .replace(/"\/>/g, '" />')
    .replace(/}\/>/g, '} />')}`;
  }).join('\n')}
    ${definitions.join('\n    ')
    .replace(/xlink:href="#([^"]*)"/g, `xlinkHref={\`#${componentName}-\${id}-$1\`}`)
    .replace(/id="([^"]*)"/g, `id={\`${componentName}-\${id}-$1\`}`)
    .replace(/fill-rule="([^"]*)"/g, 'fillRule="$1"')
    .replace(/fill-opacity="([^"]*)"/g, 'fillOpacity="$1"')
    .replace(/stroke-linecap="([^"]*)"/g, 'strokeLinecap="$1"')
    .replace(/stroke-linejoin="([^"]*)"/g, 'strokeLinejoin="$1"')
    .replace(/stroke-opacity="([^"]*)"/g, 'strokeOpacity="$1"')
    .replace(/stroke-width="([^"]*)"/g, 'strokeWidth="$1"')
    .replace(/"\/>/g, '" />')
    .replace(/}\/>/g, '} />')}
    </Box>
  </Box>
);

export default ${componentName};`;

// Create the component folder if it doesn't exist
if (!fs.existsSync(componentFolder)) {
  fs.mkdirSync(componentFolder);
}

// Create the component file
fs.writeFileSync(`${componentFolder}/${componentName}.tsx`, componentFile);