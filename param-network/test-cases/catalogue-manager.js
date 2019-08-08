const ParamNetwork = require('../index')
let paramNetwork = new ParamNetwork({url:"http://52.44.214.192:22000"});
let connection = paramNetwork.getConnection();

let catalogue = paramNetwork.catalogueManager;
// catalogue.initEvents({address:'0xac8158892d4e5bde37909857ab0ff6964ee46d11'});
catalogue.addCatalogue('TestAddCatalogue', 1, {
    from:"0x28ed01db8241020861d09ee37a63b2db44ed7a6e",
    privateKey:"084b3afbd22ea27b136aa8231ad644a7e21da19874757fec677da138b4d7587d"
}).then(data => {
    ////console.log('add',data);
})

// catalogue.updateCatalogue(2,'TestUpdateCatalogue',{from:"0xac8158892d4e5bde37909857ab0ff6964ee46d11"}).then(data => {
//     ////console.log('update',data);
// })

// catalogue.getCatalogue(0).then(data => {
//     ////console.log('get',data);
// })

// catalogue.getTotalCatalogues('0xac8158892d4e5bde37909857ab0ff6964ee46d11').then(data => {
//    ////console.log('getTotal',data);
// })

// catalogue.getAllCatalogues('0xac8158892d4e5bde37909857ab0ff6964ee46d11').then(data => {
//     ////console.log('getAll',data);
//  })

catalogue.registerOnCatalogueAdded((e, data)=>{
    ////console.log('Add Event...', e, data)
})

//  catalogue.registerOnCatalogueUpdated((e, data)=>{
//     ////console.log('update Event...', e, data)
//  })
