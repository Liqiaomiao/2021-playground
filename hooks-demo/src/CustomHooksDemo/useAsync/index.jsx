import React, {useEffect} from "react";
import useAsync from './useAsync';

export default function UserList() {
    // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
    const {
        execute: fetchUsers,
        data: users,
        loading,
        error,
    } = useAsync(async () => {
        const res = await fetch("http://jsonplaceholder.typicode.com/users");
        const json = await res.json();
        return json;
    });
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            {loading ? 'loading...' : ''}
            <ul>
                {users && users.length > 0 && users.map((user) => {
                    console.log(user.name);
                    return (
                        <li>{user.name}</li>
                    )

                    }
                )}
            </ul>
        </>


    );
}
