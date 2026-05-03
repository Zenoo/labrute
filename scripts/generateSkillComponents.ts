import * as fs from 'fs';
import * as path from 'path';

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

// Generate SVGs for tier 2 and 3 only (tier-1 is the source, never modified)
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

console.log('SVG generation complete!');
