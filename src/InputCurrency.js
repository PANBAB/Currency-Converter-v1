import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Box, Select, MenuItem } from "@material-ui/core";
import ActionAlerts from "./Alert";

export const InputCurrency = (props) => {
  var setExchangeCurrency = props.setExchangeCurrency;

  useEffect(() => {
    axios.get("https://api.hnb.hr/tecajn-eur/v3").then(function (response) {
      props.setFetchedCurrencies(response.data);
    });
  }, []);

  function handleUndefinedCurrency(value) {
    if (value === undefined) {
      return value;
    } else {
      return value.valuta;
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setExchangeCurrency(event.target.value);
  }

  function handleCurrencyChange(event) {
    props.setQuantity(event.target.value);
  }
  var result = [];
  for (var i in props.fetchedCurrencies) {
    result.push([i, props.fetchedCurrencies[i]]);
  }

  return (
    <Box>
      <div>
        <ActionAlerts />
        <label>
          <input
            onChange={handleCurrencyChange}
            placeholder="Enter the amount"
          />
        </label>

        <Select defaultValue={1} onChange={handleChange} variant="standard">
          <MenuItem value={1}>EUR</MenuItem>
          <MenuItem value={2}>
            {handleUndefinedCurrency(props.fetchedCurrencies[2])}
          </MenuItem>
          <MenuItem value={3}>
            {handleUndefinedCurrency(props.fetchedCurrencies[3])}
          </MenuItem>
          <MenuItem value={4}>
            {handleUndefinedCurrency(props.fetchedCurrencies[4])}
          </MenuItem>
          <MenuItem value={5}>
            {handleUndefinedCurrency(props.fetchedCurrencies[5])}
          </MenuItem>
          <MenuItem value={6}>
            {handleUndefinedCurrency(props.fetchedCurrencies[6])}
          </MenuItem>
          <MenuItem value={7}>
            {handleUndefinedCurrency(props.fetchedCurrencies[7])}
          </MenuItem>
          <MenuItem value={8}>
            {handleUndefinedCurrency(props.fetchedCurrencies[8])}
          </MenuItem>
          <MenuItem value={9}>
            {handleUndefinedCurrency(props.fetchedCurrencies[9])}
          </MenuItem>
          <MenuItem value={10}>
            {handleUndefinedCurrency(props.fetchedCurrencies[10])}
          </MenuItem>
          <MenuItem value={11}>
            {handleUndefinedCurrency(props.fetchedCurrencies[11])}
          </MenuItem>
          <MenuItem value={12}>
            {handleUndefinedCurrency(props.fetchedCurrencies[12])}
          </MenuItem>
          <MenuItem value={13}>
            {handleUndefinedCurrency(props.fetchedCurrencies[13])}
          </MenuItem>
        </Select>
        <button onClick={props.calculateResult} className="Button1">
          Convert
        </button>
      </div>
    </Box>
  );
};
