var mailServiceConfig = require('../config/config.' + process.env.NODE_ENV).mailServiceConfig;
var mailConfig = require("../config/mailConfig");
var sg = require('sendgrid')(mailServiceConfig.apiKey);
var vsprintf = require("sprintf-js").vsprintf;
var fs = require('fs');

module.exports.mail = function (data, mailConfigName, mailSubject, mailMessage, fileName, fileType, params, callback) {
    var helper = require('sendgrid').mail;
    var mail = mailConfig[mailConfigName];
    var fromEmail = new helper.Email(mailServiceConfig.fromEmail);
    var toEmail = new helper.Email(data);
    var subject = mailSubject;
    var emailFileName = fileName;
    var emailFileType = fileType;
    fs.readFile(__dirname + "/../emailTemplates/" + mail.templateFile, function (ferr, templateContent) {
        var templateText = templateContent.toString();
        var mailBody = vsprintf(templateText, mailMessage);
        var content = new helper.Content("text/html", mailBody);
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);

        //File Attachment
       /** if(fileName){
            var attachment = new helper.Attachment();
            var file = fs.readFileSync('uploadFile/'+emailFileName);
            var base64File = new Buffer(file).toString('base64');
            attachment.setContent(base64File);
            attachment.setType(emailFileType);
            attachment.setFilename(emailFileName);
            attachment.setDisposition('attachment');
            mail.addAttachment(attachment);
        }**/

        var request = sg.emptyRequest({
            method: 'POST',
            path: mailServiceConfig.path,
            body: mail.toJSON()
        });

        sg.API(request, function (error, response) {
            callback(error, response);
        });
    });
}