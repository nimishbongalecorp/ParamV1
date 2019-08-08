const ParamUtils = require('../utils/index');

class UserStore {

    constructor(_paramNetwork) {
        this.connection = _paramNetwork.getConnection();
        this.paramNetwork = _paramNetwork;
        const userManager = require('./user-store.json')
        this.userManagerContract = this.connection.eth.contract(userManager.abi);
        this.userManagerContract = this.userManagerContract.at(userManager.address);
        this.to = userManager.address;
    }

    /** initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        // if(options){
        //     options = {owner:options.address};
        // }

        this.userManagerContract.onDataAdded((e, data) => {
            if (e) {
                return;
            }
            this.events.emit("onDataAdded", e, data);
        });

        this.userManagerContract.onDataUpdate((e, data) => {
            if (e) {
                return;
            }
            this.events.emit("onDataUpdate", e, data);
        });
    } */

    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        this.watchAddDataEvent(options);
        this.watchUpdateDataEvent(options);
    }

    watchAddDataEvent(options) {

        if (typeof this.addDataEvent === 'undefined' || !this.addDataEvent) {
            this.addDataEvent = this.userManagerContract.onDataAdded(options);
        }
        
        let that = this;
        this.addDataEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onDataAdded", e, data);
                return;
            }
            try {
                that.events.emit("onDataAdded", e, data);
                that.addDataEvent.stopWatching();
            } catch (e) {
            }
            that.addDataEvent = null;
            that.watchAddDataEvent(options);
        });
    }

    watchUpdateDataEvent(options) {

        if (typeof this.updateDataEvent === 'undefined' || !this.updateDataEvent) {
            this.updateDataEvent = this.userManagerContract.onDataUpdate(options);
        }
        let that = this;
        this.updateDataEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onDataUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onDataUpdate", e, data);
                that.updateDataEvent.stopWatching();
            } catch (e) {
            }
            that.updateDataEvent = null;
            that.watchUpdateDataEvent(options);
        });
    }

    addData(info, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.userManagerContract.addData.estimateGas(info, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.userManagerContract.addData.getData(info);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.userManagerContract.addData(info, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    editData(dataId, info, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.userManagerContract.editData.estimateGas(dataId, info, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.userManagerContract.editData.getData(dataId, info);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.userManagerContract.editData(dataId, info, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    getDataIds(userAddress) {
        const promise = new Promise((resolve, reject) => {
            this.userManagerContract.getDataIds(userAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getData(dataId) {
        const promise = new Promise((resolve, reject) => {
            this.userManagerContract.getData(dataId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransaction(txId) {
        const promise = new Promise((resolve, reject) => {
            this.userManagerContract.getTransaction(txId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransactionsByTO(toId) {
        const promise = new Promise((resolve, reject) => {
            this.userManagerContract.getTransactionsByTO(toId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransactionsByeLR(elrId) {
        const promise = new Promise((resolve, reject) => {
            this.userManagerContract.getTransactionsByeLR(elrId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    registeronDataAdded(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("onDataAdded", callback);
    }

    unRegisteronDataAdded(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onDataAdded", callback);
    }

    registeronDataUpdate(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("onDataUpdate", callback);
    }

    unRegisteronDataUpdate(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onDataUpdate", callback);
    }

}

module.exports = UserStore;