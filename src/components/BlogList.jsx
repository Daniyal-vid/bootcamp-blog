import React, { useState, useEffect } from 'react';
import appwrite from '../services/appwrite';
import BlogForm from './BlogForm';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    appwrite
      .database.listDocuments('posts', ['*'], 100, 0, 'DESC')
      .then((response) => {
        setPosts(response.documents);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleAddPost = (postId, title, content) => {
    setPosts((prevPosts) => [
      {
        $id: postId,
        title,
        content,
      },
      ...prevPosts,
    ]);
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <BlogForm onAddPost={handleAddPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.$id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
