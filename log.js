
import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import Myheader from "./myheader";
import Myfooter from "./myfooter";
function Adminlogin() {
    const goto=useNavigate();
    const[login, setLogin]=useState({
        "uname":"",
        "passw":"",
    })
    const{uname, passw}=login;
    const handlechange=(e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    }
    sessionStorage.setItem('un',uname)
    sessionStorage.setItem('ps',passw)
    const checkuser=async(e)=>{
        e.preventDefault();
        let uname=document.getElementById("uname").value;
        if(uname=="")
        {
            alert('Please enter username')
            document.getElementById("uname").focus();
            return false;
        }
        let passw=document.getElementById("passw").value;
        if(passw=="")
        {
            alert('enter your password')
            document.getElementById("passw").focus();
            return false;
        }
        let login1=JSON.stringify(login);
        await axios.post('http://localhost/odsapi/validate_user.php',login1)
        .then((result)=>{
            if(result.data===1)
            {
              
                alert("Logged Sucessfully");
                goto('/admin');
            }
            else{
                alert("Sorry ! Error in code");
            }
        })
    }
    return <>
        <Myheader />
        <body class='logimg'>
        <center>
        
            <div class="container">
                <form onSubmit={e=>checkuser(e)}>
                    <div class='row'>
                        <div class='col-3'></div>
                        <div class='col-6 mt-5'>
                            <div class='login'>
                                <img src="img/ucon.jpg" width={100} height={100}></img>
                            <h3>LOGIN HERE...</h3><br/>
                            <div class="row mb-3">
                                <div class="col-sm-12">
                                    <input type="text" class="form-control inp" id="uname" name="uname" value={uname} 
                                    onChange={e=>handlechange(e)}
                                     placeholder="Username" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-12">
                                    <input type="password" class="form-control inp" id="passw"  name="passw" value={passw}
                                    onChange={e=>handlechange(e)} placeholder="Password" />
                                </div>
                            </div>


                            <button type="submit" class="btn btn-primary inp_btn">Sign in</button>
                            </div>
                            
                        </div>
                        
                    </div>




                </form>
            </div>
        </center>
        </body>
        <Myfooter/>
    </>
}
export default Adminlogin;
