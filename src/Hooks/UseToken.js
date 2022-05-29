import { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState("")
    useEffect(() => {
        
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            const url = `https://still-taiga-05914.herokuapp.com/user/${email}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data =>  setToken(data))
        }
    }, [user])
    return [token]
};

export default UseToken;