import Overlay from "../components/Overlay"

export default function CoverPage({ changePage }) {
    return (
        <Overlay changePage={changePage} page="invitation">
            <h1 className='text-4xl sm:text-7xl my-2 font-["satisfy"]'>Save the date</h1>
            <img src="/assets/images/seperator.png" className="h-4" />
            <h1 className='text-xl sm:text-3xl my-2 font-["cinzel"] leading-11 font-bol'>1<sup>st</sup> February 2026</h1>
            <img src="/assets/images/seperator.png" className="h-4" />
            <p className="font-bold text-base sm:text-xl font-['cinzel']">Amba auditorium,<br /> Near Attukal Temple,<br /> Thiruvnanthapuram</p>
            <img src="/assets/images/qr.svg" className="max-w-16" alt="Map location" />
            <a className="text-base sm:text-xl" href="https://maps.app.goo.gl/fw7WV8XvRTknQr1s7" target="_blank">See on map</a>
        </Overlay>
    )
}
