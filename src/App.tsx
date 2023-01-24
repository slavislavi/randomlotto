import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { ControlPanel } from "./components/ControlPanel";
import { ResultBoard } from "./components/ResultBoard";
import { getRandomNumbers } from "./utils/getRandomNumbers";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import "./styles/index.css";

export const App: FC = () => {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [showBoard, setShowBoard] = useState(false);
  const [enableControls, setEnableControls] = useState(true);

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^0|\D/g, "");
    setAmount(value);
  };

  const onTotalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^0|\D/g, "");
    setTotal(value);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowBoard(true);
    setEnableControls(false);
    setTimeout(() => {
      setNumbers(getRandomNumbers(amount, total));
      setEnableControls(true);
    }, 2500);
  };

  const onResetForm = () => {
    setAmount("");
    setTotal("");
    setNumbers([]);
    setShowBoard(false);
    setEnableControls(true);
  };

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <ControlPanel
        amount={amount}
        total={total}
        onAmountChange={onAmountChange}
        onTotalChange={onTotalChange}
        onSubmitForm={onSubmitForm}
        onResetForm={onResetForm}
        enableControls={enableControls}
      />
      {showBoard && (
        <ResultBoard
          showCoins={!enableControls}
          numbers={numbers}
          amount={amount}
        />
      )}
    </div>
  );
};
