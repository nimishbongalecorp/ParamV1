// import ParamTeamManager from '../transport-team-manager/index'
const ParamTeamManager = require('../transport-team-manager/index');
const ParamUtils = require('../utils/index')

class TeamManager extends ParamTeamManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }

    getEmployeeContact(employeeId) {
        // console.log(" ************************************* getEmployeeContact *************** +++++++++++ "+employeeId)
        if (employeeId == "0x0000000000000000000000000000000000000000")
            return {};
        return super.getInfo(employeeId).then(data => {
            if (!ParamUtils.isValidJSON(data[0])) {
                return {
                    id: employeeId
                }
            }
            let contactjsonLd = JSON.parse(data[0]);

            let contact = {
                "id": employeeId,
                "name": contactjsonLd.name,
                "address": {
                    "city": contactjsonLd.address.addressRegion,
                    "locality": contactjsonLd.address.addressLocality,
                    "street": contactjsonLd.address.streetAddress,
                    "geo": {
                    }
                },
                "email": contactjsonLd.email,
                "telephone": contactjsonLd.telephone,
                "faxNumber": contactjsonLd.faxNumber
            };
            return contact;
        });
    }

    getEmployeeByContact(employeeId) {
        //console.log(" ************************************* getEmployeeByContact *************** +++++++++++ "+employeeId)
        
        return super.getEmployee(employeeId).then(data => {
            let contactjsonLd = JSON.parse(data[1]);
            if (!ParamUtils.isValidJSON(data[1])) {
                return {
                    id: data[0]
                }
            }

            let contact = {
                "id": contactjsonLd['@id'],
                "name": contactjsonLd.name,
                "address": {
                    "city": contactjsonLd.address.addressRegion,
                    "locality": contactjsonLd.address.addressLocality,
                    "street": contactjsonLd.address.streetAddress,
                    "geo": {
                    }
                },
                "email": contactjsonLd.email,
                "telephone": contactjsonLd.telephone,
                "faxNumber": contactjsonLd.faxNumber
            };
            return contact;
        });
    }
}

module.exports = TeamManager;
// export default TeamManager;