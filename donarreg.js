

import axios from "axios";
import { useState } from "react";
import Myheader from "./myheader";
import Myfooter from "./myfooter";
function DonorRegistration() {
    const [dname, setdname] = useState("")
    const [Gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [cnum, setcnum] = useState("")
    const [email, setemail] = useState("")
    const [adr, setadr] = useState("")
    const [oname, setoname] = useState("")
    const [sbg, setsbg] = useState("")


    const submitdonar = async (e) => {
        e.preventDefault()
        let dna = document.getElementById("dna").value;
        if (dna == "") {
            alert('Please enter your Donar name')
            document.getElementById("dna").focus();
            return false;
        }

        if (document.getElementById("gen").checked == false && document.getElementById("gen1").checked == false) {
            alert('enter your gender')

            return false;
        }
        let ag = document.getElementById("ag").value;
        if (ag == "") {
            alert('enter your age')
            document.getElementById("ag").focus();
            return false;
        }

        let cno = document.getElementById("cno").value;
        if (cnum == "") {
            alert('enter your Contact number')
            document.getElementById("cno").focus();
            return false;
        }
        if(cno.length!=10)
        {
            alert("Contact no. should be 10 digit")
            document.getElementById("cno").focus()
            return false
        }
        let em = document.getElementById("em").value;
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
        let ad = document.getElementById("ad").value;
        if (ad == "") {
            alert('enter your Address')
            document.getElementById("ad").focus();
            return false;
        }
        let ona = document.getElementById("ona").value;
        if (ona == "") {
            alert('enter your Organ name')
            document.getElementById("ona").focus();
            return false;
        }
        let sb = document.getElementById("sb").value;
        if (sb == "") {
            alert('enter your Select blood group')
            document.getElementById("sb").focus();
            return false;
        }


        const fd = new FormData()
        fd.append('dname', dname)
        fd.append('Gender', Gender)
        fd.append('age', age)
        fd.append('cnum', cnum)
        fd.append('email', email)
        fd.append('adr', adr)
        fd.append('oname', oname)
        fd.append('sbg', sbg)



        await axios.post('http://localhost/odsapi/donarsubmit.php', fd).then((res) => {
            if (res.data === 1) {
                alert('Submitted successfully')
            }
            else {
                alert('sorry ! error in code')
            }
        })


    }
    return <>
        <Myheader />
        <body class='logimg'>
            <center>

                <div class="container">

                    <form onSubmit={e => submitdonar(e)}>
                        <div class='row'>
                            <div class='col-3'></div><br />
                            <h3> Donor Registration Form...</h3>
                            <div class='col-6 mt-5 donar'>


                                <div class="row mb-4">
                                    <div class="col-6">
                                        <input type="text" class="form-control inp1" id="dna"
                                            placeholder="Donor Name" required pattern="[a-zA-Z ]+"  onChange={e => setdname(e.target.value)} />
                                    </div>
                                    <div class="col-6">
                                        Gender:  <input type="radio" id="gen"
                                            placeholder="Gender" value='Male' onChange={e => setgender(e.target.value)} />Male
                                        <input type="radio" id="gen1"
                                            placeholder="Gender" value='Female' onChange={e => setgender(e.target.value)} />Female
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <input type="text" class="form-control inp1" id="ag"
                                            placeholder="Age" onChange={e => setage(e.target.value)} />
                                    </div>
                                    <div class="col-6">
                                        <input type="Number" class="form-control inp1" id="cno"
                                            placeholder="Contact Number" onChange={e => setcnum(e.target.value)} />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <input type="Email" class="form-control inp1" id="em"
                                            placeholder="Email ID" onChange={e => setemail(e.target.value)} />
                                    </div>
                                    <div class="col-6">
                                        <input type="textarea" class="form-control inp1" id="ad"
                                            placeholder="Address" onChange={e => setadr(e.target.value)} />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <input type="textarea" class="form-control inp1" id="ona"
                                            placeholder="Organ Name" onChange={e => setoname(e.target.value)} />
                                    </div>
                                    <div class="col-6">
                                        <select class='form-control inp1'  id='sb' onChange={e => setsbg(e.target.value)} >
                                            <option value={''}>Select Blood Group</option>
                                            <option value={'A+'}>A+</option>
                                            <option value={'O+'}>O+</option>
                                            <option value={'B+'}>B+</option>
                                            <option value={'AB+'}>AB+</option>
                                            <option value={'A-'}>A-</option>
                                            <option value={'O-'}>O-</option>
                                            <option value={'B-'}>B-</option>
                                            <option value={'AB-'}>AB-</option>

                                        </select>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                                                          

                                           


                    </form>
                </div>
            </center>
        </body>
        <Myfooter />
    </>
}
export default DonorRegistration;
