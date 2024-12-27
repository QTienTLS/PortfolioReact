import SettingPanel from "./components/utilities/SettingPanel";
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen overflow-y-auto dark:bg-purple-900 transition-all duration-200">
      <SettingPanel/>
      <div className="text-center text-4xl font-bold text-purple-500 dark:text-white mt-20">
        {t('hello')}
        </div>
    </div>
  );
};

export default App;
