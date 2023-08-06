import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import'./style.css';

function Myheader()
{
    return<>
    <nav class="navbar navbar-expand-lg header1">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"><img src='/img/logo.png'/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
       
        <li class="nav-item">
          <Link class="nav-link" to="/donarreg">Donor Registration</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About ODS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/enquiry">Help & Support</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</>
}
export default Myheader;