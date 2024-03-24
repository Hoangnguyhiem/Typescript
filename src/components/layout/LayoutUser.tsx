import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {
    return (
        <div className="max-w-full">

            <Header />

            <Outlet />

            <Footer />

        </div>
    )
}

export default LayoutUser