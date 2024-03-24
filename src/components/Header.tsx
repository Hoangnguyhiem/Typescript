import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed z-[1] w-[100%]" >
      <div className="max-w-full bg-[#2474E5] h-[60px] sm:h-[50px] flex px-[15px]">
        <div className="justify-between	flex w-[100%] items-center">
          <Link to={`/`}
            className="w-[130px] sm:w-[80px] md:w-[90px] sm:h-[20px] md:h-[25px] h-[35px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('../src/assets/image/Ảnh chụp màn hình 2024-03-19 173730.png')", }}
          ></Link>
          <ul className="flex text-[1rem] text-[#ffffff] sm:hidden md:text-[0.8rem]">
            <li>
              <a className="p-[10px]" href="">Quản lý đơn hàng</a>
            </li>
            <li>
              <a className="p-[10px]" href="">Mở bán vế xe Vexere</a>
            </li>
            <li>
              <a className="p-[10px]" href="">Trở thành đối tác</a>
            </li>
          </ul>
        </div>
        <div className="flex ml-[60px] md:ml-[0px] md:text-[0.8rem]">
          <button className="bg-[#ffffff] hover:bg-[#FFD333] text-black font-semibold px-[10px] m-[10px] md:mx-[5px] rounded">Hotline24/7</button>
          {/* <i class="fa-solid fa-phone"></i> */}
          <button className="bg-[#ffffff] hover:bg-[#FFD333] text-black font-semibold px-[10px] my-[10px] rounded">Hotline24/7</button>
        </div>
      </div>
    </header>
  )
}

export default Header