import React, { useContext, useState } from "react";
import ActorInfo from "./ActorInfo";
import { ActorContext } from "../Contexts/ActorContext";

function HeaderActor() {
    const { actor, portoActor } = useContext(ActorContext);

    function truncateChars(str, maxChars) {
        if (str.length > maxChars) {
            return str.slice(0, maxChars) + "...";
        }
        return str;
    }

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="container-xl pt-28 xxl:px-[190px] xl:px-16 lg:px-10 md:px-5 sm:px-5">
            <div className="flex ">
                <div>
                    <div className="w-[200px] h-[200px] sm:w-[120px] sm:h-[120px]">
                        <img
                            src={actor.profile_url}
                            className="w-full h-[200px] sm:h-[120px] object-cover rounded-full"
                            alt=""
                        />
                    </div>
                </div>
                <div className="pl-[36px] flex flex-col">
                    <div className="text-white text-[32px] sm:text-[26px] font-medium">
                        <span>{actor.name}</span>
                    </div>
                    <div className="text-white text-[24px] sm:text-[20px] font-normal opacity-50">
                        <span>{actor.known_for_department}</span>
                    </div>
                    <div className="text-white text-[16px] sm:text-[14px] font-normal opacity-80 mt-[10px] gap-[12px] flex flex-wrap">
                        <span className="divide-custom">
                            {actor.gender === 2 ? "Pria" : "Wanita"}
                        </span>

                        <span className="divide-custom">
                            {actor.known_for_department}
                        </span>

                        <span className="divide-custom"> {actor.birthday}</span>
                        <span className="divide-custom">
                            {actor.popularity}
                        </span>
                    </div>

                    <div className="text-white text-[16px] font-normal mt-[10px] relative">
                        <span className="opacity-80">
                            {showFullDescription
                                ? actor.biography
                                : truncateChars(actor.biography, 350)}
                        </span>

                        <span
                            className={`absolute font-bold right-0  text-[#1CC749] cursor-pointer bg-[#111319]  ${
                                showFullDescription ? " mt-10" : "bottom-0"
                            } `}
                            style={{
                                filter: "drop-shadow(-21px 0px 5px #111319)",
                            }}
                            onClick={toggleDescription}
                        >
                            {showFullDescription ? (
                                <>
                                    Tampilkan Lebih Sedikit
                                    <i className="pl-1 fas fa-chevron-up text-xs"></i>
                                </>
                            ) : (
                                <>
                                    Tampilkan Lebih Banyak
                                    <i className="pl-1 fas fa-chevron-down text-xs"></i>
                                </>
                            )}
                        </span>
                    </div>
                    <div className="mt-[10px]">
                        <a
                            href="/"
                            className="bg-[#23252B] px-[56px] py-[7px] text-white rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[16px] flex items-center justify-center w-[100px] md:w-[100%] sm:w-[100%]"
                        >
                            <i className="fas fa-arrow-up-from-bracket text-[14px] mr-2"></i>
                            Bagikan
                        </a>
                    </div>
                </div>
            </div>
            <ActorInfo />
        </div>
    );
}

export default HeaderActor;
