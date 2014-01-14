/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-14
 * Time: 上午10:58
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var util = require('util');
var url = require('url');
var querystring = require('querystring');
var mailer = require('./mailer');



var server = http.createServer();

server.on('request',function(req,res){
    var post = '';
    req.on('data', function(chunk) {
        post += chunk;
    });
    req.on('end',function(){
        post = querystring.parse(post);
        mailer.setMailInfo(post);
        mailer.sendMailer();
        res.end('contact');
    }) ;

})  ;

server.listen(1024);