const ParamNetwork = require('../index')
const ParamSubscriberManager = require('../param-subscriber/index')

let paramNetwork = new ParamNetwork({url:"http://3.94.6.244:22000"});

let paramSubscriber = new ParamSubscriberManager(paramNetwork);

// paramSubscriber.initEvents({address:'0x0e45a54d5e698d53d63a18ca906dc220bf1cccec'});

// paramSubscriber.setParamContractAddress("0xc9b5d71edc8c59871958d6f35ef5765c1f3b536d", {"from":"0x177e0be7694fd6c81bca3953b796c5644665b173"}).then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)

// paramSubscriber.isValidConsent("0xa275432def940b5f1e1e09d7593c2d51727e493d66ae9b18a7f56588ce4d9bda").then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)

// paramSubscriber.getConsentsForReceipt("0x9d5a29640454c4073d118aa86e8aad58c7ae2039a5909d983e38b0605c3ff113").then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)

// paramSubscriber.getSubscriberReceipts("0x3d427580eddacb4b2015212cf070264253372df1").then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramSubscriber.getSubscribers("0x14185564bbac5ea76a0238fc61e01fa9130283aa5776cec692626f59e91320cf").then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)

// paramSubscriber.getSubscriber(sId).then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)


// Including PrivateFor

// paramSubscriber.addSellerConsent(0,1,{from:'0x177e0be7694fd6c81bca3953b796c5644665b173',privateFor:["P753KZc9DkKQZ3HhMi334W+EceZQgbgHR/cq9D1cAhc="]}).then(data => {
//     ////console.log(data);
// })



// Public

// paramSubscriber.addSellerConsent('0xce9fd58ac534df15760ca433dd8892ae8967208d000a9af9e514a5adeaa0c4d1',3,{"from":"0xb0e6940e4ef9c48a4d6b09ace199bbcb3be8fdf9","privateKey":"47f8375039d83154b09dc82a01b2755c4547d5d730002a7078a0d5ab51b3293d"}).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramSubscriber.addBuyerConsent('0xce9fd58ac534df15760ca433dd8892ae8967208d000a9af9e514a5adeaa0c4d1',3,{"from":"0xb0e6940e4ef9c48a4d6b09ace199bbcb3be8fdf9","privateKey":"47f8375039d83154b09dc82a01b2755c4547d5d730002a7078a0d5ab51b3293d"}).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramSubscriber.addSubscriber("payload", "0xce9fd58ac534df15760ca433dd8892ae8967208d000a9af9e514a5adeaa0c4d1", 3, "0x40b90b39b7e82c7272624233ee758b3f67dc889e",{"from":"0xb0e6940e4ef9c48a4d6b09ace199bbcb3be8fdf9","privateKey":"47f8375039d83154b09dc82a01b2755c4547d5d730002a7078a0d5ab51b3293d"}).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramSubscriber.isSubscriberExists("0xce9fd58ac534df15760ca433dd8892ae8967208d000a9af9e514a5adeaa0c4d1", "0x40b90b39b7e82c7272624233ee758b3f67dc889e").then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// Event Register

// paramSubscriber.registerOnSubscriber((e, data)=>{
//     ////console.log("Error", e);
//     ////console.log(data)
// })
