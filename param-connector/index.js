import ParamNetwork from '../param-network/index'
import WalletUtils from '../utils/WalletUtils'

const _paramConfig = require('../param-network/config.json');
var configUrl = _paramConfig.privateNodes;
const config = require('../config.json');
class ParamConnector {
    constructor() {
        if (ParamConnector.instance) {
            throw new Error("You can't create object. Use ParamConnector.getInstance()");
        }
        this.isConnected = navigator.onLine;
    }
    static getInstance() {
        if (!ParamConnector.instance) {
            ParamConnector.instance = new ParamConnector();
            let url = configUrl[2].rpcURL;
            ParamConnector.paramNetwork = new ParamNetwork({
                url: url,
                enableCors: true,
                environment: ParamConnector.instance.getEnvironment()
            });
            //let address = "0x498a9b314e54d22da74e815136a6164e27651d79";
            WalletUtils.getParamId().then((address) => {
                ParamConnector.paramNetwork.contactManager.initEvents({ address: address });

                ParamConnector.paramNetwork.catalogueManager.initEvents({ address: address })

                ParamConnector.paramNetwork.paramReceiptManager.initEvents({ address: address })

                ParamConnector.paramNetwork.paramSubscriberManager.initEvents({ address: address })

                ParamConnector.paramNetwork.toManager.initEvents({
                    address: address
                })

                ParamConnector.paramNetwork.teamManagerContract.initEvents({
                    address: address
                })

                ParamConnector.paramNetwork.contractManagerContract.initEvents({
                    address: address
                })

                ParamConnector.instance.registerCallbacks();
            })
        }
        return ParamConnector.instance;
    }

    getEnvironment() {
        return config.environment
    }

    resetConnection() {
        ParamConnector.paramNetwork.web3.reset();
        ParamConnector.paramNetwork.web3 = undefined;
        ParamConnector.paramNetwork = undefined;
        ParamConnector.instance.unRegisterCallbacks();
        ParamConnector.instance = null;
        return ParamConnector.getInstance();
    }

    getConnection() {
        return ParamConnector.paramNetwork.getConnection();
    }
    getNetwork() {
        return ParamConnector.paramNetwork;
    }
    getGraphDB() {
        return this.graphDB;
    }
    setNetworkCallback(callback) {
        this.callback = callback;
        this._checkNetworkStatus();
    }

    _checkNetworkStatus() {
        ParamConnector.instance.isConnected = navigator.onLine;
        if (ParamConnector.instance && ParamConnector.instance.callback) {
            ParamConnector.instance.callback(ParamConnector.instance.isConnected);
        }
    }

    registerCallbacks() {
        window.addEventListener('online', this._checkNetworkStatus);
        window.addEventListener('offline', this._checkNetworkStatus);
    }

    unRegisterCallbacks() {
        window.removeEventListener('online', this._checkNetworkStatus);
        window.removeEventListener('offline', this._checkNetworkStatus);
    }

    isNetworkConnected() {
        return this.isConnected;
    }
}

export default ParamConnector;