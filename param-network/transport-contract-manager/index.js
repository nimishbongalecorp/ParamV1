const ParamUtils = require('../utils/index');

class ContractManager{
    
    constructor(_paramNetwork){
        this.connection = _paramNetwork.getConnection();
        this.paramNetwork = _paramNetwork;
        const contManager = require('./dev/transport-contract-manager.json')
        this.contractManagerContract = this.connection.eth.contract(contManager.abi);
        this.contractManagerContract = this.contractManagerContract.at(contManager.address);
        this.to = contManager.address;
    }

    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();
        if (!options) {
            options = {
                address: localStorage.getItem("param_id")
            };
        }
        this.watchAddTransportContractEvent(options);
        this.watchUpdateTransportContractEvent(options);
        this.watchUpdateContractStatusEvent(options);
    }

    watchAddTransportContractEvent(options) {

        if (typeof this.addTransportContractEvent === 'undefined' || !this.addTransportContractEvent) {
            this.addTransportContractEvent = this.contractManagerContract.onTransportContractAdd(options);
        }

        let that = this;
        this.addTransportContractEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onTransportContractAdd", e, data);
                return;
            }
            try {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onTransportContractAdd", e, data);
                that.addTransportContractEvent.stopWatching();
            } catch (e) {
            }
            that.addTransportContractEvent = null;
            that.watchAddTransportContractEvent(options);
        });
    }

    watchUpdateTransportContractEvent(options) {

        if (typeof this.updateTransportContractEvent === 'undefined' || !this.updateTransportContractEvent) {
            this.updateTransportContractEvent = this.contractManagerContract.onContractStatusUpdate(options);
        }

        let that = this;
        this.updateTransportContractEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onContractStatusUpdate", e, data);
                return;
            }
            try {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onContractStatusUpdate", e, data);
                that.updateTransportContractEvent.stopWatching();
            } catch (e) {
            }
            that.updateTransportContractEvent = null;
            that.watchUpdateTransportContractEvent(options);
        });
    }

    watchUpdateContractStatusEvent(options) {

        if (typeof this.updateStatusEvent === 'undefined' || !this.updateStatusEvent) {
            this.updateStatusEvent = this.contractManagerContract.onContractStatusUpdate(options);
        }
        let that = this;
        this.updateStatusEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onContractStatusUpdate", e, data);
                return;
            }
            try {
                if (data.args.to == options.address || data.args.from == options.address)
                    that.events.emit("onContractStatusUpdate", e, data);
                that.updateStatusEvent.stopWatching();
            } catch (e) {
            }
            that.updateStatusEvent = null;
            that.watchUpdateContractStatusEvent(options);
        });
    }

    addContract(consignee, jsonLd, options) {
        const promise = new Promise((resolve, reject)=> {
            const that = this;
            this.contractManagerContract.addContract.estimateGas(consignee, jsonLd, options, function(error, _gas){
                if (error) {
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if (options.privateKey){
                    let txData = that.contractManagerContract.addContract.getData(consignee, jsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                options.to = that.to;
                that.contractManagerContract.addContract(consignee, jsonLd, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    updateContract(transcontractId, jsonLd, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contractManagerContract.updateContract.estimateGas(transcontractId, jsonLd, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.contractManagerContract.updateContract.getData(transcontractId, jsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.contractManagerContract.updateContract(transcontractId, jsonLd, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })    
        });
        return promise;
    }

    acceptContract(transcontractId, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contractManagerContract.acceptContract.estimateGas(transcontractId, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*2.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.contractManagerContract.acceptContract.getData(transcontractId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.contractManagerContract.acceptContract(transcontractId, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })    
        });
        return promise;
    }

    rejectContract(transcontractId, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contractManagerContract.rejectContract.estimateGas(transcontractId, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.contractManagerContract.rejectContract.getData(transcontractId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.contractManagerContract.rejectContract(transcontractId, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })    
        });
        return promise;
    }

    addExtendedKnowledge(transcontractId, jsonLd, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.contractManagerContract.addExtendedKnowledge.estimateGas(transcontractId, jsonLd, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.contractManagerContract.addExtendedKnowledge.getData(transcontractId, jsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.contractManagerContract.addExtendedKnowledge(transcontractId, jsonLd, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })    
        });
        return promise;
    }

    getExtendedKnowledge(extendedKnowledgeId) {
        const promise = new Promise((resolve, reject)=>{
            this.contractManagerContract.getExtendedKnowledge(extendedKnowledgeId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getExtendedKnowledgeByTranscontractId(transcontractId) {
        const promise = new Promise((resolve, reject)=>{
            this.contractManagerContract.getExtendedKnowledgeByReceiptId(transcontractId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    // getTransContractByConsignee(consignee) {
    //     const promise = new Promise((resolve, reject)=>{
    //         this.contractManagerContract.getTransContractByConsignee(consignee, function(error, data){
    //             if(error){
    //                 return reject(error);
    //             }
    //             resolve(data)
    //         })
    //     });
    //     return promise;
    // }

    // getTransContractByConsignor(consignor) {
    //     const promise = new Promise((resolve, reject)=>{
    //         this.contractManagerContract.getTransContractByConsignor(consignor, function(error, data){
    //             if(error){
    //                 return reject(error);
    //             }
    //             resolve(data)
    //         })
    //     });
    //     return promise;
    // }

    getTransContractByOwner(userAddress) {
        const promise = new Promise((resolve, reject)=>{
            this.contractManagerContract.getTransContractByOwner(userAddress, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }
    

    getContract(transcontractId) {
        const promise = new Promise((resolve, reject)=>{
            this.contractManagerContract.getContract(transcontractId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransContractCountByStatus(status) {
        const promise = new Promise((resolve, reject)=>{
            this.contractManagerContract.getTransContractCountByStatus(status, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    registerOnTransportContractAdd(callback, options) {
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onTransportContractAdd", callback);
    }

    unRegisterOnTransportContractAdd(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onTransportContractAdd", callback);
    }
    
    registerOnTransportContractUpdate(callback, options) {
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onTransportContractUpdate", callback);
    }

    unRegisterOnTransportContractUpdate(callback) {
        if(!this.events){
           return;
        }
        this.events.removeListener("onTransportContractUpdate", callback);
    }

    registerOnContractStatusUpdate(callback, options) {
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onContractStatusUpdate", callback);
    }

    unRegisterOnContractStatusUpdate(callback) {
        if(!this.events){
           return;
        }
        this.events.removeListener("onContractStatusUpdate", callback);
    }

    registerOnAddExtendedKnowledge(callback, options) {
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onAddExtendedKnowledge", callback);
    }

    unRegisterOnAddExtendedKnowledge(callback) {
        if(!this.events){
           return;
        }
        this.events.removeListener("onAddExtendedKnowledge", callback);
    }

}

module.exports = ContractManager;