import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import HeaderAdmin from '../header';
import { apiUrl, Url } from '../../environnement/environnement.prod'; // or `.prod` for production
axios.defaults.withCredentials = true;

function AllCars() {
  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);
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
  const [search, setSearch] = useState([])

  const [filter, setFilter] = useState({ type: false, avail: false, color: false, price: false, year: false, model: false });

  let fetchData = async () => {
    
    const datas = await axios.get(`${apiUrl}/carsForAdmin`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    let d = datas.data;
    setData(d.cars);

    setPermanent(d.cars);
    setDistinctTypes(d.distinctTypes);
    setDistinctColors(d.distinctColors);
    setDistinctModels(d.distinctModels);
    setDistinctYear(d.distinctYear);
    setTypeGroupe(d.groupeTypes);
    setColorGroup(d.groupeColor);
    setModelGroupe(d.groupeModel);
    setYearGroupe(d.groupeYear);
    setAvaiCars(d.available);
    setnotAvailCars(d.NotAvailable);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let filterByType = (e) => {
    setData(TypeGroupe[e] || permanent);
  }

  let filterByColor = (e) => {
    setData(ColorGroupe[e] || permanent);
  }

  let filterByModel = (e) => {
    setData(ModelGroupe[e] || permanent);
  }

  let filterByYear = (e) => {
    setData(YearGroupe[e] || permanent);
  }

  let deleteClient = async (id) => {
    try {
      
      await axios.delete(`${apiUrl}/car/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchData();
    } catch (error) {
      setMsg('Failed to delete client.');
    }
  }
  let getSearchCars = async () => {
   
    const da = await axios.get( `${apiUrl}/search/${search}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(da.data)
  }

  return (
    <div className='flex flex-col'>


      <Link to="/admin/cars/create" className='absolute right-3 top-[5.4rem] '>
        <button className="relative h-12 w-40 uppercase font-semibold flex justify-center items-center gap-2 overflow-hidden
          border border-[#E60035] text-[#E60035] shadow-2xl font-Yantramanav-Black text-[1.1rem]
          before:absolute before:left-0 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full
          before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300
          hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

          <span className="relative z-10">Create Car</span>
          <FaArrowRight className="relative z-10" />
        </button>
      </Link>


      <div className='w-full py-4 mt-2 '>
        <div className='max-w-4xl px-2 mx-auto'>
          <div className='flex flex-row '>
            <input
              type="text"
              className='w-full px-4 py-2 bg-white border-2 rounded-l outline-none'
              placeholder='Search Cars...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type='button'
              onClick={() => {
                getSearchCars()

              }}
              className="px-4 py-2 text-white font-Yantramanav-Black text-[1.2rem] rounded-r bg-[#E60035] hover:bg-red-600  "
            >
              Search
            </button>

          </div>
        </div>
      </div>





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

            <h2 className="px-4 py-2 font-semibold cursor-pointer hover:bg-red-100" onClick={() => setFilter({ type: false, avail: true, color: false, price: false, year: false, model: false })}>Car Availability</h2>
            {filter.avail && (
              <>
                <p key="1" className="px-4 py-2 cursor-pointer hover:bg-red-100" onClick={() => setData(avaiCars)}>Available</p>
                <p key="2" className="w-full px-4 py-2 cursor-pointer hover:bg-red-100"
                  onClick={() => setData(notAvailCars)}>Not Available</p>
              </>
            )}

          </div>








          {/* Main Content */}
          <div className="w-full m-2 ">

            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.map((e, i) => (
                <div key={i} className="max-w-sm overflow-hidden transition-shadow duration-300 rounded shadow-lg hover:shadow-xl">
                  <img src={`${Url}/images/${e.photo}`} alt={e.model} className="object-cover w-full h-48" />
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
                    <Link to={`/admin/car/edit/${e.id}`}>
                      <button className="before:ease relative h-12 w-40  font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">
                        <span className='relative text-[#E60035] z-20 group-hover:text-white'>

                          Modify

                        </span>

                        <FaArrowRight className="relative text-[#E60035] 
                  z-20 group-hover:text-white ml-2" />
                      </button>
                    </Link>


                    <button onClick={() => deleteClient(e.id)} className="before:ease relative h-12 w-40  font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

                      <span className='relative text-[#E60035] z-20 group-hover:text-white'>
                        Delete

                      </span>
                      <FaArrowRight className="relative text-[#E60035] z-20 group-hover:text-white ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


  );
}

export default AllCars;
