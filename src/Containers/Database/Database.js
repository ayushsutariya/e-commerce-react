import React from 'react';
import '../Database/Database.css'

function Database(props) {
    return (
        <div className='col-8 mx-auto'>
            <table className='data_back table'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Password</th>
                        <th scope="col">Control</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td><img src="https://i.postimg.cc/yYYd1HV1/katara.jpg" alt="img" /></td>
                        <td>Last</td>
                        <td>Handle</td>
                        <td>First</td>
                        <td>
                            <button className="view">Edit</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr><td colSpan={5} className="tablefoot" />
                    </tr></tfoot>
            </table>

        </div>
    );
}

export default Database;