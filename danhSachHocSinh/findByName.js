import readlineSync from 'readline-sync';
import fs from 'fs';

function findByName(filePath) {

    let nameFind = readlineSync.question('Bạn Tìm Tên Học Sinh Nào? ');
    let contentFind = fs.readFileSync(filePath, 'utf8').trim();
    let dataFind = JSON.parse(contentFind);

    dataFind = dataFind.filter(s => s.name.toLowerCase() === nameFind.toLowerCase());

    if (dataFind.length > 0) {
        console.log(`Danh Sách Học Sinh Có Tên: ${nameFind}`);
        console.table(dataFind);
    } else {
        console.log(`Không Có Học Sinh: ${nameFind}`);
    }

}

export default findByName;