const request = require("request");

function congPromise(soA, soB) {
    return new Promise((resolve, reject) => {
        const URL = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
        if (isNaN(soA) || isNaN(soB)) {
            return reject(new Error("a hoặc b không phải là số"));
        }
        request(URL, (error, response, body) => {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });
}

function truPromise(soA, soB) {
    return new Promise((resolve, reject) => {
        const URL = `http://localhost:3000/tinh/TRU/${soA}/${soB}`;
        if (isNaN(soA) || isNaN(soB)) {
            return reject(new Error("a hoặc b không phải là số"));
        }
        request(URL, (error, response, body) => {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });
}

function nhanPromise(soA, soB) {
    return new Promise((resolve, reject) => {
        const URL = `http://localhost:3000/tinh/NHAN/${soA}/${soB}`;
        if (isNaN(soA) || isNaN(soB)) {
            return reject(new Error("a hoặc b không phải là số"));
        }
        request(URL, (error, response, body) => {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });
}

function chiaPromise(soA, soB) {
    return new Promise((resolve, reject) => {
        const URL = `http://localhost:3000/tinh/CHIA/${soA}/${soB}`;
        if (isNaN(soA) || isNaN(soB)) {
            return reject(new Error("a hoặc b không phải là số"));
        }
        request(URL, (error, response, body) => {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });
}

//có async thì function sẽ luôn return về 1 promise
//dù trong đó ko return gì cả
async function tinhDienTichHinhThang(a, b, h) {
    //await nó sẽ đợi cho promise trả về kết quả
    //mới làm cái khác
    const tong = await congPromise(a, b).catch(error => { throw new Error("Loi cong"); });
    //console.log(typeof(tong)); string.
    //tong có thể vừa là promise, vừa là giá trị
    const thuong = await chiaPromise(tong, 2).catch(error => { throw new Error("Loi cong"); });
    const tich = await nhanPromise(thuong, h).catch(error => { throw new Error("Loi cong"); });
    return tich;

    //ko có await thì nó có thể chạy chiaPromise 
    //hoặc nhanPromise trước congPromise
}


// [1, 2, 3].forEach(async() => {
//     const dt = await tinhDienTichHinhThang(4, 5, 6);
//     console.log(dt);
// });

//trường hợp có 1000 user cùng lúc kết nối vào server
//để chờ xử lý lần lượt thì phải dùng for

// async function Test() {
//     for (let i = 0; i < 3; i++) {
//         //để dùng đc await thì phải có từ khóa async
//         const dt = await tinhDienTichHinhThang(4, 5, 6);
//         console.log(dt);
//     }
// }

// Test();

tinhDienTichHinhThang(10, "X", 5).then(kq => console.log(kq));