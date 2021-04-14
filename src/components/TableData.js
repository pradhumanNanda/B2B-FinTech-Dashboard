import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CircularProgress, Divider, Typography } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Checkbox from '@material-ui/core/Checkbox';
import { formatter } from '../utils/formatter';



export default function TableData(props) {


    return (
    <TableContainer component={Paper}  id="tableContainer"  className="tableFixHeader"
    style={{
          height: "60vh",width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          overflowY: "scroll",
          borderRadius: "0 0 10px 10px",
          backgroundColor:"#2d4250"
        }}
    >
    <InfiniteScroll
   scrollableTarget="tableContainer"
    dataLength={props.responseData.length}
    loader={
        <div
              style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                padding: "50px",
                textAlign: "center"
              }}
            > 
            <CircularProgress style={{color:"#57b3fb"}} />
            <h6>Loading</h6>
            </div>
    }
    next={props.fetchMoreData}
    hasMore={props.isNext}
    >
   <Table stickyHeader aria-label="sticky table">
   <TableHead >
        <TableRow className="Row"  >
           <TableCell align="center" style={{padding:"0.7vh 0.2vh", background:"rgba(39, 61, 73, 1)", color:"#97A1A9"}}> <Checkbox
        className='checkbox'
        checked={props.checked}
        color="primary"
        style={{padding:"0vh 0vh"}}
        size="2px"
        onChange={props.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh",  background:"rgba(39, 61, 73, 1)", color:"#97A1A9"}} >Company Name</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Customer #</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Order #</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Order Amount</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Due Date</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Predicted Payment Date</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Predicted Aging Bucket</TableCell>
           <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"rgba(39, 61, 73, 1)" , color:"#97A1A9"}} >Notes</TableCell>
         </TableRow>
       </TableHead>
       <TableBody> 
          {props.responseData.map((row) => (
            <TableRow key={row.invoice_id}className={row.select?"Row1":"Row"}>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh",background:"#2d4250"}}>
              
            <Checkbox
            className='checkbox'
            checked={props.checked||row.select}
            style={{padding:"0vh 0vh"}}
            size="2px"
            onClick={()=>{
            row.select=!row.select;
            props.setRow(!props.IsRow);
            props.setObjectArray(props.responseData);
            console.log( props.setObjectArray(props.responseData));
              
           }
            }
        
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      >
        </Checkbox></TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250", color:"#FFFFFF"}} >{row.name_customer}</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >{row.cust_number}</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >{row.invoice_id}</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >{formatter(row.total_open_amount)}</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >{row.due_in_date}</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >--</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >--</TableCell>
              <TableCell align="center" style={{padding:"0.5vh 0.2vh" , background:"#2d4250" , color:"#FFFFFF"}} >{row.notes}</TableCell>
            </TableRow>
             ))}
            </TableBody>
           </Table>
           </InfiniteScroll>
        </TableContainer>
        )
}