import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import Myheader from "./myheader";
import Myfooter from "./myfooter";
function Enquiry() {
    const goto=useNavigate();
    const [name,setName]=useState("")
    const [city,setCity]=useState("")
    const [cnum,setCnum]=useState("")
    const [email,setEmail]=useState("")
    const [query,setQuery]=useState("")

    const submitenquiry = async (e) => {
        e.preventDefault()
        let na=document.getElementById("na").value;
        if(na=="")
        {
            alert('Please enter your name')
            document.getElementById("na").focus();
            return false;
        }
        let cit=document.getElementById("cit").value;
        if(cit=="")
        {
            alert('enter city name')
            document.getElementById("cit").focus();
            return false;
        }
        let cno=document.getElementById("cno").value;
        if(cno=="")
        {
            alert('Please enter your Contact Number')
            document.getElementById("cno").focus();
            return false;
        }
        if(cno.length!=10)
        {
            alert("Contact no. should be 10 digit")
            document.getElementById("cno").focus()
            return false
        }
        let em=document.getElementById("em").value;
        if(em=="")
        {
            alert('Please enter your Email Id')
            document.getElementById("em").focus();
            return false;
        }
        if (em == "") {
            alert('enter your Email Id')
            document.getElementById("em").focus();
            return false;
        }
        else{
             if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email))
           {
      
           }
       else{
           alert("Invalid E-mail Address! Please re-enter.");
            return false;
            }
        }
        let que=document.getElementById("que").value;
        if(query=="")
        {
            alert('Please enter your query')
            document.getElementById("que").focus();
            return false;
        }
        
           
        

        
        const fd = new FormData()
        fd.append('name', name)
        fd.append('city', city)
        fd.append('cnum', cnum)
        fd.append('email', email)
        fd.append('query', query)
        await axios.post('http://localhost/odsapi/enquirysubmit.php',fd).then((result)=>{
            if(result.data===1)
            {
                alert("Submitted Sucessfully");
                
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
                <form onSubmit={e=>submitenquiry(e)}>
                    <div class='row'>
                        <div class='col-3'></div>
                        <div class='col-6 mt-5 login'>
                            
                            <img src='img/enquiry.png' width={200} height={150}></img>
                            <div class="row mb-4">
                                <div class="col-6">
                                    <input type="text" class="form-control inp1" id='na'
                                    onChange={e=>setName(e.target.value)}
                                     placeholder="Your Name" required pattern="[a-zA-Z ]+" />
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control inp1" id='cit'
                                    onChange={e=>setCity(e.target.value)}
                                     placeholder="City Name" />
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col-6">
                                    <input type="text" class="form-control inp1" id='cno'
                                    onChange={e=>setCnum(e.target.value)}
                                     placeholder="Contact Number" />
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control inp1" id='em'
                                    onChange={e=>setEmail(e.target.value)}
                                     placeholder="Email ID" />
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col-12">
                                    <input type="text" class="form-control" id='que'
                                    onChange={e=>setQuery(e.target.value)}
                                     placeholder="Put your query.."/>
                                </div>
                               
                            </div>



                            
                           
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </div>




                </form>
            </div>
        </center>
        </body>
        <Myfooter/>
    </>
}
export default Enquiry;
