import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import HeaderAdmin from "../header";
import Admin from "../Admin";
import { FaArrowRight } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";


axios.defaults.withCredentials = true;

function AllUsers() {
  const [msg, setMsg] = useState("");

  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);
  const [haveRentals, sethaveRentals] = useState([]);
  const [NoRentals, setNoRentals] = useState([]);

  const [deleteMsg, setDeleteMsg] = useState(false);
  const [filters, setFilter] = useState({
    rental: false,
    ville: false,
    pays: false,
  });

  // distinct
  const [disCity, setDisCity] = useState({ d: [], g: [] });
  const [disCountry, setdisCountry] = useState();

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    let d = datas.data;
    console.log(d.cityDistinct);
    setData(d.all);
    setPermanent(d.all);
    setNoRentals(d.usersWithoutRentals);
    sethaveRentals(d.usersWithRentals);
    setDisCity({ groupe: d.groupeCity, distinct: d.cityDistinct });
    setdisCountry({ groupe: d.groupeCountry, distinct: d.countryDistinct });
  };
  useEffect(() => {
    console.log("hello");
    fetchData();
  }, []);
  let deleteUser = async (id) => {
    try {
      let d = await axios.delete(`http://localhost:8000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(d.data);
      if (d.data.msg === "done") {
        setMsg("deleted successfuly");
        setDeleteMsg(true);
      } else {
        setMsg("cant delet this user");
      }
      fetchData();
    } catch (error) {
      setMsg("Failed to delete client.");
    }
  };
  let filter = (e) => {
    // Assuming you have useState declared like this:
    // const [data, setData] = useState([]);

    switch (e) {
      case "with":
        setData(haveRentals);
        break;
      case "no":
        setData(NoRentals);
        break;
      default:
        setData(permanent);
        break;
    }
  };
  let filterByCity = (e) => {
    for (const key in disCity.groupe) {
      if (e === key) {
        setData(disCity.groupe[key]);
        break;
      } else {
        setData(permanent);
      }
    }
  };
  let filterByCountry = (e) => {
    for (const key in disCountry.groupe) {
      if (e === key) {
        setData(disCountry.groupe[key]);
        break;
      } else {
        setData(permanent);
      }
    }
  };
  return (
    <div className="">
       <Link to="/admin/users/create">
      <button
        className="before:ease relative h-12 w-40 ml-auto mt-3 font-semibold flex justify-center items-center gap-2 overflow-hidden border border-red-500 text-white group shadow-2xl before:absolute before:right-0  {/* Positioned on right side */}
  before:-mr-2 before:h-48 before:w-48 before:origin-top-left 
  before:-translate-x-full before:-translate-y-12 before:rotate-90
  before:bg-white before:transition-all before:duration-300 hover:text-white
  hover:shadow-red-500 hover:bg-red-500 hover:before:-rotate-180"
      >
        <span className="relative z-20 text-red-500 group-hover:text-white">
         Create A User
        </span>
        <FaArrowRight className="relative z-20 ml-2 text-red-500 group-hover:text-white" />
      </button>
      </Link>

      <div className="">
        <div className="flex flex-col p-4 lg:flex-row">
          <div className="hidden w-1/5 mr-4 border-[0.2rem] border-gray-200 rounded lg:block ">
            <h2
              className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilter({ rental: true, ville: false, pays: false });
              }}
            >
              Users Rental{" "}
            </h2>
            {filters.rental === true ? (
              <div>
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    filter("all");
                  }}
                >
                  All
                </p>

                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    filter("with");
                  }}
                >
                  with Rentals
                </p>

                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    filter("no");
                  }}
                >
                  with No Rentals
                </p>
              </div>
            ) : (
              ""
            )}
            {/* ================================City ============================ */}
            <h2
              className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilter({ rental: false, ville: true, pays: false });
              }}
            >
              Ville{" "}
            </h2>

            {filters.ville === true ? (
              <div>
                {disCity !== null ? (
                  <div>
                    {disCity.distinct.map((e) => (
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          filterByCity(e);
                        }}
                      >
                        {" "}
                        {e}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}

            {/* ================================Country ============================ */}
            <h2
              className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilter({ rental: false, ville: false, pays: true });
              }}
            >
              Pays{" "}
            </h2>
            {filters.pays === true ? (
              <div>
                {disCountry !== null ? (
                  <div>
                    {disCountry.distinct.map((e) => (
                      <p
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          filterByCountry(e);
                        }}
                      >
                        {" "}
                        {e}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-full m-2 ">
         

            <div className="flex flex-col ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-sm font-light text-left text-surface ">
                      <thead className="font-medium border-b border-black">
                        <tr>
                          <th className="px-6 py-4 ">ID</th>
                          <th className="px-6 py-4 ">Name</th>
                          <th className="px-6 py-4 ">Email</th>
                          <th className="px-6 py-4 ">Address</th>
                          <th className="px-6 py-4 ">Phone</th>
                          <th className="px-6 py-4 ">City</th>
                          <th className="px-6 py-4 ">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((e, i) => (
                          <tr key={i} className="border-b border-black ">
                            <td className="px-6 py-4 font-medium whitespace-nowrap">
                              {e.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {e.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {e.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {e.address}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {e.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {e.city}
                            </td>
                            <td className="flex items-center justify-start gap-2 px-6 py-4 whitespace-nowrap">

                              <Link to={`/admin/user/edit/${e.id}`}>
                                <FaPen className="font-semibold cursor-pointer 
                                 text-[#E60035] w-4 h-4"/>

                              </Link>

                           
                                <MdDeleteSweep   className="font-semibold cursor-pointer
                                 text-[#E60035] w-5 h-5  "
                                onClick={() => deleteUser(e.id)}/>

                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
