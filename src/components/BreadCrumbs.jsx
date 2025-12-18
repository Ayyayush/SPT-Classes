import React from "react";
import toast from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "./endpoint.js";

//// on addition of the new page need to update the things into this URL_OBJ
export const URL_OBJ={
    "LandingPage":`${BASE_URL}`,
    "Courses":`${BASE_URL}/Courses`,
    "About":`${BASE_URL}/About`,
    "Contact":`${BASE_URL}/Contact`
}

export default function BreadCrumbs() {
    const location=useLocation();
    const navigate=useNavigate();
    const pathString=location.pathname;

    const pathArray=pathString.split("/")
    const arrayLength=pathArray.length;

    if(pathArray[arrayLength-1]=="") pathArray.pop();
    pathArray[0]="LandingPage";    /// so that initial page can be the landing Page


    console.log(pathArray)
    
    function handleClick(e,link){
        try{
            e.preventDefault();
            e.stopPropagation();
            console.log("hello"+link)
            navigate(link);

        }catch(error){
            console.log(error)
            toast.error("gone wrong while clicking on bread crumb")
        }
    }
    return (
        <nav className="w-full bg-white px-6 py-3 border-b border-gray-200">
            <ol className="flex items-center space-x-2 text-sm">
                {pathArray.map((item, index) => {
                    const isLast = index === pathArray.length - 1;

                    return (
                        <li key={index} className="flex items-center">
                            {!isLast ? (
                                <div
                                    onClick={(e)=>handleClick(e,URL_OBJ[item])}
                                    className="text-blue-600 hover:text-blue-800 font-medium transition"
                                >
                                    {item}
                                </div>
                            ) : (
                                <span className="text-gray-900 font-semibold">
                                    {item}
                                </span>
                            )}

                            {!isLast && (
                                <span className="mx-2 text-gray-400">{">"}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
