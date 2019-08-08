var CryptoJS = require('crypto-js')

function encrypt(text, password){
    var encrypted = CryptoJS.AES.encrypt(text, password, {
        mode: CryptoJS.mode.CTR
    });
    return encrypted
}

function decrypt(encrypted, password){
    var decrypted = CryptoJS.AES.decrypt(encrypted, password, {
        mode: CryptoJS.mode.CTR
    });
    return (CryptoJS.enc.Utf8.stringify(decrypted))
}

export{
    encrypt,
    decrypt
}
