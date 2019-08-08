const ParamNetwork = require('../index')
const ContactManager = require('../contact-manager/index')

let paramNetwork = new ParamNetwork({url:"http://3.94.6.244:22000"});
let contact = new ContactManager(paramNetwork);

// contact.initEvents({address:'0xa07478d28bb778c4eac4f57513732857fa3ebfd2'});
// contact.addContact('0x498a9b314e54d22da74e815136a6164e27651d55','{"@id":"0x498a9b314e54d22da74e815136a6164e27651d79","@type":"Organization","address":{"@type":"PostalAddress","streetAddress":"param"},"name":"Muthu121"}', 'abc', {"from":"0x498a9b314e54d22da74e815136a6164e27651d79",privateKey:"e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667"}).then(data=>{
//     ////console.log(data)
// }).catch(////console.log)

// contact.getAllContacts('0x3ab70685578f71beef119882886c1025aaf74527').then(data => {
//     ////console.log(data.toString());
// })

// contact.registerOnContactAdded((e, data)=>{
//     ////console.log('Event...', e, data)
// })

// contact.getTotalContacts('0x498a9b314e54d22da74e815136a6164e27651d79').then(data => {
//     ////console.log(data.toString());
// })

// contact.getContact("0").then(data => {
//     ////console.log(data.toString());
// })

// contact.getContactFromBookOwner("0x498a9b314e54d22da74e815136a6164e27651d79", "0x498a9b314e54d22da74e815136a6164e27651d79").then(data => {
//     ////console.log(data.toString());
// })

// contact.updateContact(0, '{"@id":"0x498a9b314e54d22da74e815136a6164e27651d79","@type":"Organization","address":{"@type":"PostalAddress","streetAddress":"param"},"name":"Muthu121"}','', {"from":"0x498a9b314e54d22da74e815136a6164e27651d79",privateKey:"e4eee5589208b1fd906bb0015c01a1b9804b41636a45ebac931a0cdc65ad2667"}).then(data=>{
//     ////console.log(data);
// }).catch(////console.log)
