require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain property half clock once test'; 
let testAccounts = [
"0x2c08ea6d11c0acedef0bfcf84d943fb10955854dd921a195b2ddf5d01cef4e82",
"0xa2800ff4c53ed1d1f52d64af894d7b0439b66201a6d48480768d861fdbff4f8d",
"0x1100918d7830e8c12fe622f14f0623a079f4066087c71a028e03d21df09a1f2a",
"0x434547a30e7cb8ef251290fd7ce8b193310b6e285baedbb9b7db515760ba754a",
"0x84f9af0d19357a1a40f7a7e7969c281414dd7a4eeb114d5e152cd0ae9452698b",
"0xfbb63fbf8e98434a989f8b52298677bcc66c8263cb2c7e607d87af43e23924ee",
"0x0a45c9af103ff6dfa0db1a42c45862e952f160552e75c24dd1eee6533fd9c132",
"0x96dbaa3fab095993dcecc3ce388f7c0492a89c95c20f3f8abec150f728f29ee4",
"0x6802069818a185d693a05c3a4e54cfe4afad3060630a9b4cba0fd4dc2d65fd16",
"0xcf2dc07cdf8cd19cd6bef9126e798b02515b6f22947ee0afd9e7fe78c3a47583"
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
            version: '^0.5.11'
        }
    }
};
