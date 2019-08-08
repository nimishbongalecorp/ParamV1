import RNSecureKeyStore from "react-native-secure-key-store";

class WalletUtils {
    static getParamId() {
        return new Promise((resolve, reject) => {
            RNSecureKeyStore.get("param_id").then((result, error) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
    static getOrganizationId() {
        return new Promise((resolve, reject) => {
            RNSecureKeyStore.get("organizationId").then((result, error) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
    static getPrivateKey() {
        return new Promise((resolve, reject) => {
            RNSecureKeyStore.get("privateKey").then((result, error) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
    static getKeyStore() {
        return new Promise((resolve, reject) => {
            this.getParamId().then(address => {
                RNSecureKeyStore.get(address.substr(2)).then((result, error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                })
            })
        })
    }
    static getMyProfile() {
        return new Promise((resolve, reject) => {
            RNSecureKeyStore.get("profile").then((profile, error) => {
                if (error) {
                    reject(error);
                }
                resolve(JSON.parse(profile))
            })
        })
    }
}

export default WalletUtils;