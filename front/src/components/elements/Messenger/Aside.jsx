import React from 'react';
import '../../../styles/messenger/aside.css'
import AsideHeader from './AsideHeader';
import UsersList from './UsersList';
import { useSelector } from 'react-redux';

const Aside = () => {

    const usersData = useSelector(({ messenger }) => messenger.users)
    console.log('usersData', usersData);

    return (
        <aside>
            <AsideHeader />
            <UsersList />
        </aside>
    );
}

export default Aside;