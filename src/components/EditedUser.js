
import React from 'react';
import Navbar from '../layout/admin/Navbar';


const EditedUser = () => {
    return (
        <>


            <Navbar />


            <div class="container-fluid shadow p-3 mb-5 bg-white rounded">
                <div class="row">
                    <div class="col-md-9">
                        <h2 class="heading" >EDIT USER RECORD</h2>
                    </div>

                </div>

            </div>


            <form action="editEmp.php" method="POST" class="px-5 mx-auto col-9 d-block mb-5 ">
                <input type="hidden" name="empId" value="" />
                <div class="form-group">
                    <label for="empname">Employee Name: </label>
                    <input type="text" class="form-control" placeholder="Enter employee name" id="empname" name="empname" value="" />
                </div>


                <div class="form-group">
                    <label for="dateofbirth">Date OF Birth: </label>
                    <input type="text" class="form-control" placeholder="Enter date of birth" id="dateofbirth" name="dateofbirth" value="" />
                </div>
                <div class="form-group">
                    <label for="dateofjoining">Date OF Joining: </label>
                    <input type="text" class="form-control" placeholder="Enter date of joining" id="dateofjoining" name="dateofjoining" value="" />
                </div>
                <br />
                <button type="submit" class="btn btn-success ">Submit</button>

            </form>



        </>
    );
}

export default EditedUser;













