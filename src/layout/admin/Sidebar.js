import { render } from '@testing-library/react';
import React from 'react';
import "../../style.css"
import { Link } from 'react-router-dom';
import logo5 from '../../assets/admin/assets/img/logo5.jpg';
import logo1 from '../../assets/admin/assets/img/logo1.jpg';
class Sidebar extends React.Component {
    render() {

        const mystyle = {
            height: "100%",
            backgroundColor: "black",

        };
        const logo = {
            width: "100px",
            margin: "auto",
            marginTop: "10px"


        };

        return (



            <>





                <div class="border-end " id="sidebar-wrapper"style={mystyle} >
    
                    <div class="list-group list-group-flush">

                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion" style={{backgroundColor:"black"}} >
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <img src={logo1} style={logo} class="rounded-circle" />
                                    <div class="sb-sidenav-menu-heading">Core</div>
                                    <a class="nav-link" href="index.html">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                                    </a>

                                    <Link class="nav-link collapsed" to="/userManagament" >
                                        <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                                        USER MANAGEMENT
                                        <div class="sb-sidenav-collapse-arrow"><i class=""></i></div>
                                    </Link>

                                    <Link class="nav-link collapsed" to="/driverManagement">
                                        <div class="sb-nav-link-icon"><i class="fa fa-drivers-license"></i></div>
                                        DRIVER MANAGEMENT
                                        <div class="sb-sidenav-collapse-arrow"><i class=""></i></div>
                                    </Link>
                                    <Link class="nav-link collapsed" to="/ridesManagement" >
                                        <div class="sb-nav-link-icon"><i class="fa fa-car"></i></div>
                                        RIDER MANAGEMENT
                                        <div class="sb-sidenav-collapse-arrow"><i class=""></i></div>
                                    </Link>
                                    <Link class="nav-link collapsed" to="/FareMangement" >
                                        <div class="sb-nav-link-icon"><i class="fas fa-hand-holding-usd"></i></div>
                                        FARE MANAGEMENT
                                        <div class="sb-sidenav-collapse-arrow"><i class=""></i></div>
                                    </Link>


                                </div>
                            </div>

                        </nav>
                    </div>
                </div>






            </>

        );
    }
}
export default Sidebar;