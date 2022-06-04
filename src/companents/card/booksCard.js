import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const BooksCard = ({el}) => {

    return (
        <div className="sm:basis-1/3  md:basis-1/3 lg:basis-1/3 xl:basis-1/3 my-7 text-center flex justify-center mx-2" key={el.id}>
            <div
                className="sm:px-2 py-2  md:px-2 py-3 lg:px-3 py-4 xl:px-4 py-5 text-gray-100 bg-amber-600 px-6 py-6 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100 hover:scale-105 my-6 pt-6 ">

               <div className="w-full">
                   <Link to={`/shop-details/${el.id}`}>
                       <img src={el.image} alt="image"
                            className="w-full h-96 object-cover rounded-md mx-1"/>
                   </Link>
               </div>

                <span className="flex flex-col mt-3">
                        <h4 className="font-head font-medium pb-5 w-60 text-left">{el.title}</h4>
                    <div className="flex justify-between">
                        <div className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <p>{el.price} som</p>

                        </div>
                         <FontAwesomeIcon
                             className="pl-5 pt-3   "
                             icon={faCartShopping}/>
                    </div>
                    </span>
            </div>

        </div>
    );
};

export default BooksCard;