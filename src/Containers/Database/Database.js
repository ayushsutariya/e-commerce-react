import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatabaseData } from '../Action/Database.Action';
import '../Database/Database.css'

function Database(props) {
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(DatabaseData())
        },
        []);
    const database_display = useSelector(state => state.Database_Reducer)
    console.log(database_display.signup_data);
    
    return (
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
                                <tr scope="row">
                                    <td><img src="https://i.postimg.cc/yYYd1HV1/katara.jpg" alt="img" /></td>
                                    <td>{i.Id}</td>
                                    <td>{i.Name}</td>
                                    <td>{i.Email_Id}</td>
                                    <td>{i.Password}</td>
                                    <td>
                                        <button className="view">Edit</button>
                                        <button className="delete">Delete</button>
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
    );
}

export default Database;