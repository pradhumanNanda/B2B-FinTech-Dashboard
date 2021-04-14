import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
//import './invoiceTableStyle.css';
import  { useEffect,useRef } from "react";
import axios from "axios";
import { CircularProgress, Divider, Typography } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Checkbox from '@material-ui/core/Checkbox';
import { formatter } from '../utils/formatter';

import TableData from '../components/TableData';

//import { connect } from 'react-redux';
//import { setObjectArray } from '../../../../redux/table/tableAction';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
  

});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
    height:20,
  },
}))(TableCell);


const InvoiceTabel=({ setObjectArray })=>  {
  const classes = useStyles();
  const [responseData, setResponseData] = React.useState([]);
  const [isNext, isNextFunc] = React.useState(false);
  const [pageCount, setCount] = React.useState(0);
  const [IsRowChecked, setRowChecked] = React.useState(true);
  const [IsRow, setRow] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  
  const [q, setQ] = React.useState("");


  const handleChange = () => {
    if(IsRowChecked){
    setChecked(true);
    setRowChecked(false);
    }else{
    setChecked(false);
    setRowChecked(true);
    }
    }

  
  const fetchData = async() => {
     await axios
      .get(`http://localhost:8080/1805719/Myservlet?_page=${pageCount}&_limit=10`)
      .then((response) => {
        const value=[];
        response.data.map(elements => {
          elements.select=false;
          value.push(elements);
         console.log(setObjectArray);
        })
        setResponseData(
          [...responseData, ...value]);
         
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function fetchMoreData() {
    setCount(pageCount + 10);
    fetchData();
  }

  useEffect(() =>{
    isNextFunc(true);
    fetchMoreData();
  },[])


  function search(rows) {
    return rows.filter(
      (row) =>
        row.invoice_id.toString().toLowerCase().indexOf(q) > -1);
  }
    
    
    return (
      <div style={{overflow:"hidden"}}>
        
        <TextField id="outlined-size-small" label="Search by Order Number" variant="outlined" size="small"
          style={{ borderColor: "white", maxhHeight: "7px", position: "absolute", top:"60px", right:"1px" }}
          startIcon={<AddIcon />}
          type="text" value={q} onChange={(e) => setQ(e.target.value)}
                    />
        {/* <input type="text" value={q} onChange={(e) => setQ(e.target.value)} style={{ position: "absolute", top:"-10px", left:"-5px" }} /> */}
        

      <div className="Wrap"  > 
        <TableData
          responseData={search(responseData)}
          fetchMoreData={fetchMoreData}
          isNext={isNext}
          checked={checked}
          handleChange={handleChange}
          setRow={setRow}
          IsRow={IsRow}
          setObjectArray={setObjectArray}

        />
        </div>
      </div>
        
  );
          }
export default InvoiceTabel;

        //   const mapDispatchToProps = dispatch => ({
        //     setObjectArray:value => dispatch(setObjectArray(value))
        //   });
         
        //     mapDispatchToProps
        //   )(InvoiceTabel);