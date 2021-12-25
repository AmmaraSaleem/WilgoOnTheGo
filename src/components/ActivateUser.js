import React from 'react';
import "../style.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import Navbar from '../layout/admin/Navbar';
// import "@fortawesome/fontawesome-free/css/all.main.css"


class ActivateUser extends React.Component {
    // state = {
    //     switch1: true,
    //     switch2: false
    //   }
    //   handleSwitchChange = nr => () => {
    //     let switchNumber = `switch${nr}`;
    //     this.setState({
    //       [switchNumber]: !this.state[switchNumber]
    //     });
    //   }
    render() {






        return (
            <>
             <div className="sb-nav-fixed">
                <Navbar />
            </div>
            <div class="container-fluid shadow p-3 mb-5 bg-white rounded">
                <div class="row">
                    <div class="col-md-9">
                        <h2 class="heading" style={{fontWeight:"bold"}}>ACTIVATE USER </h2>
                    </div>

                </div>

            </div>
               


               

                <div class="container-fluid mt-5">
                    <div class="d-flex justify-content-center row">
                        <div class="col-md-10">
                            <div class="rounded">
                                <div class="table-responsive table-borderless">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="text-center">

                                                </th>
                                                <th>User</th>
                                                <th>Email</th>
                                                <th>status</th>
                                                <th></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            
                                            <tr class="cell-1">
                                                <td class="text-center">
                                                    <div className='custom-control custom-switch'>
                                                        <input
                                                            type='checkbox'
                                                            className='custom-control-input'
                                                            id='customSwitches3'
                                                            readOnly
                                                        />
                                                        <label className='custom-control-label' htmlFor='customSwitches3'>

                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Atiqa</td>
                                                <td>atiqa@gmail.com</td>
                                                <td><span class="badge badge-info">Confirmed</span></td>
                                                
                                                <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                            </tr>
                                            <tr class="cell-1">
                                                <td class="text-center">
                                                    <div className='custom-control custom-switch'>
                                                        <input
                                                            type='checkbox'
                                                            className='custom-control-input'
                                                            id='customSwitches2'
                                                            readOnly
                                                        />
                                                        <label className='custom-control-label' htmlFor='customSwitches2'>

                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Ammara</td>
                                                <td>ammara@gmail.com</td>
                                                <td><span class="badge badge-danger">Partially shipped</span></td>
                                               
                                                <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                            </tr>
                                            <tr class="cell-1">
                                                <td class="text-center">
                                                    <div className='custom-control custom-switch'>
                                                        <input
                                                            type='checkbox'
                                                            className='custom-control-input'
                                                            id='customSwitches1'
                                                            readOnly
                                                        />
                                                        <label className='custom-control-label' htmlFor='customSwitches1'>

                                                        </label>
                                                    </div>
                                                </td>

                                                <td>Amna</td>
                                                <td>amna@gmail.com</td>
                                                <td><span class="badge badge-success">Fullfilled</span></td>
                                                
                                                <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default ActivateUser;