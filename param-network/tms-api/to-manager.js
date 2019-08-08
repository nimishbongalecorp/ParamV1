// import ParamTOManager from '../to-manager/index';
// import ContactManager from '../tms-api/contact-manager';

const ParamTOManager = require('../to-manager/index');
const ParamUtils = require('../utils/index')

class TOManager extends ParamTOManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }

    getLReceipt(elReceiptNo, currentUser) {
        return super.getLReceipt(elReceiptNo).then(async data => {
            let eLRjsonLd = JSON.parse(data[3]);
            eLRjsonLd.TO = data[0];
            eLRjsonLd.TODetails = await this.getTransOrder(data[0], currentUser);
            eLRjsonLd.ElrNo = elReceiptNo;
            eLRjsonLd.state = data[2];

            delete eLRjsonLd.deliveryAddress['@type'];
            delete eLRjsonLd.carrier['@type'];

            delete eLRjsonLd.partOfOrder['@type'];
            delete eLRjsonLd.partOfOrder.merchant['@type'];
            eLRjsonLd.partOfOrder.merchant.id = eLRjsonLd.partOfOrder.merchant['@id'];
            delete eLRjsonLd.partOfOrder.merchant['@id'];

            let orderedItem = [];
            eLRjsonLd.partOfOrder.orderedItem.forEach(element => {
                orderedItem.push(this.delOrderItemType(element));
            });
            eLRjsonLd.orderedItem = orderedItem;

            console.log("TO -MANAGER ELR "+JSON.stringify(eLRjsonLd))
            return eLRjsonLd;
        });
    }
    delOrderItemType(orderedItem) {
        delete orderedItem['@type'];
        orderedItem.id = orderedItem['@id'];
        delete orderedItem['@id'];
        return orderedItem;
    }

    getReviewsByeLR(elReceiptNo) {
        return super.getReviewsByeLR(elReceiptNo).then(data => {
            let reviewJsonLds = data;

            if (!reviewJsonLds || !ParamUtils.isValidJSON(data)) {
                return {
                }
            }
            reviewJsonLds = JSON.parse(data);
            let jsonLd = [];
            reviewJsonLds.forEach(element => {
                if (element)
                    jsonLd.push(this.getReview(element));
            });

            return jsonLd;
        });
    }

    getReview(reviewJsonLd) {
        // if (!ParamUtils.isValidJSON(reviewJsonLd)) {
        //     return reviewJsonLd;
        // }
        reviewJsonLd.author.id = reviewJsonLd.author['@id'];
        delete reviewJsonLd.author['@id'];
        reviewJsonLd.saleInvoiceId = reviewJsonLd.itemReviewed['@id'];
        reviewJsonLd.name = reviewJsonLd.name;
        reviewJsonLd.reviewBody = reviewJsonLd.reviewBody;
        reviewJsonLd.reviewRating = reviewJsonLd.reviewRating.ratingValue;
        reviewJsonLd.image.forEach(element => {
            delete element['@type'];
            delete element['@id'];
        });
        return reviewJsonLd;
    }

    getTransactionsByTO(toId) {
        return super.getTransactionsByTO(toId).then(data => {
            let states = [];
            data[0].forEach(txnId => {
                states.push(this.getTransaction(txnId));
            });
            return {
                "id": toId,
                "states": states
            }
        });
    }

    getTransactionsByeLR(elReceiptNo) {
        return super.getTransactionsByeLR(elReceiptNo).then(data => {
            let states = [];
            data[0].forEach(txnId => {
                states.push(this.getTransaction(txnId));
            });
            return {
                "id": elReceiptNo,
                "states": states
            }
        });
    }

    getTransaction(txnId) {
        return super.getTransaction(txnId).then(data => {
            return {
                "id": data[0],
                "caller": data[1],
                "block_number": data[3],
                "status": data[4],
                "date": data[2]
            }
        });
    }

    getTransOrder(transportOrderId, currentUser) {
        return super.getTransOrder(transportOrderId).then(data => {
            let toObj = {
                "id": transportOrderId,
                "po": data[7],
                "contractId": data[0],
                "merchant": {

                },
                "buyer": {

                },
                "carrier": {

                },
                "state": data[5].toString(),
                "elr": data[8].toString(),
                "driver": {
                    "name": null,
                    "id": null,
                    "vehicleIdentificationNumber": null
                },
                // "vehicleIdentificationNumber": null,
                "destination": null,
                "origin": null,
                "orderDate": null,
                "expectedArrivalUntil": null,
                "item": []
            };
            // let contactManager = this.paramNetwork.contactManager;
            let paramContract = this.paramNetwork.paramReceiptManager;
            // let teamManager = this.paramNetwork.teamManager;

            // return contactManager.getContactFromBookOwner(data[1], currentUser).then(merchant => {
            //     return merchant;
            // }).then(merchant => {
            //     toObj.merchant = merchant;
            //     return contactManager.getContactFromBookOwner(data[2], currentUser);
            // }).then(buyer => {
            //     toObj.buyer = buyer;
            //     return contactManager.getContactFromBookOwner(data[3], currentUser);
            // }).then(carrier => {
            //     toObj.carrier = carrier;
            // return teamManager.getEmployeeContact(data[4]).then(driver => {
            // toObj.driver = driver;
            return paramContract.getReceipt(data[7]).then(PODetails => {
                var vehicleInfodata = "";
                if (typeof data[6] == "object")
                    vehicleInfodata = data[6].toString()
                else
                    vehicleInfodata = data[6]

                if (vehicleInfodata != "") {
                    let vehicleInfo = JSON.parse(vehicleInfodata);
                    if (vehicleInfo) {
                        toObj.driver.vehicleIdentificationNumber = vehicleInfo.vehicleIdentificationNumber;
                        toObj.driver.name = vehicleInfo.additionalProperty.name;
                        toObj.driver.id = vehicleInfo.additionalProperty.identifier;
                        if (vehicleInfo.additionalProperty.telephone) {
                            toObj.driver.telephone = vehicleInfo.additionalProperty.telephone;
                        }
                    }
                }

                let item = [];
                let referOrder = PODetails[2];
                if (!referOrder || !ParamUtils.isValidJSON(referOrder)) {
                    return toObj;
                }
                referOrder = JSON.parse(referOrder);
                if (!referOrder.referencesOrder) {
                    return toObj;
                }
                toObj.orderDate = referOrder.referencesOrder.orderDate;
                toObj.expectedArrivalUntil = referOrder.referencesOrder.expectedArrivalUntil;

                if (!referOrder.referencesOrder.orderDelivery) {
                    return toObj;
                }
                toObj.destination = referOrder.referencesOrder.orderDelivery.deliveryAddress;
                toObj.origin = referOrder.referencesOrder.orderDelivery.originAddress;

                if (!referOrder.referencesOrder.orderedItem) {
                    return toObj;
                }
                referOrder.referencesOrder.orderedItem.forEach(element => {
                    let orderitem = {
                        "name": element.orderedItem.name,
                        "description": element.orderedItem.description,
                        "quantity": element.orderQuantity,
                        "price": element.orderedItem.offers.price
                    }
                    item.push(orderitem);
                });
                toObj.item = item;

                if (referOrder.toNumber) {
                    toObj.toNumber = referOrder.toNumber;
                }
                if (referOrder.eWB_number) {
                    toObj.eWB_number = referOrder.eWB_number;
                }
                if (referOrder.buyer.name) {
                    toObj.buyer.id = referOrder.buyer["@id"];
                    toObj.buyer.name = referOrder.buyer.name;
                }
                if (referOrder.merchant.name) {
                    toObj.merchant.id = referOrder.merchant['@id'];
                    toObj.merchant.name = referOrder.merchant.name;
                }
                if (referOrder.carrier.name) {
                    toObj.carrier.id = referOrder.carrier['@id'];
                    toObj.carrier.name = referOrder.carrier.name;
                }
                if (referOrder.buyer.tax && referOrder.buyer.tax.gstin) {
                    toObj.buyer.gstin = referOrder.buyer.tax.gstin;
                }
                if (referOrder.buyer.tax && referOrder.merchant.tax.gstin) {
                    toObj.merchant.gstin = referOrder.merchant.tax.gstin;
                }
                if (referOrder.buyer.tax && referOrder.carrier.tax.gstin) {
                    toObj.carrier.gstin = referOrder.carrier.tax.gstin;
                }
                if (referOrder.carrier.address) {
                    toObj.carrier.address = referOrder.carrier.address;
                }
                return toObj;
            });
        });
    }
}
// export default TOManager;
module.exports = TOManager;