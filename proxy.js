// 要用爬虫代理解开 注释部分，并在购买蚂蚁代理，在getAgentKey文件中填入关键的信息
const fetch = require('node-fetch')
const HttpsProxyAgent = require('https-proxy-agent');
const getKey = require("./getAgentKey")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const opt = {
    fetch: async function (url,opt) {
        // let agent = new HttpsProxyAgent("http://s5.proxy.mayidaili.com:8123/");
        let headers = Object.assign({},{
            // "Proxy-Authorization":getKey()
        },(opt && opt.headers) ? opt.headers : {})
        var ipOpt = {
            // agent,
            headers
        }
        let p = Object.assign({}, ipOpt);
        return fetch(url, Object.assign({},p))
    },
}
module.exports = opt;