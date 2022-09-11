import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import { AiOutlineEdit,AiFillPushpin,AiOutlinePushpin } from "react-icons/ai";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const url = "http://127.0.0.1:8000/api";

const NoteList = ({data}) => {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [id,setId] = useState(0);
    const [description, setDescription] =useState('');
    const [pin, setPin] = useState(false);
    const [tagline, setTagline] = useState('');
    const [created_at, setCreated_at] = useState('');
    const [updated_at, setUpdated_at] = useState('');
    const [note, setNote] = useState([]);

    console.log(id);

    const handleClickOpen = (id) => {

        axios.get(`${url}/${id}/`)

        .then((response) => {
            setNote(response.data);
            setId(id);
            getUpdated(response.data);
            console.log(id);
        })

        setOpen(true);
      };

    const handleDelete = () => {
        // console.log(id);
        axios.delete(`${url}/${id}/`)
        .then((response) => {  console.log(response) })
        .catch(err => {console.log(err.data)});
        handleClose();
        window.location.reload(false);
    }

      function getUpdated(note) {
        setTitle(note.title);
        setDescription(note.description);
        setPin(note.pin);
        setTagline(note.tagline);
        setCreated_at(note.created_at);
        setUpdated_at(note.updated_at);
      }

      function onUpdate(event) {
        event.preventDefault();
        const current = new Date();
        const updated_at = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

        axios({
            method: 'put',
            url: `${url}/${id}/`,
            data:{
                title,
                description,
                pin,
                tagline,
                created_at,
                updated_at,
            }
        })
        handleClose();
        window.location.reload(false);
    }
    
      const handleClose = () => {
        setOpen(false);
      };

    
    


    return ( 
        <div className="row">
            <Grid container display="flex" justifycontent="center" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                        data.map((note) => (
                            <Grid  justifycontent="center" item xs={2} sm={4} md={4} style={{ mx: "auto"}}>
                                <div key={note.id} className="notes" item xs={2} sm={4} md={4}>
                                    <Card spacing={2} direction="row" justifycontent="center" alignitems="flex-start"  sx={{ minWidth: 50, maxWidth: 350}} style={{ mx: "auto"}} variant="outlined">
                                        { (note.pin === true) ? <IconButton size="large" style={{display: 'flex', float: 'right',transform: "rotate(35deg)"}}><AiFillPushpin/></IconButton>: <Typography></Typography>}
                                        <CardContent>
                                           <Typography variant="h5" component="div" noWrap={true}>
                                           {note.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: 10 }} component="div" noWrap={true}>
                                            #{note.tagline}
                                            </Typography>
                                            <Typography variant="body2" noWrap={true}>
                                            {note.description}
                                            <br />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="large" onClick={() => { handleClickOpen(note.id)} }> <AiOutlineEdit style={{fontSize:20, paddingRight:10}} /> Edit </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        ))
                }
            </Grid>


            {/* POP UP FOR Note */}
            <Dialog  style={{overscrollBehaviorX: 'none'}} open={open} onClose={handleClose} className="form">
            <div className="but" style={{overscrollBehaviorX: 'none'}}>
                    <IconButton size="large" onClick={e => {
                            setPin(!pin)
                            }} style={{transform: "rotate(35deg)", display:'flex', float: 'right'}}>
                                {pin ?<AiFillPushpin  style={{ display:'flex', float: 'right' }} /> : <AiOutlinePushpin  style={{ display:'flex', float: 'right' }} />}
                    </IconButton>
            </div>
            <DialogTitle style={{overscrollBehaviorX: 'none'}}>
                    { (note.updated_at !== "") ? <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                            Edited At : {note.updated_at}
                                            </Typography> :<Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                            Created At : {note.created_at}
                                            </Typography> 
                    }
                </DialogTitle>
                
                <DialogContent>
                <TextField
                    id="name"
                    type="text"
                    fullWidth
                    variant="standard"
                    label="Title"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    multiline
                    margin="dense"
                    type="text"
                    fullWidth
                    label="Tagline"
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
                    label="Description"
                    placeholder="Add you Note description here ..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={ handleDelete } style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onUpdate}>Save</Button>
                </DialogActions>
            </Dialog>


        </div>
     );
}
 
export default NoteList;