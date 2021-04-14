import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Tablecomp from '../components/Tablecomp';
import Add from '../components/Add';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import ViewCr from '../components/View_cr';
import Tablersn from '../components/Tablersn';

function Table() {
    return (
        <div style={{marginLeft:"1.9vw", marginRight:"1.9vw", marginbottom:"3.4vh", marginTop:"6.2vh", position:"relative"}}>
            <div>
                <p style={{textAlign:"left", fontSize:"3.55vh",color:"rgba(255, 255, 255, 1)"}}>
                    Invoice List
                </p>
                
            </div>
            <div style={{ width:"100%", height:"400px",marginTop:"6.2vh" }}>
                <div className={"tableheader"} style={{background:"rgba(39, 61, 73, 0.8)",width:"100%", height:"10%" }}>
                
                    <Button variant="contained" disabled={false} size="small" disableElevation style={{marginLeft:"1.5vh", marginTop:"0.8vh", background:"#57b3fb", color:"white"}}>
                        Predict
                    </Button>
                    
                    <ViewCr />
                    


                     
                    
                    <div style={{ float: "right",marginRight:"240px", marginTop:"0.8vh" }}><Delete /></div>
                     {/* <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        style={{ borderColor: "white", color:"white", float: "right" }}
                        size="small"
                        >
                        Delete
                     </Button> */}
                    
                    <div style={{ float: "right", marginRight:"1.5vh", marginTop:"0.8vh" }}><Edit /></div>
                    
                     {/* <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        style={{ borderColor: "white", color:"white", float: "right" }}
                        size="small"
                        >
                        Edit
                     </Button> */}
                    

                    <div style={{ float: "right", marginRight:"1.5vh", marginTop:"0.8vh"  }}><Add /></div>
                    

                      {/* <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        style={{ borderColor: "white", color:"white", float: "right" }}
                        size="small"
                        >
                        Add
                     </Button>  */}
                    
                </div>
                <Tablersn />
            </div>
            
        </div>
    )
}
export default Table;