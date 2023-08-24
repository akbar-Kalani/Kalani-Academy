
"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import React from 'react'
import "./style.css"
import { localize } from './../translate/Translation'
import { Validation } from './validation'

export const RegisterforClass = () => {
    const [focus, setFocus] = useState({})
    const [lang, setLang] = useState('en');
    const initialFormData = {
        name: '',
        lastName: '',
        email: '',
        telegramId: '',
        country: '',
        programming: '',
        female: false,
        male: false,
        yes: false,
    };

    const [data, setData] = useState(initialFormData);

    const [errors, setErrors] = useState({})
    console.log("hassn", data);



    const onchangeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    useEffect(() => {
        setErrors(Validation(data));
    }, [data]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form data:', data);

        try {
            const response = await fetch('https://64cfe80affcda80aff52489d.mockapi.io/userData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Assuming 'data' contains your form data
            });
            if (Object.keys(errors).length === 0) {


            } else {

                setFocus({
                    name: true,
                    lastName: true,
                    email: true,
                    phone: true,
                    male: true,
                    female: true,
                    telegramId: true,
                    country: true,
                    programming: true,

                });
            }
            if (response.ok) {

                setData(initialFormData); // Reset the form data
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    const focusHandler = (e) => {
        e.target.parentNode.classList.add('focused');
        setFocus({ ...focus, [event.target.name]: true });
    };

    const blurHandler = (e) => {
        if (e.target.value === '') {
            e.target.parentNode.classList.remove('focused');
        }
    }
    return (
        <div>

            <div className="login-box p-4 w-full md:w-[700px]">
                <select
                    onChange={(e) => {
                        setLang(e.target.value);

                    }}
                    value={lang}
                >
                    <option value="en">English</option>
                    <option value="fa">Persian</option>
                </select>
                <h2 className="text-center text-2xl font-bold text-white mb-6"> {localize(lang, 'title')}  </h2>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-wrap justify-evenly  w-full' >
                    <div className="user-box box-input my-3 max-sm:w-full md:w-[48%]">
                        <label className=" px-2  text-white pointer-events-none transition-all">
                            {localize(lang, 'name')}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            className="w-full text-white border-b border-white outline-none bg-transparent"
                            onChange={onchangeHandler}
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                        />
                        {errors.name && focus.name && <span className='formField' >{errors.name}</span>}
                    </div>
                    <div className="user-box box-input my-3 max-sm:w-full md:w-[48%]">
                        <label className=" px-2  text-white pointer-events-none transition-all">
                            {localize(lang, 'lastName')}
                        </label>
                        <input type="text"
                            name="lastName"
                            value={data.lastName}
                            className="w-full text-white border-b border-white outline-none   bg-transparent"
                            onChange={onchangeHandler}
                            onFocus={focusHandler}
                            onBlur={blurHandler} />
                        {errors.lastName && focus.lastName && <span className='formField' >{errors.lastName}</span>}
                    </div>

                    <div className="user-box box-input my-3 max-sm:w-full md:w-[48%]">
                        <label className=" px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'email')}
                        </label>
                        <input type="email"

                            name="email"

                            value={data.email}

                            className="w-full  text-white  border-b border-white outline-none   bg-transparent"

                            onChange={onchangeHandler}
                            onFocus={focusHandler}
                            onBlur={blurHandler} />
                        {errors.email && focus.email && <span className='formField' >{errors.email}</span>}

                    </div>

                    <div className="user-box box-input my-3 max-sm:w-full md:w-[48%]">
                        <label className=" px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'telegram')}</label>
                        <input type="text"
                            name="telegramId"
                            value={data.telegramId}
                            className="w-full  text-white  border-b border-white outline-none   bg-transparent"
                            onChange={onchangeHandler}
                            onFocus={focusHandler}
                            onBlur={blurHandler} />
                        {errors.telegramId && focus.telegramId && <span className='formField' >{errors.telegramId}</span>}
                    </div>

                    <div className="user-box my-3 w-[98%]">
                        <label className="px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'country')}
                        </label>
                        <select
                            name="country"
                            className="w-full text-white border-b border-white outline-none bg-transparent"
                            onChange={onchangeHandler}
                        >
                            <option className="bg-[#1C2940]" value={data.country}>

                            </option>
                            {Object.entries(localize(lang, 'countries')).map(([key, value]) => (
                                <option className="bg-[#1C2940]" key={value}>
                                    {value}
                                </option>
                            ))}
                        </select>

                        {!data.country || data.country.trim() === '' ? (
                            <span className='formField'>country is required</span>
                        ) : null}
                    </div>



                    <div className="user-box my-3 w-[48%]">
                        <label className=" px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'male')}
                        </label>
                        <input type="checkbox"
                            value={data.male} name="male"
                            className="  text-white  border-b border-white outline-none   bg-transparent"
                            onChange={onchangeHandler} />
                        {errors.male && focus.male && <span className=' ms-4 formField' >{errors.male}</span>}
                    </div>
                    <div className="user-box my-3 w-[48%]">
                        <label className=" px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'female')}
                        </label>
                        <input type="checkbox"
                            name="female" value={data.female}
                            className="  text-white  border-b border-white outline-none   bg-transparent"
                            onChange={onchangeHandler} />
                        {errors.female && focus.female && <span className=' ms-4 formField' >{errors.female}</span>}

                    </div>

                    <div className="user-box my-3 w-[98%]">
                        <label className=" px-2 text-white pointer-events-none transition-all">
                            {localize(lang, 'prog')}
                        </label>
                        <input type="checkbox"
                            name="yes" value={data.yes}
                            className="   text-white  border-b border-white outline-none   bg-transparent"
                            onChange={onchangeHandler} />

                    </div>

                    {data.yes && (
                        <div className="user-box my-3 w-[98%]">
                            <label className="px-2 text-white pointer-events-none transition-all">
                                {localize(lang, 'decri')}
                            </label>
                            <textarea
                                className='w-full mt-2 bg-transparent text-white outline-none border p-2'
                                value={data.programming}
                                name="programming"
                                id=""
                                cols="30"
                                rows="5"
                                onChange={onchangeHandler}
                            ></textarea>
                        </div>
                    )}
                    <button className="relative mt-3 bg-emerald-300 rounded-lg w-[200px] inline-block py-2 px-4 text-black text-uppercase text-center overflow-hidden transition-all transform hover:bg-blue-950 hover:text-white hover:shadow-md hover:rounded-md hover:scale-105">
                        <span className=" animate-btn-anim1 absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-btn-anim1"></span>
                        <span className="animate-btn-anim2 absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-btn-anim2"></span>
                        <span className="animate-btn-anim3 absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-btn-anim3"></span>
                        <span className=" animate-btn-anim4 absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-transparent via-blue-500 to-transparent animate-btn-anim4"></span>
                        {localize(lang, 'submit')}
                    </button>
                </form>
            </div>

        </div>
    )
}
