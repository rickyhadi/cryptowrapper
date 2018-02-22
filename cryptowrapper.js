var crypto = require('crypto');

function cryptowrapper(config){
	var key = config.Key;
	var iv = config.IV;
	var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
	var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
	
    var obj = {};
    obj.encrypt = function(input){
        var encrypted = cipher.update(input, 'utf8', 'binary');
        encrypted += cipher.final('binary');
        hexVal = new Buffer(encrypted, 'binary');
        newEncrypted = hexVal.toString('hex');
        return newEncrypted;
    };
    obj.decrypt = function(input){
        var decrypted = decipher.update(input, 'hex', 'binary');
        decrypted += decipher.final('binary');
        return decrypted;
    };
    return obj;
}

module.exports = cryptowrapper;