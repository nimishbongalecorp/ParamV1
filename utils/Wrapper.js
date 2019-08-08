import * as Utils from '../utils/Utils'

export function getListingData(data, type) {
    switch (type) {
        case "Contract":
            return generateContractList(data);

        case "TO":
            return generateTOList(data);

        case "Team":
            return generateTeamList(data);

        case "Contact":
            return generateContactList(data);

        case "LR":
            return generateLRList(data);

        default:
            generateContactList(data)

    }
}


function generateContractList(data) {
    var contractData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        var label3 = dataObj.buyer.name ? dataObj.buyer.name : dataObj.buyer.id.substring(0, 10) + "...."
        var customObject = {
            label1: dataObj.id.substring(0, 20),
            label2: Utils.getContractStatusLabel(dataObj.state),
            label3: "from " + label3,
            label4: dataObj.created_at,
            item: dataObj
        }
        contractData.push(customObject);
    }
    return contractData;
}

function generateTOList(data) {
    var transportData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        console.log("ORDER DETAIL ", JSON.stringify(dataObj))        

        var origin = dataObj.origin;
        var buyer = dataObj.buyer;
        var merchant = dataObj.merchant;
        var buyerName = buyer.name != undefined ? buyer.name : buyer.id;
        var merchantName = merchant.name != undefined ? merchant.name : merchant.id;        
        var destination = dataObj.destination
        var fromAddress = typeof origin == "object" ? origin.streetAddress : origin;
        var toAddress = typeof destination == "object" ? destination.streetAddress : destination;

        var customObject = {
            label1: dataObj.id.substring(0, 20),
            label2: Utils.getTOStatusLabel((dataObj.state)),
            label3: "From " + buyerName.substring(0, 20),
            //FETCH DATE FROM RESPONSE
            label4: dataObj.date,
            buyerName:buyerName,
            merchantName:merchantName,
            fromAddress: fromAddress,
            fromDate: dataObj.orderDate ? dataObj.orderDate.split(" ")[0] : '24-10-2019',
            toAddress: toAddress,
            toDate: dataObj.expectedArrivalUntil ? dataObj.expectedArrivalUntil :'24-11-2019',
            title: dataObj.merchant.name,
            description: '',
            item: dataObj
        }
        ////console.log("fetch to data " +JSON.stringify(customObject))
        transportData.push(customObject);
    }
    return transportData;
}

function generateLRList(data) {
    var lrData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        console.log("generateLRList ---------******-*-***-****-*-" +JSON.stringify(dataObj))
        var ToObj = dataObj.TODetails;

        var origin = ToObj.origin;
        var buyer = ToObj.buyer;
        var merchant = ToObj.merchant;
        var buyerName = buyer.name != undefined ? buyer.name : buyer.id;
        var merchantName = merchant.name != undefined ? merchant.name : merchant.id;        
        var destination = ToObj.destination
        var fromAddress = typeof origin == "object" ? origin.streetAddress : origin;
        var toAddress = typeof destination == "object" ? destination.streetAddress : destination;


        var customObject = {
            // label1: dataObj.id,
            // label2: Utils.getTOStatusLabel(dataObj.status),
            // label3: "from " + dataObj.partOfOrder.merchant.name,
            // label4: dataObj.expectedArrivalUntil.split("T")[0],
            buyerName:buyerName,
            merchantName:merchantName,
            fromAddress: fromAddress,
            fromDate: ToObj.orderDate ? ToObj.orderDate.split(" ")[0] : '24-10-2019',
            toAddress: toAddress,
            toDate: ToObj.expectedArrivalUntil ? ToObj.expectedArrivalUntil :'24-11-2019',
            title: ToObj.origin.name,
            description: '',
            item: ToObj,
            parent:dataObj,
        }
        lrData.push(customObject);
    }
    return lrData;
}


function generateTeamList(data) {
    var teamListData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        var customObject = {
            label1: dataObj.name,
            label2: dataObj.address.street,
            label3: dataObj.id.substring(0, 20),
            //label4: dataObj.expectedArrivalUntil.split("T")[0],
            item: dataObj
        }
        teamListData.push(customObject);
    }
    return teamListData;
}

function generateContactList(data) {
    var contactListData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        var customObject = {
            label1: dataObj.name,
            label2: "",
            label3: dataObj.id.substring(0, 20),
            label4: "",
            item: dataObj
        }
        contactListData.push(customObject);
    }
    //console.log("contact list " + JSON.stringify(contactListData))

    return contactListData;
}


export function getTableData(data, type) {
    switch (type) {
        case "LR":
            return generateContractList(data);

        case "Invoice":
            return generateTOList(data);

        default:
            generateContactList(data)
    }
}


function getLRList(data) {
    var lrListData = [];
    var length = data.length;
    for (var index = 0; index < length; index++) {
        var dataObj = data[index];
        var customObject = {
            label1: dataObj.id,
            label2: "from " + dataObj.partOfOrder.merchant.name,
            label3: dataObj.expectedArrivalUntil.split("T")[0],
            item: dataObj
        }
        lrListData.push(customObject);
    }
}

function getInvoiceList(data) {

}