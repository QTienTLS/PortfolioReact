import Lottie from 'lottie-react';
import data from '@/assets/ToggleButton.json';
import { useEffect, useRef, useState } from 'react';
const DarkModeButton = () => {
  const lottiePlayer = useRef<any>(null);
  const [isDark, setIsDark] = useState(false);
  lottiePlayer.current?.setSpeed(3);

  const toggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if(isDark)
    {
      lottiePlayer.current?.playSegments([240, 480], true);
      document.body.classList.add('dark');
    }
    else
    {
      lottiePlayer.current?.playSegments([0, 240], true);
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div onClick={toggle}>
      <Lottie animationData={data} lottieRef={lottiePlayer} loop={false}
      autoplay={false}
      style={{width: 50, height: 50}}
      />
    </div>
  )
}

export default DarkModeButton;