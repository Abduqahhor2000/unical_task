import Button from "@/components/button";
import CurrentAmount from "@/components/currentAmount";
import NumInput from "@/components/numInput";
import Select from "@/components/select";
import { WithLayout } from "@/layouts/comparison_menu_layout";
import axios from "axios";
import { useState } from "react";

const currencies = ["USD", "RUB", "EUR", "UZS", "CNY", "JPY", "KZT", "TJS"];

function Home(props) {
  const [currencyPrices, setCurrencyPrices] = useState(props.rates);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [utils, setUtils] = useState(null);

  const getCurrentPrice = () => {
    setIsLoading(true);
    setUtils({
      amount,
      toCurrency,
      fromCurrency,
      currencyPrices
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="px-4 py-6">
      <form>
        <div className="grid grid-cols-4">
          <Select
            options={currencies}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            label={"From"}
          />
          <Select
            options={currencies}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            label={"To"}
          />
          <NumInput label={"Amount"} value={amount} setValue={setAmount} />
          <div className="flex items-end">
            <Button onClick={() => getCurrentPrice()} text={"Convert"} />
          </div>
        </div>
      </form>

      {isLoading ? (
        <div className="my-4 text-center flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      ) : utils ? (
        <div className="flex justify-center"><CurrentAmount utils={utils} isTwo={100} /></div>
      ) : null}
    </div>
  );
}

export default WithLayout(Home);

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
