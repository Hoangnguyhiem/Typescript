import { Link } from "react-router-dom"


const CarByOne = () => {
    return (
        <div className="w-full bg-white rounded-[10px] px-[18px] py-[30px] sm:py-[20px] mb-[20px] sm:text-[0.8rem] md:text-[0.8rem]">
            <div className="w-full flex">
                <div className="max-w-[18%] sm:min-w-[25%] md:min-w-[28%]  basis-[18%] shrink-0 group-0:">
                    <div className="relative bg-center bg-no-repeat bg-cover pt-[100%]" style={{ backgroundImage: "url('../src/assets/image/76b57540bea503155d6ebba3f9adb503.jpg')", }}>
                        <div className="absolute w-[99%] h-[15%] rounded-r-[5px] bg-[#27AE60] text-white top-[7%] left-[-7px] flex justify-center items-center"><i className="fa-solid fa-bolt sm:text-[0.5rem] md:text-[0.7rem]"></i>Xác nhận tức thì</div>
                        <div className="absolute w-[6%] h-[15%] bg-[#1D8046] top-[22%] left-[-7px]"></div>
                    </div>
                </div>
                <div className="max-w-[82%] sm:min-w-[75%] md:min-w-[72%] sm:basis-[75%] md:basis-[72%] basis-[82%] shrink-0 group-0 h-full pl-[20px]">
                    <div className="flex justify-between mb-[10px] sm:mb-0">
                        <p>Hải Phòng Travel (Đất cảng)</p>
                        <p>190.000Đ</p>
                    </div>

                    <div className="flex justify-between items-center mb-[7px]  sm:mb-0">
                        <div className="">Vorcher</div>
                        <div className="h-[35px] sm:h-[30px] border-teal-700 border-2 rounded-[5px] items-center flex w-[100px] sm:w-[70px] justify-center">Giảm 10%</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex">
                            <svg className="my-[5px] sm:h-[50px] TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr" xmlns="http://www.w3.org/2000/svg" width="16" height="74" viewBox="0 0 14 74"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path><g fill="none" stroke="#484848" stroke-width="3"><circle cx="7" cy="7" r="7" stroke="none"></circle><circle cx="7" cy="7" r="5.5"></circle></g><path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path></svg>

                            <div className="flex flex-col justify-between ml-[10px]">
                                <div className="">19:00 - Hà Nội</div>
                                <p className="text-[0.6rem]">1h30m</p>
                                <div className="">19:00 - Hà Nội</div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <p>Còn trống 11 chỗ</p>
                            <Link to={`/tickit-pay`} className="p-[10px] sm:p-[5px] bg-[#FFC700] rounded-[5px] text-center" >Chọn chuyến</Link >
                        </div>
                    </div>

                </div>

            </div>
            <div className="float-end font-[600] mt-[2px]">KHÔNG CẦN THANH TOÁN TRƯỚC</div>
        </div>
    )
}

export default CarByOne