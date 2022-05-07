import { getRequestLatency } from "./general";

export const getBitfinexMarkets = getRequestLatency(
  "https://api-pub.bitfinex.com/v2/tickers/?symbols=fUSD,tBTCUSD"
);

export const getCoinflexMarkets = getRequestLatency(
  "https://v2api.coinflex.com/v2/all/markets"
);
