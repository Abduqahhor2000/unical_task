function NumInput({ label, value, setValue }) {
  function cantroller(e) {
    if(!e.target.value) {
        setValue(e.target.value)
        return;
    }
    setValue(Math.floor((e.target.value * 100)) / 100);
  }
  return (
    <div className="px-1">
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="number"
        onChange={cantroller}
        id="amount"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none text-base py-1.5 pr-9 pl-3  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:shadow-blueRing duration-200"
        value={value}
      />
    </div>
  );
}

export default NumInput;
