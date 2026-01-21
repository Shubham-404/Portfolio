import { useEffect, useState, useRef, memo } from "react";
import Util from "./Util";

const Card = ({ item }) => {

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-[700px] w-full text-wrap h-105 bg-white/70 shadow-sm shadow-gray-800 text-indigo-950 dark:bg-indigo-900/70 dark:text-gray-100 p-2 flex flex-col hover:bg-indigo-800/70 rounded-4xl items-center hover:scale-101 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap justify-between items-center w-[90%] !px-4 !py-2">
                    <h2 className="text-xl font-bold whitespace-nowrap">{item.Pname}</h2>
                    <div className="h-max flex justify-start items-center gap-3">
                        {item.github && (
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-black/20 dark:bg-black/20 dark:hover:bg-white/30 border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95 invert"
                                aria-label="View on GitHub"
                            >
                                <img className="h-5 w-5 invert dark:invert-0 opacity-80 group-hover:opacity-100 transition-opacity" src="/svgs/github.svg" alt="GitHub" />
                            </a>
                        )}

                        {item.url && (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-blac/20 dark:bg-black/20 dark:hover:bg-white/30 border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95 invert"
                                aria-label="View Live Site"
                            >
                                <img className="h-5 w-5 invert dark:invert-0 opacity-80 group-hover:opacity-100 transition-opacity" src="/svgs/open.svg" alt="Live" />
                            </a>
                        )}
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${item.image})` }} className="w-full h-full inner-card bg-cover bg-center text-white rounded-4xl overflow-hidden shadow-inner shadow-black">
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
