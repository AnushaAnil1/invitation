import Overlay from "../components/Overlay";

export default function InvitationPage({changePage}) {

    return (
        <Overlay changePage={changePage} page="schedule">
            <p className="text-base sm:text-xl">Together with their families</p>
            <h1 className='text-2xl sm:text-4xl my-2 font-["cinzel"]'>Anusha Anil</h1>
            <h1 className='font-["cinzel"]'>&</h1>
            <h1 className='text-2xl sm:text-4xl my-2 font-["cinzel"]'>Aravind R</h1>
            <p>Cordially invite you to join the occasion<br /> of their joyous commitment on</p>
            <div>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-center w-full">
                    <p className="text-center border-t-2 border-b-2 py-1">Sunday</p>
                    <div className="text-center text-base sm:text-xl">
                        <p>February</p>
                        <p className="text-3xl sm:text-5xl font-bold">1</p>
                        <p>2026</p>
                    </div>
                    <p className="text-center border-t-2 border-b-2 py-1">18th Makaram 1201</p>
                </div>
            </div>
            <p>at</p>
            <p className="font-bold text-base sm:text-xl">Amba Auditorium<br /> Near Attukal Temple, Trivandrum</p>
        </Overlay>
    )
}
