/**
 * Copy data folder from parent directory to public folder
 */

import { cpSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = resolve(__dirname, '..');
const parentDir = resolve(projectRoot, '..');
const sourceDir = resolve(parentDir, 'data');
const targetDir = resolve(projectRoot, 'public', 'data');

console.log('Copying data folder...');
console.log('From:', sourceDir);
console.log('To:', targetDir);

try {
  // Ensure target directory exists
  if (!existsSync(resolve(projectRoot, 'public'))) {
    mkdirSync(resolve(projectRoot, 'public'));
  }

  // Copy data folder
  cpSync(sourceDir, targetDir, {
    recursive: true,
    force: true
  });

  console.log('✅ Data copied successfully!');
} catch (error) {
  console.error('❌ Error copying data:', error.message);
  process.exit(1);
}
