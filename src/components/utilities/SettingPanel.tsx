import DarkModeButton from "./DarkModeButton";
import LanguageButton from "./LanguageButton";
const SettingPanel = () => {


  return (
    <div className="fixed top-0 right-0 py-2 px-4 flex items-center gap-2">
      <DarkModeButton/>
      <LanguageButton/>
    </div>
  );
}


export default SettingPanel;