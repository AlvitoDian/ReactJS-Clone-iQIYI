import React, { useContext } from "react";

function BadgeCategory() {
    const category = [
        {
            id: 0,
            name: "Semua",
        },
        {
            id: 28,
            name: "Aksi",
        },
        {
            id: 12,
            name: "Petualangan",
        },
        {
            id: 35,
            name: "Komedi",
        },
        {
            id: 18,
            name: "Drama",
        },
        {
            id: 36,
            name: "Fantasi",
        },
        {
            id: 27,
            name: "Horor",
        },
        {
            id: 10749,
            name: "Romantis",
        },
        {
            id: 878,
            name: "Fiksi",
        },
        {
            id: 53,
            name: "Thriller",
        },
        {
            id: 9648,
            name: "Misteri",
        },
        {
            id: 36,
            name: "Sejarah",
        },
        {
            id: 10402,
            name: "Musikal",
        },
        {
            id: 16,
            name: "Animasi",
        },
        {
            id: 99,
            name: "Documenter",
        },
        {
            id: 80,
            name: "Kriminal",
        },
        {
            id: 10752,
            name: "Perang",
        },
    ];

    return (
        <div className="container-xl mb-10 ">
            <div className="h-auto xxl:overflow-x-auto xl:overflow-x-auto lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto">
                <div className="relative flex px-12 sm:px-2 md:px-2">
                    {category.map((cat, index) => (
                        <a
                            href={`/filter-movies?category=${cat.id}`}
                            key={index}
                            className="bg-[#23252B] px-[17px] py-[7px] text-[#a9a9ac] rounded-[4px] mr-3 hover:text-white font-medium text-[14px]"
                        >
                            {cat.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BadgeCategory;
