import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { DatabaseData, DeleteDatabaseData } from '../Action/Database.Action';
import '../Database/Database.css'

function Database(props) {
    const [open, setOpen] = React.useState(false);
    const [did, setdid] = useState();
    const [data,setData] = useState([])

    const handleClickOpen = (id) => {
        setOpen(true);
        setdid(id);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(DatabaseData())
        },
        []);
    const database_display = useSelector(state => state.Database_Reducer)
    console.log(database_display.signup_data);

    const HandleDelete = () => () => {
        dispatch(DeleteDatabaseData(did));
        setdid();
    }

    return (
        <div>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Are you Sure Want to Delete?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={HandleDelete()}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className='col-8 mx-auto'>
                <table className='data_back table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Password</th>
                            <th scope="col">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            database_display.signup_data.map((i) => (
                                <tr scope="row" key={i.id}>
                                    <td><img src="https://i.postimg.cc/yYYd1HV1/katara.jpg" alt="img" /></td>
                                    <td>{i.id}</td>
                                    <td>{i.full_name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td>
                                        <button className="view">Edit</button>
                                        <button className="delete" onClick={() => handleClickOpen(i.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                    <tfoot>
                        <tr><td colSpan={6} className="tablefoot" />
                        </tr></tfoot>
                </table>

            </div>
        </div>
    );
}

export default Database;