import React from "react";
import axios from "axios";
//import './app.css';


import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Paper
} from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from '@material-ui/core/Typography';



 function Tablecomp() {

  const [data, setData] = React.useState([]);
  const count = React.useRef(0);

  const getApiData = React.useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/1805719/Myservlet"
      );
      setData((prevData) => [...prevData, ...response.data.slice(0, 10)]);
      count.current += 1;
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getApiData();
  }, [getApiData]);

 
  return (
    
    <div style={{ marginBottom: "9vh" }} >
       <Typography>
      <TableContainer
        id="test-table"
        component={Paper}
        style={{
          height: "60vh",width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          overflowY: "scroll",
          borderRadius: "0 0 10px 10px"
        }}
      >
        <InfiniteScroll
          scrollableTarget="test-table"
          dataLength={data.length}
          loader={
            <div
              style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                padding: "50px",
                textAlign: "center"
              }}
            > LOADING...
             <CircularProgress color="primary" />
            </div>
          }
          hasMore={count.current < 5}
          next={getApiData}
        >
          <Table stickyHeader aria-label="sticky table" >
              <TableHead  style={{textTransform: "uppercase"}}>
              <TableRow>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >Id</TableCell>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >Autor</TableCell>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >Width</TableCell>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >Height</TableCell>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >url</TableCell>
              <TableCell align="center"  style={{ fontWeight:"bold"}} >Download_url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  
                    <TableCell align="center" style={{padding:"1.5vh 2vh"}}>{row.name_customer}</TableCell>
                    <TableCell align="center" style={{padding:"1.5vh 2vh"}}>{row.business_code}</TableCell>
                    <TableCell align="center" style={{padding:"1.5vh 2vh"}}>{row.business_code}</TableCell>
                    <TableCell align="center" style={{padding:"1.5vh 2vh"}}>{row.business_code}</TableCell>
                    <TableCell align="center" style={{padding:"1.5vh 2vh"}}>{row.business_code}</TableCell>
                  <TableCell align="center"   style={{ padding: "1.5vh 2vh" }}>{row.business_code}
                    </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </InfiniteScroll>
        </TableContainer>
      </Typography>
      
    </div>
  );
}
export default Tablecomp;
