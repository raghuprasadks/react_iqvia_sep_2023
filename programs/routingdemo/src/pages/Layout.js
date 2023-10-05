import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">eLearning</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" class="nav-link">Home</Link>          
        </li>
        <li class="nav-item">
        <Link to="/blogs" class="nav-link">Blogs</Link>
          
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
        </li>  

        <li class="nav-item">
        <Link to="/todos" class="nav-link">Todos</Link>
        </li>  
      </ul>
    </div>
  </div>
</nav>



      <Outlet />
    </>
  )
};


export default Layout