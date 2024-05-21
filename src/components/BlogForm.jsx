import React, { useState } from 'react';
import appwrite from '../services/appwrite';

const BlogForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = async () => {
    try {
      const response = await appwrite.database.createDocument('posts', {
        title,
        content,
      });
      onAddPost(response.$id, title, content);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h2>Add a Blog Post</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default BlogForm;
