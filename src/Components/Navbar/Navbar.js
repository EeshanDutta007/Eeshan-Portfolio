import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-scroll'
import './navbar.scss'




const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#">EESHAN DUTTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="ml-auto">
        <Link className='secLink' to="employment" smooth={true}>EMPLOYEMENT</Link>
          <Link className='secLink' to="achie" smooth={true}>ACHIEVEMENTS</Link>
          <Link className='secLink' to="marks" smooth={true}>MARKS</Link>
          <Link className='secLink' to="cocum" smooth={true}>CO-CURRICULARS</Link>
          <Link className='secLink' to="projects" smooth={true}>PROJECTS</Link>
        </nav>
        </Navbar.Collapse>
    </Navbar>
  )
}




        



export default NavbarComponent