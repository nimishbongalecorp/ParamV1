const ParamUtils = require('../utils/index');

class TransportOrdersManager {

    constructor(_paramNetwork) {
        this.connection = _paramNetwork.getConnection();
        this.paramNetwork = _paramNetwork;
        const toManager = require('./dev/to-manager.json')
        this.toManagerContract = this.connection.eth.contract(toManager.abi);
        this.toManagerContract = this.toManagerContract.at(toManager.address);
        this.to = toManager.address;
    }

    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        this.watchAddTransportOrderEvent(options);
        this.watchAddAssignDriverEvent(options);
        this.watchAddELREvent(options);
        this.watchTripStartedEvent(options);
        this.watchTripEndEvent(options);
        this.watchePoDIssuedEvent(options);
        this.watcheInvoiceIssuedEvent(options);
    }

    watchAddTransportOrderEvent(options) {

        if (typeof this.addTransportOrderEvent === 'undefined' || !this.addTransportOrderEvent) {
            this.addTransportOrderEvent = this.toManagerContract.OnTransportOrderAdd(options);
        }

        let that = this;
        this.addTransportOrderEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address || data.args.from == options.address || data.args.transManager == options.address)
                    that.events.emit("OnTransportOrderAdd", e, data);
                return;
            }
            try {
                if (data.args.to == options.address || data.args.from == options.address || data.args.transManager == options.address)
                    that.events.emit("OnTransportOrderAdd", e, data);
                that.addTransportOrderEvent.stopWatching();
            } catch (e) {
            }
            that.addTransportOrderEvent = null;
            that.watchAddTransportOrderEvent(options);
        });
    }

    watchAddAssignDriverEvent(options) {

        if (typeof this.addAssignDriverEvent === 'undefined' || !this.addAssignDriverEvent) {
            this.addAssignDriverEvent = this.toManagerContract.OnAssignDriver(options);
        }

        let that = this;
        this.addAssignDriverEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnAssignDriver", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnAssignDriver", e, data);
                that.addAssignDriverEvent.stopWatching();
            } catch (e) {
            }
            that.addAssignDriverEvent = null;
            that.watchAddAssignDriverEvent(options);
        });
    }

    watchAddELREvent(options) {

        if (typeof this.addELREvent === 'undefined' || !this.addELREvent) {
            this.addELREvent = this.toManagerContract.OnELRAdd(options);
        }

        let that = this;
        this.addELREvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnELRAdd", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnELRAdd", e, data);
                that.addELREvent.stopWatching();
            } catch (e) {
            }
            that.addELREvent = null;
            that.watchAddELREvent(options);
        });
    }

    watchTripStartedEvent(options) {

        if (typeof this.tripStartedEvent === 'undefined' || !this.tripStartedEvent) {
            this.tripStartedEvent = this.toManagerContract.OnTripStarted(options);
        }

        let that = this;
        this.tripStartedEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnTripStarted", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnTripStarted", e, data);
                that.tripStartedEvent.stopWatching();
            } catch (e) {
            }
            that.tripStartedEvent = null;
            that.watchTripStartedEvent(options);
        });
    }

    watchTripEndEvent(options) {

        if (typeof this.tripEndEvent === 'undefined' || !this.tripEndEvent) {
            this.tripEndEvent = this.toManagerContract.OnTripEnd(options);
        }

        let that = this;
        this.tripEndEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnTripEnd", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnTripEnd", e, data);
                that.tripEndEvent.stopWatching();
            } catch (e) {
            }
            that.tripEndEvent = null;
            that.watchTripEndEvent(options);
        });
    }

    watchePoDIssuedEvent(options) {

        if (typeof this.ePoDIssuedEvent === 'undefined' || !this.ePoDIssuedEvent) {
            this.ePoDIssuedEvent = this.toManagerContract.OnePoDIssued(options);
        }

        let that = this;
        this.ePoDIssuedEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnePoDIssued", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnePoDIssued", e, data);
                that.ePoDIssuedEvent.stopWatching();
            } catch (e) {
            }
            that.ePoDIssuedEvent = null;
            that.watchePoDIssuedEvent(options);
        });
    }

    watcheInvoiceIssuedEvent(options) {

        if (typeof this.invoiceIssuedEvent === 'undefined' || !this.invoiceIssuedEvent) {
            this.invoiceIssuedEvent = this.toManagerContract.OnInvoicedIssued(options);
        }

        let that = this;
        this.invoiceIssuedEvent.watch((e, data) => {
            if (!e) {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnInvoicedIssued", e, data);
                return;
            }
            try {
                if (data.args.to == options.address
                    || data.args.from == options.address
                    || data.args.driverAddress == options.address
                    || data.args.transportManagerAddress == options.address)
                    that.events.emit("OnInvoicedIssued", e, data);
                that.invoiceIssuedEvent.stopWatching();
            } catch (e) {
            }
            that.invoiceIssuedEvent = null;
            that.watcheInvoiceIssuedEvent(options);
        });
    }

    setContractAddress(_contactAddress, _paramContract, options) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.setContractAddress(_contactAddress, _paramContract, options, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }
    getPoFromTransactionHash(poTransactionHash) {
        return new Promise((resolve, reject) => {
            this.connection.eth.getTransactionReceipt(poTransactionHash, function (error, receipt) {
                if (error) {
                    reject(error);
                }
                return resolve(receipt.log[0].topics[1]);
            })
        })
    }
    createTransOrders(transcontractId, to, transportManagerAddress, poTransactionHash, options) {

        return this.getPoFromTransactionHash(poTransactionHash).then(po => {
            const that = this;
            this.toManagerContract.createTransOrders.estimateGas(transcontractId, to, transportManagerAddress, po, options, function (error, _gas) {
                if (error) {
                    return Promise.reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.toManagerContract.createTransOrders.getData(transcontractId, to, transportManagerAddress, po);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        Promise.resolve(data)
                    }).catch(error => {
                        Promise.reject(error)
                    })
                    return;
                }
                options.to = that.to;
                this.toManagerContract.createTransOrders(transcontractId, to, transportManagerAddress, po, options, function (error, data) {
                    if (error) {
                        Promise.reject(error);
                        return;
                    }
                    Promise.resolve(data)
                })
            })
        });
    }

    assignDriver(transportOrderId, driverAddress, vechicleInfo, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.assignDriver.estimateGas(transportOrderId, driverAddress, vechicleInfo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.assignDriver.getData(transportOrderId, driverAddress, vechicleInfo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.assignDriver(transportOrderId, driverAddress, vechicleInfo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    createLReceipt(transportOrderId, jsonLd, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.createLReceipt.estimateGas(transportOrderId, jsonLd, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 2.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.createLReceipt.getData(transportOrderId, jsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.createLReceipt(transportOrderId, jsonLd, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    startTripForPO(po, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.startTripForPO.estimateGas(po, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.startTripForPO.getData(po);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.startTripForPO(po, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    startTripForTO(transportOrderId, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.startTripForTO.estimateGas(transportOrderId, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.startTripForTO.getData(transportOrderId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.startTripForTO(transportOrderId, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    startTripForELR(elReceiptNo, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.startTripForELR.estimateGas(elReceiptNo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.startTripForELR.getData(elReceiptNo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.startTripForELR(elReceiptNo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    endTripForPO(po, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.endTripForPO.estimateGas(po, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.endTripForPO.getData(po);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.endTripForPO(po, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    endTripForTO(transportOrderId, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.endTripForTO.estimateGas(transportOrderId, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.endTripForTO.getData(transportOrderId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.endTripForTO(transportOrderId, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    endTripForELR(elReceiptNo, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.endTripForELR.estimateGas(elReceiptNo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.endTripForELR.getData(elReceiptNo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.endTripForELR(elReceiptNo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    ePoDForeTO(transportOrderId, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.ePoDForeTO.estimateGas(transportOrderId, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.ePoDForeTO.getData(transportOrderId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.ePoDForeTO(transportOrderId, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    ePoDForeLR(elReceiptNo, saleReviewsJsonLd,options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            console.log("submitTransaction tomanager params"+JSON.stringify(options)+" elrNo "+elReceiptNo)                                                        
            this.toManagerContract.ePoDForeLR.estimateGas(elReceiptNo,saleReviewsJsonLd, options, function (error, _gas) {
                if (error) {
                    console.log("submitTransaction tomanager error gas"+JSON.stringify(error))                                            
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.ePoDForeLR.getData(elReceiptNo,saleReviewsJsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        console.log("submitTransaction tomanager error"+JSON.stringify(data))                        
                        resolve(data)
                    }).catch(error => {
                        console.log("submitTransaction tomanager error"+JSON.stringify(error))                        
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.ePoDForeLR(elReceiptNo, saleReviewsJsonLd,options, function (error, data) {
                    if (error) {
                        console.log("ePoDForeLR tomanager error"+JSON.stringify(error))
                        
                        return reject(error);
                    }
                    console.log("ePoDForeLR tomanager "+JSON.stringify(data))
                    resolve(data)
                })
            })
        });
        return promise;
    }

    sendInvoiceForPO(po, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.sendInvoiceForPO.estimateGas(po, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.sendInvoiceForPO.getData(po);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.sendInvoiceForPO(po, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    sendInvoiceForTO(transportOrderId, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.sendInvoiceForTO.estimateGas(transportOrderId, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
    
                if (options.privateKey) {
                    let txData = that.toManagerContract.sendInvoiceForTO.getData(transportOrderId);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.sendInvoiceForTO(transportOrderId, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    sendInvoiceForeLR(elReceiptNo, options) {

        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.toManagerContract.sendInvoiceForeLR.estimateGas(elReceiptNo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;

                if (options.privateKey) {
                    let txData = that.toManagerContract.sendInvoiceForeLR.getData(elReceiptNo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }

                that.toManagerContract.sendInvoiceForeLR(elReceiptNo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    getTransOrderByConsignee(consignee) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getTransOrderByConsignee(consignee, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransOrderByConsignor(consignor) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getTransOrderByConsignor(consignor, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransOrderByDriver(driver) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getTransOrderByDriver(driver, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransOrder(transportOrderId) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getTransOrder(transportOrderId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getLReceipt(elReceiptNo) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getLReceipt(elReceiptNo, function (error, data) {
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
            this.toManagerContract.getTransaction(txId, function (error, data) {
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
            this.toManagerContract.getTransactionsByTO(toId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getTransOrderByTransManager(managerAddress) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getTransOrderByTransManager(managerAddress, function (error, data) {
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
            this.toManagerContract.getTransactionsByeLR(elrId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getReviewsByeLR(elrId) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getReviewsByeLR(elrId, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getSummaryForeLR(elrNo) {
        const promise = new Promise((resolve, reject) => {
            this.toManagerContract.getSummaryForeLR(elrNo, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    /** addExtendedKnowledge(transcontractId, jsonLd, options) {

        const promise = new Promise((resolve, reject)=>{
            const that = this;
            this.toManagerContract.addExtendedKnowledge.estimateGas(transcontractId, jsonLd, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;

                if(options.privateKey){
                    let txData = that.toManagerContract.addExtendedKnowledge.getData(transcontractId, jsonLd);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error=>{
                        reject(error)
                    })
                    return;
                }
       
                that.toManagerContract.addExtendedKnowledge(transcontractId, jsonLd, options, function(error, data){
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
            this.toManagerContract.getExtendedKnowledge(extendedKnowledgeId, function(error, data){
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
            this.toManagerContract.getExtendedKnowledgeByReceiptId(transcontractId, function(error, data){
                if(error){
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }  */

    registerOnTransportOrderAdd(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnTransportOrderAdd", callback);
    }

    unRegisterOnTransportOrderAdd(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnTransportOrderAdd", callback);
    }

    registerOnAssignDriver(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnAssignDriver", callback);
    }

    unRegisterOnAssignDriver(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnAssignDriver", callback);
    }

    registerOnELRAdd(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnELRAdd", callback);
    }

    unRegisterOnContractStatusUpdate(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onContractStatusUpdate", callback);
    }

    registerOnTripStarted(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnTripStarted", callback);
    }

    unRegisterOnTripStarted(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnTripStarted", callback);
    }

    registerOnTripEnd(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnTripEnd", callback);
    }

    unRegisterOnTripEnd(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnTripEnd", callback);
    }

    registerOnePoDIssued(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnePoDIssued", callback);
    }

    unRegisterOnePoDIssued(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnePoDIssued", callback);
    }

    registerOnInvoicedIssued(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("OnInvoicedIssued", callback);
    }

    unRegisterOnInvoicedIssued(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("OnInvoicedIssued", callback);
    }

}

module.exports = TransportOrdersManager;