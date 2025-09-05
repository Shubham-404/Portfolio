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
        <div className="grid gap-2 !pt-0 !p-4">
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="card-box min-lg:w-[50rem] max-w-[80vw] text-wrap h-min bg-indigo-600/10 border border-indigo-700/40 !p-4 flex gap-2 flex-col hover:bg-indigo-600/20 hover:scale-102 rounded-4xl max-lg:scale-90 items-center">
                        <h2 className="text-xl font-bold !p-4">{item.Pname}</h2>
                        <div style={{ backgroundImage: `url(${item.image})` }} className="w-full inner-card bg-cover bg-center text-white rounded-4xl overflow-hidden">
                            <div className="w-full h-50 bg-gradient-to-t from-black/60 to-transparent" ></div>
                            <div className="!p-4 !px-10 max-lg:!px-5 bg-gradient-to-t from-black/95 to-black/60">

                                <p className="h-min max-h-37 !pb-3 overflow-hidden">{item.description}</p>
                                <div className="flex flex-wrap text-sm gap-2 w-full">
                                    {item.tech.map((element, index) => (
                                        <Util key={`${item.id}-tech-${index}`} Tech={element} />
                                    ))}
                                </div>
                                <div className="btns w-full h-max bottom-0 flex justify-start max-lg:text-sm">
                                    <button className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-900 border-l-2 border-indigo-300 !px-4 max-md:!px-1 !py-2 !m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97"><a className=" hover:!text-white  flex items-center gap-1"
                                        href={`${item.github}`} target="_blank"><h2>GitHub</h2> <img className="h-5 invert" src="/svgs/open.svg" alt="arrow" /></a></button>

                                    {item.url ?
                                        <button className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-900 border-l-2 border-pink-300 !px-4 max-md:!px-1 !py-2 !m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97"><a className=" hover:!text-white  flex items-center gap-1"
                                            href={`${item.url}`} target="_blank"><h2>Live</h2> <img className="h-5 invert" src="/svgs/open.svg" alt="arrow" /></a></button>
                                        :
                                        <div></div>
                                    }
                                </div>
                            </div>
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
