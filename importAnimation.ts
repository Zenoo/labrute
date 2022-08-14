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

// Create the component file
const componentFile = `import { Box, BoxProps, GlobalStyles } from '@mui/material';
import React from 'react';

export interface ${componentName}Props extends BoxProps {
  id: string;
  inverted?: boolean;
}

const WIDTH = ${width || 0};
const HEIGHT = ${height || 0};
const FRAMES = ${frames};
const X_OFFSET = ${offsetX || 0};
const Y_OFFSET = ${offsetY || 0};
const MARGIN = 30;

const ${componentName} = ({ id, inverted }: ${componentName}Props) => (
  <Box sx={{
    position: 'relative',
    overflow: 'hidden',
    width: WIDTH,
    height: HEIGHT,
  }}
  >
    <GlobalStyles styles={{
      '@keyframes ${componentName}': {
        '100%': {
          left: -(WIDTH + MARGIN) * (FRAMES - 1),
        }
      }
    }}
    />
    <Box
      component="svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: (WIDTH + MARGIN) * FRAMES,
        animation: \`${componentName} ${animationLength} steps(\${FRAMES}, jump-none) infinite\`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
${animationFiles.map((file, index) => {
    const svgFile = fs.readFileSync(`${folder}/${file}`, 'utf8');

    // Remove first two lines and last line
    const svgFileLines = svgFile.split('\n').slice(2, -2);

    // Replace the matrix in the first line
    const firstLine = svgFileLines[0].replace(/transform="matrix\(1.0, 0.0, 0.0, 1.0, [\d.]+, [\d.]+\)"/, `transform={\`matrix(1.0, 0.0, 0.0, 1.0, \${X_OFFSET + (WIDTH + MARGIN) * ${index}}, \${Y_OFFSET})\`}`);
    svgFileLines[0] = `  ${firstLine}`;

    return `      {/* FRAME ${index + 1} */}
  ${svgFileLines.join('\n    ')
    .replace(/xlink:href="#([^"]*)"/g, `xlinkHref={\`#${componentName}-${index + 1}-\${id}-$1\`}`)
    .replace(/id="([^"]*)"/g, `id={\`${componentName}-${index + 1}-\${id}-$1\`}`)
    .replace(/fill-rule="([^"]*)"/g, 'fillRule="$1"')
    .replace(/stroke-linecap="([^"]*)"/g, 'strokeLinecap="$1"')
    .replace(/stroke-linejoin="([^"]*)"/g, 'strokeLinejoin="$1"')
    .replace(/stroke-opacity="([^"]*)"/g, 'strokeOpacity="$1"')
    .replace(/stroke-width="([^"]*)"/g, 'strokeWidth="$1"')
    .replace(/"\/>/g, '" />')
    .replace(/}\/>/g, '} />')}`;
  }).join('\n')}
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