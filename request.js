const request = require("request");

function getTempByCityName(nameCity, callBack) {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${nameCity},asia&appid=5fbbbfefe61336901acbeaf04aafca72`;

    request(URL, (error, response, body) => {
        if (error)
            return callBack(error, null);
        const obj = JSON.parse(body);
        if (obj.main)
            return callBack(null, obj.main.temp);
        return callBack(new Error("Không tìm thấy city"), null);
        // return obj; return trong này ko liên quan gì đến hàm getTempByCityName
    });
}

// console.log(getTempByCityName("SaiGon"), console.log());
//vì console.log() = undefined
//tương đương truyền cho hàm callBack là undefined

// getTempByCityName("SaiGon", console.log);
//tương đương thay hàm callBack = console.log
//tương đương console.log(obj.main.temp)
//console.log trả về function
//console.log() trả về undefined

// getTempByCityName("SaiGon", console.log());
//tương đương thay hàm callBack = console.log()
//tương đương console.log()(obj.main.temp)

getTempByCityName("SaiGon", (error, data) => {
    if (error)
        console.log(error.message);
    else
        console.log(data);
});