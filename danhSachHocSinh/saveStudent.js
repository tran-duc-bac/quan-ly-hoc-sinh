import fs from 'fs';

function saveStudent(students, filePath) {

    let newContent = [];
    let content = fs.readFileSync(filePath, 'utf8').trim();

    if (content) {
        let data = JSON.parse(content);
        newContent = [...data, ...students];
    }

    fs.writeFileSync(filePath, JSON.stringify(newContent, null, 2));
    console.log('Đã Lưu');
    students = [];
}

export default saveStudent;