import { createContext, useEffect, useState } from "react"
import Card from "./components/custom/Card"
import { axiosRequest } from "./API/card_api";

export const DataContext = createContext([]);

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosRequest.get('/');
        setData(response.data)

        console.log((await response).data)
      } catch (error) {
        console.log(error);
        throw error;
      };
    }
    fetchData();
  }, [])

  return (
    <>
      <h2 className="text-3xl md:text-5xl underline text-primary text-center font-bold pt-20">
        Products
      </h2>
        
      <DataContext.Provider value={data}>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <Card />
        </div>
      </DataContext.Provider>
    </>
  )
}

export default App
