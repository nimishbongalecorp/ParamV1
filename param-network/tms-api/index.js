// import TOManager from './to-manager';
// import TeamManager from './team-mananger';
// import ContractManager from './contract-manager';

const TOManager = require('./to-manager');
const TeamManager = require('./team-manager');
const ContractManager = require('./contract-manager');

class TMSAPI {
    constructor(paramBridge) {
        this.toManager = new TOManager(paramBridge);
        this.teamManager = new TeamManager(paramBridge);
        this.contractManager = new ContractManager(paramBridge);
    }
}
// export default TMSAPI;
module.exports = TMSAPI;