import React from "react";
import add from "../assets/Path 18189.svg";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import { Input, TextField } from "@material-ui/core";
import './Add.css';
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import { pxToRem, pxToVh, pxToVw } from "../utils/theme";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

function clearform() {
  document.getElementById("form").reset();
}

const addstyle = {
  left: pxToVw(400),
  width: pxToVw(99),
  height: pxToVh(40),
  textTransform: "None",
};

const addimgstyle = {
  width: pxToVw(19),
  height: pxToVh(10),
};

function Add() {
  const [open, setOpen] = React.useState(false);

  const [cName, setcName] = React.useState("");
  const [dDate, setdDate] = React.useState("");
  const [cNo, setcNo] = React.useState("");
  const [note, setnote] = React.useState("");
  const [invNo, setinvNo] = React.useState("");
  const [invAmt, setinvAmt] = React.useState("");

  const fetchData = async() => {
    await axios
     .get(`http://localhost:8080/1805719/addservlet?_cname=${cName}&_ddate=${dDate}&_cno=${cNo}&_note=${note}&_invno=${invNo}&_invamt=${invAmt}`)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => {
       console.log(error);
     });
 };

  const createNewinv = (e) => {
    e.preventDefault();
    console.log(cName, dDate, cNo, note, invNo, invAmt);
    fetchData();

  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        id="add"
        variant="outlined"
        style={{ borderColor: "#57b3fb", color:"white"}}
        size="small"
        startIcon={<AddIcon/>}
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        height="60%"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Add Invoice
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
          <form id="form" onSubmit={(e) => { createNewinv(e) }}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <label className="cop">Customer Name*</label>
              <input className="addtext" type="text" value={cName} required
                onChange={(e) => setcName(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <label className="cop">Due Date</label>
              <input className="addtext" type="date" value={dDate}
                onChange={(e) => setdDate(e.target.value)}
              />
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <label className="cop">Customer No.*</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="addtext" value={cNo}
                onChange={(e) => setcNo(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <label className="cop">Notes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <textarea id="notes" rows="4" cols="19" value={note}
              onChange={(e) => setnote(e.target.value)}
              ></textarea>
            </Grid>
            
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <label className="cop">Invoice No.*</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="addtext" variant="outlined" value={invNo}
                  onChange={(e) => setinvNo(e.target.value)}
                />
              </Grid>
              <br></br>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <label className="cop">Invoice Amount*</label>&nbsp;
              <input className="addtext" variant="outlined" value={invAmt}
                  onChange={(e) => setinvAmt(e.target.value)}
              /> 
              </Grid>
              
            </Grid>
            
            <Divider light />
        <Grid
                container
                direction="row"
                style={{marginTop:"2vh"}}
              >
        <Grid
                container
                item xs={6}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                width="50%"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1" }}
            size="small"
          >
            Cancel
          </Button>
            </Grid>
            <Grid
                container
                item xs={6}
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF", float:"right", marginRight:"2vh" }}
            onClick={clearform}
            id="clearadd"
            size="small"
          >
            Clear
          </Button>
          <Button
            autoFocus
            type="submit"
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF", float:"right" }}
            size="small"
          >
                Add
          </Button>
              </Grid>
        </Grid>
          </form>
          </DialogContent>
      </Dialog>
    </>
  );
}
export default Add;
