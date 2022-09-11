import React from "react";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import logo from "../logo.png";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';


const url = "http://127.0.0.1:8000/api/list/";


const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pin, setPin] = useState(false);
    const [tagline, setTagline] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      function onCreate(event) {
        event.preventDefault();
            const current = new Date();
            const created_at = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            const updated_at = '';
            const postData = {
                title,
                description,
                pin,
                tagline,
                created_at,
                updated_at,
            };

            axios.post(url, postData)

            handleClose();
            window.location.reload(false);
        
    }

    return ( 
        <div>
            <nav className="header">
                    <h2><img src={logo} alt="logo" /><h2>NoteKeeper</h2></h2>
                    <div className="right"><button onClick={handleClickOpen} ><BiAddToQueue title="Add notes" /></button></div>
            </nav>

            <Dialog open={open} onClose={handleClose} className="form">
                <DialogTitle>
                    Add Note 
                    <IconButton 
                    size="large" 
                    onClick={e => {
                        setPin(!pin)
                    }} 
                    style={{transform: "rotate(35deg)"}}>
                        {pin ?<AiFillPushpin/> : <AiOutlinePushpin/>}
                    </IconButton>
                </DialogTitle>
                
                <DialogContent>

                <TextField
                    margin="dense"
                    id="name"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    multiline
                    margin="dense"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Tagline"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    
                />
                <TextField
                    margin="dense"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Add you Note description here ..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </DialogContent>

                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onCreate}>Save</Button>
                </DialogActions>
                
            </Dialog>

        </div>
     );
}
 
export default Header;