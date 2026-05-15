import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillsBaseDir = path.join(__dirname, '../client/public/images/skills');
const tier1Dir = path.join(skillsBaseDir, 'tier-1');

// Tier colors based on TieredPerkColor from utils/StatColor.ts
const tierColors: Record<number, string> = {
  1: '#cccc00',
  2: '#ff9400',
  3: '#e21c1c',
};

// Get all SVG files from tier-1 directory (the source)
const svgFiles = fs.readdirSync(tier1Dir).filter((file) => file.endsWith('.svg'));

// Generate SVGs for tier 2 and 3 only
[2, 3].forEach((tier) => {
  const tierDir = path.join(skillsBaseDir, `tier-${tier}`);

  // Create tier directory if it doesn't exist
  if (!fs.existsSync(tierDir)) {
    fs.mkdirSync(tierDir, { recursive: true });
  }

  // Clear existing SVG files in this tier directory
  const existingFiles = fs.readdirSync(tierDir);
  existingFiles.forEach((file) => {
    if (file.endsWith('.svg')) {
      fs.unlinkSync(path.join(tierDir, file));
    }
  });

  const tierColor = tierColors[tier] as string;

  svgFiles.forEach((file) => {
    const svgPath = path.join(tier1Dir, file);
    let svgContent = fs.readFileSync(svgPath, 'utf-8');

    // Replace the tier-1 color (#cccc00) with tier-specific color
    // Match various formats: #cc0, #CC0, #cccc00, #CCCC00
    svgContent = svgContent.replace(/#cc(?:cc)?0{1,2}/gi, tierColor);

    const outputPath = path.join(tierDir, file);
    fs.writeFileSync(outputPath, svgContent, 'utf-8');
  });

  console.log(`Generated ${svgFiles.length} SVG files for tier ${tier}`);
});


// Create PNGs for all tiers in images/game/resources/skills
const pngOutputDir = path.join(__dirname, '../client/public/images/game/resources/skills');
if (!fs.existsSync(pngOutputDir)) {
  fs.mkdirSync(pngOutputDir, { recursive: true });
}

[1, 2, 3].forEach((tier) => {
  const tierDir = path.join(skillsBaseDir, `tier-${tier}`);
  const svgFiles = fs.readdirSync(tierDir).filter((file) => file.endsWith('.svg'));

  // Create target folder for PNGs if it doesn't exist
  const tierPngDir = path.join(pngOutputDir, `tier-${tier}`);
  if (!fs.existsSync(tierPngDir)) {
    fs.mkdirSync(tierPngDir, { recursive: true });
  }

  // Empty existing PNG files in this tier directory
  const existingPngFiles = fs.readdirSync(tierPngDir);
  existingPngFiles.forEach((file) => {
    if (file.endsWith('.png')) {
      fs.unlinkSync(path.join(tierPngDir, file));
    }
  });

  svgFiles.forEach(async (file) => {
    const svgPath = path.join(tierDir, file);
    const pngPath = path.join(tierPngDir, file.replace('.svg', '.png'));

    // Use magick to convert SVG to PNG
    const command = `magick -background none "${svgPath}" "${pngPath}"`;
    try {
      const { execSync } = await import('child_process');
      execSync(command);
    } catch (error) {
      console.error(`Error converting ${svgPath} to PNG:`, error);
    }
  });

  console.log(`Generated PNG files for tier ${tier}`);
});
console.log('SVG generation complete!');
