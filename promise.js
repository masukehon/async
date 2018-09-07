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
//kha làm :((
// congPromise(10, 5)
//     .then(resultCong => {
//         truPromise(resultCong, 2).then(resultTru => {
//                 nhanPromise(resultTru, 5).then(resultNhan => console.log(resultNhan))
//                     .catch(errorNhan => console.log(errorNhan));
//             })
//             .catch(errorTru => console.log(errorTru));
//     })
//     .catch(errorCong => {
//         console.log(errorCong);
//     });

//thầy làm
congPromise(10, 5)
    .then(tong => truPromise(tong, 2))
    .then(kq => 10)
    .then(hieu => nhanPromise(hieu, 5)) //thì tham số hieu sẽ được gán = 10
    .then(kq => console.log(kq))
    .catch(error => console.log(error));


function dienTichHinhThang(a, b, h) {
    // ((a + b)/2)*h
    return congPromise(a, b)
        .then(tong => chiaPromise(tong, 2))
        .then(thuong => nhanPromise(thuong, h));
}
dienTichHinhThang(5, 3, 8)
    .then(result => console.log(result))
    .catch(error => console.log(error));