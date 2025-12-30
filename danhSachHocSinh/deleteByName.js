import readlineSync from 'readline-sync';
import fs from 'fs';

function deleteByName(filePath) {
    let nameDelete = readlineSync.question('Bạn muốn xoá tên nào? ');
    let content1 = fs.readFileSync(filePath, 'utf8').trim();
    let data1 = JSON.parse(content1);
    data1 = data1.filter(s => s.name.toLowerCase() !== nameDelete.toLowerCase());
    fs.writeFileSync(filePath, JSON.stringify(data1, null, 2));
    console.log(`Đã xoá: ${nameDelete}!`);
}

export default deleteByName;