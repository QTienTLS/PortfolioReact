
import { useEffect, useState } from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from '@iconify/react';

const LanguageButton = () => {
  const [choosedLanguage, setChoosedLanguage] = useState('vi');
  const {i18n} = useTranslation();
  useEffect(() => {
    setChoosedLanguage(i18n.language);
  }, []);

  const switchLanguage = () => {
    if(choosedLanguage === 'vi')
    {
      i18n.changeLanguage('en');
      setChoosedLanguage('en');
    }
    else
    {
      i18n.changeLanguage('vi');
      setChoosedLanguage('vi');
    }
  }

  return(
    <>
      <Icon icon={choosedLanguage === 'vi' ? 'emojione:flag-for-vietnam' : 'circle-flags:uk'} width="30" height="30"
      onClick={switchLanguage}
      />
    </>
  );
}

export default LanguageButton;