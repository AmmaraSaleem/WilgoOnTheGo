import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom'
import logo5 from '../../assets/admin/assets/img/logo5.jpg';
import logo1 from '../../assets/admin/assets/img/logo1.jpg';

const  Navbar =()=>{
  render()
  {

    const Color = {
        backgroundColor:"#6BC62F",
        

    };
    const logo = {
      width: "100px",
      margin: "auto",
      marginTop: "10px"


  };

    return(
      <>
      <div class="collapse" id="navbarToggleExternalContent">
      <div class=" p-4" style={Color}>
        <h5 class="text-white h4"><img src={logo1} style={logo} class="rounded-circle"/></h5>
        
      </div>
    </div>
    <nav class="navbar navbar-dark "style={Color}>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
       
        </button>
        <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link"><span style={{marginRight:"20px", fontWeight:"bold"}}>Admin</span><i style={{color:"gray"}}class="fas fa-users-cog fa-2x"></i></a>
            </div>
      </div>
      </nav>
      </>
    );
}
  }

export default Navbar;