let a = 1;
a = 2;
setTimeout(() => {
    console.log(a);

}, 2000);

//những hàm bất đồng bộ thường lấy dữ liệu từ bên ngoài chương trình

const fs = require("fs");
// const data = fs.readFileSync("data.txt", { encoding: 'utf8' });
// console.log(data);

const data = fs.readFile('data.txt', { encoding: 'utf8' }, (error, data) => {
    if (error)
        console.log(error);
    else
        console.log(data);
})