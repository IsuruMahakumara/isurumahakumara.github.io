import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - adjusting to your actual path
const PROJECTS_DIR = path.join(__dirname, 'public', 'projects');
const OUTPUT_FILE = path.join(__dirname, 'public', 'projects.json');

function extractMetadata() {
    try {
        if (!fs.existsSync(PROJECTS_DIR)) {
            console.error(`Directory not found: ${PROJECTS_DIR}`);
            return;
        }

        const files = fs.readdirSync(PROJECTS_DIR);
        
        const metadataList = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const filePath = path.join(PROJECTS_DIR, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContent);
                return { ...data };
            });

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadataList, null, 2));
        console.log(`✅ Success! JSON created at: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

extractMetadata();