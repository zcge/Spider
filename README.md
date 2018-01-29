# SpiderClass

爬虫 很简单的封装
```brash
    npm init 安装依赖
```

```brash  
    //默认使用了代理
    let spider = new Spider(url,opt,type)
    type "html" or "json"
    opt 传入 headers,cookies,超时时间等 等需要构造的HTTP参数
    url 爬取的地址 （用代理的话最好https原因是我没支持）

    let o = await spider.start();
    o 返回的对象是
    {
       errorCode,
       data
    }
    errorCode是0的话就表示成功

    如果type是html 的话
    用let $ = spider.get$(o.data) 可以以jquery的方式获取html的内容
    
    如果type是json的话
    直接 o.data 就是你要的参数 

```

```brash
    http 返回 403 代表服务器拒绝访问 IP 被禁了
    运行测试代码 node ./test/test.js     
```

