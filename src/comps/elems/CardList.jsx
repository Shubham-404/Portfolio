import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './elemStyles/CardList.css'
import Util from "./Util";

const CardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/files/project-works.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error loading data:", error));
    }, []);



    return (
        <div className="flex justify-center flex-wrap items-center gap-2 !pt-0 !p-4">
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="card-box min-lg:w-[50rem] w-max max-w-[80vw] text-wrap h-min  bg-indigo-600/25 border border-indigo-300/10 !p-4 flex gap-2 flex-col gap hover:bg-blue-500/30 rounded-xl max-lg:scale-90 items-center">
                        <img src={item.image} alt={item.Pname} className="w-full h-50 object-cover object-center rounded-md" />
                        <h2 className="text-xl font-bold !mt-2">{item.Pname}</h2>
                        <p className="h-31 overflow-hidden">{item.description}</p>
                        <div className="flex flex-wrap text-sm gap-3 w-full !px-3">
                            {item.tech.map((element, index) => (
                                <Util key={`${item.id}-tech-${index}`} Tech={element} />
                            ))}
                        </div>
                        <div className="btns w-full h-max bottom-0 flex justify-start">
                            <button className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-900 border-l-2 border-indigo-300 !px-4 !py-2 !m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97"><a className=" hover:!text-white  flex items-center gap-2"
                                href={`${item.github}`} target="_blank"><h2>GitHub Repo</h2> <img className="h-5" src="/svgs/arrow-right.svg" alt="arrow" /></a></button>

                            {item.url ?
                                <button className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-900 border-l-2 border-pink-300 !px-4 !py-2 !m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97"><a className=" hover:!text-white  flex items-center gap-2"
                                    href={`${item.url}`} target="_blank"><h2>View Live</h2> <img className="h-5" src="/svgs/arrow-right.svg" alt="arrow" /></a></button>
                                :
                                <div></div>
                            }
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default CardList;
