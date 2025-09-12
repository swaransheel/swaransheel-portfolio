import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  webp: {
    quality: 80,
    effort: 6, // 0-6, higher = better compression but slower
  },
  jpeg: {
    quality: 85,
    progressive: true,
  },
  png: {
    quality: 85,
    compressionLevel: 8,
  },
};

/**
 * Convert images to WebP format
 * @param {string} inputDir - Source directory
 * @param {string} outputDir - Output directory for WebP files
 */
async function convertToWebP(inputDir, outputDir) {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`Created directory: ${outputDir}`);
    }

    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter((file) => file.match(/\.(jpg|jpeg|png)$/i));

    if (imageFiles.length === 0) {
      console.log(`No JPG/PNG files found in ${inputDir}`);
      return;
    }

    console.log(`Found ${imageFiles.length} images to convert...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      const outputPath = path.join(outputDir, outputFileName);

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;

        await sharp(inputPath).webp(config.webp).toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size;
        const savings = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(`✅ ${file} → ${outputFileName}`);
        console.log(
          `   Size: ${(originalSize / 1024).toFixed(1)}KB → ${(
            newSize / 1024
          ).toFixed(1)}KB (${savings}% reduction)`
        );
      } catch (error) {
        console.error(`❌ Failed to convert ${file}:`, error.message);
      }
    }

    console.log(`\n🎉 WebP conversion completed!`);
  } catch (error) {
    console.error("Error during WebP conversion:", error);
  }
}

/**
 * Optimize original images (compress without format change)
 * @param {string} inputDir - Directory to optimize
 */
async function optimizeOriginals(inputDir) {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter((file) => file.match(/\.(jpg|jpeg|png)$/i));

    console.log(`\nOptimizing ${imageFiles.length} original images...`);

    for (const file of imageFiles) {
      const filePath = path.join(inputDir, file);
      const tempPath = path.join(inputDir, `temp_${file}`);

      try {
        const stats = fs.statSync(filePath);
        const originalSize = stats.size;

        if (file.match(/\.(jpg|jpeg)$/i)) {
          await sharp(filePath).jpeg(config.jpeg).toFile(tempPath);
        } else if (file.match(/\.png$/i)) {
          await sharp(filePath).png(config.png).toFile(tempPath);
        }

        // Replace original with optimized version
        fs.renameSync(tempPath, filePath);

        const newStats = fs.statSync(filePath);
        const newSize = newStats.size;
        const savings = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(`✅ Optimized ${file}`);
        console.log(
          `   Size: ${(originalSize / 1024).toFixed(1)}KB → ${(
            newSize / 1024
          ).toFixed(1)}KB (${savings}% reduction)`
        );
      } catch (error) {
        console.error(`❌ Failed to optimize ${file}:`, error.message);
        // Clean up temp file if it exists
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }

    console.log(`\n🎉 Original image optimization completed!`);
  } catch (error) {
    console.error("Error during original image optimization:", error);
  }
}

/**
 * Get directory size in KB
 */
function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });

  return (totalSize / 1024).toFixed(1);
}

// Main execution
async function main() {
  const artDir = path.join(__dirname, "..", "src", "assets", "art");
  const webpDir = path.join(__dirname, "..", "public", "images", "webp");

  console.log("🖼️  Image Optimization Tool");
  console.log("============================");

  // Check if art directory exists
  if (!fs.existsSync(artDir)) {
    console.error(`❌ Art directory not found: ${artDir}`);
    return;
  }

  console.log(`Source: ${artDir}`);
  console.log(`WebP Output: ${webpDir}`);

  const originalSize = getDirectorySize(artDir);
  console.log(`\n📊 Original directory size: ${originalSize}KB`);

  // Convert to WebP
  await convertToWebP(artDir, webpDir);

  // Optimize originals (optional)
  const shouldOptimizeOriginals = process.argv.includes("--optimize-originals");
  if (shouldOptimizeOriginals) {
    await optimizeOriginals(artDir);
    const optimizedSize = getDirectorySize(artDir);
    console.log(`\n📊 Optimized directory size: ${optimizedSize}KB`);
  }

  if (fs.existsSync(webpDir)) {
    const webpSize = getDirectorySize(webpDir);
    console.log(`📊 WebP directory size: ${webpSize}KB`);

    const totalSavings = (
      ((originalSize - webpSize) / originalSize) *
      100
    ).toFixed(1);
    console.log(`\n💾 Total WebP savings: ${totalSavings}%`);
  }

  console.log(
    "\n🚀 To use WebP images, update your Gallery component with the picture element!"
  );
}

// Run the script
main().catch(console.error);

export { convertToWebP, optimizeOriginals };
