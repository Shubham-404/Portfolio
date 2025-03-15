import { useEffect, useState } from "react";
import './elemStyles/CardList.css'

const CardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/Portfolio/files/project-works.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error loading data:", error));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 !p-4">
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="card-box overflow-hidden bg-blue-950/15 border border-indigo-300/10 !p-4 flex gap-2 flex-col gap hover:bg-blue-950/30 rounded-xl max-lg:scale-90 justify-center items-center">
                        <img src={item.image} alt={item.Pname} className="w-full h-32 object-cover rounded-md" />
                        <h2 className="text-xl font-bold !mt-2">{item.Pname}</h2>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default CardList;
