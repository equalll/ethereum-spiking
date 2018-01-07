import $ from 'jquery'
import Web3 from 'web3';

export const provider = new Web3.providers.HttpProvider("http://localhost:9545");
export const web3 = new Web3(provider);
export const GAS = 1000000;                 // amount of gas to use for the transaction
export const showError = error => {
  console.error(error);
  $("#errors").text(error);
};
