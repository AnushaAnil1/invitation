import { useEffect, useState } from 'react'
import design1 from "../assets/images/design-1.png?width=464&height=464&format=png&quality=80&metadata";

export default function SplashScreen({changePage}) {
  const [clicked, setClicked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        changePage('invitation');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [clicked, changePage]);

  useEffect(() => {
    if (clicked) return;
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 10000);
    return () => clearTimeout(hintTimer);
  }, [clicked]);



  return (
    <div
      className={"flex justify-center items-center h-screen w-full max-w-3xl bg-cover bg-center relative overflow-hidden cursor-pointer"}
      onClick={() => {
        setShowHint(false);
        setClicked(true);
      }}
    >
        {/* Background crossfade layers */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${clicked ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: 'url(/assets/images/background-1.webp)' }}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${clicked ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: 'url(/assets/images/background-2.webp)' }}
        />

        {/* Foreground content */}
        <img
        fetchPriority='high'
          width="309"
          height="402"
          src="/assets/images/ganapathy.png"
          alt="Splash Logo"
          className={`max-w-56 w-1/2 z-10 ${clicked ? 'scale-200 transition-design' : 'hover:scale-120 transition-all pulse-delayed'}`}
        />
        {showHint && !clicked && (
          <div
            className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-1 hint-pop"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <div className="px-4 py-2 rounded-full bg-white/85 text-amber-800 text-sm font-semibold shadow-lg border border-amber-200">Tap Here</div>
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 bg-amber-700 rounded-full" />
              <span className="absolute w-6 h-6 rounded-full border border-amber-500/60 ping-soft" />
            </div>
          </div>
        )}
        <img width={"464"} height={"464"} src={design1} alt="Splash Logo" className={`max-w-md w-3/4 absolute top-0 rotating z-10 ${clicked ? '-translate-y-full' : '-translate-y-1/2'} transition-design`}/>
        <img width={"464"} height={"464"} src={design1} alt="Splash Logo" className={`max-w-md w-3/4 absolute bottom-0 rotating-opposite z-10 ${clicked ? 'translate-y-full' : 'translate-y-1/2'} transition-design`}/>
    </div>
  )
}
