/* eslint-disable */

import React from 'react';
import { posts } from '../src/data/data';
import styles from '../styles/pages/posts.module.scss'; // Import SCSS module
import GoBackButton from '../src/components/Button/GoBackButton';

interface Post {
  id: number;
  title: string;
  content: string;
}

const NotFound: React.FC = () => {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.header}>
        <h1>404 Page NotFound</h1>
      </div>

      <div className={styles.posts}>

        <h2 style={{textAlign:"center"}}>Page not exists</h2>
        <div style={{display:"flex", justifyContent:"center"}}>
        <GoBackButton/>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
