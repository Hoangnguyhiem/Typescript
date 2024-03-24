const FormPayUser = () => {
    return (
        <div className="max-w-[60%] sm:max-w-full md:max-w-full basis-[60%] shrink-0 group-0 px-[10px]">
            <div className=" bg-white p-[20px] rounded-[7px] border-[#e0e0e0] border-[1px] border-solid">
                <div className="w-full h-[60px] rounded-[5px] border-solid border-[1px] border-[#0d2e59] flex justify-between py-[20px] px-[10px] items-center">
                    <span className="text-[#0d2e59]">Đăng nhập để tự điền thông tin và nhận điểm khi đặt vé</span>
                    <button className="w-[150px] bg-[#0d2e59] text-white py-[8px] px-[20px] sm:px-[5px] rounded-[5px] font-[600]">Đăng nhập</button>
                </div>
                <p className="font-[700] my-[20px]">Thông tin liên hệ</p>
                <div className="flex flex-col justify-between">
                    <input type="text" placeholder="Tên người đi" className="w-full border-[1px] border-solid border-[#e0e0e0] rounded-[5px] h-[50px] p-[10px] mb-[15px]" />
                    <input type="text" placeholder="Tên người đi" className="w-full border-[1px] border-solid border-[#e0e0e0] rounded-[5px] h-[50px] p-[10px] mb-[15px]" />
                    <input type="text" placeholder="Tên người đi" className="w-full border-[1px] border-solid border-[#e0e0e0] rounded-[5px] h-[50px] p-[10px] mb-[15px]" />
                </div>
                <div className=" w-full h-[60px] rounded-[5px] border-solid border-[1px] border-[#27ae60] flex py-[20px] px-[10px] items-center bg-[#eefbf4]">
                    <i className="fa-solid fa-square-check mr-[10px] text-[#27ae60]"></i>
                    <span className="text-black ">Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và liên hệ khi cần thiết.</span>
                </div>
            </div>
            <div className="h-[60px] sm:h-[35px] rounded-[5px] flex items-center px-[20px] bg-[#ffd333]  font-[600] justify-center my-[10px]">Tiến hành thanh toán</div>
        </div>
    )
}

export default FormPayUser