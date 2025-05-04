import path from 'node:path';
import { fileURLToPath } from 'node:url';
export const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
export const PATH_DB = path.join(DIRNAME, '..', 'db', 'db.json');
console.log(PATH_DB);
