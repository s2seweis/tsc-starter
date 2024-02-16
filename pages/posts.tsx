/* eslint-disable */

import React from 'react';
import { posts } from '../src/data/data';
import styles from '../styles/pages/posts.module.scss'; // Import SCSS module

interface Post {
  id: number;
  title: string;
  content: string;
}

const Posts: React.FC = () => {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.header}>
        <h1>React Blog Posts</h1>
      </div>

      <div className={styles.newPost}>
        <h2>New Post</h2>
        {/* Your new post form or content can be added here */}
      </div>

      <div className={styles.posts}>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
