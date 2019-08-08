const ParamNetwork = require('../index')
const contractManager = require('../transport-contract-manager/index')

let paramNetwork = new ParamNetwork({ url: "http://3.94.6.244:22000" });
let contract = new contractManager(paramNetwork);

// contract.initEvents({address:'0xa07478d28bb778c4eac4f57513732857fa3ebfd2'});

// contract.addContract('0x177e0be7694fd6c81bca3953b796c5644665b173', 'muthukumar', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log)

// contract.acceptContract('0x8e439e9d7e6ecc64e933d171c06350ebe7d08d265a8c5b81f0f6f43ada7dffea', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log)

// contract.rejectContract('0x8e439e9d7e6ecc64e933d171c06350ebe7d08d265a8c5b81f0f6f43ada7dffea', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log)

// contract.addExtendedKnowledge('0x8e439e9d7e6ecc64e933d171c06350ebe7d08d265a8c5b81f0f6f43ada7dffea', 'jsonLd', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log)

// contract.getContract("0x93af4673b268de3dde9982051a4ce24929040daaed4d007c3e9138bda2c920eb").then((contract) => {
//     ////console.log(contract.toString())
// })

// contract.getTransContractByConsignor("0x498a9b314e54d22da74e815136a6164e27651d79").then((contract) => {
//     ////console.log(contract.toString())
// })

// contract.getTransContractByConsignee("0x498a9b314e54d22da74e815136a6164e27651d79").then((contract) => {
//     ////console.log(contract.toString())
// })

// contract.getTransContractCountByStatus(1).then((contract) => {
//     ////console.log(contract.toString())
// })
