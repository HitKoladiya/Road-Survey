import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";

const roads = () => {
    const roads = [
        {
            name: "Gurukul Road",
            Date: "July 7, 2022",
            Contractor: "Mr. ABC",
            Address: "Memnagar, Ahmedabad, Gujarat 380052",
        },
        {
            name: "Khokhra Road",
            Date: "August 7, 2022",
            Contractor: "Mr. XYZ",
            Address: "Maninagar East,   Amraiwadi, Ahemadabad",
        },
        {
            name: "Gurukul Road - 2",
            Date: "October 05, 2003",
            Contractor: "Mr. ABC",
            Address: "Memnagar, Ahmedabad, Gujarat 380052",
        },
    ];

    return (
        <>
            <Head>
                <title>Roads</title>
            </Head>
            <Navbar current="roads" />
            <div className="px-10 w-full mx-auto lg:w-10/12 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {roads.map((road) => (
                    <div className="mx-auto p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900  ">
                                {road.name}
                            </h5>
                            <Link href={`/road/${road.name}`}>
                                <a
                                    href=""
                                    className="text-sm font-medium text-blue-600 hover:underline "
                                >
                                    View Details
                                </a>
                            </Link>
                        </div>

                        <div className="flow-root">
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Date
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            {road.Date}
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Contractor
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            {road.Contractor}
                                        </div>
                                    </div>
                                </li>{" "}
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                Address
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            {road.Address.split(",")[0]}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default roads;
