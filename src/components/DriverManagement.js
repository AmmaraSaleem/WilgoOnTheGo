import React from 'react';
import Footer from '../layout/admin/Footer';
import Navbar from '../layout/admin/Navbar';
import Sidebar from '../layout/admin/Sidebar';
import { Link } from 'react-router-dom';
import userIcon from '../assets/admin/assets/img/UserIcon.jfif';

class DriverManagment extends React.Component {
    render() {


        return (
            <>
                <div className="sb-nav-fixed">
                    <Navbar />
                </div>
                <div class="d-flex" id="wrapper">

                    <Sidebar />

                    <div id="page-content-wrapper">



                        <div id="layoutSidenav_content">
                            <main>

                                <div class="container shadow p-3 mb-5 bg-white rounded">
                                    <div class="row">

                                        <div class="col-md-12 ">
                                        
                                           <button class="btn btn-success" id="sidebarToggle">Toggle Menu</button>
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                                            <h4 style={{ textAlign: "center" }}>DRIVERS MANAGEMENT</h4>
                                        </div>
                                    </div>

                                </div>
                                <div class="container-fluid   ">





                                    <div class="row "   >
                                        <div class="col-4" >
                                        </div>
                                        <div class="col-6" >
                                            <div class="card img-user" >
                                                <img src={userIcon} class="card-img-top" alt="Card image" />
                                                <div class="card-body">
                                                    <Link to="/driverRecord" class="btn btn-success btn-block">VIEW LIST OF DRIVERS</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>







                            </main>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        );
    }
}


export default DriverManagment;