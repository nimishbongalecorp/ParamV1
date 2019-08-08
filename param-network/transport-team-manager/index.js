const ParamUtils = require('../utils/index');

class TransportTeamManager {
    
    constructor (_paramNetwork) {
        this.connection = _paramNetwork.getConnection();
        const transContManager = require('./dev/transport-team-manager.json')
        this.transportContactManagerContract = this.connection.eth.contract(transContManager.abi);
        this.transportContactManagerContract = this.transportContactManagerContract.at(transContManager.address);
        this.to = transContManager.address;
    }

    initEvents(options) {
        let events = require('events');
        this.events = new events.EventEmitter();

        if (options) {
            options = { owner: options.address };
        }
        this.watchAddAdminEvent(options);
        this.watchAddEmployeeEvent(options);
        this.watchUpdateEmployeeEvent(options);
    }

    watchAddAdminEvent(options) {

        if (typeof this.addAdminEvent === 'undefined' || !this.addAdminEvent) {
            this.addAdminEvent = this.transportContactManagerContract.onAdminAdd(options);
        }

        let that = this;
        this.addAdminEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onAdminAdd", e, data);
                return;
            }
            try {
                that.events.emit("onAdminAdd", e, data);
                that.addAdminEvent.stopWatching();
            } catch (e) {
            }
            that.addAdminEvent = null;
            that.watchAddAdminEvent(options);
        });
    }

    watchAddEmployeeEvent(options) {
        if (typeof this.addEmployeeEvent === 'undefined' || !this.addEmployeeEvent) {
            this.addEmployeeEvent = this.transportContactManagerContract.onEmployeeAdd(options);
        }
        let that = this;
        this.addEmployeeEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onEmployeeAdd", e, data);
                return;
            }
            try {
                that.events.emit("onEmployeeAdd", e, data);
                that.addEmployeeEvent.stopWatching();
            } catch (e) {
            }
            that.addEmployeeEvent = null;
            that.watchAddEmployeeEvent(options);
        });
    }

    watchUpdateEmployeeEvent(options) {
        if (typeof this.updateEmployeeEvent === 'undefined' || !this.updateEmployeeEvent) {
            this.updateEmployeeEvent = this.transportContactManagerContract.onEmployeeUpdate(options);
        }
        let that = this;
        this.updateEmployeeEvent.watch((e, data) => {
            if (!e) {
                that.events.emit("onEmployeeUpdate", e, data);
                return;
            }
            try {
                that.events.emit("onEmployeeUpdate", e, data);
                that.updateEmployeeEvent.stopWatching();
            } catch (e) {
            }
            that.updateEmployeeEvent = null;
            that.watchUpdateEmployeeEvent(options);
        });
    }

    registerAdmin(info, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.registerAdmin.estimateGas(info, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.registerAdmin.getData(info);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                options.to = that.to;
                that.transportContactManagerContract.registerAdmin(info, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }
    
    addEmployee(empAddress, empInfo, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.addEmployee.estimateGas(empAddress, empInfo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.addEmployee.getData(empAddress, empInfo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                options.to = that.to;
                that.transportContactManagerContract.addEmployee(empAddress, empInfo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }
    
    getAdminInfo(adminAddress) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.getAdminInfo(adminAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })

        })
        return promise;
    }

    updateEmployee(empAddress, empInfo, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.updateEmployee.estimateGas(empAddress, empInfo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.updateEmployee.getData(empAddress, empInfo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                that.transportContactManagerContract.updateEmployee(empAddress, empInfo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }    

    deleteEmployee(empAddress, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.deleteEmployee.estimateGas(empAddress, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.deleteEmployee.getData(empAddress);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                that.transportContactManagerContract.deleteEmployee(empAddress, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }

    getAllEmployees(adminAddress) {
        const promise = new Promise((resolve, reject) => {
            this.transportContactManagerContract.getAllEmployees(adminAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    updateEmployee(empInfo, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.updateEmployee.estimateGas(empInfo, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.updateEmployee.getData(empInfo);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                that.transportContactManagerContract.updateEmployee(empInfo, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }  

    isExists(empAddress, adminAddress, options) {
        const promise = new Promise((resolve, reject) => {
            const that = this;
            this.transportContactManagerContract.isExists.estimateGas(empAddress, adminAddress, options, function (error, _gas) {
                if (error) {
                    return reject(error);
                }
                _gas = parseInt(_gas * 1.3);
                options.gas = _gas;
                if (options.privateKey) {
                    let txData = that.transportContactManagerContract.isExists.getData(empAddress, adminAddress);
                    ParamUtils.submitTransaction(that.connection, txData, options).then((data) => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                    return;
                }
                that.transportContactManagerContract.isExists(empAddress, adminAddress, options, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    } 

    getInfo(empAddress) {
        const promise = new Promise((resolve, reject) => {
            this.transportContactManagerContract.getInfo(empAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    getEmployee(empAddress) {
        const promise = new Promise((resolve, reject) => {
            this.transportContactManagerContract.getEmployee(empAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    isAdmin(empAddress) {
        const promise = new Promise((resolve, reject) => {
            this.transportContactManagerContract.isAdmin(empAddress, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data)
            })
        });
        return promise;
    }

    registerOnAdminAdd(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("onAdminAdd", callback);
    }

    unRegisterOnAdminAdd(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onAdminAdd", callback);
    }

    registerOnEmployeeAdd(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("onEmployeeAdd", callback);
    }

    unRegisterOnEmployeeAdd(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onEmployeeAdd", callback);
    }

    registerOnEmployeeUpdate(callback, options) {
        if (!this.events) {
            this.initEvents(options)
        }
        this.events.addListener("onEmployeeUpdate", callback);
    }

    unRegisterOnEmployeeUpdate(callback) {
        if (!this.events) {
            return;
        }
        this.events.removeListener("onEmployeeUpdate", callback);
    }
}
module.exports = TransportTeamManager;