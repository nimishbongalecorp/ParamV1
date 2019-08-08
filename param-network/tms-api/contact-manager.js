// import ParamContactManager from '../transport-team-manager/index'
const ParamContactManager = require('../contact-manager/index');

class ContactManager extends ParamContactManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }

    getContact(transcontactId) {
        return super.getContact(transcontactId).then(data => {
            let contactJsonLd = JSON.parse(data[1]);
            if(!contactJsonLd) {
                return {
                    id:transcontactId
                };
            }
                
            let contact = {
                "id": contactJsonLd["@id"],
                "name": contactJsonLd.name,
                "email": contactJsonLd.email,
                "telephone": contactJsonLd.telephone,
                "faxNumber": contactJsonLd.faxNumber
            };

            if(contactJsonLd.address) {
                contact.address = {
                    "city": contactJsonLd.address.addressRegion,
                    "locality": contactJsonLd.address.addressLocality,
                    "street": contactJsonLd.address.streetAddress,
                    "geo": {
                    }
                }
            }
            return contact;
        });
    }

    getContactFromBookOwner(ownerId, employeeId) {
        return super.getContactFromBookOwner(ownerId, employeeId).then(data => {
            let contactJsonLd = data?JSON.parse(data[1]):null;
            if(!contactJsonLd) {
                return {
                    id:ownerId
                }
            }
                
            let contact = {
                "id": contactJsonLd["@id"],
                "name": contactJsonLd.name,
                "email": contactJsonLd.email,
                "telephone": contactJsonLd.telephone,
                "faxNumber": contactJsonLd.faxNumber
            }

            if(contactJsonLd.address) {
                contact.address = {
                    "city": contactJsonLd.address.addressRegion,
                    "locality": contactJsonLd.address.addressLocality,
                    "street": contactJsonLd.address.streetAddress,
                    "geo": {
                    }
                }
            }
            return contact;
        }).catch(e => { 
            return {
                id:employeeId
            }
        });
    }
}

// export default ContactManager;
module.exports = ContactManager;