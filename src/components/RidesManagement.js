import React from 'react';
import Footer from '../layout/admin/Footer'
import Navbar from '../layout/admin/Navbar'
import Sidebar from '../layout/admin/Sidebar';
import { Link } from 'react-router-dom';
import userIcon from '../assets/admin/assets/img/UserIcon.jfif';

const RidesManagement = () => {
    return (
        <>
            <div className="sb-nav-fixed">
                    <Navbar />
                </div>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Sidebar />

                    </div>
                    <div id="layoutSidenav_content">
                        <main>

                            <div class="container shadow p-3 mb-5 bg-white rounded">
                                <div class="row">

                                    <div class="col-md-12 ">
                                        <h4 style={{textAlign:"center"}}>RIDES MANAGEMENT</h4>
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
                                                <Link to="/ridesRecord" class="btn btn-success btn-block">VIEW LIST OF RIDES</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                        </main>
                        <Footer />
                    </div>
                </div>


        </>
    );
}

export default RidesManagement;