import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ALGO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ALGO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ALGO</a>
              </li>
            </ul>
            <span className="navbar-text">
             <Link className="ml-2" to={"/login"}>Log in</Link>
             <Link className="ml-1 " to={"/registro"}>Registrarse</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar