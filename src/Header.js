import {Navbar , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {


    return(
        <div> 
            <Navbar bg="dark" variant="dark">
       
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link  to='update'>Update</Link>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
            <Link to='addproduct'>AddProduct</Link>
          </Nav>
       
      </Navbar>
              
        </div>
    )
    
}

export default Header