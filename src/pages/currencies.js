import CurrentAmount from "@/components/currentAmount";
import Select from "@/components/select";
import { WithLayout } from "@/layouts/comparison_menu_layout";
import { useState } from "react";
import axios from "axios";

const currencies = ["USD", "RUB", "EUR", "UZS", "CNY", "JPY", "KZT", "TJS"];

function Currencies(props) {
  const [currencyPrices, setCurrencyPrices] = useState(props.rates);
  const [currency, setCurrency] = useState("USD");

  console.log(currency);

  return (
    <div className="px-4 py-6">
      <Select
        options={currencies}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        label={"Base currency"}
      />{" "}
      <div className="px-1">
        {currencyPrices &&
          currencies.map((curren) => (
            <>
              <CurrentAmount
                utils={{
                  amount: 1,
                  toCurrency: curren,
                  fromCurrency: currency,
                  currencyPrices,
                }}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default WithLayout(Currencies);

export const getServerSideProps = async () => {
  const rates = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/get-currencies`
  );

  return {
    props: {
      rates: rates.data,
    },
  };
};
