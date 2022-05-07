export default {
  parallel: 2, // how many requests to run at the same time
  repeat: 5, // how many times to run requests for each exchange
  delay: 300, // delay in milliseconds between each repeat,,
  // every exchange that ccxt support is here supported as well
  // Other supported exchanges: coinflex, bitfinex (ccxt get markets method takes ~20 seconds)
  exchanges: [
    "bitmex",
    "binance",
    "bitfinex",
    "ftx",
    "okex",
    "kraken",
    "kucoin",
    "bybit",
    "coinbase",
    "bitstamp",
    "coinflex",
  ],
};
