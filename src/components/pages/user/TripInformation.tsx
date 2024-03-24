

const TripInformation = () => {
    return (
        <div className="max-w-[40%] sm:max-w-full md:max-w-full basis-[40%] shrink-0 group-0 sm:text-[0.8rem]">
            <div className=" px-[10px] mb-[15px] sm:mb-[10px]">
                <div className="bg-white rounded-[7px] p-[20px] sm:p-[10px] border-[#e0e0e0] border-[1px] border-solid">
                    <div className="flex justify-between mb-[5px]">
                        <p className="font-[700]">Tạm tính</p>
                        <div className="flex">
                            <p className="font-[700] mr-[15px] sm:text-[0.9rem]">230.000đ</p>
                            <i className="fa-solid fa-angle-right fa-rotate-270"></i>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <p>Giá vé</p>
                            <p className="font-[600]">230.000đ x 1</p>
                        </div>
                        <span className="flex justify-end text-[0.8rem] sm:text-[0.6rem] text-[#858585]">Mã ghế/giường: 09</span>
                    </div>
                </div>
                <div className="p-[20px] sm:p-[10px] bg-white mt-[15px] sm:mt-[10px] rounded-[7px] border-[#e0e0e0] border-[1px] border-solid">
                    <p className="my-[15px] font-[700] text-[0.9rem]">Thông tin chuyến đi</p>
                    <div className="rounded-[7px] border-solid border-[#e0e0e0] border-[1px]">
                        <div className="flex justify-between p-[10px] border-solid border-[#e0e0e0] border-b-[1px]">
                            <div className="flex items-center">
                                <i className="fa-solid fa-bus text-[#2474e5] mr-[5px]"></i>
                                <p>T6, 22/03/2024</p>
                                <i className="fa-regular fa-user fa-xs ml-[10px] text-[#858585]"></i>
                                <span className="text-[0.8rem] text-[#858585]">1</span>
                            </div>
                            <a href="" className="text-[#2474e5] font-[600]">Chi tiết</a>
                        </div>
                        <div className="p-[10px]">
                            <div className="flex items-center  border-solid border-[#e0e0e0] border-b-[1px]">
                                <div className="w-[50px] mr-[10px]">
                                    <div className="bg-center bg-no-repeat bg-contain pt-[60%]" style={{ backgroundImage: "url('../src/assets/image/1689135259785.jpeg')" }}></div>
                                </div>
                                <div className="">
                                    <p>Hải phòng travel (Đất Cảng)</p>
                                    <p>Limousine 11 chỗ</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="relative flex items-center my-[10px]">
                                    <div className="w-[55px]">
                                        <p>19:00</p>
                                        <p className="text-[0.7rem]">(22/03)</p>
                                    </div>
                                    <div className="mx-[15px] rounded-[100%] border-[#2474E5] w-[12px] h-[12px] border-[4px] bg-transparent"></div>
                                    <div className="flex justify-between items-center w-[330px]">
                                        <div className="">
                                            <p>Hà Nội</p>
                                            <p className="text-[0.7rem]">Số 79 đường Cổ Linh, Long Biên, Hà Nội</p>
                                        </div>
                                        <a href="" className="ml-[10px] text-[#2474e5] font-[600]">Thay đổi</a>
                                    </div>
                                    <div className="absolute h-[30px] w-[1px] bg-slate-400 top-[73%] left-[17.8%]"></div>
                                </div>
                                <div className="flex items-center my-[10px]">
                                    <div className="w-[55px]">
                                        <p>19:00</p>
                                        <p className="text-[0.7rem]" >(22/03)</p>
                                    </div>
                                    <i className="mx-[15px] fa-solid fa-location-dot fa-2sx text-orange-600 mr-[15px]"></i>
                                    <div className="flex justify-between items-center w-[330px]">
                                        <div className="">
                                            <p>Hà Nội</p>
                                            <p className="text-[0.7rem]">Số 79 đường Cổ Linh, Long Biên, Hà Nội</p>
                                        </div>
                                        <a href="" className="ml-[10px] text-[#2474e5] font-[600]">Thay đổi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             

            </div>
        </div>
    )
}

export default TripInformation