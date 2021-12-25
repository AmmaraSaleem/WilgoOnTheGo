import React from 'react';
import Footer from '../layout/admin/Footer';
import Navbar from '../layout/admin/Navbar';
import Sidebar from '../layout/admin/MasterLayout';
import "../../src/style.css"
import { Link } from 'react-router-dom';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import '../../assets/admin/css/styles.css';
// import '../../assets/admin/js/scripts';
const UserRecord = () => {
    // render(){

    //     const mystyle={

    //     }
    // };
    return (
        <>
            <div className="sb-nav-fixed">
                <Navbar />
            </div>
            <div id="layoutSidenav">


            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid shadow p-3 mb-5 bg-white rounded">
                                <div class="row">

                                    <div class="col-md-12">
                                        <h4 style={{ textAlign: "center" }}>USERS RECORDS</h4>
                                    </div>
                                </div>

                            </div>
                    <div class="container-fluid   ">
                       


                       

                        <div class="row">

                            <div class="col-md-6 p-3 mb-5 ">
                                <Link to="/AddUser" class="btn btn-success">Add New User</Link>
                                <Link to="/ActivateUser" class="btn btn-success " style={{ marginLeft: "15px" }}>Activate User</Link>
                            </div>
                        </div>



                        <div class="container-fluid auto">
                            <div class="row">
                                <div class="col-12 table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                    <table class="table table-bordered table-striped mb-0">
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
                                                        <Link to="/EditedUser"> <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></Link>
                                                        <button type="button" class="btn btn-danger" style={{marginLeft:"20px"}}><i class="far fa-trash-alt"></i></button>
                                                   
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>


            </div >

        </>
    );
}

export default UserRecord;