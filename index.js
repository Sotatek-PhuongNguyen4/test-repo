const bcrypt = require("bcrypt")

class Block {
	constructor(blockid, previousHash, data) {
		this.blockid = blockid
		this.timestamp = Date.now()
		this.blockhash = this.getHash()
		this.prevHash = previousHash
		this.data = data
	}

	getHash() {
		return bcrypt.hashSync(
			String(
				this.blockid +
					this.timestamp +
					this.blockhash +
					this.previousHash +
					JSON.stringify(this.data)
			),
			10
		)
	}
}

class BlockChain {
	constructor() {
		this.chain = []
	}

	addBlock(data) {
		let blockid = this.chain.length
		let previousHash =
			this.chain.length != 0
				? this.chain[this.chain.length - 1].blockhash
				: ""
		let block = new Block(blockid, previousHash, data)
		this.chain.push(block)
	}
}

const myFirstBlockChain = new BlockChain()

myFirstBlockChain.addBlock({ sender: "Phuong", receiver: "Anh", amount: 1990 })
myFirstBlockChain.addBlock({ sender: "Phuong", receiver: "Anh", amount: 3000 })
myFirstBlockChain.addBlock({ sender: "Phuong", receiver: "Anh", amount: 2000 })

console.log(JSON.stringify(myFirstBlockChain, null, 6))

console.log("ADAD")
console.log("ACACC")

console.log("CDDD")
console.log("ADASDDDSDAD")
