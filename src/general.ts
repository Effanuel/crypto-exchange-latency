import axios from "axios";

export interface Latency {
  exchange: string;
  latency: number;
}

export function wait(ms: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const printAverage = <T extends Latency>(arr: T[]) => {
  const averageLatency = arr.reduce((a, b) => a + b.latency, 0) / arr.length;
  console.log(
    `${arr[0].exchange}`.padEnd(10) + `::: ` + `${averageLatency.toFixed(0)} ms`
  );
};

export function getRequestLatency(url: string) {
  return async (): Promise<Latency> => {
    const start = Date.now();
    await axios(url);
    const end = Date.now();
    return { exchange: "coinflex", latency: end - start };
  };
}
