import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import Myheader from "./myheader";
import Myfooter from "./myfooter";
function AboutUs() {
    const goto=useNavigate();
    const [name,setName]=useState("")
    const [city,setCity]=useState("")
    const [cnum,setCnum]=useState("")
    const [email,setEmail]=useState("")
    const [query,setQuery]=useState("")


    const submitaboutus = async (e) => {
        const fd = new FormData()
        fd.append('name', name)
        fd.append('city', city)
        fd.append('cnum', cnum)
        fd.append('email', email)
        fd.append('query', query)
        await axios.post('http://localhost/odsapi/aboutussubmit.php',fd).then((result)=>{
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
                <form onSubmit={e=>submitaboutus(e)}>
                    <div class='row'>
                        <div class='col-12 mt-5'><br/>
                        
<h3>About ODS</h3><br/>
<p className="txt1"><b>Overview</b> : 
The Health & Family Welfare Department of Assam is one of the vital departments under the Govt of Assam 
and it is located at the Assam<br/> Secretariat Block-D, Dispur
, Guwahati. For administrative convenience, the Health and Family Welfare Department of Assam has been <br/>
 into two divisions – Health-A and Health-B. All hospitals and health institutions
  apart from the Medical and Nursing Colleges come under Health-A. Whereas all Medical Colleges
   and Nursing Colleges are under Health-B. The Department comprises of nine sub organizations/directorates – Director of Health Services, Director of Health Services (FW), Director of Medical Education, National Health Mission, AYUSH, Food and Drug Administration, Assam State AIDS Control Society, Assam State Blood Transfusion Council.</p>

       <p className="txt1"><b>Background</b>: The goal of this study was to identify the tendency toward donations of tissue and organs from donors with brain death between 2001 and 2016 as registered by an organ procurement organization 
        in São Paulo City.<br/></p>

        <p className="txt1"><b>Methods</b> :This quantitative, retrospective, exploratory study encompassed all Tissue and Organ Donation Terms signed between 2001 and 2016. A logistic regression model was applied to verify 
whether there was an upward or downward trend in donation.<br/></p>
<p className="txt1"><b>Results</b> : After statistical analysis, a significant change trend was identified in skin, bones, valve, vessel, heart, lung, and pancreas donations, indicating an increase in the donation rate
 through the years. The donation rate did not show changes over the years for donations 
 of liver, kidneys, and corneas.<br/></p>

 <p className="txt1"><b>Conclusions</b> : The decision-making process regarding organ and tissue donation is restricted not only to the dilemma of whether to donate but another question then arises as well: which organs and tissues are to be donated? The discrepancy between the authorization for organ donation and the authorization for tissue donation, as well as the option for one or another organ and/or tissue, must be thoroughly examined because these factors directly affect the number of transplants and acquirements effectively accomplished. These factors may be related to explaining to one's relatives aspects of the surgery, body reassembling, and usage of such organs and/or tissues.
 They may also be related to the lack of knowledge concerning organ donation
  and the symbolism represented by the organ and/or tissue, among other factors.</p>                    
                        </div>
                       
                    </div>




                </form>
            </div>
        </center>
        </body>
        <Myfooter/>
    </>
}
export default AboutUs;
