import './dashboard.css'
import Dashboard from './dashboard/page';
import SideBar from './component/sidebar/SideBar';
import Footer from '@/app/component/footer/Footer'

export default function page() {
    return (
        <>
        <div className='d-flex flex-row align-items-center w-100'>
            <SideBar></SideBar>
            <Dashboard></Dashboard>
        </div>
        <Footer></Footer>
        </>
    )
}
