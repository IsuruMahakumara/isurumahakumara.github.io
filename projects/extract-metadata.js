import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since the script is inside 'public/projects':
// 1. The source is in 'projects-markdown'
const PROJECTS_DIR = path.join(__dirname, 'projects-markdown'); 
// 2. The output goes in the same folder as the script
const OUTPUT_FILE = path.join(__dirname, 'projects.json');

function extractMetadata() {
    try {
        if (!fs.existsSync(PROJECTS_DIR)) {
            console.error(`❌ Directory not found: ${PROJECTS_DIR}`);
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

        // Optional: Sort by date (newest first)
        metadataList.sort((a, b) => new Date(b.date) - new Date(a.date));

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadataList, null, 2));
        console.log(`✅ Success! Created ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

extractMetadata();