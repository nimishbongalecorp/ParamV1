// import RNSecureKeyStore, {
//     ACCESSIBLE
// } from "react-native-secure-key-store";
// var hdKey = require("ethereumjs-wallet/hdkey")
// var bip39 = require("bip39")
// var aesctr = require('./aes-ctr')
// var unorm = require('unorm')
// var _pbkdf2 = require('pbkdf2')
// var pbkdf2Async = _pbkdf2.pbkdf2


// function mnemonicToSeedAsyncIn(mnemonic, password) {
//     return new Promise(function (resolve, reject) {
//         try {
//             var mnemonicBuffer = Buffer.from(unorm.nfkd(mnemonic), 'utf8')
//             var saltBuffer = Buffer.from(salt(unorm.nfkd(password)), 'utf8')
//         } catch (error) {
//             return reject(error)
//         }

//         pbkdf2Async(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512', function (err, data) {
//             if (err) return reject(err)
//             else return resolve(data)
//         })
//     })
// }

// function salt(password) {
//     return 'mnemonic' + (password || '')
// }

// function createWallet(password) {
//     return new Promise((resolve, reject) => {
//         try {
//             var mnemonic = bip39.generateMnemonic();

//             //hash password
//             var hashedPassword = _pbkdf2.pbkdf2Sync(password, '', 2048, 64, 'sha512').toString('hex');

//             //store hashed password to local storage
//             RNSecureKeyStore.set("hashedPassword", hashedPassword, {
//                     accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                 })
//                 .then((res) => {
//                     //////console.log(res);
//                     generateWallet(mnemonic, password).then((wallet) => {
//                         resolve({
//                             mnemonic: mnemonic,
//                             wallet: wallet
//                         });
//                     })
//                 }, (err) => {
//                     //////console.log(err);
//                 });

//             //create first wallet
//         } catch (e) {
//             reject(e);
//         }
//     })

// }

// function logIn(password) {

//     //hash password
//     var hashedPassword = _pbkdf2.pbkdf2Sync(password, '', 2048, 64, 'sha512').toString('hex')

//     //retrieve hashed password from local storage
//     return new Promise((resolve, reject) => {
//         RNSecureKeyStore.get("hashedPassword")
//             .then((retrievedPassword) => {
//                 if (retrievedPassword === hashedPassword) {
//                     resolve(true);
//                 }
//                 resolve(false)
//             }, (err) => {
//                 reject(err);
//                 //////console.log(err);
//             });
//     })

// }


// function restoreWallet(password, mnemonic) {

//     return new Promise((resolve, reject) => {
//         try {

//             //hash password
//             var hashedPassword = _pbkdf2.pbkdf2Sync(password, '', 2048, 64, 'sha512').toString('hex');

//             //store hashed password to local storage
//             RNSecureKeyStore.set("hashedPassword", hashedPassword, {
//                     accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                 })
//                 .then((res) => {
//                     //create first wallet
//                     generateWallet(mnemonic, password).then((wallet) => {
//                         resolve({
//                             mnemonic: mnemonic,
//                             wallet: wallet
//                         });
//                     })
//                 }, (err) => {
//                     //////console.log(err);
//                 });


//         } catch (e) {
//             reject(e);
//         }
//     })
// }

// function generateWallet(mnemonic, password) {

//     return new Promise((resolve, reject) => {

//         //Ethereum wallet base path
//         var path = "m/44'/60'/0'/0"

//         //generate seed from mnemonic and getting the promise
//         var seed = mnemonicToSeedAsyncIn(mnemonic)

//         //resolve the promise
//         seed.then(function (result) {

//                 //get master key from the seed
//                 var masterKey = hdKey.fromMasterSeed(result)

//                 //generate masterNode
//                 var masterNode = masterKey.derivePath(path)

//                 //derive next wallet from master node
//                 var wallet = masterNode.deriveChild(0).getWallet()

//                 //get address of generated wallet and use it as key to store this wallet on local storage
//                 var address = wallet.getAddress()
//                 let organizationId = masterNode.deriveChild(1).getWallet().getAddress().toString('hex')
//                 let privateKey = wallet.getPrivateKey()

//                 // RNSecureKeyStore.set("organizationId", organizationId, {
//                 //         accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                 //     })
//                 //     .then((res) => {
//                 //         //////console.log(res);
//                 //     }, (err) => {
//                 //         //////console.log(err);
//                 //     });
//                 RNSecureKeyStore.set("privateKey", privateKey.toString('hex'), {
//                         accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                     })
//                     .then((res) => {
//                         //////console.log(res);
//                     }, (err) => {
//                         //////console.log(err);
//                     });
//                 RNSecureKeyStore.set("param_id", "0x" + address.toString('hex'), {
//                         accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                     })
//                     .then((res) => {
//                         //////console.log(res);
//                     }, (err) => {
//                         //////console.log(err);
//                     });

//                 // var keyStore = wallet.toV3String(password);
//                 // RNSecureKeyStore.set(address.toString('hex'), keyStore, {
//                 //         accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
//                 //     })
//                 //     .then((res) => {
//                 //         //////console.log(res);
//                 //     }, (err) => {
//                 //         //////console.log(err);
//                 //     });

//                 resolve(wallet);
//             },
//             function (err) {
//                 // ////console.error(err)
//                 reject(err);
//             })
//     })
// }

// function validateMnemonic(mnemonic) {
//     return bip39.validateMnemonic(mnemonic);
// }

// export {
//     createWallet,
//     generateWallet,
//     logIn,
//     restoreWallet,
//     validateMnemonic
// }