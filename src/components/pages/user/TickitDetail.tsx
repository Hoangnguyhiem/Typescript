
import Map from '../../Map'

import CheckForm from './CheckForm'
import CarByOne from './CarByOne'

const TickitDetail = () => {
    return (
        <>
            <div className="pt-[80px] sm:pt-[60px] sm:mx-[10px]">
                <div className="max-w-[1200px] m-auto  bg-white  rounded-[12px] p-[19px]">
                    <Map />
                </div>
            </div>
            <div className="max-w-[1200px] m-auto">
                <div className="flex sm:block mt-[20px] sm:mt-[10px] mx-[-10px] sm:mx-0">

                   <CheckForm />

                    <div className="max-w-[75%] sm:max-w-full basis-[75%] shrink-0 group-0 px-[10px]">
                        
                        <CarByOne />
                    </div>

                </div>
            </div>

        </>
    )
}

export default TickitDetail