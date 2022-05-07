import ccxt from "ccxt";
import { getBitfinexMarkets, getCoinflexMarkets } from "./specialExchanges";
import config from "./config";
import { Latency, printAverage, wait } from "./general";

function getExchangeLatency(name: string, parallel = 1): Promise<Latency>[] {
  return [...Array(parallel).keys()].map(async () => {
    // Some exchanges are not supported by ccxt or have really high latency
    switch (name) {
      case "coinflex":
        return await getCoinflexMarkets();
      case "bitfinex":
        return await getBitfinexMarkets();
    }
    //@ts-ignore
    const exchange = new ccxt[name]({ timeout: 25000 });
    const before = exchange.milliseconds();
    await exchange.fetchMarkets();
    const after = exchange.milliseconds();
    return { exchange: name, latency: after - before };
  });
}

async function main() {
  try {
    await Promise.all(
      config.exchanges.map(async (exchange) => {
        const totalLatencies: Latency[] = [];
        for (let i = 0; i < config.repeat; i++) {
          const latencies = await Promise.all(
            getExchangeLatency(exchange, config.parallel)
          );
          totalLatencies.push(...latencies);
          await wait(config.delay);
        }

        printAverage(totalLatencies);
      })
    );
  } catch (err) {
    console.log(err);
  }
}

if (require.main === module) {
  main();
}
