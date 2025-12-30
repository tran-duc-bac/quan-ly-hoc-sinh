import readlineSync from 'readline-sync';

function quit() {

    if (readlineSync.keyInYN('Thoát?')) {
        console.log('Đã Thoát Chương Trình!');
        return false;
    };
    return true;
}

export default quit;