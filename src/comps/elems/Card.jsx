import { useEffect, useState, useRef, memo } from "react";
import Util from "./Util";

const Card = ({ item }) => {

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-[700px] w-full text-wrap h-105 bg-white/30 border-purple-300/50 text-indigo-950 backdrop-blur-md dark:bg-indigo-900/80 dark:border-indigo-900/40 dark:text-gray-100 p-2 flex flex-col hover:bg-indigo-800/90 rounded-4xl items-center">
                <div className="flex flex-wrap justify-between items-center w-full">
                    <h2 className="text-xl font-bold p-2 whitespace-nowrap">{item.Pname}</h2>
                    <div className="h-max flex justify-start max-lg:text-sm">
                        <button className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-900 border-l-2 border-indigo-300 px-4 max-md:px-1 py-2 m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97">
                            <a className="hover:text-white flex items-center gap-1"
                                href={item.github} target="_blank" rel="noopener noreferrer">
                                <h2>GitHub</h2>
                                <img className="h-5 invert" src="/svgs/open.svg" alt="Open in new tab" />
                            </a>
                        </button>

                        {item.url && (
                            <button className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-900 border-l-2 border-pink-300 px-4 max-md:px-1 py-2 m-2 rounded-full text-gray-50 cursor-pointer hover:scale-102 active:scale-97">
                                <a className="hover:text-white flex items-center gap-1"
                                    href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h2>Live</h2>
                                    <img className="h-5 invert" src="/svgs/open.svg" alt="Open in new tab" />
                                </a>
                            </button>
                        )}
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${item.image})` }} className="w-full h-full inner-card bg-cover bg-center text-white rounded-4xl overflow-hidden">
                    <div className="p-4 px-10 h-full max-lg:px-5 bg-gradient-to-t from-black/95 to-black/60 flex flex-col justify-end">
                        <p className="h-min max-h-37 pb-3 overflow-hidden">{item.description}</p>
                        <div className="flex flex-wrap text-sm gap-2 w-full">
                            {item.tech.map((element, index) => (
                                <Util key={`${item.id}-tech-${index}`} Tech={element} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Card);
