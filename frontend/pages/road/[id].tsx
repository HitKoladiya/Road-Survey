import React from "react";
import Navbar from "../components/Navbar";
import BarChart from "../components/BarChart";

const Road = () => {
    const nome = [
        "Quality Control Arrangements",
        "Attention to Quality",
        "Geometrics",
        "Earthwork and Sub-grade in Embankment/Cutting",
        "Granular Sub-base",
        "Base Course Non-Bituminous and shoulders",
        "Bituminous Surfacing",
        "Shoulders",
        "CD Works",
        "Side Drains and Catch Water Drains",
        "CC/Semi-Rigid Pavement and Associated Pukka Drains",
        "Road Furniture and Markings",
    ];

    return (
        <>
            <Navbar />
            <section className="bg-white">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <BarChart />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            Khokhra Road
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg">
                            <div className="overflow-x-auto relative">
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <tbody>
                                        <tr className="bg-white ">
                                            <th
                                                scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                            >
                                                Date
                                            </th>
                                            <td className="py-4 px-6">
                                                August 7, 2022
                                            </td>
                                        </tr>
                                        <tr className="bg-white ">
                                            <th
                                                scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                            >
                                                Contractor
                                            </th>
                                            <td className="py-4 px-6">
                                                Mr. XYZ
                                            </td>
                                        </tr>
                                        <tr className="bg-white ">
                                            <th
                                                scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                            >
                                                Address
                                            </th>
                                            <td className="py-4 px-6">
                                                Maninagar East, Amraiwadi,
                                                Ahemadabad
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </p>
                    </div>

                    <div className="overflow-x-auto relative col-span-2">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Criteria
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        NQM
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        SQM
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {nome.map((item, index) => (
                                    <tr className="bg-white border-b ">
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            {index + 1}. {item}
                                        </th>
                                        <td className="py-4 px-6">{nome}</td>
                                        <td className="py-4 px-6">{nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Road;

// Date : August 7, 2022
// Contractor : Mr XYZ

// Address : Maninagar East, Amraiwadi, Ahemadabad
