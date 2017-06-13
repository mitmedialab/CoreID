# CoreID
<<<<<<< HEAD

For Human Dynamics group blockchain-backed individual identity open source prototype
=======
>>>>>>> mitmedialab/master

For MIT Media Lab Human Dynamics group open source prototyping and other research and development related to business, legal and technology dimensions of blockchain-backed individual identity

<<<<<<< HEAD
## Getting Started 
`npm install`
`npm start`

## Upcoming 
=======
## CoreID demo

For demonstration purposes and relative ease of use we utilize the the Bitcoin Core internal wallet and rpc commands to do all signing within the application. 
>>>>>>> mitmedialab/master

## Getting Started

* Download BitCoin Core Binaries: https://bitcoin.org/en/download

* Unpack and run ./bitcoind with proper configurations based on what you want to do (eg do you want to connect to "mainnet" or the "testnet" or "regtest" if you just want to play around with the tools and not be connected to anything for example?)

* In the home directory you should have .bitcoin/ folder. In it create a bitcoin.conf file if you want to save your default configurations when running ./bitcoind. Since we will be using the rpc functionality you would also need to add your own rpcuser and rpcpassword for use in the rpc. 

* npm install bitcoin. If you do not have npm already installed install it alongside the latest node version.

* For specifications details on the package look here https://www.npmjs.com/package/bitcoin

* If you want to create the rpc calls from scratch you do not need to do npm install bitcoin, but the package makes it easy for you to make calls. There is a signing example in the example folder that uses the bitcoin package.
