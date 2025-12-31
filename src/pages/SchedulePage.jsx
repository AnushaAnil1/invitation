import Overlay from "../components/Overlay"

export default function SchedulePage({ changePage }) {
    return (
        <Overlay changePage={changePage} page="cover">
            <h1 className='text-xl sm:text-3xl my-2 font-["cinzel"]'>Welcoming at 10.30 am</h1>
            <img src="/assets/images/seperator.png" className="h-4" />
            <h1 className='text-xl sm:text-3xl my-2 font-["cinzel"] leading-11'>Muhoortham between<br /> 11.05 am and 11.35 pm</h1>
            <img src="/assets/images/seperator.png" className="h-4" />
            <h1 className='text-lg sm:text-2xl my-2 font-["cinzel"] leading-11'>With best compliments from: Adithya Anil</h1>
            <img src="/assets/images/seperator.png" className="h-4" />
            <p className="font-bold text-base sm:text-xl">Your presence at our wedding is the greatest gift of all<br /> We politely request no other gifts</p>
        </Overlay>
    )
}
