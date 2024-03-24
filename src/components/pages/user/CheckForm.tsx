const CheckForm = () => {
    return (
        <div className="max-w-[25%] sm:max-w-full basis-[25%] shrink-0 group-0 px-[10px] sm:pb-[10px] sm:text-[0.8rem] md:text-[0.8rem]">
            <div className="w-full bg-white rounded-[10px] py-[15px]">
                <p className=" px-[19px] font-[700] text-[0.9rem]">Sắp xếp</p>
                <div className="">
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Mặc định</label>
                    </div>
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Giờ đi sớm nhất</label>
                    </div>
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Giờ đi muộn nhất</label>
                    </div>
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Đánh giá cao nhất</label>
                    </div>
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Giá tăng dần</label>
                    </div>
                    <div className="m-[18px] md:my-[10px] sm:my-0 flex items-center">
                        <input className="mr-[10px] w-[19px] sm:w-[12px] md:w-[15px] h-[19px] sm:h-[12px]" type="radio" name="name" id="" />
                        <label htmlFor="">Giá giảm dần</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckForm