/* 
import React from "react";

 export const Validation = ( { data}) => {
    const errors = {}
if (!data.name || !data.name.trim()) {
        errors.name = 'Name is required';
    } else {
        delete errors.name;
    }

   
        if (!data.lastName || data.lastName.trim() === '') {
            errors.lastName = 'Last name is required';
        } else {
            delete errors.lastName;
        }
    


    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
        errors.email = 'Invalid email format';
    } else {
        delete errors.email;
    }



    if (!data.telegramId) {
        errors.telegramId = 'Telegram ID is required';
    } else if (!/^@?[a-zA-Z0-9_]{5,}$/.test(data.telegramId)) {
        errors.telegramId = 'Invalid Telegram ID format';
    } else {
        delete errors.telegramId;
    }
      
    return errors
} 
 */


import React from 'react';

export const Validation = (data) => {
    const errors = {}


    if (!data.name.trim()) {
        errors.name = 'name is required';
    } else {
        delete errors.name;
    }

    if (!data.lastName || data.lastName.trim() === '') {
        errors.lastName = 'Last name is required';
    } else {
        delete errors.lastName;
    }

    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = 'Email address is invalid';
    } else {
        delete errors.email;
    }



    if (!data.telegramId) {
        errors.telegramId = 'Telegram ID is required';
    } else if (!/^@?[a-zA-Z0-9_]{5,}$/.test(data.telegramId)) {
        errors.telegramId = 'Invalid Telegram ID format';
    } else {
        delete errors.telegramId;
    }


    if (!data.message) {
        errors.message = 'Message is required';
    } else if (data.message.length < 20) {
        errors.message = 'Message needs to be 20 characters or more';
    } else {
        delete errors.message;
    } 

     
    if (!data.country.trim()) {
        errors.country = 'country is required';
    } else {
        delete errors.country;
    }
    if (!data.male) {
        errors.male = "Gender is regulation"
    } else {
        delete errors.male
    } 


    if (!data.female) {
        errors.female = "Gender is regulation"
    } else {
        delete errors.female
    } 
    return errors;
};