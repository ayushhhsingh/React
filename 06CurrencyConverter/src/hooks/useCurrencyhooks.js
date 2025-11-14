import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  const [data, SetData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json)
      .then((res) => SetData(res[currency]));
  }, [currency]);

  return data;
}

export { UseCurrencyInfo };
