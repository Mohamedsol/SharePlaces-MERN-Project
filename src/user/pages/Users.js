import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id:'u1',
            name:'Mohamed',
            image:'https://randomuser.me/api/portraits/men/46.jpg',
            places: 3
        } 
    ];
    return <UsersList items={USERS} />;
}
 
export default Users;