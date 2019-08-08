import ParamReceiptManager from '../param-receipt/index'

class ReceiptManager extends ParamReceiptManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }

    getReceipt(receiptId) {
        return super.getReceipt(receiptId).then(data => {
            let provider = {};
            let customer = {};
            let referencesOrder = {};
            let ReceiptjsonLd = JSON.parse(data[2]);
            delete ReceiptjsonLd["@context"];
            delete ReceiptjsonLd["@type"];

            ReceiptjsonLd.provider = this.delTypeAndId(ReceiptjsonLd.provider);
            ReceiptjsonLd.provider.address = this.delTypeAndId(ReceiptjsonLd.provider.address);
            ReceiptjsonLd.provider.employee = this.delTypeAndId(ReceiptjsonLd.provider.employee);

            ReceiptjsonLd.customer = this.delTypeAndId(ReceiptjsonLd.customer);
            ReceiptjsonLd.customer.address = this.delTypeAndId(ReceiptjsonLd.customer.address);
            ReceiptjsonLd.customer.employee = this.delTypeAndId(ReceiptjsonLd.customer.employee);

            delete ReceiptjsonLd.referencesOrder["@type"];
            let orderedItem = [];
            ReceiptjsonLd.referencesOrder.orderedItem.forEach(element => {
                element.orderedItem = this.delTypeAndId(element.orderedItem);
                delete element.orderedItem.offers["@type"];
                orderedItem.push(this.delTypeAndId(element));
            });
            ReceiptjsonLd4.referencesOrder.orderedItem = orderedItem;

            delete ReceiptjsonLd.minimumPaymentDue["@type"];
            delete ReceiptjsonLd.totalPaymentDue["@type"];

            return ReceiptjsonLd;
        });
    }

    delTypeAndId(data) {
        delete data["@type"];
        data["id"] = data["@id"];
        delete data["@id"];
        return data;
    }
}

export default ReceiptManager;