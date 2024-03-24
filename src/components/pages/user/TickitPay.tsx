import FormPayUser from "./FormPayUser"
import TripInformation from "./TripInformation"

const TickitPay = () => {
    return (
        <div className="pt-[75px] sm:pt-[60px] max-w-[1200px] m-auto sm:text-[0.8rem]">
            <div className="mx-[-10px] flex sm:block md:block sm:mx-[1px]">
                <TripInformation />
                <FormPayUser />
            </div>
        </div>
    )
}

export default TickitPay