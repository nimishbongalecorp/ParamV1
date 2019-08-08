const ParamUtils = require('../utils/index');
/**
 * ContactManager is an implementation of decentralized contact storage, using this class user can able to save contacts into ParamNetwork. 
 */
class ContactManager {
    /**
     * Default constructor for initialising or establishing the contacts.
     * @param {ParamNetwork} paramNetwork Object
     * 
     */
    constructor(_paramNetwork){
        this.connection = _paramNetwork.getConnection();
        const contManager = require('./dev/contact-manager.json')
        this.contactManagerContract = this.connection.eth.contract(contManager.abi);
        this.contactManagerContract = this.contactManagerContract.at(contManager.address);
        this.to = contManager.address;        
    }

    /**
     * initEvents is a event listener used for listening the real time changes whenever a contact is added or updated.
     * @param {JSON} options - {"address":"0x"}
     * @example
     * Usage:
     *  contactManager
     *   .initEvents({address:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        if (options) {
            options = {
                owner: options.address
            };
        }

        this.watchAddContactEvent(options);
        this.watchUpdateContactEvent(options);
    }

    watchAddContactEvent(options) {
        if (typeof this.addContactEvent === 'undefined' || !this.addContactEvent) {
            this.addContactEvent = this.contactManagerContract.onContactAdd(options);
        }
        let that = this;
        this.addContactEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onContactAdd", e, data);
                return;
            }
            try {
                that.events.emit("onContactAdd", e, data);
                that.addContactEvent.stopWatching();
            } catch (e) {
            }
            that.addContactEvent = null;
            that.watchAddContactEvent(options);
        });
    }

    watchUpdateContactEvent(options) {
        if (typeof updateContactEvent === 'undefined' || !this.updateContactEvent) {
            this.updateContactEvent = this.contactManagerContract.onContactUpdate(options);
        }
        let that = this;
        this.updateContactEvent.watch((e, data) => {
            if (!e) {
                return that.events.emit("onContactUpdate", e, data);
            }
            try {
                that.events.emit("onContactUpdate", e, data);
                that.updateContactEvent.stopWatching();
            } catch (e) {
            }
            that.updateContactEvent = null;
            that.watchUpdateContactEvent(options);
        });
    }

    /** 
     * addContact method is used for adding new contacts into the network.
     * @param {address} address - contact's paramId
     * @param {string} info - JSONLD
     * @param {JSON} options - {from: <PARAM_ADDRESS>}
     * @param {String} privateFor - Param private transaction
     * @returns {Promise} promise
     * @example 
     * Usage:
     *  contactManager
     *   .addContact("0x","<JSONLD>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    addContact(address, info, privateFor, options){
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contactManagerContract.addContact.estimateGas(address,info, privateFor, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                options.to = that.to;

                if(options.privateKey){
                    let txData = that.contactManagerContract.addContact.getData(address, info, privateFor);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.contactManagerContract.addContact(address, info, privateFor, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    /** 
     * updateContact method is used for updating the already available/existing contacts data to the network.
     * @param {Number} index - contactId
     * @param {string} info - JSONLD
     * @param {JSON} options - {from: <PARAM_ADDRESS>}
     * @param {String} privateFor - Param private transaction
     * @returns {Promise} promise
     * @example 
     * Usage:
     *  contactManager
     *   .updateContact(<CONTACT_ID>,"<JSONLD>",{from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
    */
    updateContact(index, info, privateFor, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contactManagerContract.updateContact.estimateGas(index, info, privateFor,  options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.contactManagerContract.updateContact.getData(index, info, privateFor);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.contactManagerContract.updateContact(index, info, privateFor, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })    
        });
        return promise;
    }

    /** 
     * getAllContacts method is used for getting all the contacts that are available in the network.
     * @param {string} address - contact's paramId
     * @returns {Promise} promise
     * @example 
     * Usage:
     *  contactManager
     *   .getAllContacts('0x')
     *   .then((result)=>{
     *       //TODO 
     *   })
    */
    getAllContacts(address) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
                this.contactManagerContract.getAllContacts(address, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
                
            })
        return promise;
    }

    /**
     * getTotalContacts method is used to get the total number of contacts available in the network.
     * @param {String} address - contact's paramId
     * @returns {Promise} promise
     * @example 
     * Usage:
     *  contactManager
     *   .getTotalContacts('0x')
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    getTotalContacts(address) {
        const promise = new Promise((resolve, reject)=>{
            this.contactManagerContract.getTotalContacts(address, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

     /**
     * getContact method is used to get a particular contact via contact index. 
     * @param {Number} index - contactId 
     * @example
     * Usage:
     *  contactManager
     *   .getContact(<CONTACT_ID>)
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    getContact(index) {
        const promise = new Promise((resolve, reject)=>{
            this.contactManagerContract.getContact(index, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getContactFromBookOwner(bookOwner, contactId) {
        const promise = new Promise((resolve, reject)=>{
            this.contactManagerContract.getContactFromBookOwner(bookOwner, contactId, function(error, data){
                if(error){
                    return reject(error);
                }
                ////console.log("getContactFromBookOwner "+JSON.stringify(data))
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * registerOnContactAdded is used for adding listener whenever a contact is added.
     * @param {function} callback - (error, result)=>{}
     * @param {JSON} options - {address:'0x'}
     * @example
     * Usage:
     * const callback = (error, data)=>{
     *      //TODO
     *  }
     *  contactManager
     *   .registerOnContactAdded(callback)
     *   
     */
    registerOnContactAdded(callback, options){
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onContactAdd", callback);
    }

    /**
     * unRegisterOnContactAdded is used for removing the listener that has been added for OnContactAdd event. 
     * @param {function} callback - registered callback
     * @example
     * Usage:
     *  contactManager
     *   .unRegisterOnContactAdded(callback)
     *   
     */
    unRegisterOnContactAdded(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onContactAdd", callback);
    }

    /**
     * registerOnContactUpdated is used for adding listener whenever a contact is updated.
     * @param {function} callback - (error, result)=>{}
     * @param {JSON} options - {address:'0x'}
     * @example
     * Usage:
     * const callback = (error, data)=>{
     *      //TODO
     *  }
     *  contactManager
     *   .registerOnContactUpdated(callback)
     * 
     */
    registerOnContactUpdated(callback, options){
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onContactUpdate", callback);
    }

    /**
     * unRegisterOnContactUpdated is used for removing the listener that has been added for OnContactUpdate event.
     * @param {function} callback - registered callback
     * @example 
     * Usage:
     *  contactManager
     *   .unRegisterOnContactUpdated(callback)
     *   
     */
    unRegisterOnContactUpdated(callback){
        if(!this.events){
           return;
        }
        this.events.removeListener("onContactUpdate", callback);
    }
}
module.exports = ContactManager;