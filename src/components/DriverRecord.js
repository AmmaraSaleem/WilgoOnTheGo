import React from 'react';
import Footer from '../layout/admin/Footer'
import Navbar from '../layout/admin/Navbar'
import Sidebar from '../layout/admin/MasterLayout';
import { Link } from 'react-router-dom';

const DriverRecord = () => {
    return (
        <>
            <div className="sb-nav-fixed">
                <Navbar />
            </div>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <div className="sb-sidenav accordion sb-sidenav-dark " id="sidenavAccordion">
                        <div className="sb-sidenav-menu ">
                            <div className="nav">
                                <br />
                                {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                                <Link to="" className="nav-link collapsed" >
                                    <div className="sb-nav-link-icon display-3"><i className="fas fa-user"></i></div>
                                    Add Drivers

                                </Link>
                                <Link to="" className="nav-link collapsed" >
                                    <div className="sb-nav-link-icon display-3"><i className="fas fa-user"></i></div>
                                    Send  Credentials To Drivers

                                </Link>
                                <Link class="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Manage Time Log Of Drivers
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </Link>
                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <Link class="nav-link" to="layout-static.html">View Working Hours</Link>
                                        <Link class="nav-link" to="layout-static.html">Edit Working Hours</Link>

                                    </nav>
                                </div>
                                <Link to="/userManagament" className="nav-link collapsed" >
                                    <div className="sb-nav-link-icon display-3"><i className="fas fa-user"></i></div>
                                    Activate Drivers

                                </Link>

                            </div>
                        </div>

                    </div>

                </div>
                <div id="layoutSidenav_content">
                    <main>

                        <div class="container shadow p-3 mb-5 bg-white rounded">
                            <div class="row">

                                <div class="col-md-12">
                                    <h4 style={{ textAlign: "center" }}>DRIVERS RECORD</h4>
                                </div>
                            </div>

                        </div>


                        <div class="container">
                            <div class="container-fluid auto">
                                <div class="row">
                                    <div class="col-12 table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                        <table class="table table-bordered  table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">User Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone No</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Atiqa</td>
                                                    <td>atiqa@gmail.com</td>
                                                    <td>45678899</td>
                                                    <td>gulberg</td>
                                                    <td>

                                                        {/* <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button> */}
                                                        <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                                                        <button type="button" class="btn btn-danger" style={{ marginLeft: "20px" }}><i class="far fa-trash-alt"></i></button>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
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

export default DriverRecord;