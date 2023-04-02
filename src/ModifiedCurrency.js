import React from "react";
import BasicCard from "@mui/material/Card";
import Box from "@mui/material/Box";

export const ModifiedCurrency = (props) => {
  var newQuantity = props.newQuantity;

  return (
    <Box>
      <BasicCard>
        <h3>Conversion result</h3>
        <div>
          <label>
            <div className="newQuantity">{newQuantity} </div>
          </label>
        </div>
      </BasicCard>
    </Box>
  );
};
