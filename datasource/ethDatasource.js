// Import the RESTDataSource class from Apollo Server 
const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum address to use for example queries
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan API data source class extending RESTDataSource
class EtherDataSource extends RESTDataSource {

  // Constructor sets the base URL for Etherscan API
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Gets Ether balance for a specified Ethereum address
  async etherBalanceByAddress() {

    // Call Etherscan balance endpoint, passing address and API key
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets total Ether supply from Etherscan
  async totalSupplyOfEther() {

    // Call Etherscan ethsupply endpoint, passing API key
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get latest Ethereum price from Etherscan
  async getLatestEthereumPrice() {

    // Call Etherscan ethprice endpoint, passing API key  
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get estimated block confirmation time from Etherscan
  async getBlockConfirmationTime() {

    // Call Etherscan gasestimate endpoint, passing sample gas price and API key
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;