import { createContext, useEffect, useState } from "react"
import Card from "./components/custom/Card"
import { axiosRequest } from "./API/card_api";
import { Button } from "./components/ui/button";

export const DataContext = createContext([]);

const App = () => {
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
      <h2 
        className="text-3xl md:text-5xl underline text-primary text-center font-bold pt-12"
      >
        Products
      </h2>

      <div className="flex gap-8 mt-10 items-center justify-center">
        <h6 className="text-xl font-bold">
          Category
        </h6>
        
        <div className="flex gap-6">
          <Button>All</Button>
          <Button>Homme</Button>
          <Button>Femme</Button>
          <Button>Bijoux</Button>
          <Button>Electronique</Button>
        </div>
      </div>

      <DataContext.Provider value={data}>
        <div className="p-2 md:p-20 flex flex-wrap justify-evenly gap-6">
          <Card />
        </div>
      </DataContext.Provider>
    </>
  )
}

export default App
