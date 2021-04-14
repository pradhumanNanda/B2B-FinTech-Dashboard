import React from "react";
import Button from "@material-ui/core/Button";
import edit from "../assets/Path 18191.svg";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import './Edit.css'
import EditIcon from '@material-ui/icons/Edit';
import { pxToRem,pxToVh,pxToVw } from "../utils/theme";
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
      padding: theme.spacing(1),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  function clearform() { 
    document.getElementById("formedit").reset();
  }

function Edit() {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const editstyle={
    borderRadius: pxToRem(10),
    marginTop: pxToVh(11),
    height: pxToVh(40),
  left: pxToVw(405),
  textTransform:"None"
  }

  const editimgstyle={
    width: pxToVw(15),
  height: pxToVh(15),
  paddingRight: pxToVw(4),
  }
  return (
    <>
          <Button id="edit" variant="outlined" onClick={handleClickOpen}
          style={{ borderColor: "white", color:"white"}}
          size="small"
          startIcon={<EditIcon/>}
          >
        Edit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Edit Invoice
        </DialogTitle>
        <DialogContent  className="adddialog" dividers>
          <br></br>
          <form id="formedit">
              
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:"#97A1A9"}}>Invoice Amount</label>
            &nbsp;<input id="editamt" className="editinput"/><br></br><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:"#97A1A9"}}>Notes</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="noteedit" cols="20" rows="6"/>
          </form>
        </DialogContent>
        <DialogActions className="adddialog">
        <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1",}}
          >
            Cancel
          </Button>
          </Grid>
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF" }}
            onClick={clearform}
            id="resetedit"
          >
            Reset
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF" }}
          >
            Save
          </Button>
        </DialogActions>
        
      </Dialog>

    </>
  );
}

export default Edit;
