import React, { ChangeEvent, FC, FormEvent } from "react";
import "./styles.css";

interface ControlProps {
  amount: string;
  total: string;
  enableControls: boolean;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTotalChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  onResetForm: () => void;
}

export const ControlPanel: FC<ControlProps> = ({
  amount,
  total,
  enableControls,
  onAmountChange,
  onTotalChange,
  onSubmitForm,
  onResetForm,
}) => {
  return (
    <>
      <form className="control-container" onSubmit={onSubmitForm}>
        <p className="control-text">Выберите</p>
        <input
          className="control-input"
          placeholder="1 - 99"
          type="text"
          value={amount}
          onChange={onAmountChange}
          required
          maxLength={2}
          disabled={!enableControls}
        />
        <p className="control-text">чисел из</p>
        <input
          className="control-input"
          placeholder="1 - 999"
          type="text"
          value={total}
          onChange={onTotalChange}
          required
          maxLength={3}
          disabled={!enableControls}
        />
        <input
          className="control-submit"
          type="submit"
          value="Подобрать"
          disabled={!enableControls}
        />
        <input
          className="control-reset"
          type="button"
          value="Сброс"
          onClick={onResetForm}
        />
      </form>
    </>
  );
};
