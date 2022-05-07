# crypto-exchange-latency
Testing latency between different exchanges using ccxt library

---

Use `config.ts` file to change parameters such as request repetitions, delay between checks as well as exchanges list

## Run
```bash
npm install
npm start
```


### These are the exchanges that are handled manually:
* CoinFLEX - ccxt doesn't support it as of now;
* Bitfinex - `fetchMarkets` method takes too long (~20 seconds)
