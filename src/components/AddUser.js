
import React from 'react';
import Navbar from '../layout/admin/Navbar';


const AddUser = () => {
    return (
        <>


            <Navbar />


            <div class="container-fluid shadow p-3">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="heading">ADD USER RECORD</h2>
                    </div>

                </div>

            </div>


            <form action="" method="POST" class="px-5 py-5 mx-auto d-block mb-5 col-9 my-5 rounded  " >
                <fieldset >
                    <legend></legend>
                    <div class="form-group">
                        <label for="empname">Employee Name:</label>
                        <input type="text" class="form-control" placeholder="Enter employee name" id="empname" name="empname" />
                    </div>


                    <div class="form-group">
                        <label for="dateofbirth">Date OF Birth:</label>
                        <input type="text" class="form-control" placeholder="Enter date of birth" id="dateofbirth" name="dateofbirth" />
                    </div>
                    <div class="form-group">
                        <label for="dateofjoining">Date OF Joining:</label>
                        <input type="text" class="form-control" placeholder="Enter date of joining" id="dateofjoining" name="dateofjoining" />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-success btn-block ">Submit</button>
                </fieldset>
            </form>



        </>
    );
}

export default AddUser;













