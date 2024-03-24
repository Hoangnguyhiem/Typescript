const Map = () => {
    return (
       
            <>
            <div className="w-full">
                <ul className="flex justify-center text-[1.1rem] md:text-[0.9rem] text-[#474747] sm:text-[0.7rem]">
                    <li className="color items-center flex pb-[5px] px-[40px] sm:px-[6px] md:px-[16px] menu"><i className="fa-solid fa-bus-simple fa-lg mr-[12px]"></i><a href="">Xe khách</a></li>
                    <li className="relative items-center flex pb-[5px] px-[40px] sm:px-[6px] md:px-[16px]"><i className="fa-solid fa-plane-up fa-lg mr-[12px]"></i><a href="">Máy bay</a>
                        <div className="absolute top-[-5px] left-[74%] bg-[#EB5757] rounded-[10px] px-[7px] text-[0.7rem] text-[#ffffff] sm:text-[0.5rem] sm:px-[4px]">-20k</div>
                    </li>
                    <li className="relative items-center flex pb-[5px] px-[40px] sm:px-[6px] md:px-[16px]"><i className="fa-solid fa-train-subway fa-lg mr-[12px]"></i><a href="">Tàu hỏa</a>
                        <div className="absolute top-[-5px] left-[74%] bg-[#EB5757] rounded-[10px] px-[7px] text-[0.7rem] text-[#ffffff] sm:text-[0.5rem] sm:px-[4px]">Mới</div>
                    </li>
                    <li className="relative items-center flex pb-[5px] px-[40px] sm:px-[6px] md:px-[16px]"><div className="inline-grid mr-[12px]"><i className="fa-solid fa-van-shuttle fa-flip-horizontal"></i><i className="fa-solid fa-motorcycle"></i></div><span className="mt-[4px]">Thuê xe</span><a className="h-full flex" href=""></a>
                        <div className="absolute top-[-5px] left-[74%] bg-[#EB5757] rounded-[10px] px-[7px] text-[0.7rem] text-[#ffffff] sm:text-[0.5rem] sm:px-[4px]">Mới</div>
                    </li>
                </ul>
            </div>

            <div className="flex sm:block mt-[14px] sm:mt-[10px] md:text-[0.9rem]">
                <div className="flex sm:block w-full rounded-[10px] border-[1px] border-[#E0E0E0]">
                    <div className="w-[25%] sm:w-[100%] sm:py-[5px] flex items-center map ml-[25px] sm:ml-[2px] md:ml-[2px]">
                        <div className="mr-[15px] sm:mx-[8px] md:mx-[8px] rounded-[100%] border-[#2474E5] w-[20px] h-[20px] sm:w-[15px] sm:h-[15px]  border-[7px] sm:border-[5px] bg-transparent"></div>
                        <div className="">
                            <p className="sm:text-[0.6rem]">Nơi xuất phát</p>
                            <p className="sm:text-[0.8rem]">Hà Nội</p>
                        </div>
                    </div>
                    <div className="w-[25%] sm:w-[100%] sm:py-[5px] flex items-center map ml-[25px] sm:ml-[2px] md:ml-[2px]">
                        <i className="fa-solid fa-location-dot fa-xl sm:text-[1.2rem] text-orange-600 mr-[15px] sm:mx-[8px] md:mx-[8px]"></i>
                        <div className="">
                            <p className="sm:text-[0.6rem]">Nơi xuất phát</p>
                            <p className="sm:text-[0.8rem]">Hà Nội</p>
                        </div>
                    </div>
                    <div className="w-[25%] sm:w-[100%] sm:py-[5px] flex items-center map ml-[25px] sm:ml-[2px] md:ml-[2px]">
                        <i className="fa-solid fa-calendar-days fa-xl sm:text-[1rem] mr-[15px] text-[#2474E5] sm:mx-[8px] md:mx-[8px]"></i>
                        <div className="">
                            <p className="sm:text-[0.6rem]">Ngày đi</p>
                            <p className="sm:text-[0.7rem]">T2  ,18/03/2024</p>
                        </div>
                    </div>
                    <div className="w-[25%] sm:w-[100%] sm:py-[5px] flex items-center ml-[25px] sm:ml-[2px] md:ml-[2px] ">
                        <div className="">
                            <p className=" sm:text-[0.8rem] sm:mx-[8px] text-[#2474E5] font-semibold md:mx-[8px]">Thêm ngày về</p>
                        </div>
                    </div>
                </div>

                <button className="w-[200px] md:w-[100px] sm:w-[100%] bg-yellow-400 rounded-[10px] sm:rounded-[4px] sm:h-[35px] ml-[15px] md:ml-[5px] sm:mx-[0] sm:mt-[10px] sm:text-[0.8rem]" >Tìm kiếm</button>
            </div>
            </>

    )
}

export default Map