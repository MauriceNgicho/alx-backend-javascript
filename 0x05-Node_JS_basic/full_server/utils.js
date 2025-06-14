import { readFile } from 'fs/promises';

export default function readDatabase(filePath) {
  return readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const fields = {};

      lines.slice(1).forEach((line) => {
        const values = line.split(',');
        const firstname = values[0].trim();
        const field = values[3].trim();

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      return fields;
    });
}
