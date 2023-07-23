import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../header';
import CarCards from './CarCards';
axios.defaults.withCredentials = true;

function AllCars() {
  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);// because   const [data, setData] = useState([]); i use it also for filtring
  const [TypeFilter, setTypeFiltered] = useState([]);
  const [allCars, setallCars] = useState([]);
  const [msg, setMsg] = useState('');

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/car", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(datas.data.cars);
    setTypeFiltered(datas.data.Type)
    setallCars(datas.data.groupes)
    setPermanent(datas.data.cars)
  }

  useEffect(() => {
    fetchData();
  }, []);
  let filterByType = (e) => {
    for (const key in allCars) {
      if (e === key) {
        console.log(allCars[key])
        setData(allCars[key])
        break
      } else {

        setData(permanent)
      }
    }
  }
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
    <div >
      <HeaderAdmin />
      <div className="w-85  grid grid-cols-2 ml-4 mr-4">

        <div className="h-[100vh] w-[25rem] ml-[4rem] border-[1px] mt-7 border-btn border-solid ">
          <h2 className='font-DMSend font-semibold ml-6 mt-6'>Car Type</h2>
          <p onClick={() => {
            filterByType('all')
          }}>all</p>
          {TypeFilter !== undefined ? TypeFilter.map((e) => {
            return <div>
              <p onClick={() => {
                filterByType(e)
              }}>  {e}</p>
            </div>
          }) : ""}
        </div>
        <CarCards data={data} />






      </div>
    </div>
  )
}

export default AllCars;
