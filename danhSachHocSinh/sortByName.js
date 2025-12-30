import fs from 'fs';

function sortByName(filePath) {

    let content2 = fs.readFileSync(filePath, 'utf8');
    let data2 = JSON.parse(content2);
    let sortedArray = data2.toSorted((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    console.log(`Danh Sách Sau Khi Sắp Xếp`);
    console.log(sortedArray);
}

export default sortByName;