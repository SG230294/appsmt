export default {
	false: false,
	true: true,
	myVar1: false,
	myVar2: {},
	currentExchangeAccount: {},
	withDefault (newRow) {
	return 'hey'
	//	write code here
	//	this.myVar1 = [1,2,3]
},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	},
		updateCount(){
			setInterval(() => Status_Query.run(), 15000);
			console.log('UPD')
		},
	async changeActiveness(id, isActive){
		console.log(id);
		console.log(isActive);
		Update_exchange_accs.run({id : id, isActive: isActive});
	},

	async setcurrentExchangeAccount (ExchangeAccount){
		this.currentExchangeAccount = ExchangeAccount;		
	}


}