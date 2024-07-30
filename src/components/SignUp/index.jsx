import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    async function getData(url) {
        try {
            const response = await fetch(url);
            let data = [];
            if (response.status === 200) {
                data = await response.json();
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData("https://dummyjson.com/users/add")
            .then(data => {
                setUser(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handleUserName(event) {
        event.preventDefault();
    }

    return (
        <div className={styles.card}>
            <h1>SIGN UP</h1>
            <form onSubmit={handleUserName}>
                <input type="text" name='user' placeholder='Foydalanuvchi nomini kiriting!' value={username} onChange={(e) => setUser(e.target.value)}/>
                <input type="email" placeholder='Emailingizni kiriting!' value={email}  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Parol kiriting!' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className={styles.submit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
