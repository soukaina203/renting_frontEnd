import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    setData(datas.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/clients/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchData();
    } catch (error) {
      setMsg('Failed to delete client.');
    }
  }

  return (
    <div>
      <div className="w-85 ml-10">
        <Link className="btn btn-primary mb-3" to='/client/create'>Ajouter</Link>
        <h1 className="form-label">{msg}</h1>
        <table className="w-65 ml-15">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={e.id}>
                  <td>{e.make}</td>
                  <td>{e.model}</td>
                  <td><img src={`imgs/${e.photo}.jpg`} alt="" className="w-20 h-20" /></td>
                  <td>
                    <Link className="btn btn-info mb-3 mr-2" to={`/client/${e.id}`}>Voir</Link>
                    <Link className="btn btn-primary mb-3 mr-2" to={`/client/edit/${e.id}`}>Modifier</Link>
                    <button className="btn btn-danger mb-3" onClick={() => deleteClient(e.id)}>Supprimer</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllCars;
