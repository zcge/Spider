const Spider = require("../index")
let spider = new Spider("https://m.xiaohongshu.com/",{},"html");
spider.start().then(e=>{
    // console.log(e);
    if(e.errorCode == 0){
        let $ = spider.get$(e.data);
        console.log($("p").html()); //获取第一个p 标签的内容 ） 编码自己转下
    }
});