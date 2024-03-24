import { Link } from "react-router-dom"

const Cars = () => {
  return (
    <div className="flex mx-[-10px] sm:mx-[8px] md:mx-[10px] box-border flex-wrap">
      <Link to={`/tickit`} className="flex-wrap max-w-[25%] sm:max-w-[50%] basis-[25%] sm:basis-[50%] shrink-0 grow-0 px-[10px] sm:px-[4px] md:px-[8px] sm:mb-[8px]">
        <div className=" rounded-[10px] sm:rounded-[5px] truncate">
          <div className="pt-[50%] md:pt-[55%] bg-center bg-cover bg-no-repeat " style={{ backgroundImage: "url('../src/assets/image/b0289cedc667a185504df5760461481b.png')", }}></div>
          <div className="bg-[#9E947C] p-[15px] sm:p-[5px] pb-[50px] sm:pb-[10px] md:pb-[20px] text-[0.9rem]">
            <p className="sm:text-[0.8rem]">Sài Gòn - Nha Trang</p>
            <p className="sm:text-[0.8rem]">Từ 200.000đ <sup className="line-through sm:text-[0.8rem]">250.000đ</sup></p>
          </div>
        </div>
      </Link>

      <Link to={`/tickit`} className="flex-wrap max-w-[25%] sm:max-w-[50%] basis-[25%] sm:basis-[50%] shrink-0 grow-0 px-[10px] sm:px-[4px] md:px-[8px] sm:mb-[8px]">
        <div className=" rounded-[10px] sm:rounded-[5px] truncate">
          <div className="pt-[50%] md:pt-[55%] bg-center bg-cover bg-no-repeat " style={{ backgroundImage: "url('../src/assets/image/b0289cedc667a185504df5760461481b.png')", }}></div>
          <div className="bg-[#9E947C] p-[15px] sm:p-[5px] pb-[50px] sm:pb-[10px] md:pb-[20px] text-[0.9rem]">
            <p  className="sm:text-[0.8rem]">Sài Gòn - Nha Trang</p>
            <p  className="sm:text-[0.8rem]">Từ 200.000đ <sup className="line-through sm:text-[0.8rem]">250.000đ</sup></p>
          </div>
        </div>
      </Link>

      <Link to={`/tickit`} className="flex-wrap max-w-[25%] sm:max-w-[50%] basis-[25%] sm:basis-[50%] shrink-0 grow-0 px-[10px] sm:px-[4px] md:px-[8px] sm:mb-[8px]">
        <div className=" rounded-[10px] sm:rounded-[5px] truncate">
          <div className="pt-[50%] md:pt-[55%] bg-center bg-cover bg-no-repeat " style={{ backgroundImage: "url('../src/assets/image/b0289cedc667a185504df5760461481b.png')", }}></div>
          <div className="bg-[#9E947C] p-[15px] sm:p-[5px] pb-[50px] sm:pb-[10px] md:pb-[20px] text-[0.9rem]">
            <p  className="sm:text-[0.8rem]">Sài Gòn - Nha Trang</p>
            <p  className="sm:text-[0.8rem]">Từ 200.000đ <sup className="line-through sm:text-[0.8rem]">250.000đ</sup></p>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Cars