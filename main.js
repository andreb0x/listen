var constants = require('../constants')

// web3 connection
const Web3 = require("web3")
const web3 = new Web3("wss://wsapi.fantom.network/");

// what we are listening to
const addr1 = constants.LPaddresses['spooky_ftm_boo']
const options = {
	address: addr1
}

// subscription
var subs = web3.eth.subscribe('logs', options
)
.on("** == connected", function(subscriptionId){
    console.log('connected: ',subscriptionId);
})
.on("data", myfun
)
.on("error", console.error);

// logic
function myfun(log) {
	console.log(log);
}