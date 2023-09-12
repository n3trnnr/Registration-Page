import React from 'react';
import '../../../styles/messenger/aside.css'
import AsideHeader from './AsideHeader';
import UsersList from './UsersList';

const Aside = () => {
    return (
        <aside>
            <AsideHeader />
            <UsersList />
        </aside>
    );
}

export default Aside;