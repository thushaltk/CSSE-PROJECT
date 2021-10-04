import React  from 'react';
import { Route, Switch } from 'react-router';
import ProcumentStaffLogin from './components/auth/ProcumentStaffLogin';
import SiteManagerlogin from './components/auth/SiteManagerlogin';
import SupplierRegister from './components/auth/SupplierRegister';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';
import ProcumentStaffDashboard from './components/procument-staff/ProcumentStaffDashboard';
import ProcumentStaffItems from './components/procument-staff/ProcumentStaffItems';
import ProcumentStaffOrders from './components/procument-staff/ProcumentStaffOrders';
import ProcumentStaffSuppliers from './components/procument-staff/ProcumentStaffSuppliers';
import SiteManagerDashboard from './components/sitemanager/SiteManagerDashboard';

export default function Router(){

    return(
        <Switch>
            <Route path="/" exact>
                <Header/>
                <LandingPage/>
                <Footer/>
            </Route>
            <Route path="/site-manager-login" exact>
                <Header/>
                <SiteManagerlogin/>
                <Footer/>
            </Route>
            <Route path="/site-manager-dashboard" exact>
                <Header/>
                <SiteManagerDashboard/>
                <Footer/>
            </Route>
            <Route path="/procument-staff-login" exact>
                <Header/>
                <ProcumentStaffLogin/>
                <Footer/>
            </Route>
            <Route path="/supplier-register" exact>
                <Header/>
                <SupplierRegister/>
                <Footer/>
            </Route>
            <Route path="/procument-staff-orders" exact>
                <Header/>
                <ProcumentStaffOrders/>
                <Footer/>
            </Route>
            <Route path="/procument-staff-dashboard" exact>
                <Header/>
                <ProcumentStaffDashboard/>
                <Footer/>
            </Route>
            <Route path="/procument-staff-suppliers" exact>
                <Header/>
                <ProcumentStaffSuppliers/>
                <Footer/>
            </Route>
            <Route path="/procument-staff-items" exact>
                <Header/>
                <ProcumentStaffItems/>
                <Footer/>
            </Route>
        </Switch>
    );
}