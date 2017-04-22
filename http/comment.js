/**
 * Created by Nicholas on 2017/4/22.
 * post to Weibo (request)
 * by node.js
 */
/*title:有什么新鲜事想告诉大家?
    location:page_100505_home
text:post 测试
appkey:
    style_type:1
pic_id:
    pdetail:1005051770677273
rank:0
rankid:
    pub_source:page_2
longtext:1
topic_id:1022:
pub_type:dialog
_t:0*/
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'title': '有什么新鲜事想告诉大家？',
    'location': 'page_100505_home',
    'text': 'post 成功',
    'appkey':'',
    'style_type': 1,
    'pic_id': '',
    'pdetail': 1005051770677273,
    'rank': 0,
    'rankid': '',
    'pub_source': 'page_2',
    'longtext': 1,
    'topic_id': 1022,
    'pub_type': 'dialog',
    '_t': 0
})

var options = {
    hostname: 'weibo.com',
    port: 80,
    path: '/p/aj/v6/mblog/add?ajwvr=6&domain=100505&__rnd=1492847814466',
    method: 'POST',
    headers: {
         'Accept': '*/*',
         'Accept-Encoding': 'gzip, deflate',
         'Accept-Language': 'zh-CN,zh;q=0.8',
         'Connection': 'keep-alive',
         'Content-Length': postData.length,
         'Content-Type': 'application/x-www-form-urlencoded',
         'Cookie': 'SINAGLOBAL=5254707175564.537.1491904601455; ' +
                     'wvr=6; UOR=,,www.tianhao.site; TC-Page-G0=cdcf495cbaea129529aa606e7629fea7; _s_tentry=-; ' +
                     'Apache=1470547437711.4736.1492847411834; ULV=1492847411883:21:21:13:1470547437711.4736.1492847411834:1492834863141; ' +
                     'TC-Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; ' +
                     'WBtopGlobal_register_version=a05309c5d15974a8; ' +
                     'SCF=Ao1YYqkXrggyyRYl_H2jwXRYHEpRS14OrKPjAGmAcO_gogSp_VwntGUhPLcTH3v4lLj-mh6fN7mbdN1MAHaSIpQ.; ' +
                     'SUB=_2A251_3xYDeRhGedJ7FIX9ynOzD-IHXVWjeqQrDV8PUNbmtAKLWzjkW94rRrfkOGtm0voRqM22pjzPTwezA..; ' +
                     'SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5Chg9QgEZYqByGvmL0MAUK5JpX5KzhUgL.Fo2NS05cS0MES0e2dJLoIEvXIFH8Sb-41FHWxbH8SFHF1FHWBCH8SCHFeF-RxbH8SCHFeC-ReCH8SCHWxFHW1Btt; ' +
                     'SUHB=0BLpsjWzCU32hj; ALF=1524383624; SSOLoginState=1492847624',
         'Host': 'weibo.com',
         'Origin':'http://weibo.com',
         'Referer': 'http://weibo.com/th0527?is_all=1',
         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
         'X-Requested-With': 'XMLHttpRequest'
    }

}

var req = http.request(options,function(res){
    console.log('Status:'+ res.statusCode);
    console.log('header:' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })

    res.on('end',function () {
        console.log('post完成');
    })
})

req.on('error',function (e) {
    console.log('Error: '+ e.message);
})

req.write(postData);
req.end();