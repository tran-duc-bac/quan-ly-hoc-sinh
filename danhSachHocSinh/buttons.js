import readlineSync from 'readline-sync';
import findByName from './findByName.js';
import sortByName from './sortByName.js';
import deleteByName from './deleteByName.js';
import saveStudent from './saveStudent.js';
import addStudent from './addStudent.js';
import viewStudent from './viewStudent.js';
import showMenu from './showMenu.js';
import quit from './quit.js';

function buttons(isRunning) {

    let filePath = './data.json';
    let students = [];

    while (isRunning) {

        //show danh sach lua chon
        showMenu();

        let choice = readlineSync.question('Bấm Phím [1] Đến [7] Để Tiếp Tục, [Q] Để Thoát: ');

        switch (choice.toLowerCase()) {

            case '1':
                //viewData
                viewStudent(filePath);
                break;

            case '2':
                //addData
                addStudent(filePath);
                break;

            case '3':
                //save
                saveStudent(students, filePath);
                break;

            case '4':
                //Delete a data by Name
                deleteByName(filePath);
                break;

            //case '5':
            //Sửa
            //break;

            case '6':
                //Sort theo name
                sortByName(filePath);
                break;

            case '7':
                //Tim theo ten
                findByName(filePath);
                break;

            case 'q':
                //Quit
                //pass-by-value
                isRunning = quit();
                break;

            default:
                console.log('\nHãy Chọn Lại!');
                break;
        }
    }
};

export default buttons;