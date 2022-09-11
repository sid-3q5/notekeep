import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} className="form">
        {/* <DialogTitle>Note Title</DialogTitle> */}
        <DialogContent>
        <TextField
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Note Title"
          />
          <TextField
            multiline
            margin="dense"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Add you Note description here ..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


