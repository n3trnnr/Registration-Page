import React, { useEffect, useState } from 'react';
import '../../styles/messenger/messenger.css'
import { Link } from 'react-router-dom';
import Aside from '../elements/Messenger/Aside';
import Dialogues from '../elements/Messenger/Dialogues';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/messenger';

const Messenger = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getUsersData()
    }, [])

    const getUsersData = async () => {
        try {
            const rawData = await fetch('http://localhost:8888/users', {
                method: 'GET'
            })

            const data = await rawData.json()
            // console.log('data', data);
            dispatch(getUsers(data))
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='messenger'>
            <Aside />
            <Dialogues />
            <Link to='/'>Back</Link>
        </div>
    );
}

export default Messenger;