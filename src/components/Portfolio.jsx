

function Portfolio(){


    return(<>
    <nav className="navbar navbar-expand-lg bg-light shadow-sm px-4">
      <a className="navbar-brand fw-bold" href="#">
        MyWebsite
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
           </>);
}

export default Portfolio;