import "./App.css";
import React, { useState } from "react";
import { Button } from "@mui/material";
import IntegerInput from "./components/IntegerInput";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>Hello, Material-UI!</h1>
      {/*   <Button variant="contained" color="secondary">
        Click Me
      </Button>
 */}
      <table>
        <tbody>
          {" "}
          <tr>
            <td>Integer Input Component:</td>
            <td>
              {" "}
              <IntegerInput value={value} onChange={setValue} />
            </td>

            <td>Current Value: {value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
