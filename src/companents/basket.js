import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addToBasket, DecreaseToBasket, getProdList, RemoveProductBasket} from "../redux/action/action";


const Basket = () => {
    const {basket: el} = useSelector(s => s)
    const [price, setPrice] = useState(0)
    console.log(el, "ELEMENT")


    useEffect(() => {
        setPrice(el.reduce((acc, rec) => {
            return el.quantity * el.price + acc
        },0))
    })


    const dispatch = useDispatch()

    return (
        <div className="min-h-screen bg-indigo-50 py-5">
            <div className="w-8/12 mx-auto bg-white shadow-lg border rounded-md py-3 px-6">
                {
                    el.length === 0 ? <div>Корзина пусто!!!</div> :
                        <div>
                            <div className="w-[80%] mx-auto ">
                                {
                                    el.map((el, idx) => (
                                        <div className="py-3" key={el.id}>

                                            <hr className=" border-1 rounded mb-3"/>

                                            <div className="w-full  flex justify-between pt-5">
                                                <div className="w-[50%] flex justify-between ">
                                                    <div className="bg-white w-ful  py-3 mr-9 ">

                                                    </div>
                                                    <img src={el.image} alt="image"
                                                         className="w-6/12 h-72 mr-2 object-cover rounded-md"/>

                                                    <p className="text-md pt-20 font-medium ">{el.title}</p>
                                                </div>
                                                <div className="flex flex-col w-[50%] text-right pr-10">
                                                    <p className="text-md pt-20 pr-16  font-medium">${el.price * el.quantity}</p>
                                                    <span className="text-md pt-5  font-medium">
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                                                        onClick={() => dispatch(addToBasket(el))}>+</button>
                                                    Количество : {el.quantity}
                                                        <button
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
                                                            onClick={() => dispatch(DecreaseToBasket(idx))}>-</button>
                                                    </span>

                                                    <button
                                                        onClick={() => dispatch(RemoveProductBasket(el.id))}
                                                        className="bg-amber-600 rounded shadow-lg py-3  text-white  text-md mr-4 mt-4 ml-40 font-medium">clear

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="bg-gray-900">

                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Basket;