const request = require("request");

function getResult(tenPhepTinh, soA, soB, callBack) {
    const URL = `http://localhost:3000/tinh/${tenPhepTinh}/${soA}/${soB}`;

    if (isNaN(soA) || isNaN(soB))
        return callBack(new Error("a hoặc b không phải là số"), null);

    request(URL, (error, response, body) => {
        if (error)
            return callBack(error, null);
        return callBack(null, +body);
    });
}

// getResult("NHAN", 10, 8, (errorNhan, resultNhan) => {
//     if (errorNhan)
//         return console.log(errorNhan);
//     getResult("CONG", resultNhan, 5, (errorCong, resultCong) => {
//         if (errorCong) return console.log(errorNhan);
//         getResult("TRU", resultCong, 3, (errorTru, resultTru) => {
//             if (errorTru) return console.log(errorTru);
//             console.log(resultTru);
//         });
//     });
// });