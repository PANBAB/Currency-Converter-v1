import "./App.css";
import { useState } from "react";
import { ModifiedCurrency } from "./ModifiedCurrency";
import { InputCurrency } from "./InputCurrency";

function App() {
  const [fromCurrency, setFromCurrency] = useState("Kunica");
  const [exchangeCurrency, setExchangeCurrency] = useState(["Euric"]);
  const [quantity, setQuantity] = useState(1);
  const [newQuantity, setNewQuantity] = useState(0);
  const [fetchedCurrencies, setFetchedCurrencies] = useState([]);

  function calculateResult(event) {
    setNewQuantity(
      parseFloat(quantity) *
        parseFloat(
          fetchedCurrencies[exchangeCurrency].srednji_tecaj.replace(",", ".")
        )
    );
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>

      <InputCurrency
        fromCurrency={fromCurrency}
        setQuantity={setQuantity}
        setFromCurrency={setFromCurrency}
        calculateResult={calculateResult}
        setFetchedCurrencies={setFetchedCurrencies}
        setExchangeCurrency={setExchangeCurrency}
        fetchedCurrencies={fetchedCurrencies}
      />
      <ModifiedCurrency
        exchangeCurrency={exchangeCurrency}
        newQuantity={newQuantity}
        fetchedCurrencies={fetchedCurrencies}
      />

      <footer>Made by A&M</footer>
    </div>
  );
}
export default App;
