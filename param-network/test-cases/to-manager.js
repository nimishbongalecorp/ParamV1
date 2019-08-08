const ParamNetwork = require('../index')
const contractManager = require('../to-manager/index')

let paramNetwork = new ParamNetwork({ url: "http://54.159.74.32:22002" });
let contract = new contractManager(paramNetwork);

// contract.initEvents({address:'0xa07478d28bb778c4eac4f57513732857fa3ebfd2'});

// contract.createTransOrders('0xf4eeda3577af5c6d4e6a11604f3c7c897b1663988ca0643aca4cd4d5093d39a6', 
// '0x5493ea214b068fbd430cd3becc2474ae97786d61', 
// '0xac8158892d4e5bde37909857ab0ff6964ee46d11',
// '0xec222503bc06facd76d0a84516f0bb2a0f858ced134de51e5566f48135f14f2b', 
// { "from": "0x5493ea214b068fbd430cd3becc2474ae97786d61", 
// privateKey: "253b4532bff116c85bc98b25e44cba3116ac55780bcb30731661dc9054f459d8"
//  }).then(data => {
//      ////console.log(data)
//  }).catch(////console.log)

// 0xaaf6ac190466e8925ecc8e87b3bb471fe721667ee3175884116b137d1a67120e
// 0xe2f3a691b62cb4cc4bac2f966f2af4f8408c0c58a1568b05d3710ef666e74d62

// contract.getTransOrder("0x81815e61ac451af9977b78cbf4418bda3817cbfb0c2d83865e3cc98788b35399").then((contract) => {
//      ////console.log(contract.toString())
//  })

// contract.getTransOrderByConsignee("0x5493ea214b068fbd430cd3becc2474ae97786d61").then((contract) => {
//          ////console.log(contract.toString())
//      })

//  contract.getTransContractByConsignor("0x879c174d14c48bfbe60e3b63ddb496edac1bd767").then((contract) => {
    //     ////console.log(contract.toString())
    // })
   
contract.getSummaryForeLR("0x747403d67505c2945fb4a3d543f4f907364df748f71738880abe9999668c6734").then((data) => {
    console.log(data);
});