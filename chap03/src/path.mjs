import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const string = __filename; // __filename 현재 파일 표시

console.log('path.sep:',path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('-----------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.basename:',path.basename(string));
console.log('path.basename-extname:',path.basename(string, path.extname(string)));
console.log('-----------------------------');
console.log('path.parse():',path.parse(string));
console.log('path.format():',path.format({
  dir: 'home',
  name: 'path',
  ext:'.js',
}));
console.log('path.normalize():',path.posix.normalize('/Developments\\\\node.js\\path.js'));
console.log('---------------------------');
console.log('path.isAbsolute(/):',path.isAbsolute('/'));
console.log('path.isAbsolute(./home)',path.isAbsolute('./home'));
console.log('---------------------------');
console.log('path.relative():',path.relative('/Users/gimnayeon/Developments/node.js/chapter3', '/Users'));
console.log('path.join():',path.join(__dirname, '/node.js', 'chapter3'));
console.log('path.resolve():',path.resolve(__dirname, '/node.js', 'chapter3'));
console.log('__dirname:', __dirname);