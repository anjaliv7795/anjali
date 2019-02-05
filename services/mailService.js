var emailService = require('../email/sendgridmail');
var appLogger = require('../logging/appLogger');

module.exports.sendMail = function (record, mailType, mailSubject, mailMessage, fileName, fileType, mailParams, callback) {
    emailService.mail(record, mailType, mailSubject, mailMessage,  fileName, fileType,  mailParams, function (emailError, emailResponse) {
        if (!emailError) {
            console.log("Successfully sent email to user %s. Status code: %s", record, emailResponse.statusCode);
            appLogger.info("Successfully sent email to user %s. Status code: %s", record, emailResponse.statusCode);
            callback(null,emailResponse);
        } else {
            console.error("Error %s", record);
            appLogger.info("Error %s", record);
            callback(emailError,null);
        }
    });
}