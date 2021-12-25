import React from 'react';
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
const  Footer =()=>{

    render()
    {
  
      const BackgroundColor = {
          backgroundColor:"#6BC62F",
          
          
  
      };
    
    return(
      <footer class="py-3  mt-auto"style={BackgroundColor} >
                    <div class="container-fluid px-3" >
                        <div class="d-flex align-items-center justify-content-between small" style={{fontSize:"15px",color:"gray"}}>
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
               </footer>
                );
    
}

}

export default Footer;