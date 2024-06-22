import React, { useEffect, useState } from 'react';
import { CommentsProps } from '../models/fetchDog';

function Comments({currentDog, commentsMap, setCommentsMap}: CommentsProps) {
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComment('')
  }, [currentDog])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsMap((prevCommentsMap) => ({
        ...prevCommentsMap,
        [currentDog]: [...(prevCommentsMap[currentDog] || []), comment],
      }));
      setComment('');
    }
  };

  const dogComments = commentsMap[currentDog] || []

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Pawsitive comment here" 
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {dogComments.map((cmt, index) => (
          <div key={index}>{cmt}</div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
