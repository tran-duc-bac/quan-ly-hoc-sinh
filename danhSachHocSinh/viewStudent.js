import fs from 'fs';

function viewStudent(filePath) {

    let loadData = fs.readFileSync(filePath, 'utf8');
    console.table(JSON.parse(loadData));
}

export default viewStudent;