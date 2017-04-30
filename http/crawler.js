/**
 * Created by Nicholas on 2017/4/21.
 * node.js爬虫小程序（豆瓣短评）
 */
var https = require('https');
var cheerio = require('cheerio');


function filterComment(html) {
    var $ = cheerio.load(html);
    var comments = $('.comment-item');
    var commentData = [];
    comments.each(function (item) {
        var comment = $(this);
        var id = comment.find('.comment-info').find('a').text();
        var feel = comment.find('.comment-info').find('.rating').attr("title");
        var com = comment.find('.comment').find('p').text();
        var comment_Data = {
            id: id,
            feel: feel,
            comment: com
        }
        commentData.push(comment_Data);
    })
    return commentData;
}

function printCommentData(commentData) {
    commentData.forEach(function (item) {
        var id = item.id;
        var feel = item.feel;
        var comment = item.comment;
        console.log('  ['+id+'] '+feel);
        console.log(comment+'\n');
    })
}
function crawler() {
    for(var page=0;page<=10;page++){
        var url = 'https://movie.douban.com/subject/26663086/comments?' +
            'start='+page*20+'&limit=20&sort=new_score&status=P';
        https.get(url, function (res) {
            var html = '';

            res.on('data', function (data) {
                html += data
            })

            res.on('end', function () {
                var commentData = filterComment(html);
                printCommentData(commentData);
            })
        }).on('error', function () {
            console.log('获取评论出错！');
        })
    }

}
crawler();
