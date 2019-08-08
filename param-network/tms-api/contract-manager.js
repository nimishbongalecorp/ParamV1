// import ParamContractManager from '../transport-contract-manager/index'
// import ContactManager from '../tms-api/contact-manager';

const ParamContractManager = require('../transport-contract-manager/index');
const ParamUtils = require('../utils/index')

class ContractManager extends ParamContractManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }
    getContract(transcontractId, currentUser) {
        return super.getContract(transcontractId).then(data => {
            let contractObj = {
                "id": transcontractId,
                "contract_type": "",
                "merchant": null,
                "buyer": null,
                "items": null,
                "state":data[3]
              };
            return this.getContactDetail(currentUser, data[0]).then( merchant => {
                return merchant;
            }).then(merchant => {
                contractObj.merchant = merchant;
                return this.getContactDetail(currentUser, data[1]);
            }).then(buyer => {
                ////console.log("Buyer data ->>>>>>", buyer)
                contractObj.buyer = buyer;
                let items = [];
                contractObj.items = items;
                if(! ParamUtils.isValidJSON(data[2])) {
                    return contractObj;
                }
                let contractjsonLd = JSON.parse(data[2]);
                if(!contractjsonLd.referencesOrder) {
                    return contractObj;
                }
                contractjsonLd.referencesOrder.forEach(element => {
                    if(element.orderedItem) {
                        element.orderedItem.forEach(order => {
                            items.push(this.getItem(order));
                        });
                    }          
                });
                contractObj.items = items;
                ////console.log("CONTRACT FROM TMS "+JSON.stringify(contractObj));
                return contractObj;
            })
        });
    }

    getItem(item) {
        // alert(JSON.stringify(item))
        let itemList = {
            "truck_type": item.name,
            "from": item.offers.eligibleRegion.name,
            "to": item.offers.eligibleRegion.geoWithin.name,
            "region": "",
            "truck_capacity": item.offers.eligibleQuantity.unitText + item.offers.eligibleQuantity.value,
            "rate": item.offers.price + item.offers.priceCurrency,
            "valid_from": item.validFrom,
            "valid_to": ""
        }
        return itemList;
    }

    getContactDetail(contact, contactInfoAddress) {
        //////console.log("getContactDetail contact "+JSON.stringify(contact))
        //////console.log("getContactDetail contactInfoAddress "+JSON.stringify(contactInfoAddress))
        
        var contactManager = this.paramNetwork.contactManager;
        return contactManager.getContactFromBookOwner(contact, contactInfoAddress).then(data => {
            return data;
        });
    }
    
}

module.exports = ContractManager;
// export default ContractManager;