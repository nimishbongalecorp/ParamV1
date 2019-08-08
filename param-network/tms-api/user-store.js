// import ParamTeamManager from '../transport-team-manager/index'
const UserStoreManager = require('../user-store/index');
const ParamUtils = require('../utils/index')

class UserStore extends UserStoreManager {

    constructor(_paramNetwork) {
        super(_paramNetwork);
    }

    getData(dataId) {
        return super.getData(dataId).then(data => {
            let userStoreJsonLd = JSON.parse(data);
            console.log(userStoreJsonLd);
            if (!ParamUtils.isValidJSON(data)) {
                return {
                    id: dataId
                }
            }

            userStoreJsonLd.id = dataId;
            userStoreJsonLd.param_document_id = dataId;
            delete userStoreJsonLd.referencesOrder['@type'];
            if (userStoreJsonLd.referencesOrder.orderedItem) {
                userStoreJsonLd.referencesOrder.orderedItem.forEach(element => {
                    delete element['@type'];
                });
            }
            if (userStoreJsonLd.provider) {
                delete userStoreJsonLd.provider['@type'];
                userStoreJsonLd.provider.id = userStoreJsonLd.provider['@id'];
                delete userStoreJsonLd.provider['@id'];
            }
            if (userStoreJsonLd.provider) {
                delete userStoreJsonLd.customer['@type'];
                userStoreJsonLd.customer.id = userStoreJsonLd.customer['@id'];
                delete userStoreJsonLd.customer['@id'];
            }
            return userStoreJsonLd;
        });
    }
}

module.exports = UserStore;
// export default TeamManager;