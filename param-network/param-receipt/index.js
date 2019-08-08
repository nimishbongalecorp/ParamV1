const ParamUtils = require('../utils/index');
/**
 * ParamReceipt is an implementation of core param protocol, using this class user can able to post receipt into ParamNetwork. 
 * 
 */
class ParamReceipt {
    /**
     * Default constructor for initialising or establishing the param receipt.
     * @param {ParamNetwork} paramNetwork Object
     */
    constructor(_paramNetwork){
        this.connection = _paramNetwork.getConnection();
        const paramManager = require('./dev/param-receipt.json')
        this.paramReceiptManagerContract = this.connection.eth.contract(paramManager.abi);
        this.paramReceiptManagerContract = this.paramReceiptManagerContract.at(paramManager.address);
        this.to = paramManager.address;
    }

    /**
     * initEvents is a event listener used for listening the real time changes whenever a receipt is added or updated.
     * @param {JSON} options - {"address":"0x"}
     * @example 
     * Usage:
     *  paramReceiptManager
     *   .initEvents({address:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    initEvents(options) {
        if (!this.events) {
            const events = require('events');
            this.events = new events.EventEmitter();
        }

        let sellerAddress, buyerAddress;

        if (options && options.address) {
            sellerAddress = { seller: options.address }
            buyerAddress = { buyer: options.address }
            options = { address: options.address }
        }
        this.watchStatusUpdateForSeller(sellerAddress);
        this.watchStatusUpdateForBuyer(buyerAddress);
        this.watchTransactionUpdateEvent(options);
    }

    watchStatusUpdateForSeller(sellerAddress) {
        if (typeof this.sellerStatusUpdateEvent === 'undefined' || !this.sellerStatusUpdateEvent) {
            this.sellerStatusUpdateEvent = this.paramReceiptManagerContract.onStatusUpdate(sellerAddress);
        }
        let that = this;
        this.sellerStatusUpdateEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onStatusUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onStatusUpdate", e, data);
                that.sellerStatusUpdateEvent.stopWatching();
            } catch (e) {
            }
            that.sellerStatusUpdateEvent = null;
            that.watchStatusUpdateForSeller(sellerAddress);
        });
    }

    watchStatusUpdateForBuyer(buyerAddress) {
        if (typeof this.buyerStatusUpdateEvent === 'undefined' || !this.buyerStatusUpdateEvent) {
            this.buyerStatusUpdateEvent = this.paramReceiptManagerContract.onStatusUpdate(buyerAddress);
        }
        let that = this;
        this.buyerStatusUpdateEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onStatusUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onStatusUpdate", e, data);
                that.buyerStatusUpdateEvent.stopWatching();
            } catch (e) {
            }
            that.buyerStatusUpdateEvent = null;
            that.watchStatusUpdateForBuyer(buyerAddress);
        });
    }

    watchTransactionUpdateEvent(options) {
        if (typeof this.transactionUpdateEvent === 'undefined' || !this.transactionUpdateEvent) {
            this.transactionUpdateEvent = this.paramReceiptManagerContract.onTransactionUpdate(options);
        }
        let that = this;
        this.transactionUpdateEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onTransactionUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onTransactionUpdate", e, data);
                that.transactionUpdateEvent.stopWatching();
            } catch (e) {
            }
            that.transactionUpdateEvent = null;
            that.watchTransactionUpdateEvent(options);
        });
    }

    /**
    * initProposal is an async function, using this function post new quotation into param network.
    * 
    * @param {address} buyerId - Param BuyerId to post quotation
    * @param {string} json - Receipt content.
    * @param {JSON} options - {from: <PARAM_ADDRESS>}
    * @returns {Promise} promise
    * 
    * @example
    * Usage:
    * paramReceiptManager
    *   .initProposal("0x","<JSONLD>", {from:<FROM_PARAM_ADDRESS>})
    *   .then((result)=>{
    *       //TODO 
    *   })
    */
   
    initProposal(buyerId, json, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.initProposal.estimateGas(buyerId, json, note, options, function(error, _gas){
                if(error){
                    ////console.log(error)
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                ////console.log(_gas);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.initProposal.getData(buyerId, json, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramReceiptManagerContract.initProposal(buyerId, json,note, options, function(error, data){
                    if(error){
                        return reject(error);
                    }

                    resolve(data)
                })
            })
        });
        return promise;
    }

    getStartStatus(rId){
        return new Promise((resolve,reject)=>{
            let onStatusUpdate = this.paramReceiptManagerContract.onStatusUpdate({rId:rId},{fromBlock: 0, toBlock: 'latest'})
            onStatusUpdate.get((error, result) => {
                if(error){
                    reject(error);
                }
                let status = -1;
                for(let index=0; index<result.length; index++){
                    if(index === 0){
                        status = parseInt(result[index].args.step.toString());
                        continue;
                    }
                    status = Math.min(status, parseInt(result[index].args.step.toString()))
                }
                if(status === -1){
                    return reject();
                }
                resolve(status);
            });
        })
      
    }
    /**
     * acceptProposal is an async function, using this function buyer will accept proposal.
     * If transaction is successful receipt state is CREATE_PO and step will be ACCEPT_PROPOSAL_AND_CREATE_PO state. 
     * This function will return promise function.     
     * 
     * @param {String} rId - Receipt Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .acceptProposal("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    acceptProposal(rId, receiptJsonLd, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.acceptProposal.estimateGas(rId, receiptJsonLd, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.acceptProposal.getData(rId, receiptJsonLd, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.acceptProposal(rId, receiptJsonLd, note, options, function(error, data){
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
     * rejectProposal is an async function, using this function buyer will reject proposal.
     * If transaction is successful receipt state is REJECT_PROPOSAL and step will be same state. 
     * Once proposal is canceled seller or buyer can't perfrom any action in future. 
     * This function will return promise function.
     * 
     * @param {String} rId - Receipt Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .rejectProposal("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    rejectProposal(rId, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.rejectProposal.estimateGas(rId, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.rejectProposal.getData(rId, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.rejectProposal(rId, extendedKnowledge, note, options, function(error, data){
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
     * createPO is an async function, using this function seller will change receipt state from purchase order to invoice.
     * If transaction is successful receipt state will be change to SEND_INVOICE and step will be SEND_INVOICE state. 
     * This function will return promise function.
     * 
     * @param {String} rId - Receipt Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .createPO("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    createPO(selletId, jsonLd, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.createPO.estimateGas(selletId, jsonLd, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.createPO.getData(selletId, jsonLd, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.createPO(selletId, jsonLd, extendedKnowledge, note, options, function(error, data){
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
     * createInvoice is an async function, using this function seller will change receipt state from purchase order to invoice.
     * If transaction is successful receipt state will be change to SEND_INVOICE and step will be SEND_INVOICE state. 
     * This function will return promise function.
     * 
     * @param {String} rId - Receipt Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .createInvoice("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    createInvoice(buyerId, jsonLd, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.createInvoice.estimateGas(buyerId, jsonLd, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.createInvoice.getData(buyerId, jsonLd, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.createInvoice(buyerId, jsonLd, extendedKnowledge, note, options, function(error, data){
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
     * sendInvoice is an async function, using this function seller will change receipt state from purchase order to invoice.
     * If transaction is successful receipt state will be change to SEND_INVOICE and step will be SEND_INVOICE state. 
     * This function will return promise function.
     * 
     * @param {String} rId - Receipt Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .sendInvoice("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    sendInvoice(rId, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.sendInvoice.estimateGas(rId, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.sendInvoice.getData(rId, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.sendInvoice(rId, extendedKnowledge, note, options, function(error, data){
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
     * makePayment is an async function, using this function buyer will pay invoice.
     * If transaction is successful,receipt state is MAKE_PAYMENT and step will be PAYMENT_SUCCESS state. 
     * This function will return promise function.
     * 
     * @param {String} rId - Receipt Id
     * @param {JSON} options - {from: <PARAM_ADDRESS>}
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .makePayment("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>, value:100})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    makePayment(rId, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.makePayment.estimateGas(rId, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.makePayment.getData(rId, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.paramReceiptManagerContract.makePayment(rId, extendedKnowledge, note, options, function(error, data){
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
     * createReceipt is an async function, using this function seller will create receipt.
     * If transaction is successful,receipt state is CREATE_RECEIPT and step will be CREATE_RECEIPT state. 
     * This function will return promise function.
     *
     * @param {String} rId - Receipt Id
     * @param {JSON} options - {from: <PARAM_ADDRESS>}
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .createReceipt("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    createReceipt(rId, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.createReceipt.estimateGas(rId, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                
                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.createReceipt.getData(rId, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramReceiptManagerContract.createReceipt(rId, extendedKnowledge, note, options, function(error, data){
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
     * cancelReceipt is an async function, using this function seller/buyer will cancel the receipt.
     * If transaction is successful, receipt state is CANCEL_RECEIPT and step will be CANCEL_RECEIPT state. 
     * Once receipt is canceled, you can't perfrom any action in future.
     * This function will return promise function.
     *
     * @param {String} rId - Receipt Id
     * @param {JSON} options - Param Options
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .cancelReceipt("<RECEIPT_ID>", {from:<FROM_PARAM_ADDRESS>})
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    cancelReceipt(rId, extendedKnowledge, note, options) {
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.paramReceiptManagerContract.cancelReceipt.estimateGas(rId, extendedKnowledge, note, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.paramReceiptManagerContract.cancelReceipt.getData(rId, extendedKnowledge, note);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }

                that.paramReceiptManagerContract.cancelReceipt(rId, extendedKnowledge, note, options, function(error, data){
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
     * getTransaction is an async function, using this function you can get details for a given receipt transaction details.
     * @param {String} txId - Transaction id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getTransaction("<TXN_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getTransaction(txId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getTransaction(txId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getExtendedKnowledge is an async function, using this function you can get details for a given extendedKnowledge Id.
     * @param {String} extendedKnowledgeId - extendedKnowledge Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getExtendedKnowledge("<EXTENDEDKNOWLEDGE_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getExtendedKnowledge(extendedKnowledgeId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getExtendedKnowledge(extendedKnowledgeId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getExtendedKnowledge is an async function, using this function you can get details for a given extendedKnowledge Id.
     * @param {String} extendedKnowledgeId - extendedKnowledge Id
     * @returns {Promise} promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getExtendedKnowledge("<EXTENDEDKNOWLEDGE_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getExtendedKnowledgeByReceiptId(rId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getExtendedKnowledgeByReceiptId(rId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }
   
    /**
     * getTransactions is an async function, using this function you can get list of transaction ids for a given receipt id.
     * @param {String} rId - Receipt Id
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getTransactions("<TXN_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getTransactions(rId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getTransactions(rId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getReceiptsByBuyer is an async function, using this function you can get list of receipt ids for a given param buyer id.
     * @param {String} rId - Receipt Id
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getReceiptsByBuyer("<PARAM_ADDRESS>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getReceiptsByBuyer(buyerId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getReceiptsByBuyer(buyerId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getReceiptsBySeller is an async function, using this function you can get list of receipt ids for a given param seller id.
     * @param {String} rId - Receipt Id
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getReceiptsBySeller("<TXN_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })     
     */
    getReceiptsBySeller(sellerId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getReceiptsBySeller(sellerId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getReceipt is an async function, using this function you can get receipt info like seller, buyer, receipt info, current state and status.
     * @param {String} rId - Receipt Id
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getReceipt("<RECEIPT_ID>")
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getReceipt(rId) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getReceipt(rId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getReceiptsByStep is an async function, using this function you can get list of receipt id's for a given step.
     * @param {Number} step - Step 
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getReceiptsByStep(<STEP>)
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getReceiptsByStep(step) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getReceiptsByStep(step, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getReceiptsByStatus is an async function, using this function you can get list of receipt id's for a given status.
     * @param {String} status - Status
     * @returns {Promise}  promise
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .getReceiptsByStatus(<STATUS>)
     *   .then((result)=>{
     *       //TODO
     *   })
     */
    getReceiptsByStatus(status) {
        const promise = new Promise((resolve, reject)=>{
            this.paramReceiptManagerContract.getReceiptsByStatus(status, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * registerOnTransactionUpdate function is used to register live transaction updates from the param network. 
     * @param {function} callback (error, result)=>{}
     * 
     * @example
     * Usage:
     * const transUpdate = (error, data)=>{
    *      //TODO
    *  }
     * paramReceiptManager
     *   .registerOnTransactionUpdate(transUpdate)
     */
    registerOnTransactionUpdate(callback){
        if(!this.events){
            throw Error("Events is null. Call initEvents()");
        }
        this.events.addListener("onTransactionUpdate", callback);
    }

    /**
     * unRegisterOnTransactionUpdate function is used to stop getting live transaction updates from the param network. 
     * @param {function} callback - registered callback
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .unRegisterOnTransactionUpdate(transUpdate);
     */
    unRegisterOnTransactionUpdate(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onTransactionUpdate", callback);
    }

    /**
     * registerOnStatusUpdate function is used to register live status updates from the param network. 
     * @param {function}  callback (error, result)=>{}
     * 
     * @example
     * Usage:
     * let statusUpdate = (error, data) => {
     *      //TODO
     *  }
     * paramReceiptManager
     *   .registerOnStatusUpdate(statusUpdate)
     */
    registerOnStatusUpdate(callback){
        if(!this.events){
            this.initEvents()
        }
        this.events.addListener("onStatusUpdate", callback);
    }

    /**
     * unRegisterOnStatusUpdate function is used to stop getting live status updates from the param network. 
     * @param {function}  callback - registered callback
     * 
     * @example
     * Usage:
     * paramReceiptManager
     *   .unRegisterOnStatusUpdate(statusUpdate);
     */
    unRegisterOnStatusUpdate(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onStatusUpdate", callback);
    }
}
module.exports = ParamReceipt;