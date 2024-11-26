import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const slidesDir = path.resolve(__dirname, 'slides');
const templatePath = path.resolve(__dirname, 'index.template.html');
const outputPath = path.resolve(__dirname, 'index.html');

// Function to combine slides into the template
async function buildSlides() {
    try {
        // Ensure the slides directory exists
        if (!fs.existsSync(slidesDir)) {
            throw new Error(`Slides directory not found: ${slidesDir}`);
        }

        // Read all slide files
        const slideFiles = fs.readdirSync(slidesDir).filter(file => file.endsWith('.html'));

        if (slideFiles.length === 0) {
            throw new Error(`No slide files found in directory: ${slidesDir}`);
        }

        // Combine slide contents
        const slidesContent = slideFiles
            .map(file => fs.readFileSync(path.join(slidesDir, file), 'utf-8'))
            .join('\n');

        // Read the template
        let template = fs.readFileSync(templatePath, 'utf-8');

        // Inject slides into the template
        template = template.replace('<!-- SLIDES WILL BE INSERTED HERE -->', slidesContent);

        // Write the final index.html
        fs.writeFileSync(outputPath, template);
        console.log(`Built index.html with ${slideFiles.length} slides.`);
    } catch (error) {
        console.error(`Error during slide build: ${error.message}`);
    }
}

// Run the build process
buildSlides();
