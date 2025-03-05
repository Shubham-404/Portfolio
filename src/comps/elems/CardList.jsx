import { useEffect, useState } from "react";
import mydata from "../../projectList.json";


const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetch from the public folder
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (  
    <div className="grid grid-cols-2 gap-4 !p-4">
      {mydata.map((item) => (
        <div key={item.id} className="bg-blue-950/15 border border-indigo-300/10 !p-4 flex gap-2 flex-col gap hover:bg-blue-950/30 rounded-xl max-lg:scale-90 justify-center items-center">
        {/* <div key={item.id} className="bg-indigo-900 shadow-lg rounded-xl !p-4"> */}
          <img src={item.image} alt={item.Pname} className="w-full h-32 object-cover rounded-md" />
          <h2 className="text-xl font-bold !mt-2">{item.Pname}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
 
export default CardList;
