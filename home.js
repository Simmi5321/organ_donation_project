import Myfooter from "./myfooter";
import Myheader from "./myheader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
    const [organ, setOrgan] = useState([]);
    useEffect(() => {
        loadOrgan();
    }, [])
    const loadOrgan = async () => {
        const result = await axios.get("http://localhost/odsapi/vieworgan.php");
        setOrgan(result.data.records);
    }
    const imgurl = 'http://localhost/odsapi/upload/'
    return <>
        <body className="home">
            <Myheader/>
            <center>
                            <br /><h2>Organs Available Here...</h2> <br />
                <div className="container">

                        {organ.map((organ, index) => (
                            <div class='row myrow'>
                                <div class='col-md-3'>
                                <img src={imgurl + organ.img} width={200} height={200} className="organimg"></img>
                                </div>
                                <div class='col-md-6'>
                                    
                                <br/> <h2 className="font1"><b>Organ Name</b> : {organ.oname}</h2>
                                <br/>  <h2 className="font1"><b>Quantity</b> : {organ.quan}</h2>
                                </div>
                                 <div class='col-md-3'>
                                 <br/> <br/> <br/>
                                 <Link to={'/receiverreg/' + organ.oname}>
                                    <img src='/img/apply.gif'></img>
                                 </Link>
                                </div>
                            </div>
                           

                        ))}
            
                </div>
            
            <Myfooter />
            </center>

        </body>
        
    </>
}
export default Home;


