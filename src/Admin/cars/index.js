import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../header';
axios.defaults.withCredentials = true;

function AllCars() {
  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);// because   const [data, setData] = useState([]); i use it also for filtring
  //distinct elements
  const [distinctTypes, setDistinctTypes] = useState([]);
  const [TypeGroupe, setTypeGroupe] = useState([]);

  const [distinctColors, setDistinctColors] = useState([]);
  const [ColorGroupe, setColorGroup] = useState([]);

  const [distinctModels, setDistinctModels] = useState([]);
  const [ModelGroupe, setModelGroupe] = useState([]);

  const [distinctYear, setDistinctYear] = useState([]);
  const [YearGroupe, setYearGroupe] = useState([]);

  const [avaiCars, setAvaiCars] = useState([]);
  const [notAvailCars, setnotAvailCars] = useState([]);

  const [msg, setMsg] = useState('');

  // Filter state managing
  const [filter, setFilter] = useState({ type: false, avail: false, color: false, price: false, year: false, model: false })

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/carsForAdmin", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    let d = datas.data
    setData(d.cars);
    setPermanent(d.cars)

    setDistinctTypes(d.distinctTypes)
    setDistinctColors(d.distinctColors)
    setDistinctModels(d.distinctModels)
    setDistinctYear(d.distinctYear)
    // filters
    setTypeGroupe(d.groupeTypes)
    setColorGroup(d.groupeColor)
    setModelGroupe(d.groupeModel)
    setYearGroupe(d.groupeYear)
    setAvaiCars(d.available)
    setnotAvailCars(d.NotAvailable)
  }

  useEffect(() => {
    fetchData();
  }, []);
  let filterByType = (e) => {
    for (const key in TypeGroupe) {
      if (e === key) {
        setData(TypeGroupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }
  let filterByColor = (e) => {
    for (const key in ColorGroupe) {
      if (e === key) {
        setData(ColorGroupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }
  let filterByModel = (e) => {
    for (const key in ModelGroupe) {
      if (e === key) {
        setData(ModelGroupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }
  let filterByYear = (e) => {
    for (const key in YearGroupe) {
      if (e === key) {
        setData(YearGroupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }

  let deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/car/${id}`, {
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
      <HeaderAdmin />
      <div className="flex items-center justify-between px-4 py-2">

        <h1 className="text-2xl font-bold">All Cars</h1>
        <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600">
          <Link to="/car/create">Create A Car</Link>
        </button>
      </div>
      <div className="flex ml-4 mr-2">
        {/* car types ===========================================================================================*/}
        <div className="w-64 mr-4 border border-btn rounded mt-7">
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ type: true, avail: false, color: false, price: false, year: false, model: false })
          }}>Car Type</h2>
          {filter.type === true ?
            <div>
              <p
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filterByType('all');
                }}>
                All
              </p>
              {distinctTypes !== undefined ? (
                distinctTypes.map((e) => (
                  <p
                    key={e}
                    className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                    onClick={() => {
                      filterByType(e);
                    }}
                  >
                    {e}
                  </p>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            : ""
          }

          {/* car Availability ===========================================================================================*/}

          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ type: false, avail: true, color: false, price: false, year: false, model: false })

          }}>Car Availability</h2>
          {filter.avail ? <div>
            <p className="cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
              setData(avaiCars)
            }}>Available </p>
            <p className="cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
              setData(notAvailCars)

            }}> Not Available </p>

          </div> : ""}
          {/* ======================Color==================== */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ type: false, avail: false, color: true, price: false, year: false, model: false })

          }}>Car Color</h2>
          {filter.color ? <div>
            {distinctColors.map((e) => (
              <p
                key={e}
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filterByColor(e)
                }}
              >
                {e}
              </p>
            ))}

          </div> : ""}
          {/* Model */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ type: false, avail: false, color: false, price: false, year: false, model: true })

          }}>Car Model</h2>
          {filter.model ? <div>
            {distinctModels.map((e) => (
              <p
                key={e}
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filterByModel(e)
                }}
              >
                {e}
              </p>
            ))}

          </div> : ""}

          {/* Year */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ type: false, avail: false, color: false, price: false, year: true, model: false })

          }}>Car Year</h2>
          {filter.year ? <div>
            {distinctYear.map((e) => (
              <p
                key={e}
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filterByYear(e)
                }}
              >
                {e}
              </p>
            ))}

          </div> : ""}




        </div>

        <div className="grid grid-cols-3 gap-4  ml-[-20px] w-[56rem]">
          {data !== undefined ? (
            data.map((e, i) => (
              <div key={i} className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-6">
                <img
                  src={`http://127.0.0.1:8000/images/${e.photo}`}
                  alt=""
                  className="w-full h-48 object-cover object-center rounded-t-lg"
                />
                <div className="px-4 py-3">
                  <p className="text-gray-700 font-bold text-[20px] uppercase">{e.model}</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{e.type} - {e.price_per_day}$/day</p>



                  <div className="mt-4 flex justify-center">
                    <button className="px-4 py-1 font-bold  text-btn rounded  border-[2px] border-btn  mr-2 transition-colors duration-300">
                      <Link to={`/car/${e.id}?source=dashboard`}>View</Link>

                    </button>
                    <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                      <Link to={`/car/${e.id}/edit`}>Edit</Link>
                    </button>
                    <button
                      className="px-4 py-1  font-bold   border-[2px]  border-btn  text-btn  rounded  mr-2 transition-colors duration-300"
                      onClick={() => deleteClient(e.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>



            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllCars;
