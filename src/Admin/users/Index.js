import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im'
import HeaderAdmin from '../header'
axios.defaults.withCredentials = true;

function AllUsers() {
  const [msg, setMsg] = useState('');

  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);
  const [haveRentals, sethaveRentals] = useState([]);
  const [NoRentals, setNoRentals] = useState([]);

  const [deleteMsg, setDeleteMsg] = useState(false);
  const [filters, setFilter] = useState(
    { rental: false, ville: false, pays: false }
  )

  // distinct 
  const [disCity, setDisCity] = useState({ d: [], g: [] })
  const [disCountry, setdisCountry] = useState()

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/user", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    let d = datas.data
    console.log(d.cityDistinct)
    setData(d.all)
    setPermanent(d.all)
    setNoRentals(d.usersWithoutRentals)
    sethaveRentals(d.usersWithRentals)
    setDisCity({ groupe: d.groupeCity, distinct: d.cityDistinct })
    setdisCountry({ groupe: d.groupeCountry, distinct: d.countryDistinct })



  }
  useEffect(() => {
    console.log("hello")
    fetchData();
  }, []);
  let deleteUser = async (id) => {
    try {
      let d = await axios.delete(`http://localhost:8000/api/user/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(d.data)
      if (d.data.msg === "done") {
        setMsg('deleted successfuly')
        setDeleteMsg(true)
      } else {
        setMsg('cant delet this user')
      }
      fetchData();
    } catch (error) {
      setMsg('Failed to delete client.');
    }
  }
  let filter = (e) => {
    // Assuming you have useState declared like this:
    // const [data, setData] = useState([]);

    switch (e) {
      case 'with':
        setData(haveRentals);
        break;
      case 'no':
        setData(NoRentals);
        break;
      default:
        setData(permanent);
        break;
    }

  }
  let filterByCity = (e) => {
    for (const key in disCity.groupe) {
      if (e === key) {
        setData(disCity.groupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }
  let filterByCountry = (e) => {
    for (const key in disCountry.groupe) {
      if (e === key) {
        setData(disCountry.groupe[key])
        break
      } else {
        setData(permanent)
      }
    }
  }
  return (
    <div>
      <HeaderAdmin />

      <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 absolute top-[110px] left-6">
        <Link to="/user/create">Create A User</Link>
      </button>
      <div className="flex  flex-row px-4 py-2">

        <div className="w-[15rem] mr-4 border border-btn rounded mt-[5rem]">
          {/* ============================================================ */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2"
            onClick={() => {
              setFilter({ rental: true, ville: false, pays: false })

            }}>Users Rental </h2>
          {filters.rental === true ?
            <div>
              <p
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filter('all');
                }}>
                All
              </p>

              <p
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filter('with');
                }}
              >
                with Rentals
              </p>


              <p
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filter('no');
                }}
              >
                with No Rentals
              </p>
            </div>
            : ""}
          {/* ================================City ============================ */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2"
            onClick={() => {
              setFilter({ rental: false, ville: true, pays: false })

            }}>Ville </h2>

          {filters.ville === true ?
            <div>
              {disCity !== null ?
                <div>
                  {disCity.distinct.map((e) => <p
                    className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                    onClick={() => {
                      filterByCity(e);
                    }}
                  > {e}</p>)}

                </div> : ""}
            </div> : ""}

          {/* ================================Country ============================ */}
          <h2 className="font-semibold cursor-pointer hover:bg-gray-200 px-4 py-2" onClick={() => {
            setFilter({ rental: false, ville: false, pays: true })

          }}>Pays </h2>
          {filters.pays === true ?
            <div>
              {disCountry !== null ?
                <div>
                  {disCountry.distinct.map((e) => <p
                    className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                    onClick={() => {
                      filterByCountry(e);
                    }}
                  > {e}</p>)}

                </div> : ""}
            </div>
            : ""}

        </div>



        <div className="flex justify-center h-screen w-[45rem]">
          <div className="w-full md:w-2/3">
            {deleteMsg ? <div>
              <h1 className='text-orange-500 py-3 px-2 bg-orange-300 w-full relative top-[5rem]'>{msg}</h1>
              <ImCross className='text-orange-500 relative top-[3rem] right-[-49rem] 
          ' onClick={() => {
                  setDeleteMsg(false)
                }} />

            </div> : ""

            }
            <div className="grid grid-cols-3 gap-4   w-[50rem] ">

              <table className=" border border-collapse mt-[5rem]  w-[44rem]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e, i) => {
                    return (
                      <tr className='text-center'>
                        <td >{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>

                        <td>
                          <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                            <Link className="btn btn-info mb-3" to={`/user/${e.id}`}> Voir</Link>
                          </button>
                          <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                            <Link className="btn btn-primary mb-3" to={`/user/edit/${e.id}`}> Modifier</Link>
                          </button>
                          <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300"
                            onClick={() => {
                              deleteUser(e.id)
                            }}>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    )

                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers
