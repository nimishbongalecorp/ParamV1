import ParamConnector from '../param-connector/index';
import WalletUtils from './WalletUtils';

export function registerAsAdmin(jsonld, privateFor) {
    // debugger;
    return ParamConnector.getInstance().getNetwork().teamManager.registerAdmin(jsonld, privateFor)
        .then(data => {
            // alert("ADMIN " + JSON.stringify(data))
            return data;
        }).catch(err => {
            // alert("ERROR: " + JSON.stringify(err))
            return err;
        })
}

//fetching Contract from Id
export function fetchTruckLoadDetils(contractId) {
    return ParamConnector.getInstance().getNetwork().contractManager.getContract(contractI)
        .then(data => {
            return data;
        }).catch(err => {
            return err;
        })
}


//fetching e-Lr's from ID
export async function fetchLRFromId(LrID) {

    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().toManager.getLReceipt(LrID, admin_address)
            .then(data => {
                //console.log("LR'S "+JSON.stringify(data))    
                resolve(data)
            }).catch(err => {
                //console.log("getAllTOs error  "+err)

                reject(err);
            })
    })
}

//fetch ALL employes
export async function getAllEmployees() {
    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().teamManager.getAllEmployees(admin_address).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}

//fetch employee from Id
export function getEmployee(employeeId) {
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().teamManager.getEmployeeByContact(employeeId).
            then(data => {
                //console.log("EMPLOYEES BY ID" + JSON.stringify(data))            
                resolve(data)
            }).catch(err => {
                alert(JSON.stringify(err))
                reject(err);
            })
    })
}


// //fetch ALL TO'S
export async function getAllTOs() {
    let admin_address = '0x24b4e650cb8a88d901a1dd81bcdfac9695693ea2'
    console.log("ADDRESSSSSSSSSS " + admin_address)
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().toManager.getTransOrderByTransManager(admin_address).
            then(data => {
                console.log("TO'S " + JSON.stringify(data))
                resolve(data)
            }).catch(err => {
                console.log("getAllTOs error  " + err)

                reject(err);
            })
    })
}


// //fetch TO FROM ID
export async function getTOFromId(toID) {
    let admin_address = await WalletUtils.getParamId();
    //toID = TO_ID;
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().toManager.getTransOrder(toID, admin_address).
            then(data => {
                //console.log("TO FRM ID " + JSON.stringify(data))
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}

//fetch ALL Contracts 
export async function getContract() {
    // adminAddress = admin_address;
    // debugger;
    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().contractManager.getTransContractByOwner(admin_address).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}

// //fetch ALL Contracts 
export async function getContractFromId(contractId) {
    // adminAddress = admin_address;
    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().contractManager.getContract(contractId, admin_address).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}


//fetch ALL LR'S 
export async function getAllLRs(contractId) {
    //adminAddress = admin_address;
    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().contractManager.getContract(contractId, admin_address).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}


//Fetch ALL Contacts
export async function getAllContacts() {
    let admin_address = await WalletUtils.getParamId();
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().contactManager.getAllContacts(admin_address).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}

//Fetch Contacts from ID
export function getContactFromId(contactId) {
    // debugger;
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().contactManager.getContact(contactId).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}

export function isUserAdmin(paramId) {
    return new Promise((resolve, reject) => {
        ParamConnector.getInstance().getNetwork().teamManager.isAdmin(paramId).
            then(data => {
                resolve(data)
            }).catch(err => {
                reject(err);
            })
    })
}
