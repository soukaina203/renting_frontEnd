import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderUser from './Header'
import { FaArrowRight } from 'react-icons/fa6'
import { apiUrl } from '../environnement/environnement.prod';

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
    const da = await axios.get(`${apiUrl}/carForUsers`, {
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
      <div className='flex flex-col'>
        {/* Search Part */}
        <div className='w-full py-4 mt-2 '>
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
                onClick={()=>{
               getSearchCars()

                }}
                className="px-4 py-2 text-white font-Yantramanav-Black text-[1.2rem] rounded-r bg-[#E60035] hover:bg-red-600  "
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Filter Part */}
        <div className='flex'>
          <div className="flex flex-col p-4 lg:flex-row">
            {/* Sidebar */}
            <div className="hidden w-1/5 mr-4 border-[0.1rem] border-red-600 rounded lg:block bg-white text-black">
            <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-red-100" onClick={() => setFilter({ type: true, avail: false, color: false, price: false, year: false, model: false })}>Car Type</h2>
              {filter.type && (
                <div>
                  <p className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => setData(permanent)}>All</p>
                  {distinctTypes.map((e) => (
                    <p key={e} className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => filterByType(e)}>{e}</p>
                  ))}
                </div>
              )}



              <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-red-100" onClick={() => setFilter({ type: false, avail: false, color: true, price: false, year: false, model: false })}>Car Color</h2>
              {filter.color && (
                <div>
                  {distinctColors.map((e) => (
                    <p key={e} className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => filterByColor(e)}>{e}</p>
                  ))}
                </div>
              )}

              <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-red-100" onClick={() => setFilter({ type: false, avail: false, color: false, price: false, year: false, model: true })}>Car Model</h2>
              {filter.model && (
                <div>
                  {distinctModels.map((e) => (
                    <p key={e} className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => filterByModel(e)}>{e}</p>
                  ))}
                </div>
              )}

              <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-red-100" onClick={() => setFilter({ type: false, avail: false, color: false, price: false, year: true, model: false })}>Car Year</h2>
              {filter.year && (
                <div>
                  {distinctYear.map((e) => (
                    <p key={e} className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => filterByYear(e)}>{e}</p>
                  ))}
                </div>
              )}
            </div>







            {/* Main Content */}
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.map((e, i) => (
                <div key={i} className="max-w-sm overflow-hidden transition-shadow duration-300 rounded shadow-lg hover:shadow-xl">
                  <img src={`http://127.0.0.1:8000/images/${e.photo}`} alt={e.model} className="object-cover w-full h-48" />
                  <div className="px-6 py-4">
                    <div className="flex justify-between mb-2 ">
                      <h1 className='text-xl font-bold'>
                        {e.model}
                      </h1>
                      <p className='font-bold text-xl text-[#E60035] '>  ${e.price_per_day}/day </p>

                    </div>

                    <div className='flex flex-wrap'>
                      <div className="ml-1 text-base text-gray-700">
                        <span className="mr-2 font-medium">Make:</span> {e.make}
                      </div>

                      <div className="ml-1 text-base text-gray-700">
                        <span className="mr-2 font-medium">Year:</span> {e.year}
                      </div>
                      <div className="ml-1 text-base text-gray-700">
                        <span className="mr-2 font-medium">Color:</span> {e.color}
                      </div>

                      <div className="ml-1 text-base text-gray-700">
                        <span className="mr-2 font-medium">Type:</span> {e.type}
                      </div>
                      {e.available === 0 ?
                        <div className="ml-1 text-base text-gray-700">
                          <span className="mr-2 font-medium">Availabilty:</span> Available
                        </div> :
                        <div className="ml-1 text-base text-gray-700">
                          <span className="mr-2 font-medium">Availabilty:</span> Not Available
                        </div>
                      }
                    </div>
                  </div>
                  <div className="flex justify-between px-6 pb-5">
                    <Link to={`/user/car/${e.id}`}>
                      <button className="before:ease relative h-12 w-40  font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">
                        <span className='relative text-[#E60035] text-[1.2rem] font-Yantramanav-Black z-20 group-hover:text-white'>

                          Show

                        </span>

                        <FaArrowRight className="relative text-[1.2rem] text-[#E60035] 
                  z-20 group-hover:text-white ml-2" />
                      </button>
                    </Link>

                    <Link to={`/user/car/${e.id}/rent`}>
                      <button className="before:ease relative h-12 w-40  font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

                        <span className='relative text-[#E60035] font-Yantramanav-Black text-[1.2rem] z-20 group-hover:text-white'>
                          Rent Now

                        </span>
                        <FaArrowRight className="relative text-[#E60035] text-[1.2rem] z-20 group-hover:text-white ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Welcome
