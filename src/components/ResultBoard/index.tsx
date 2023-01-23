import React, { FC } from "react";
import { Loader } from "../Loader";
import "./styles.css";

interface ResultProps {
  numbers: number[];
  amount: string;
  showCoins: boolean;
}

export const ResultBoard: FC<ResultProps> = ({
  numbers,
  amount,
  showCoins,
}) => {
  return (
    <div className="result-container">
      <div className="result-grid">
        {!numbers.length || showCoins
          ? Array.from({ length: +amount }, (_, i) => (
              <div className="result-item" key={i}>
                <Loader />
              </div>
            ))
          : numbers.map((num, i) => (
              <div className="result-item" key={i}>
                {num}
              </div>
            ))}
      </div>
    </div>
  );
};
