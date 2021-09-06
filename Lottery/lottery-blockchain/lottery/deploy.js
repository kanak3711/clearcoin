const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "focus charge gaze airport zoo slice genuine history border shallow smoke second",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/108304fbc8714e6aa5335ce8656395ff"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
};
deploy();
