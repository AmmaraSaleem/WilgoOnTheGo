import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar'
import Sidebar from './Sidebar';

const MasterLayout = () => {
    return (
        <>
            <div className="sb-nav-fixed">
                <Navbar />
            </div>
            {/* <div id="layoutSidenav">
                <div id="layoutSidenav_nav">

                    <Sidebar />
                    </div>

                    <div id="layoutSidenav_content">
                        <main> */}
            {/* <Routes>
                            {
                                routes.map((route, idx) => {
                                    return (
                                        route.Component && (
                                            <Route
                                            
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props)=>(

                                                <route.Component{...props}/>
                                            )}/>
                                        )
                                    )
                                })
                            }
                            <Navigate from="admin" to="/admin/dashboard"/>
                        </Routes> */}

            <div class="d-flex" id="wrapper">

                <Sidebar/>

                <div id="page-content-wrapper">

                    <nav class="navbar navbar-expand-lg navbar-light  border-bottom">
                        <div class="container-fluid">
                            <button class="btn btn-success" id="sidebarToggle">Toggle Menu</button>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                        </div>
                    </nav>

                    <div class="container-fluid px-4">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
                <div class="row">
                    <div class="col-xl-1 col-md-4">
                        <div class="card  text-white mb-4" style={{ backgroundColor: "rgb(339,139,39)" }}>
                            <div class="card-body " ><span style={{ marginLeft: "40px", fontSize: "20px", color: "white" }}>TOTAL RIDERS </span></div>
                            <div class="card-body " ><i className="fa fa-car fa-5x"></i><span style={{ marginLeft: "30px", fontSize: "50px" }}>12 </span></div>


                            <div class="card-footer d-flex align-items-center justify-content-between">

                            </div>

                        </div>
                    </div>
                    <div class="col-xl-1 col-md-4">
                        <div class="card bg-primary text-white mb-4">
                            <div class="card-body " ><span style={{ marginLeft: "40px", fontSize: "20px", color: "white" }}>TOTAL USERS </span></div>
                            <div class="card-body " ><i className="fas fa-user fa-5x"></i><span style={{ marginLeft: "30px", fontSize: "50px" }}>23 </span></div>


                            <div class="card-footer d-flex align-items-center justify-content-between">

                            </div>

                        </div>
                    </div>
                    <div class="col-xl-1 col-md-4">
                        <div class="card  text-white mb-4" style={{ backgroundColor: "rgb(339,139,239)" }}>
                            <div class="card-body " ><span style={{ marginLeft: "40px", fontSize: "20px", color: "white" }}>TOTAL DRIVERS </span></div>
                            <div class="card-body " ><i className="fa fa-drivers-license fa-5x"></i><span style={{ marginLeft: "30px", fontSize: "50px" }}>29 </span></div>


                            <div class="card-footer d-flex align-items-center justify-content-between">

                            </div>

                        </div>
                    </div>



                </div>
            </div>
          

                </div>

            </div>
            <Footer />










            {/* </main>
                        <Footer />


                    </div>


                </div>
             */}

        </>
    );
}

export default MasterLayout;