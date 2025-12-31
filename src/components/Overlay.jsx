import { useState } from "react";
import design2 from "../assets/images/design-2.png";
import design2Rotated from "../assets/images/design-2-rotated.png";

export default function Overlay({children, changePage, page}) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        if (clicked) return;
        setClicked(true);
        setTimeout(() => {
            changePage(page);
        }, 1500);
    }

  return (
    <div className='flex justify-center items-center h-screen w-full max-w-3xl bg-[url("/assets/images/background-2.webp")] bg-cover bg-center relative text-amber-600 font-["Times_New_Roman"] text-sm sm:text-lg overflow-hidden'>
        <button onClick={handleClick} className="animate-slide-in-right writing-mode-vertical-rl bg-linear-to-b from-[#DF943D] to-amber-700 text-white px-3 py-2 rounded-full shadow-lg border-2 border-amber-400 font-['cinzel'] text-lg font-semibold tracking-widest hover:shadow-xl hover:scale-105 transition-all absolute right-0 top-1/2 -translate-y-1/2 z-20 rotate-270">{page === "invitation" ? "HOME" : "NEXT"}</button>
            <img src={design2} className={`absolute top-0 z-10 ${clicked ? "reverse-enter-from-top" : "-translate-y-1/2 animate-enter-from-top"}`} />
            <img src={design2Rotated} className={`absolute bottom-0 z-10 ${clicked ? "reverse-enter-from-bottom" : "translate-y-1/2 animate-enter-from-bottom"}`} />
            <div className={`flex flex-col items-center w-4/5 text-center bg-white h-11/12 rounded-t-[20rem] p-5 absolute bottom-0 sm:pt-36 pt-15 gap-2 ${clicked ? "reverse-slide-in-bottom" : "animate-slide-in-bottom"}`}>
                {children}
            </div>
    </div>
  )
}
