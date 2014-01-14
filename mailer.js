/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-14
 * Time: 上午11:25
 * To change this template use File | Settings | File Templates.
 */
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.exmail.qq.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: 'xx@xx',
        pass: 'xxx'
    }
});

var mailText = function(email,url){
    var out = "";
    out+="感谢注册传悦互动平台，点击连接激活账号"+url;
    return out;
};

// create email message
var mailOptions = {
    from: 'wjq@chnyoo.cn', // sender address
    to: '',
    subject: "验证邮箱 ✔", // Subject line
    text: '' // plaintext body
};
//传入url 和 邮箱人
    exports.setMailInfo = function (obj) {
        if (typeof obj.email === 'undefined' || typeof obj.url === 'undefined') {
            return false;
        } else {
            mailOptions.to = obj.email;
            mailOptions.text = mailText(obj.email,obj.url);
            return true ;
        }
    };

// 发送邮件
exports.sendMailer = function () {
    transport.sendMail(mailOptions, function (error) {
        if (error) {
            console.log('sending error');
            console.log(error);
        } else {
            console.log('successfull!!');
        }
        transport.close();
    });

};
