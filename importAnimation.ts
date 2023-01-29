/* eslint-disable no-console */
/* eslint-disable no-process-exit */
import * as fs from 'fs';

// First param: source folder
// Second param: Animation name
// Third param: Animation folder
// Fourth param: Frame width
// Fifth param: Frame height

const [
  folder,
  animationName,
  animationFolder,
  width,
  height,
] = process.argv.slice(2);

if (!folder || !animationName || !animationFolder || !width || !height) {
  console.log('Usage: yarn run animation:import <folder> <animationName> <animationFolder> <frameWidth> <frameHeight>');
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

animationFiles.forEach((file, i) => {
  const svgFile = fs.readFileSync(`${folder}/${file}`, 'utf8');

  // Create the frame file
  let frameFile = `import {
  FrameProps,
} from '@labrute/core';

const ${animationName}${i + 1} = ({ colors, body }: FrameProps) => (/* html */\`${svgFile}
\`);

export default ${animationName}${i + 1};`;

  // Replace width and height
  frameFile = frameFile.replace(
    /<svg xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink" height="(\d|\.)+px" width="(\d|\.)+px"/,
    `\${body ? '' : ''}<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="${height}px" width="${width}px"`,
  );

  // Replace skin colors
  // eslint-disable-next-line no-template-curly-in-string
  frameFile = frameFile.replace(/"#efcdaf"/g, '"${colors.skinColor}"');
  // eslint-disable-next-line no-template-curly-in-string
  frameFile = frameFile.replace(/"#c6886a"/g, '"${colors.skinShade}"');

  // Create the animation folder if it doesn't exist
  if (!fs.existsSync(animationFolder)) {
    fs.mkdirSync(animationFolder);
  }

  // Create the frame file
  fs.writeFileSync(`${animationFolder}/${i + 1}.ts`, frameFile);
});
