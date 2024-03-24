
import Map from './Map'
import Cars from './pages/user/Cars'


const Main = () => {
    return (
        <div className="mb-[30px]">

            <div className="max-w-full pt-[32%] sm:pt-[400px] md:pt-[370px] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "url('../src/assets/image/fa3c35c6a8b904c44f6dcbc0b512b2ac.jpg')", }}>
                <p className="absolute top-[30%] left-[50%] translate-x-[-50%] text-[#ffffff] text-[1.5rem] md:text-[1.1rem] sm:text-[0.8rem] sm:left-[2%] sm:translate-x-0 sm:top-[55px] md:top-[80px]">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</p>
                <div className="w-full absolute top-[40%] sm:top-[20%] left-[50%] translate-x-[-50%] bg-white max-w-[1200px] basis-[1200px] sm:max-w-[96%] md:max-w-[96%]  rounded-[12px] p-[16px] sm:p-[8px] md:p-[12px]">
                    <Map />
                </div>

                <div className="absolute w-full bg-black h-[12%] bottom-0 bg-opacity-[0.5] sm:h-[10%] sm:px-[10px]">
                    <ul className="text-[#ffffff] flex justify-center items-center h-full sm:text-[0.7rem] md:text-[0.7rem]">
                        <li className="px-[30px] sm:px-[10px]"><i className="fa-solid fa-circle-check text-yellow-400 mr-[10px] sm:mr-[5px]"></i><a href="">Chắc chắn có chỗ</a></li>
                        <li className="px-[30px] sm:px-[10px]"><i className="fa-solid fa-headset text-yellow-400 mr-[10px] sm:mr-[5px]"></i><a href="">Hộ trợ 24/7</a></li>
                        <li className="px-[30px] sm:px-[10px]"><i className="fa-solid fa-ticket text-yellow-400 mr-[10px] sm:mr-[5px]"></i><a href="">Nhiều ưu đãi</a></li>
                        <li className="px-[30px] sm:px-[10px]"><i className="fa-solid fa-coins text-yellow-400 mr-[10px] sm:mr-[5px]"></i><a href="">Thanh toán đa dạng</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] m-auto mt-[30px] sm:mt-[10px]">
                <h1 className="mb-[20px] sm:mb-[10px] font-[700] sm:font-[500] text-[1.3rem] md:text-[1.1rem] sm:text-[0.9rem] sm:mx-[10px] md:mx-[18px]">Tuyến đường phố</h1>
                {/* <div className="flex mx-[-10px] sm:mx-[2px] box-border"> */}

                < Cars />

                  
                {/* </div> */}
            </div>
        </div>
    )
}

export default Main