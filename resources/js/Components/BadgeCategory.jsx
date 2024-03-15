import React, { useContext } from "react";

function BadgeCategory() {
    const category = [
        {
            id: 1,
            name: "Semua",
        },
        {
            id: 2,
            name: "Aksi",
        },
        {
            id: 3,
            name: "Petualangan",
        },
        {
            id: 4,
            name: "Komedi",
        },
        {
            id: 5,
            name: "Drama",
        },
        {
            id: 6,
            name: "Fantasi",
        },
        {
            id: 7,
            name: "Horor",
        },
        {
            id: 8,
            name: "Romantis",
        },
        {
            id: 9,
            name: "Fiksi",
        },
        {
            id: 10,
            name: "Thriller",
        },
        {
            id: 11,
            name: "Misteri",
        },
        {
            id: 12,
            name: "Sejarah",
        },
        {
            id: 13,
            name: "Musikal",
        },
        {
            id: 14,
            name: "Olahraga",
        },
        {
            id: 15,
            name: "Animasi",
        },
        {
            id: 16,
            name: "Documenter",
        },
        {
            id: 17,
            name: "Kriminal",
        },
    ];

    return (
        <div className="container-xl mb-10 ">
            <div className="h-auto xxl:overflow-x-auto xl:overflow-x-auto lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto">
                <div className="relative flex px-12 sm:px-2 md:px-2">
                    {category.map((cat) => (
                        <a
                            href="/"
                            key={cat.id}
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
