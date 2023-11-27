/* eslint-disable */
import React from 'react';
import './Home.css'; // Import the CSS file for styling
import { posts } from '../../data/data';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>React Blog Home</h1>
      </div>

      <div className="new-post">
        <h2>New Post</h2>
        {/* Your new post form or content can be added here */}
      </div>

      <div className="posts">
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
