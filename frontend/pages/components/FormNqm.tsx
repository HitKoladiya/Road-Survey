import React, { useState } from "react";
import axios from "axios";

const Form = (props: any) => {
    const nomes = [
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

    const tailwindClass =
        "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-idiborder-indigo-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";

    const [form, setForm] = useState({
        name: "",
        location: "",
        pin: "",
    });

    const [decision, setDecision] = useState([
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ]);

    const [resion, setResion] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    let name = "";
    let value = "";

    const handleDecision = (e: { target: { name: string; value: string } }) => {
        const i = Number(e.target.name.slice(0, 2)) - 10;
        // console.log(i);

        name = e.target.name;
        value = e.target.value;

        let newDecision = [...decision];
        newDecision[i] = value;
        setDecision(newDecision);
    };

    const handleResion = (e: { target: { name: string; value: string } }) => {
        const i = Number(e.target.name.slice(0, 2)) - 10;
        // console.log(i);

        name = e.target.name;
        value = e.target.value;

        let newResion = [...resion];
        newResion[i] = value;
        setResion(newResion);
    };

    const handleChange = (e: { target: { name: string; value: string } }) => {
        name = e.target.name;
        value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handelSubmit = (e: any) => {
        e.preventDefault();

        let validetor = true;

        decision.forEach((element) => {
            element === "none" ? (validetor = false) : (validetor = true);
        });

        resion.forEach((element) => {
            element === "" ? (validetor = false) : (validetor = true);
        });

        if (!form.location || !form.name || form.pin.length !== 6) {
            validetor = false;
        }

        if (validetor) {
            const data = [];

            for (let i = 0; i < 12; i++) {
                data.push({
                    nome: nomes[i],
                    Value: decision[i],
                    Reason: resion[i],
                });
            }

            const finalData = { nqm: [...data], ...form };

            const options = {
                method: "POST",
                url: "http://127.0.0.1:5000/putdata_nqm",
                data: finalData,
            };

            axios
                .request(options)
                .then(function (response: { data: any }) {
                    console.log(response.data);
                })
                .catch(function (error: any) {
                    console.error(error);
                });

            console.log(finalData);
            alert(JSON.stringify(finalData));
        } else {
            alert("Please fill all fields properly");
        }
    };

    return (
        <div className="w-2xl flex justify-center sm:py-10 sm:px-28 p-10">
            <form onSubmit={handelSubmit}>
                <div
                    className="sm:grid sm:grid-cols-5 sm:gap-5 justify-center py-3 flex flex-col items-center"

                >
                    <div className="flex items-center h-10 col-span-2">
                        <label className="text-sm font-medium text-slate-700">
                            Road name
                        </label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        className={`${tailwindClass} h-10 col-span-2`}
                        onChange={handleChange}
                    >

                    </input>

                </div>

                <div
                    className="sm:grid sm:grid-cols-5 sm:gap-5 justify-center py-3 flex flex-col items-center"

                >
                    <div className="flex items-center h-10 col-span-2">
                        <label className="text-sm font-medium text-slate-700">
                            Road Location
                        </label>
                    </div>
                    <input
                        type="text"
                        name="location"
                        className={`${tailwindClass} h-10 col-span-2`}
                        onChange={handleChange}
                    >

                    </input>

                </div>
                <div
                    className="sm:grid sm:grid-cols-5 sm:gap-5 justify-center py-3 flex flex-col items-center"

                >
                    <div className="flex items-center h-10 col-span-2">
                        <label className="text-sm font-medium text-slate-700">
                            Location Pincode
                        </label>
                    </div>
                    <input
                        type="number`"
                        name="pin"
                        className={`${tailwindClass} h-10 col-span-2`}
                        onChange={handleChange}
                    >

                    </input>

                </div>
                <hr />
                {/* ----- */}
                {nomes.map((nome: any, index: any) => (
                    <div key={index.toString()}>
                        <div
                            className="sm:grid sm:grid-cols-5 sm:gap-5 justify-center py-3 flex flex-col items-center"
                            key={index}
                        >
                            <div className="flex items-center h-10 col-span-2">
                                <label className="text-sm font-medium text-slate-700">
                                    {index + 1}. {nome}
                                </label>
                            </div>
                            <select
                                className={`${tailwindClass} h-10`}
                                name={`${index + 10}decision`}
                                value={decision[index]}
                                onChange={handleDecision}
                            >
                                <option value="none" disabled>
                                    Select
                                </option>
                                <option value="Satisfactory">
                                    Satisfactory
                                </option>
                                <option value="Unsatisfactory">
                                    Unsatisfactory
                                </option>
                                <option value="Reimprovement">
                                    Reimprovement
                                </option>
                            </select>
                            <textarea
                                placeholder="Enter reason..."
                                className={`${tailwindClass} col-span-2`}
                                name={`${index + 10}resion`}
                                value={resion[index]}
                                onChange={handleResion}
                            ></textarea>
                        </div>
                        <hr />
                    </div>
                ))}
                <button
                    type="submit"
                    className="mt-5 cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit
                </button>
                {/* ----- */}
            </form>
        </div>
    );
};

export default Form;
