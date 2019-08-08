// import TMSAPI from './tms-api/index';

/**
 * ParamNetwork is a root class from using this class reference you can invoke contact manager, catalogue manager and param receipt.
 * Objects can accessable:
 * catalogueManager, paramReceiptManager
 * 
 * @example
 * let paramNetwork = new ParamNetwork({url:"http://localhost:8545"})
 */
class ParamNetwork {

    /**
     * Using catalogueManager, we can able to perform catalogue related operations.
     * @memberof ParamNetwork.prototype
     * @member {CatalogueManager} catalogueManager
     * @example 
     * Usage
     *  paramNetwork.catalogueManager.addCatalogue(<OPTIONS>)
     */

    /**
     * Using paramReceiptManager, we can able to create or modify receipt. Able to get the details about receipts.
     * @memberof ParamNetwork.prototype
     * @member {ParamReceipt}  paramReceiptManager
     */


    /**
     * Default constructor for setting config like url.
     *  
     * @param {JSON} _config - {"url":"", modules:['contact','catalog']}
     */
    constructor(_config){
        // if(_config)
        this.setConfig(_config);
    }
    /**
     * Using this method you can set config.
     * 
     * @param {JSON} config - {"url":"", modules:['contact','catalog']}
     * @example
     * let paramNetwork = new ParamNetwork();
     * paramNetwork.setConfig({url:"http://localhost:8545"})
     */
    setConfig(config) {
        if(!config) {
            return;
        }

        // let Web3 = require('web3');
        // const currentProvider = new Web3.providers.HttpProvider(config.url);
        // this.web3 = new Web3(currentProvider);
        let Web3 = require('web3');
        let currentProvider;
        if(config.enableCors) {
            let HttpHeaderProvider = require('httpheaderprovider');
            const CORS_HEADERS = {
                'Access-Control-Allow-Origin': '*'
            }
            currentProvider = new HttpHeaderProvider(config.url, CORS_HEADERS);
        } else {
            currentProvider = new Web3.providers.HttpProvider(config.url);
        }
 
        this.web3 = new Web3(currentProvider);
        this.config = config;
        const TMSAPI = require('./tms-api/index');
        const ContactManager = require('./tms-api/contact-manager');
        const CatalogueManager = require('./catalogue-manager/index');
        const ParamReceipt =  require('./param-receipt/index');
        const ParamSubscriber =  require('./param-subscriber/index');

        const TOContract = require('./to-manager/index');
        const ParamContact = require('./contact-manager/index');
        const ParamContract = require('./transport-contract-manager/index');
        const ParamTeam = require('./transport-team-manager/index');        
        
        this.contactManager = new ContactManager(this);
        this.catalogueManager = new CatalogueManager(this);
        this.paramReceiptManager = new ParamReceipt(this);
        this.paramSubscriberManager = new ParamSubscriber(this);

        let tmsAPI = new TMSAPI(this);
        this.toManager  = tmsAPI.toManager;
        this.teamManager  = tmsAPI.teamManager;
        this.contractManager  = tmsAPI.contractManager;
        
        this.toManagerContract  = new TOContract(this);
        this.contactManagerContract  = new ParamContact(this);
        this.contractManagerContract  = new ParamContract(this);
        this.teamManagerContract  = new ParamTeam(this);        
    }

    /**
     * Using this method you can set config.
     * 
     * @deprecated
     * @example
     * let paramNetwork = new ParamNetwork();
     * paramNetwork.getConfig()
     */
    getConfig(){
       return this.web3;
    }

    /**
     * Using this method you get param access object.
     * 
     * @example
     * let paramNetwork = new ParamNetwork();
     * paramNetwork.getConnection()
     */
    getConnection(){
        return this.web3;
    }
}

module.exports = ParamNetwork;
// export default ParamNetwork;