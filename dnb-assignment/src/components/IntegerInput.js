import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function IntegerInput({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const intValue = parseInt(e.target.value, 10);
    if (!isNaN(intValue) || e.target.value === "") {
      setInputValue(e.target.value);
      onChange(intValue);
    }
  };
  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Enter something"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}

IntegerInput.prototype = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

IntegerInput.defaultProps = {
  value: "",
};

export default IntegerInput;
