require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remove coffee hockey private orange gesture'; 
let testAccounts = [
"0x85bbf468c50c3866d930b8b2a05447e36ef4e5fbc249eab19d46ce987a5ee773",
"0xcd5beb2b37726ecb48adb78dd4ac1acefc4049fd5869b30724aa3f88c1ac26b6",
"0x6248ea97b486fd0760bee0a05c91587aedc069bb2f32b8f1a35a21404afef0bd",
"0x5b766509fa02e79b81c27d1c0eead692cec81082c7d30c63b57d37cdaad3cd12",
"0xdd15dcad8314561bbd9ac28ca36bfe58041a6d58c4103868778947c296ed866e",
"0x114a2d15a63c7095b90f61a5c6affcf0f5c3c88a09ad5e4b8c8a5f86a7871705",
"0xd6dda20882edb70eb105ab06cdb9d87efaaaf7c8286f4d2613eb66e62219bd2e",
"0xde52ae0ca55d5b75f78c3f6a8035239a366013e83755f7282b2c5302ee682748",
"0x05226c940b2db53c61f429079e5a6241785f0b781bf225604bbdda21b6eaad7b",
"0xe8cf3e7ce5341137d7cae108c4afff9f0476adcc48f1454d610ae12d1f0ee4dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

