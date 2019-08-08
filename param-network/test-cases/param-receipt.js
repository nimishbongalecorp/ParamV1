const ParamNetwork = require('../index')
const ParamReceiptManager = require('../param-receipt/index')

// let paramNetwork = new ParamNetwork({url:"http://3.94.6.244:22000"});
let paramNetwork = new ParamNetwork({url:"http://54.236.15.199:22001"});

let paramReceipt = new ParamReceiptManager(paramNetwork);

// paramReceipt.initEvents({address:'0x3f418da46e5a550f4b47469bc335488419f7f881'});

// paramReceipt.getReceiptsByStep(0).then(data => {
//     ////console.log(data.toString());
// }).catch(////console.log)

// paramNetwork.paramReceiptManager.getTransaction("0x1c3ca387a5e3aaf4b619b9c43740ea71a226e426013e939bfa30a3a650f63064").then(data => {
//     ////console.log(data.toString());
// })

// paramReceipt.getTransactions("0x691a2aa4f98c9b01cf93854b071f8dcd7b597705c001cf9a90b98b4530a9dd1c").then(data => {
//     ////console.log(data.toString());
// })

// paramReceipt.getReceipt("0xf3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3").then((receipt)=>{
//     ////console.log(receipt.toString())
// })

// paramReceipt.getReceiptsByBuyer("0x0e452a782e678a6b5d3d4608037c9459e6c61a3c").then(data => {
//     ////console.log(data);
// })

// paramReceipt.getReceiptsBySeller("0x8c53962f28c206b55371ae9e408183265717c3a5").then(data => {
//         ////console.log(data);
//     })

// Including PrivateFor

// paramNetwork.paramReceiptManager.createInvoice('0x20402d1574142eeedc8959347cbd92f75f2ffb44','TestInit','{extnd:[]}', "note", {"from":"0x8c53962f28c206b55371ae9e408183265717c3a5", privateFor:["nHLzpsjqmIKB02Phyc4+cmd4LQQcl10SmxNKudnNNSo="], privatekey:""}).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramNetwork.paramReceiptManager.initProposal('0x339517c42097acd767c7b13fa074cfc2e5a42f00','{"array":[1,2,3],"boolean":true,"color":"#82b92c","null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"}','note',
// {
//     from:"0xa797d25bd10943aa562375da5b0d76e528b0cb68",
//     privateKey:"6367be838f06d413a427c07993d80fc394ccb1473b2dcab0814fa111c0e37928",
//     privateFor:["9kH7KfNdAlSt1hHNR9ccNoyL46zW6iPDZela0wBoXEo="],
//     isPrivate:true,
//     privateFrom:"nHLzpsjqmIKB02Phyc4+cmd4LQQcl10SmxNKudnNNSo="
// }).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramNetwork.paramReceiptManager.createPO('0x0e452a782e678a6b5d3d4608037c9459e6c61a3c',
// '{"array":[1,2,3],"boolean":true,"color":"#82b92c","null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"}',
// '{"array":[1,2,3],"boolean":true,"color":"#82b92c","null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"}',
// 'note',
// {
//     "from":"0x0e452a782e678a6b5d3d4608037c9459e6c61a3c",
//     "privateKey":"e7614987a0bf101559532d5b77c8142534f40cdc8018ebfb83ac4c99718204d0",
//     isPrivate:false
//     // privateFrom:"P753KZc9DkKQZ3HhMi334W+EceZQgbgHR/cq9D1cAhc="
// }).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramReceipt.initProposal('0x339517c42097acd767c7b13fa074cfc2e5a42f00','TestInit',{from:'0xa797d25bd10943aa562375da5b0d76e528b0cb68',privateFor:["nHLzpsjqmIKB02Phyc4+cmd4LQQcl10SmxNKudnNNSo="]}).then(data => {
//     ////console.log(data);
// })

// paramReceipt.acceptProposal(0,"extenedKnowledger","desc",{from:'0x20402d1574142eeedc8959347cbd92f75f2ffb44',privateFor:["P753KZc9DkKQZ3HhMi334W+EceZQgbgHR/cq9D1cAhc="]}).then(data => {
//     ////console.log(data);
// })

// paramNetwork.paramReceiptManager.sendInvoice(0,"extenedKnowledger","desc",{ from:'0x177e0be7694fd6c81bca3953b796c5644665b173',privateFor:["nHLzpsjqmIKB02Phyc4+cmd4LQQcl10SmxNKudnNNSo="] }).then(data => {
//     ////console.log(data);
// }) 

// paramReceipt.makePayment(0,"extenedKnowledger","desc",{from:'0x20402d1574142eeedc8959347cbd92f75f2ffb44',privateFor:["P753KZc9DkKQZ3HhMi334W+EceZQgbgHR/cq9D1cAhc="]}).then(data => {
//     ////console.log(data);
// })

// paramNetwork.paramReceiptManager.createReceipt(1,"extenedKnowledger","desc",{ from:'0x177e0be7694fd6c81bca3953b796c5644665b173',privateFor:["nHLzpsjqmIKB02Phyc4+cmd4LQQcl10SmxNKudnNNSo="] }).then(data => {
//     ////console.log(data);
// }) 

// Public 

// paramNetwork.paramReceiptManager.initProposal('0x0e452a782e678a6b5d3d4608037c9459e6c61a3c','{"array":[1,2,3],"boolean":true,"color":"#82b92c","null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"}','note',{"from":"0x0e452a782e678a6b5d3d4608037c9459e6c61a3c","privateKey":"e7614987a0bf101559532d5b77c8142534f40cdc8018ebfb83ac4c99718204d0"}).then(data => {
//     ////console.log(data);
// }).catch(////console.log)

// paramReceipt.acceptProposal("0x8322a2ee1f154d286b7fbe63da5b5631b45aa019b6384df175fa7c1e4f5df27e","extenedKnowledger","desc",{"from":"0x0e452a782e678a6b5d3d4608037c9459e6c61a3c","privateKey":"e7614987a0bf101559532d5b77c8142534f40cdc8018ebfb83ac4c99718204d0"}).then(data => {
//     ////console.log(data);
// })

// paramNetwork.paramReceiptManager.sendInvoice(1,"extenedKnowledger","desc",{ from:'0x177e0be7694fd6c81bca3953b796c5644665b173'}).then(data => {
//     ////console.log(data);
// }) 

// paramReceipt.makePayment(1,"extenedKnowledger","desc",{from:'0x40b90b39b7e82c7272624233ee758b3f67dc889e'}).then(data => {
//     ////console.log(data);
// })

// paramNetwork.paramReceiptManager.createReceipt(1,"extenedKnowledger","desc",{ from:'0x177e0be7694fd6c81bca3953b796c5644665b173'}).then(data => {
//     ////console.log(data);
// }) 

// Event Register

// paramReceipt.registerOnTransactionUpdate((e, data)=>{
//     ////console.log("Error", e);
//     ////console.log(data)
// }, {address: "0x0e45a54d5e698d53d63a18ca906dc220bf0cccec"})
