const ParamUtils = require('../utils/index');
/**
 * CatalogueManager is an implementation of decentralized catalogue storage, using this class user can able to save catalogue into ParamNetwork. 
 */
class CatalogueManager {

    /**
     * Default constructor for initialising or establishing the catalogues.
     * @param {ParamNetwork} paramNetwork Object
     * 
     */
    constructor(_paramNetwork){
        this.connection = _paramNetwork.getConnection();
        // const catManager = require(`./${_paramNetwork.config.environment}/catalogue-manager.json`)
        const catManager = require(`./dev/catalogue-manager.json`)
        this.catalogueManagerContract = this.connection.eth.contract(catManager.abi);
        this.catalogueManagerContract = this.catalogueManagerContract.at(catManager.address);
        this.to = catManager.address;
    }

    /**
     * initEvents is a event listener used for listening to the real time changes whenever a catalogue is added or updated.
     * @param {JSON} options - {"address":"0x"}
     * @example 
     * Usage:
     *  catalogueManager
     *   .initEvents({address:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   }) 
     */

    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        if (options) {
            options = { owner: options.address };
        }

        this.watchAddCatalogueEvents(options);
        this.watchUpdateCatalogueEvent(options);
    }

    watchAddCatalogueEvents(options) {

        if (typeof this.catalogueAddContractEvent === 'undefined' || !this.catalogueAddContractEvent) {
            this.catalogueAddContractEvent = this.catalogueManagerContract.onCatalogueAdd(options);
        }

        let that = this;
        this.catalogueAddContractEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onCatalogueAdd", e, data);
                return;
            }
            try {
                that.events.emit("onCatalogueAdd", e, data);
                that.catalogueAddContractEvent.stopWatching();
            } catch (e) {
            }
            that.catalogueAddContractEvent = null;
            that.watchAddCatalogueEvents(options);
        });

    }

    watchUpdateCatalogueEvent(options) {
        if (typeof this.catalogueUpdateEvent === 'undefined' || !this.catalogueUpdateEvent) {
            this.catalogueUpdateEvent = this.catalogueManagerContract.onCatalogueUpdate(options);
        }
        let that = this;
        this.catalogueUpdateEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onCatalogueUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onCatalogueUpdate", e, data);
                that.catalogueUpdateEvent.stopWatching();
            } catch (e) {
            }
            that.catalogueUpdateEvent = null;
            that.watchUpdateCatalogueEvent(options);
        });
    }

    /** 
     * addCatalogue method is used for adding new catalogue to the network.
     * @param {string} info VCard or JSONLd contact
     * @param {JSON} options - {from:"0x"}
     * @example 
     * Usage:
     *  catalogueManager
     *   .addCatalogue( '<VCard or JSONLd>', {from:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   }) 
     */
    addCatalogue(info, type, options){
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.catalogueManagerContract.addCatalogue.estimateGas(info, type, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                options.to = that.to;
                if(options.privateKey){
                    let txData = that.catalogueManagerContract.addCatalogue.getData(info, type);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.catalogueManagerContract.addCatalogue(info, type, options, function(error, data){
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
     * updateCatalogue method is used for updating the existing catalogue .
     * @param {Number} id - catalogueId
     * @param {string} info VCard or JSONLd contact
     * @param {JSON} options - {from:"0x"}
     * @returns {Promise}
     * @example
     * Usage:
     *  catalogueManager
     *   .updateCatalogue(<CATALOGUE_ID>, '<VCard or JSONLd>', {from:'0x'})
     *   .then((result)=>{
     *       //TODO 
     *   }) 
     */

    updateCatalogue(id, info, type, options){
        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.catalogueManagerContract.updateCatalogue.estimateGas(id, info, type, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                if(options.privateKey){
                    let txData = that.catalogueManagerContract.updateCatalogue.getData(id, info, type);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
                that.catalogueManagerContract.updateCatalogue(id, info, type, options, function(error, data){
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
     * getAllCatalogues method is used for fetching all the catalogues available in the network.
     * @param {address} owner - catalogue owner paramId - '0x'
     * @returns {Promise}
     * @example 
     *  Usage:
     *  catalogueManager
     *   .getAllCatalogues("0x")
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    getAllCatalogues(owner) {
        const promise = new Promise((resolve, reject)=>{
            this.catalogueManagerContract.getAllCatalogues(owner, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getTotalCatalogues method is used for getting the total number of catalogues. 
     * @param {address} owner - catalogue owner paramId - '0x'
     * @returns {Promise}
     * @example 
     *  Usage:
     *  catalogueManager
     *   .getTotalCatalogues("0x")
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    getTotalCatalogues(owner) {
        const promise = new Promise((resolve, reject)=>{
            this.catalogueManagerContract.getTotalCatalogues(owner, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * getCatalogue method is used for getting desired catalogue from the network via index.
     * @param {Number} index Catalogue index 
     * @returns {Promise}
     * @example 
     *  Usage:
     *  catalogueManager
     *   .getCatalogue(<CATALOGUE_INDEX>)
     *   .then((result)=>{
     *       //TODO 
     *   })
     */
    getCatalogue(index) {
        const promise = new Promise((resolve, reject)=>{
            this.catalogueManagerContract.getCatalogue(index, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /**
     * registerOnCatalogueAdded is used for adding a listener whenever a catalogue is added.
     * @param {function} callback - (error, result)=>{}
     * @param {JSON} options - {address:'0x'}
     * @example
     * Usage:
     *  const callback = (error, data)=>{
     *      //TODO
     *  }
     *  catalogueManager
     *   .registerOnCatalogueAdded(callback)

     */
    registerOnCatalogueAdded(callback, options){
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onCatalogueAdd", callback);
    }

    /**
     * unRegisterOnCatalogueAdded is used for removing the listener that has been added for OnCatalogueAdded event.
     * @param {function} callback - registered callback
     * @example
     * Usage:
     *  catalogueManager
     *   .unRegisterOnCatalogueAdded(callback)
     *   
     */
    unRegisterOnCatalogueAdded(callback){
        if(!this.events){
            return;
        }
        this.events.removeListener("onCatalogueAdd", callback);
    }
    
    /**
     * registerOnCatalogueUpdated is used for adding a listener whenever a catalogue is updated.
     * @param {function} callback (error, result)=>{}
     * @param {JSON} options - {address:'0x'}
     * @example 
     * Usage:
     *  const callback = (error, data)=>{
     *      //TODO
     *  }
     *  catalogueManager
     *   .registerOnCatalogueUpdated(callback)
     * 
     */
    registerOnCatalogueUpdated(callback, options){
        if(!this.events){
            this.initEvents(options)
        }
        this.events.addListener("onCatalogueUpdate", callback);
    }

    /**
     * unRegisterOnCatalogueUpdated is used for removing the listener that has been added for OnCatalogueUpdate event.
     * @param {function} callback - registered callback
     * @example 
     * Usage:
     *  catalogueManager
     *   .unRegisterOnCatalogueUpdated(callback)
     */
    unRegisterOnCatalogueUpdated(callback){
        if(!this.events){
           return;
        }
        this.events.removeListener("onCatalogueUpdate", callback);
    }

  
}
module.exports = CatalogueManager;