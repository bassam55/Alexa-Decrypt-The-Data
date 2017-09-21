
const HELP_MESSAGE = 'You can ask me anything you want to know about cryptocurrncies';
const STOP_MESSAGE = 'Good bye';
'use strict';


const Alexa = require("alexa-sdk");

var handlers = {
    'LaunchRequest': function () {
      const speechOutput = "hello, what do you need to know about crypto currencies";
      this.emit(':ask', speechOutput, 'I did not get that?');
    },
    'GetCoinPrice': function() {
       const speechOutput = " the current bit coin price is 3685.48 dollars ";
        this.emit(':tellWithCard', speechOutput, "coin price", speechOutput);
    },
    'BuyCoins': function() {
    const speechOutput = " yes, the stock market for bit coin has been rising the past 6 month";
    this.emit(':tellWithCard', speechOutput, "buy coins", speechOutput);
    },
    'WhatsCryptocurrency': function(){
      const speechOutput = "It is a currency associated with the internet that uses cryptography, the process of converting legible information into an almost uncrackable code, to track purchases and transfers.";
      this.emit(':tellWithCard',speechOutput, "definition", speechOutput);
    },
    'BuyThousanCoin': function (){
      const speechOutput = "No, you shouldn't make that huge transaction because it's not a trusted company";
      this.emit(':tellWithCard', speechOutput, "1000dollartransaction", speechOutput); 
    },
    'Exchange': function(){
        that = this;
        const speechOutput = "Cryptocurrency exchanges are websites where you can buy, sell or exchange cryptocurrencies for other digital currency or traditional currency like US dollars or Euro. Kraken and Coinbase are two of these websites";
        that.emit(':tellWithCard', speechOutput, "exchange", speechOutput);
    },
    'SecureCryptoCurrency': function(){
        const speechOutput = "Okay, the best way to access your cryptocurrency is through a clean, non malware or spyware infested device. Then, store the Cryptocurrency in a Cryptocurrency wallet; perferably via cold storage, meaning the wallet is never in contact with any server. ";
        this.emit(':tellWithCard' ,speechOutput, "safety", speechOutput);
    },
    'AMAZON.HelpIntent': function(){
        const speechOutput = HELP_MESSAGE;
        const reprompt = "what can I help you with";
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
};


exports.handler = function(event, context, callback) {

  var alexa = Alexa.handler(event, context);

  alexa.registerHandlers(handlers);
  alexa.execute();
};
