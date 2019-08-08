import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Thumbnail } from 'native-base';

import IconContracts from 'react-native-vector-icons/Ionicons';
// import IconOrders from 'react-native-vector-icons/MaterialCommunityIcons';
import IconInvoices from 'react-native-vector-icons/AntDesign';
// import IconTeam from 'react-native-vector-icons/Octicons';
// import Icon_e_LR from 'react-native-vector-icons/AntDesign';
// import IconCustomers from 'react-native-vector-icons/Ionicons';
import Icon_Create_Contracts from 'react-native-vector-icons/MaterialIcons';
import IconCreate_Contacts from 'react-native-vector-icons/AntDesign';

import IconLogistics from 'react-native-vector-icons/FontAwesome5';//luggage-cart
import IconWeight from 'react-native-vector-icons/FontAwesome';//balance-scale
import IconTruck from 'react-native-vector-icons/FontAwesome';//truck
import IconPalettes from 'react-native-vector-icons/AntDesign';//CodeSandbox
import IconType from 'react-native-vector-icons/FontAwesome5';//circle


export function getHamburgerMenuIcon(title) {
    switch (title) {
        case "Contracts":
            // case "Create LR":
            // case "Confirm Delivery":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.CONTRACTS}
                    resizeMode="contain"
                />
            )

        case "Transportation Orders":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.TRANSPORT_ORDERS}
                    resizeMode="contain"
                />
            )
        case "Invoices":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.INVOICE}
                    resizeMode="contain"
                />
            )
        case "Team":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.TEAM}
                    resizeMode="contain"
                />
            )
        case "e-LR":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.E_LR}
                    resizeMode="contain"
                />
            )
        case "Customers":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.CUSTOMERS}
                    resizeMode="contain"
                />
            )
        case "Create Contracts":
            return (
                <Icon_Create_Contracts
                    name='import-contacts'
                    size={25}
                    color={Colors.colors.grey}
                    style={styles.iconStyle}
                />
            )
        case "Create Contact":
            return (
                <IconCreate_Contacts
                    name='contacts'
                    size={25}
                    color={Colors.colors.grey}
                    style={styles.iconStyle}
                />
            )
        default:
            return (
                <IconContracts
                    name='ios-switch'
                    size={25}
                    color={Colors.colors.grey}
                    style={styles.iconStyle}
                />
            )
    }

}


export function getThumbnailName(label) {

    switch (label) {
        case "name":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.LOAD}
                    resizeMode="contain"
                />

            )
        case "size":
            return (
                <IconWeight
                    name='balance-scale'
                    size={20}
                    color='#989898'
                />

            )
            break;
        case "truck_capacity":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.TRUCK}
                    resizeMode="contain"
                />
            )
            break;
        case "type":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.BOX}
                    resizeMode="contain"
                />
            )
            break;
        case "truck_type":
            return (
                <Thumbnail style={[styles.iconStyle]}
                    square
                    source={IMAGE_CONSTANTS.TYPE_FULL}
                    resizeMode="contain"
                />
            )
            break;

    }
}


export function getTextColor(status) {
    switch (status) {
        case 'Initiated':
            return { color: "orange" }

        case 'Accepted':
            return { color: "green" }

        default: return { color: "black" }
    }
}
var styles = StyleSheet.create({
    iconStyle: {
        marginRight: 15,
        width: 20,
        height: 20
    }
});


export function getBtnLabel(type, label) {
    //////console.log("STATUS **********************************" + type)

    switch (type) {
        case "Unassigned":
            return "ASSIGN DELIVERY PERSON";

        case "Assigned":
        case "Created":
        case "LR Issued":
            return "START TRIP";

        case "In Transit":
            return "END TRIP";

        case "ePoD":
            return "GENERATE INVOICE"

        default:
            return ""
    }
}


export function showBtn(status, type) {
    if (status == "Delivered" || status == "Complete") {
        return false;
    }
    return true;
}

export function showBtnForLr(status, type) {
    if (status == "Created" || status == "Complete" || status == "ePod") {
        return false;
    }
    return true;
}


export async function storeItem(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, item);
        return jsonOfItem;
    } catch (error) {
        //////console.log(error.message);
    }
}

export async function retrieveItem(key) {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
    } catch (error) {
        //////console.log(error.message);
    }
    return
}


export function validateForm(value) {
    if (value == null || value == undefined || value == "")
        return false;

    return true;
}


export function getTOStatusLabel(status) {
    //console.log("STATUS before" + status)

    if (typeof status == "object")
        status = status.toString();

    //console.log("STATUS " + status)

    //console.log(typeof status)
    switch (status) {
        case "0":
        case 0:
            return "Unassigned";

        case "1":
            return "Assigned";

        case "2":
            return "LR Issued";

        case "3":
            return "In Transit";

        case "4":
            return "Complete";

        case "5":
            return "ePoD";

        case "4":
            return "Invoice";

        // default: return "Unassigned"
    }
}

export function getLRStaus(status) {
    //////console.log(" getLRStaus " + status)

    switch (status) {
        case "0":
            return "Created";

        case "1":
            return "In Transit";

        case "2":
            return "Complete";

        case "3":
            return "ePoD";

        case "4":
            return "Created";
    }
}

export function getContractStatusLabel(status) {
    if (typeof status == "object")
        status = status.toString();

    //console.log("STATUS " + status)

    //console.log(typeof status)
    switch (status) {
        case "0":
            return "Initiated";

        case "1":
            return "Accepted";

        case "2":
            return "Rejected";
    }
}


export function constructLoadDetails(loadObj) {
    var truckLoadArray = [];
    Object.entries(obj).forEach(([key, value]) => {
        let arrayObj = {
            label: key,
            value: value,
        }
        if (value != undefined || value != "")
            loadArray.push(arrayObj);
    });

    return truckLoadArray;
}

export function getContactLabel(screenKey) {
    switch (screenKey) {
        case "EMPLOYEE":
            return "Add Team";
        case "CONTACT":
            return "Add Contact";
        case "PROFILE":
            return "Add Profile"
    }
}


export function getBlocksList(data) {
    var label;
    var countForUnassigned = 0;
    var countForInTransit = 0;
    var countForDeliveryCount = 0;
    var dataLen = data.length;
    for (var index = 0; index < dataLen; index++) {
        var status = data[index].state;
        if (typeof status == "object")
            status = status.toString();

        console.log("status " + status)
        if (status == 0)
            countForUnassigned++;
        if (status == 3)
            countForInTransit++;
        if (status == 4)
            countForDeliveryCount++;
    }

    return [{
        id: "333124312312",
        count: countForUnassigned,
        status: "Unassigned orders"
    },
    {
        id: "1226756312312",
        count: countForInTransit,
        status: "In Transit"
    },
    {
        id: "1234224312312",
        count: countForDeliveryCount,
        status: "Delivered Orders"
    }
    ]

}
