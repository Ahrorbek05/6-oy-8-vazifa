import React from 'react'
import './index.module.css'

function Login() {
  return (
    <div className={styles.LoginCard}>
      <form>
        <input type="text" placeholder='Foydalanuvchi nomi'/>
        <input type="password" placeholder='Parolni kiriting!'/>
      </form>
    </div>
  )
}

export default Login