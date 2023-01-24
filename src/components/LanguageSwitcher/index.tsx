import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import './styles.css';

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const onLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-container">
      <input className="language-btn" type="button" onClick={onLanguageChange} value="ru" title="RU" />
      <input className="language-btn" type="button" onClick={onLanguageChange} value="en" title="EN" />
      <input className="language-btn" type="button" onClick={onLanguageChange} value="de" title="DE" />
    </div>
  );
};
