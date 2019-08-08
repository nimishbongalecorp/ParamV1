const ParamNetwork = require('../index')
const TransportContactManager = require('../transport-team-manager/index')

let paramNetwork = new ParamNetwork({ url: "http://3.94.6.244:22000" });
let contact = new TransportContactManager(paramNetwork);

// contact.initEvents({address:'0xa07478d28bb778c4eac4f57513732857fa3ebfd2'});
// contact.registerAdmin('testAdmin', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log);

// contact.addEmployee('0x5493ea214b068fbd430cd3becc2474ae97786d61', '{"@id":"Hshav","@node":"Caban","name":"Ehej","address":{"@type":"PostalAddress","streetAddress":"Agajaj"}}', { "from": "0x498a9b314e54d22da74e815136a6164e27651d79", privateKey: "e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667" }).then(data => {
//     ////console.log(data)
// }).catch(////console.log)

// contact.getAllEmployees('0x498a9b314e54d22da74e815136a6164e27651d79').then(data => {
//     ////console.log(data.toString());
// })

//  contact.getEmployeeInfo('0x5493ea214b068fbd430cd3becc2474ae97786d61').then(data => {
//         ////console.log(data.toString());
//     })


// contact.registerOnContactAdded((e, data)=>{
//     ////console.log('Event...', e, data)
// })

// contact.getTotalContacts('0xac8158892d4e5bde37909857ab0ff6964ee46d11').then(data => {
//     ////console.log(data);
// })

// contact.getEmpInfo("0x5dc71d6655b4e38667e4a1eec6aabb21a00f256c").then(data => {
//     ////console.log(data.toString());
// });

// contact.getAdminInfo("0x3f40ffd0a74c9ad6f76364d2d202ded1228c3d08").then(data => {
//     ////console.log(data.toString());
// });

// contact.updateEmp('0x5dc71d6655b4e38667e4a1eec6aabb21a00f254c', 'UpdatedEmp', { from: "0x3f40ffd0a74c9ad6f76364d2d202ded1228c3d08", privateKey: "b6ffde55aab37fdb9f1d18590993702ca23afd79c543833a4935e6a26dbc9a48" }).then(data => {
//     ////console.log(data)
// })
