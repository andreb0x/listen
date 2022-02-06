
// web3 connection
const Web3 = require("web3")
const web3 = new Web3("wss://wsapi.fantom.network/");
// blockheader subscription makes blockHeader var available?
var subs = web3.eth.subscribe('newBlockHeaders'
)
.on("** == connected", function(subscriptionId){
    console.log('connected: ',subscriptionId);
})
.on("data", myfun
)
.on("error", console.error);

// logic
function myfun(blockHeader) {
	console.log(blockHeader);
}