function CurrentAmount({ utils }) {
  return (
    <div className="my-4 text-center text-[30px] font-semibold flex items-center justify-center w-max">
      <span className="text-[20px]">
        {utils.amount} {utils.fromCurrency} =
      </span>{" "}
      {Math.floor(
        (utils.amount / utils.currencyPrices.rates[utils.fromCurrency]) *
          utils.currencyPrices.rates[utils.toCurrency] *
          10000
      ) / 10000}{" "}
      {utils.toCurrency}
    </div>
  );
}

export default CurrentAmount;
