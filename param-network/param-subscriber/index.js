const ParamUtils = require('../utils/index');
/**
 * ParamSubscriber is an implementation of core param protocol, using this class user can able to subscriber the post into ParamNetwork. 
 * 
 */
class ParamSubscriber {
    /**
     * Default constructor for initialising or establishing the param subscriber.
     * @param {ParamNetwork} paramNetwork Object
     */
    constructor(_paramNetwork){
        this.connection = _paramNetwork.getConnection();
        const paramSubscriberManager = require('./dev/param-subscriber.json')
        this.paramSubscriberManagerContract = this.connection.eth.contract(paramSubscriberManager.abi);
        this.paramSubscriberManagerContract = this.paramSubscriberManagerContract.at(paramSubscriberManager.address);
        this.to = paramSubscriberManager.address;
    }

    /**
     * initEvents is a event listener used for listening the real time changes whenever a receipt is subscribed.
     * @param {JSON} options - {"address":"0x"}
     * @example 
     * Usage:
     *  paramSubscriberManager
     *   .initEvents({address:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        // if (options) {
        //     options = { owner: options.address };
        // }
        this.watchAddConsentEvent(options);

        this.watchAddSubscriberEvent(options);
    }

    watchAddConsentEvent(options) {
        if (typeof this.addConsentEvent === 'undefined' || !this.addConsentEvent) {
            this.addConsentEvent = this.paramSubscriberManagerContract.onConsent(options);
        }
        let that = this;
        this.addConsentEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onConsent", e, data);
                return;
            }
            try {
                that.events.emit("onConsent", e, data);
                that.addConsentEvent.stopWatching();
            } catch (e) {
            }
            that.addConsentEvent = null;
            that.watchAddConsentEvent(options);
        });
    }

    watchAddSubscriberEvent(options) {
        if (typeof this.addSubscriberEvent === 'undefined' || !this.addSubscriberEvent) {
            this.addSubscriberEvent = this.paramSubscriberManagerContract.onSubscriber(options);
        }
        let that = this;
        this.addSubscriberEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onSubscriber", e, data);
                return;
            }
            try {
                that.events.emit("onSubscriber", e, data);
                that.addSubscriberEvent.stopWatching();
            } catch (e) {
            }
            that.addSubscriberEvent = null;
            that.watchAddSubscriberEvent(options);
        });
    }

    addSellerConsent(receiptId, receiptType, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramSubscriberManagerContract.addSellerConsent.estimateGas(receiptId, receiptType, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey) {
                    let txData = that.paramSubscriberManagerContract.addSellerConsent.getData(receiptId, receiptType);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramSubscriberManagerContract.addSellerConsent(receiptId, receiptType, options, function(error, data){
                    if(error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    addBuyerConsent(receiptId, receiptType, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramSubscriberManagerContract.addBuyerConsent.estimateGas(receiptId, receiptType, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey) {
                    let txData = that.paramSubscriberManagerContract.addBuyerConsent.getData(receiptId, receiptType);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramSubscriberManagerContract.addBuyerConsent(receiptId, receiptType, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    isValidConsent(receiptId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.isValidConsent(receiptId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getConsentsForReceipt(receiptId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.getConsentsForReceipt(receiptId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    setParamContractAddress(_paramContractAddress, options) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.setParamContractAddress(_paramContractAddress, options, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }
    
    /**
    * addSubscriber is an async function, using this function post add subscriber into param network.
    * 
    * @param {payload} buyerId - Param BuyerId to post quotation
    * @param {receiptId} json - Receipt content.
    * @param {receiptType} json - Receipt content.
    * @param {subscriber} json - Receipt content.
    * @param {JSON} options - {from: <PARAM_ADDRESS>}
    * @returns {Promise} promise
    * 
    * @example
    * Usage:
    * paramSubscriberManager
    *   .initProposal("0x","<JSONLD>", {from:<FROM_PARAM_ADDRESS>})
    *   .then((result)=>{
    *       //TODO 
    *   })
    */
    addSubscriber(payload, receiptId, receiptType, subscriber, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramSubscriberManagerContract.addSubscriber.estimateGas(payload, receiptId, receiptType, subscriber, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey) {
                    let txData = that.paramSubscriberManagerContract.addSubscriber.getData(payload, receiptId, receiptType, subscriber);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramSubscriberManagerContract.addSubscriber(payload, receiptId, receiptType, subscriber, options, function(error, data){
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
     * getSubscriberReceipts is an async function, using this function you can get details for a given receipt transaction details.
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .getSubscriberReceipts()
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getSubscriberReceipts(options) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.getSubscriberReceipts(options.address, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * isSubscriberExists is an async function, using this function can check is the subscriber exists.
     * If transaction is successful receipt state is CREATE_PO and step will be ACCEPT_PROPOSAL_AND_CREATE_PO state. 
     * This function will return promise function.     
     * 
     * @param {String} rId - Receipt Id    
     * @param {String} subscriberAddress - subscriber Address
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .isSubscriberExists("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    isSubscriberExists(receiptId, subscriberAddress) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.isSubscriberExists(receiptId, subscriberAddress, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getSubscribers is an async function, using this function you can get details for a given extendedKnowledge Id.
     * @param {String} receiptId - extendedKnowledge Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .getSubscribers("<EXTENDEDKNOWLEDGE_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getSubscribers(receiptId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.getSubscribers(receiptId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getSubscriber is an async function, using this function you can get details for a given extendedKnowledge Id.
     * @param {String} sId - subscriber Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .getSubscribers("<SUBSCRIBER_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getSubscriber(sId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramSubscriberManagerContract.getSubscriber(sId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }
    
    // /**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    //  * addSellerConsent is an async function, using this function seller will change receipt state from purchase order to invoice.
    //  * This function will return promise function.
    //  * 
    //  * @param {String} rId - Receipt Id
    //  * @param {String} receiptType - Receipt Type
    //  * @returns {Promise} promise
    //  * 
    //  * @example
    //  * Usage:
    //  * paramSubscriberManager
    //  *   .addSellerConsent("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
    //  *   .then((result)=>{
    //  *       //TODO 
    //  *   })
    //  */
    // addSellerConsent(receiptId, receiptType, options) {
    //     const promise = new Promise((resolve, reject)=>{
    //         const that = this;
    //         this.paramSubscriberManagerContract.addSellerConsent.estimateGas(receiptId, receiptType, options, function(error, _gas){
    //             if(error){
    //                 return reject(error);
    //             }
    //             _gas = parseInt(_gas*1.3);
    //             options.gas = _gas;
    //             if(options.privateKey){
    //                 let txData = that.paramSubscriberManagerContract.addSellerConsent.getData(receiptId, receiptType);
    //                 ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
    //                     resolve(data)
    //                 }).catch(error=>{
    //                     reject(error)
    //                 })
    //                 return;
    //             }
    //             that.paramSubscriberManagerContract.addSellerConsent(receiptId, receiptType, options, function(error, data){
    //                 if(error){
    //                     return reject(error);
    //                 }
    //                 resolve(data)
    //             })
    //         })
    //     });
    //     return promise;        
    // }

    // /**
    //  * addBuyerConsent is an async function, using this function seller will change receipt state from purchase order to invoice.
    //  * This function will return promise function.
    //  * 
    //  * @param {String} rId - Receipt Id
    //  * @param {String} receiptType - Receipt Type
    //  * @returns {Promise} promise
    //  * 
    //  * @example
    //  * Usage:
    //  * paramSubscriberManager
    //  *   .addBuyerConsent("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
    //  *   .then((result)=>{
    //  *       //TODO 
    //  *   })
    //  */
    // addBuyerConsent(receiptId, receiptType, options) {
    //     const promise = new Promise((resolve, reject)=>{
    //         const that = this;
    //         this.paramSubscriberManagerContract.addBuyerConsent.estimateGas(receiptId, receiptType, options, function(error, _gas){
    //             if(error){
    //                 return reject(error);
    //             }
    //             _gas = parseInt(_gas*1.3);
    //             options.gas = _gas;
    //             if(options.privateKey){
    //                 let txData = that.paramSubscriberManagerContract.addBuyerConsent.getData(receiptId, receiptType);
    //                 ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
    //                     resolve(data)
    //                 }).catch(error=>{
    //                     reject(error)
    //                 })
    //                 return;
    //             }
    //             that.paramSubscriberManagerContract.addBuyerConsent(receiptId, receiptType, options, function(error, data){
    //                 if(error){
    //                     return reject(error);
    //                 }
    //                 resolve(data)
    //             })
    //         })
    //     });
    //     return promise;
    // }    
    
    // /**
    //  * isValidConsent is an async function, using this function you can get details for a given extendedKnowledge Id.
    //  * @param {String} receiptId - receipt Id
    //  * @returns {Promise} promise
    //  * 
    //  * @example
    //  * Usage:
    //  * paramSubscriberManager
    //  *   .isValidConsent("<EXTENDEDKNOWLEDGE_ID>")
    //  *   .then((result)=>{
    //  *       //TODO
    //  *   })
    //  */
    // isValidConsent(receiptId) {
    //     const promise = new Promise((resolve, reject)=>{
    //         this.paramSubscriberManagerContract.isValidConsent(receiptId, function(error, data){
    //             if(error){
    //                 return reject(error);
    //             }
    //             resolve(data)
    //         })
    //     });
    //     return promise;
    // } 

    // /**
    //  * getConsentsForReceipt is an async function, using this function you can get details for a given extendedKnowledge Id.
    //  * @param {String} receiptId - extendedKnowledge Id
    //  * @returns {Promise} promise
    //  * 
    //  * @example
    //  * Usage:
    //  * paramSubscriberManager
    //  *   .getConsentsForReceipt("<RECEIPT_ID>")
    //  *   .then((result)=>{
    //  *       //TODO
    //  *   })
    //  */
    // getConsentsForReceipt(receiptId) {
    //     const promise = new Promise((resolve, reject)=>{
    //         this.paramSubscriberManagerContract.getConsentsForReceipt(receiptId, function(error, data){
    //             if(error){
    //                 return reject(error);
    //             }
    //             resolve(data)
    //         })
    //     });
    //     return promise;
    // }
    
    /**
     * registerOnSubscriber function is used to register live transaction updates from the param network. 
     * @param {function} callback (error, result)=>{}
     * 
     * @example
     * Usage:
     * const transUpdate = (error, data)=>{
     *      //TODO
     *  }
     * paramSubscriberManager
     *   .registerOnSubscriber(transUpdate)
     */
    registerOnSubscriber(callback){
        if(!this.events){
            this.initEvents();
            // throw Error("Events is null. Call initEvents()");
        }
        this.events.addListener("onSubscriber", callback);
    }

    /**
     * unRegisterOnSubscriber function is used to stop getting live transaction updates from the param network. 
     * @param {function} callback - registered callback
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .unRegisterOnSubscriber(transUpdate);
     */
    unRegisterOnSubscriber(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onSubscriber", callback);
    }

     /**
     * registerOnSubscriber function is used to register live transaction updates from the param network. 
     * @param {function} callback (error, result)=>{}
     * 
     * @example
     * Usage:
     * const transUpdate = (error, data)=>{
     *      //TODO
     *  }
     * paramSubscriberManager
     *   .registerOnSubscriber(transUpdate)
     */
    registerOnConsent(callback){
        if(!this.events){
            this.initEvents();
            // throw Error("Events is null. Call initEvents()");
        }
        this.events.addListener("onConsent", callback);
    }

    /**
     * unRegisterOnSubscriber function is used to stop getting live transaction updates from the param network. 
     * @param {function} callback - registered callback
     * 
     * @example
     * Usage:
     * paramSubscriberManager
     *   .unRegisterOnSubscriber(transUpdate);
     */
    unRegisterOnConsent(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onConsent", callback);
    }
}
module.exports = ParamSubscriber;