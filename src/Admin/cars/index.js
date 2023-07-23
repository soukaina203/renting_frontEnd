import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderMain from '../mainAdmin/Header';
axios.defaults.withCredentials = true;

function AllCars() {
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState('');
    let fetchData = async () => {
        const datas = await axios.get("http://localhost:8000/api/car", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(datas.data.token)
        setData(datas.data)

    }
    useEffect(() => {
        console.log("hello")
        fetchData();
    }, []);

    let deleteClient = async (id) => {
        console.log(id)
        let res = await axios.delete(`http://localhost:8000/api/clients/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        let n = localStorage.getItem('token')
        console.log(res.data.message)
        if (res.data.message === 'deleted successfully') {
            fetchData();
        } else {
            setMsg(res.data.message)

        }
        // setMsg()
    }
    return (
        <div>
            <HeaderMain />
            <div style={{ 'width': '85%', 'margin-left': "10%" }}>

                <Link className="btn btn-primary mb-3" to='/client/create'>Ajouter </Link>
                <h1 className="form-label">{msg}</h1>
                {
                    <table style={{ 'width': '65%', 'margin-left': "15%" }}>
                        <tr style={{ 'backgroundColor': 'rgb(54, 52, 52)', 'color': 'white', 'height': '68px' }}>


                            <th >FullName</th>
                            <th>fidalite</th>

                            <th>Actions</th>

                        </tr>
                        {data.map((e, i) => {
                            return (
                                <tr>
                                    <td>{e.FullName}</td>
                                    <td>{e.phoneNumber}</td>

                                    <td>
                                        <Link className="btn btn-info mb-3" to={`/client/${e.id}`}> Voir</Link>
                                        <Link className="btn btn-primary mb-3" to={`/client/edit/${e.id}`}> Modifier</Link>

                                        <button className="btn btn-danger mb-3" onClick={() => deleteClient(e.id)}>  Supprimer </button>

                                    </td>
                                </tr>
                            )

                        })}


                    </table>

                }
            </div>
        </div>
    )
}

export default AllCars