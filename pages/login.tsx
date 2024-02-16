import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import styles from '../styles/pages/login.module.scss';
import GoBackButton from '../src/components/Button/GoBackButton';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>

      <GoBackButton/>

      <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
        {/* Add a button to navigate back to the home route */}
        {/* <div className={styles.goBackButton}>
          <Link href="/">
            <span>Go back to Home</span>
          </Link>
        </div> */}
      </div>
    </div>

  );
};

export default Login;
