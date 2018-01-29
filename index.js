//抽象 爬虫类
const proxy = require("./proxy");
const cheerio = require('cheerio');
const S = require("string");
const ErrorTag = "Error:";
class Res{
    constructor(errorCode=0,data=null){
        this.errorCode = errorCode;
        this.data = data;
    }
}
//爬虫对象
class Spider{
    // 爬虫构造器
    constructor(url,opt={},type){
        if(!url){
            console.error(ErrorTag,"url 不能为空")
        };
        //请求地址
        this.fetchUrl = url;
        //伪造的header
        this.opt = opt || {};
        this.type = type || "json";  //json 或者 html
    }
    // 访问接口 
    async start(){
        let res = null;
        let errorCode = 0;
        res =  await proxy.fetch(this.fetchUrl,this.opt).catch(e=>{
            console.error(ErrorTag,e,this.fetchUrl,this.opt);
            return new Res(2608,e);// 500 系统错误
        });    
        if(res && res.ok && res.status == 200){
            if(this.type == "json"){
                let json = await res.json();
                return new Res(errorCode,json);
            }else if(this.type == "html"){
                let html = await res.text();
                return new Res(errorCode,html);
            }
        }else{
            console.error(ErrorTag,this.fetchUrl,this.opt);
            errorCode = (res && res.status) ? res.status : 2608;
            return new Res(errorCode,null);  
        }
    }
    //获取$
    get$(html){
        return cheerio.load(html)
    }
    getS(html){
        return S(html)
    }
    // $ 是getS返回的结果
    between($,a,b){
        return $.between(a, b).s
    }
}
module.exports = Spider;