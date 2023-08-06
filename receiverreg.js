import axios from "axios";
import { useState } from "react";
import Myheader from "./myheader";
import Myfooter from "./myfooter";
import { useParams } from "react-router-dom";
function ReceiverRegistration() {
    const {oname}=useParams()
    const [pname, setpname] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [prob, setprob] = useState("")
    const [cnum, setcnum] = useState("")
    const [adr, setadr] = useState("")
    const [hname, sethname] = useState("")
    const [sbg, setsbg] = useState("")


    const submitReceiver = async(e) => {
        e.preventDefault()
       
        let pna = document.getElementById("pna").value;
        if (pna == "") {
            alert('Please enter your Patient Name')
            document.getElementById("pna").focus();
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
         let pro= document.getElementById("pro").value;
         if (pro == "") {
             alert('enter your Problem')
             document.getElementById("pro").focus();
             return false;
         }
        let cno = document.getElementById("cno").value;
         if (cno == "") {
             alert('enter your Contact Number')
             document.getElementById("cno").focus();
             return false;
         }
         if(cno.length!=10)
        {
            alert("Contact no. should be 10 digit")
            document.getElementById("cno").focus()
            return false
        }
         let ad = document.getElementById("ad").value;
         if (ad == "") {
             alert('enter your Address')
             document.getElementById("ad").focus();
             return false;
         }
         let hna = document.getElementById("hna").value;
         if (hna == "") {
             alert('enter Hospital Name')
             document.getElementById("hna").focus();
             return false;
         }
         let sb = document.getElementById("sb").value;
         if (sb == "") {
             alert('enter your Select Blood Group')
             document.getElementById("sbg").focus();
             return false;
         }








        const fd = new FormData()
        fd.append('pname', pname)
        fd.append('gender', gender)
        fd.append('age', age)
        fd.append('prob', prob)
        fd.append('orequire', oname)
        fd.append('cnum', cnum)
        fd.append('adr', adr)
        fd.append('hname', hname)
        fd.append('sbg', sbg)

        

        await axios.post('http://localhost/odsapi/receiversubmit.php', fd).then((res) => {
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
                        <form onSubmit={e=>submitReceiver(e)}>
                            <div class='row'></div>
                                <div class='col-4'></div>
                                <div class='col-11 mt-5 login'>
                                   
                                    <div class="col-6">
                                     <h2>   Your Selected Organ  : {oname} <br/><br/></h2>
                                          </div>

                                      <br/>  <h3> Fill Registration Form...</h3><br />
                            

                                    <div class="row mb-4">
                                        <div class="col-6">
                                            <input type="text" class="form-control" id="pna"
                                                placeholder="Patient Name" required pattern="[a-zA-Z ]+"  onChange={e => setpname(e.target.value)} />
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
                                            <input type="text" class="form-control" id="ag"
                                                placeholder="Age" onChange={e => setage(e.target.value)} />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" class="form-control" id="pro"
                                                placeholder="Problem" onChange={e => setprob(e.target.value)} />
                                        </div>
                                        </div>
                                    <div class="row mb-4">
                                        <div class="col-6">
                                            <input type="Number" class="form-control" id="cno"
                                                placeholder="Contact Number" onChange={e => setcnum(e.target.value)} />
                                        </div>
                                        <div class="col-6">
                                            <input type="textarea" class="form-control" id="ad"
                                                placeholder="Address" onChange={e => setadr(e.target.value)} />
                                        </div>
                                        </div>
                                    <div class="row mb-4">
                                        <div class="col-6">
                                            <input type="textarea" class="form-control" id="hna"
                                                placeholder="Hospital Name" onChange={e => sethname(e.target.value)} />
                                        </div>
                                        <div class="col-6">
                                            <select class='form-control' id='sb' onChange={e => setsbg(e.target.value)} >
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
                                    

                                        <div class="row mb-3">
                                        <div class="col-4"></div>
                                        <div class="col-4">
                                    <button type="submit" class="btn btn-primary col-2">ADD</button>
                                    </div>
                                    </div>
                                </div>
                                
                        




                        </form>
                    </div>
                    
                </center>
            </body>
            <Myfooter />
        </>
}
export default ReceiverRegistration;
