'use client'
import './dashboard/dashboard.css'
import SideBar from './component/sidebar/SideBar';
import Footer from './component/footer/Footer'
import DashboardBase from './component/DashboardBase/DashboardBase.tsx';

export default function page() {
    return (
        <>
            <div className='d-flex flex-row align-items-stretch w-100'>
                {/* <SideBar /> */}
                <DashboardBase />
            </div>
            <Footer />
        </>
    )
}