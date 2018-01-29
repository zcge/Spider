let moment = require("moment");
let crypto = require('crypto');
// 这里填写蚂蚁代理的appkey和secret  
let app_key = "";
let secret = "";
let md5 = (text) => {
    return crypto.createHash('md5').update(text).digest('hex');
};
let getKey = () => {
    // 用缓存的代码
    let keygen = {
        "app_key": app_key,
        "timestamp": moment().format('YYYY-MM-DD HH:mm:ss')
    };
    var list = [secret];
    var param = [];
    var str = '';
    for (var p in keygen) {
        str = p + "" + keygen[p];
        list.push(str);
    }
    for (var p in keygen) {
        str = p + "=" + keygen[p];
        param.push(str);
    }
    list.push(secret);
    var m5 = "MYH-AUTH-MD5 sign=" + md5(list.join("")).toUpperCase() + "&" + param.join("&");
    console.log(m5);
    return m5;
}
module.exports = getKey;