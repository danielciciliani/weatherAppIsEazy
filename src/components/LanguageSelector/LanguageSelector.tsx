import { useEffect, useState } from "react";

const availableLanguages = ["en", "es"];

interface LanguageSelectorProps {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
}

function LanguageSelector({ selectedLanguage, setSelectedLanguage } : LanguageSelectorProps)  {
  return (
    <>
      <div className="flex row gap-5 pt-3">
        {availableLanguages.map((language) => (
          <button
            key={language}
            onClick={() => setSelectedLanguage(language)}
            className={`uppercase cursor-pointer hover:text-white transition-all ease duration-200
         ${selectedLanguage === language ? "text-white underline" : ""} `}
          >
            {language}
          </button>
        ))}
      </div>
    </>
  );
}

export default LanguageSelector;
