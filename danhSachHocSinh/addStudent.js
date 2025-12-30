import readlineSync from 'readline-sync';
import fs from 'fs';

function addStudent(filePath) {

    let students = [];
    let isAdding = true;

    while (isAdding) {
        let name = readlineSync.question('Nhập Tên: ');
        let genders = ['Nam', 'Nữ', 'N/A'];
        let index = readlineSync.keyInSelect(genders, 'Hãy Chọn Một', {
            cancel: false
        });
        let gender = genders[index];
        let weight = readlineSync.questionFloat('Nhập Cân Nặng Phải Là Số. Ví Dụ: 54.7 ', {
            limitMessage: 'Sai Định Dạng. Hãy Nhập Số'
        });
        students.push({ name, gender, weight });
        // Thay vì dùng keyInYN
        let answer = readlineSync.question('Bạn Muốn Nhập Thêm Không? (Y/N): ');
        if (answer.toLowerCase() !== 'y') {
            isAdding = false;
        }
    }

    let newContent = [];
    let content = fs.readFileSync(filePath, 'utf8').trim();

    if (content) {
        let data = JSON.parse(content);
        newContent = [...data, ...students];
    }

    fs.writeFileSync(filePath, JSON.stringify(newContent, null, 2));
    console.log(`Đã Thêm ${students.length} Học Sinh:`)
    console.table(students);

}

export default addStudent;