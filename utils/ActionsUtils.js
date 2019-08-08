// import ParamConnector from '../param-connector/index';
// import WalletUtils from '../utils/WalletUtils'

// //const paramIdConst = "0x498a9b314e54d22da74e815136a6164e27651d79"
// //const privateKeyConst = "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667"

// //Assign Driver
// export function assignDriver(transportOrderId, driverAddress, vechicleInfo) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             console.log("PRIVATE request palyload privateKey"+privateKey)
//             //console.log("transportOrderId  request palyload transportOrderId"+transportOrderId)
//             //console.log("transportOrderId  request palyload vechicleInfo"+JSON.stringify(vechicleInfo))
//             //console.log("transportOrderId  request palyload driverAddress"+JSON.stringify(driverAddress))
            
//             ParamConnector.getInstance().getNetwork().toManager.assignDriver(transportOrderId, driverAddress, vechicleInfo, options)
//                 .then(response => {
//                     //console.log("response assign driver " + JSON.stringify(response))

//                     return response;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //Create E-LR
// export function createLr(transportOrderId, jsonLd) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.createLReceipt(transportOrderId, jsonLd, options).then(response => {
//                 console.log("bridge response e-lr" + JSON.stringify(response))
//                 return response;
//             }).catch(err => {
//                 ////console.log("bridge response " + JSON.stringify(err))
//                 return err;
//             })
//         })
//     }).catch(err => {
//         return err;
//     })
// }

// //Start Trip for PO
// export function startTrip(po) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.startTripForPO(po, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //start trip for TO
// export function startTripForTO(transportOrderId) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.startTripForTO(transportOrderId, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //start trip for LR
// export function startTripForLR(elReceiptNo) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.startTripForELR(elReceiptNo, options)
//             .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //End Trip for PO
// export function endTripForPO(po) {
//     var options = {
//         from: paramIdConst,
//         privateKey: privateKeyConst
//     }

//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.endTripForPO(po, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })

// }


// //End trip for TO
// export function endTripForTO(transportOrderId) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.endTripForTO(transportOrderId, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })

// }


// //End trip for LR
// export function endTripForELR(elReceiptNo) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.endTripForELR(elReceiptNo, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //E-POD for TO
// export function ePoDForeTO(transportOrderId) {
//     var options = {
//         from: paramIdConst,
//         privateKey: privateKeyConst
//     }

//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.endTripForELR(transportOrderId, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }


// //E-POD for TO
// export function ePoDForeLR(elReceiptNo) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.ePoDForeLR(elReceiptNo, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }



// //send Invoice for PO
// export function sendInvoiceForPO(po) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.sendInvoiceForPO(po, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }



// //send Invoice for TO
// export function sendInvoiceForTO(po) {
//     return WalletUtils.getPrivateKey().then(privateKey => {
//         WalletUtils.getParamId().then(paramId => {
//             var options = {
//                 from: paramId,
//                 privateKey: privateKey
//             }
//             ParamConnector.getInstance().getNetwork().toManager.sendInvoiceForTO(po, options)
//                 .then(data => {
//                     return data;
//                 }).catch(err => {
//                     // alert("ERROR: " + JSON.stringify(err))
//                     return err;
//                 })
//         })
//     }).catch(err => {
//         return err;
//     })
// }

// //Accept Contract
// export async function acceptContract(id) {
//     let paramId = await WalletUtils.getParamId();
//     let privateKey = await WalletUtils.getPrivateKey();
//     // paramId = "0x498a9b314e54d22da74e815136a6164e27651d79";
//     // privateKey = "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" 
//     ParamConnector.getInstance().getNetwork().contractManager.acceptContract(id, {
//         from: paramId,
//         privateKey: privateKey
//     }).then((res) => {
//         // alert("ACCEPT" + JSON.stringify(res));
//     }).catch(err => {
//         // alert("ERROR" + JSON.stringify(err))
//     })
// }

// //Reject Contract
// export async function rejectContract(id) {
//     let paramId = await WalletUtils.getParamId();
//     let privateKey = await WalletUtils.getPrivateKey();
//     // paramId = "0x498a9b314e54d22da74e815136a6164e27651d79";
//     // privateKey = "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" 
//     ParamConnector.getInstance().getNetwork().contractManager.rejectContract(id, {
//         from: paramId,
//         privateKey: privateKey
//     }).then((res) => {
//         // alert("ACCEPT" + JSON.stringify(res));
//     }).catch(err => {
//         // alert("ERROR" + JSON.stringify(err))
//     })
// }