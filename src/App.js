import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import DarkMode from "./components/Buttons/DarkMode/DarkMode";
import SwitchButton from "./components/Buttons/SwitchPrice/SwitchButton";

function App() {
  const [pricePlan, setPricePlan] = useState(true);
  const togglePrice = () => {
    if (pricePlan) {
      setPricePlan(false);
    } else setPricePlan(true);
  };
  const monthlyPrice = [19.99, 24.99, 39.99];
  const yealryPrice = [39.99, 49.99, 59.99];
  let price = pricePlan === true ? monthlyPrice : yealryPrice;

  return (
    <div className="App">
      <div className="DarkMode">
        <p style={{ color: "var(--bg-mode)" }}> Choose mode </p>
        <DarkMode />
      </div>
      <div className="time">
        <h1
          style={{
            fontSize: "50px",
            color: "var(--bg-mode)",
          }}
        >
          Discgolf Sets
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            columnGap: "10px",
            color: "var(--bg-mode)",
          }}
        >
          <p1>Base Plastic</p1>
          <SwitchButton onClick={() => togglePrice()} />
          <p1>Premium Plastic</p1>
        </div>
      </div>
      <div className="Cards">
        <Card
          title={"Beginner"}
          price={"$" + price[0]}
          storage={"Putter"}
          users={"Approach"}
          send={"Midrange"}
        ></Card>
        <Card
          title={"Intermediate"}
          price={"$" + price[1]}
          storage={"Putter"}
          users={"Midrange"}
          send={"Fairway Driver"}
        ></Card>
        <Card
          title={"Advanced"}
          price={"$" + price[2]}
          storage={"Putter + Approach"}
          users={"Fairway Driver"}
          send={"Distance driver"}
        ></Card>
      </div>
    </div>
  );
}

export default App;
