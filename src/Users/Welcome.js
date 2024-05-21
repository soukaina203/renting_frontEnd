import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderUser from './Header'

function Welcome() {
  const [search, setSearch] = useState([])
  const [data, setData] = useState([])
  const [permanent, setPermanent] = useState([])
  const [filter, setFilter] = useState({ type: false, avail: false, color: false, price: false, year: false, model: false })
  const [distinctTypes, setDistinctTypes] = useState([]);
  const [TypeGroupe, setTypeGroupe] = useState([]);

  const [distinctColors, setDistinctColors] = useState([]);
  const [ColorGroupe, setColorGroup] = useState([]);

  const [distinctModels, setDistinctModels] = useState([]);
  const [ModelGroupe, setModelGroupe] = useState([]);

  const [distinctYear, setDistinctYear] = useState([]);
  const [YearGroupe, setYearGroupe] = useState([]);


  let fetchData = async () => {
    const da = await axios.get("http://localhost:8000/api/carForUsers", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    let d = da.data
    setData(d.cars)
    setPermanent(d.cars);

    setDistinctTypes(d.distinctTypes)
    setDistinctColors(d.distinctColors)
    setDistinctModels(d.distinctModels)
    setDistinctYear(d.distinctYear)
    // filters
    setTypeGroupe(d.groupeTypes)
    setColorGroup(d.groupeColor)
    setModelGroupe(d.groupeModel)
    setYearGroupe(d.groupeYear)

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
  let getSearchCars = async () => {
    const da = await axios.get(`http://localhost:8000/api/search/${search}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(da.data)
  }

  return (
    <div>
      <HeaderUser />
      <div className='flex flex-col'>
        {/* Search Part */}
        <div className='w-full py-4 mt-2 bg-white1'>
          <div className='max-w-4xl px-2 mx-auto'>
            <div className='flex'>
              <input
                type="text"
                className='w-full px-4 py-2 bg-white border rounded-l outline-none'
                placeholder='Search Cars...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type='button'
                className="px-4 py-2 text-white rounded-r bg-btn hover:bg-btn1"
              >
                Search
              </button>
            </div>
          </div>
          </div>
        {/* Filter Part */}
        <div className='flex flex-row'>
        <div className='w-1/4 mr-4 border rounded h-content mt-7'>
            <div className="flex ml-4 mr-2">
              {/* car types ===========================================================================================*/}
              <div className="w-64 mr-4 border rounded border-btn mt-7">
                <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200" onClick={() => {
                  setData(permanent)
                  setFilter({ type: false, avail: false, color: false, price: false, year: false, model: false })
                }}> Top Cars</h2>
                <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200" onClick={() => {
                  setFilter({ type: true, avail: false, color: false, price: false, year: false, model: false })
                }}>Car Type</h2>
                {filter.type === true ?
                  <div>
                    <p
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        filterByType('all');
                      }}>
                      All
                    </p>
                    {distinctTypes !== undefined ? (
                      distinctTypes.map((e) => (
                        <p
                          key={e}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
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


                {/* ======================Color==================== */}
                <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200" onClick={() => {
                  setFilter({ type: false, avail: false, color: true, price: false, year: false, model: false })

                }}>Car Color</h2>
                {filter.color ? <div>
                  {distinctColors.map((e) => (
                    <p
                      key={e}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        filterByColor(e)
                      }}
                    >
                      {e}
                    </p>
                  ))}

                </div> : ""}
                {/* Model */}
                <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200" onClick={() => {
                  setFilter({ type: false, avail: false, color: false, price: false, year: false, model: true })

                }}>Car Model</h2>
                {filter.model ? <div>
                  {distinctModels.map((e) => (
                    <p
                      key={e}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        filterByModel(e)
                      }}
                    >
                      {e}
                    </p>
                  ))}

                </div> : ""}

                {/* Year */}
                <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200" onClick={() => {
                  setFilter({ type: false, avail: false, color: false, price: false, year: true, model: false })

                }}>Car Year</h2>
                {filter.year ? <div>
                  {distinctYear.map((e) => (
                    <p
                      key={e}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        filterByYear(e)
                      }}
                    >
                      {e}
                    </p>
                  ))}

                </div> : ""}




              </div>
            </div>

          </div>
          {/* Cars Part */}
          <div className='w-3/4 h-content mr-4 border grid grid-cols-3 gap-4 ml-[-3rem] rounded mt-7'>

            {data !== undefined ? (
              data.map((e, i) => (
                <div key={i} className="w-full max-w-xs mx-4 my-6 overflow-hidden bg-white rounded-lg shadow-lg">
                  <img
                    src={`http://127.0.0.1:8000/images/${e.photo}`}
                    alt=""
                    className="object-cover object-center w-full h-48 rounded-t-lg"
                  />
                  <div className="px-4 py-3">
                    <p className="text-gray-700 font-bold text-[20px] uppercase">{e.model}</p>
                    <p className="text-sm tracking-wide text-gray-600 uppercase">{e.type} - {e.price_per_day}$/day</p>



                    <div className="flex justify-center mt-4">
                      <button className="px-4 py-1 font-bold  text-btn rounded  border-[2px] border-btn  mr-2 transition-colors duration-300">
                        <Link to={`/car/${e.id}?source=welcome`}>View</Link>                      </button>
                      <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                        <Link to={`/car/${e.id}/rent`}>Rent Now</Link>
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

    </div>
  )
}

export default Welcome
