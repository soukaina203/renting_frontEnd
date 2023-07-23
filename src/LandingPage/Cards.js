import React ,{useEffect ,useState} from 'react'
import axios from 'axios';
function Cards() {
  const [data, setData] = useState([]);
  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/topCars");
    setData(datas.data.topCars)

  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
       {data !== undefined ?
            data.map((e, i) => {
              return  <div>
                
                
                 {e.model}
                 
                 
                 </div> }):""}
    </div>
  )
}

export default Cards
