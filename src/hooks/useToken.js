import axios from "axios";
import { useEffect, useState } from 'react';

const useToken = user =>{
    const [token, setToken] = useState('')
    useEffect(()=>{
        // console.log('user inside token', user);
        const email = user?.user?.email;
        const currentUser = {
            email: email?.user?.email,
            name: user?.user?.displayName,
            img: user?.user?.photoURL || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        };
        if(email){
            const put = async () => {
                const response = await axios.put(`http://localhost:5000/user/${email}`, 
                currentUser
                );
                localStorage.setItem('accessToken', response?.data?.token);
                setToken(response?.data?.token);
                // console.log('token', response?.data?.token);
            };
            put();
        }
    }, [user]);
    return token;
}
export default useToken;