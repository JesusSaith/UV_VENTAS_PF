import React, { useState } from "react";
import "../styles/comentario.css";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCommentsList([...commentsList, comment]);
    setComment("");
  }

  return (
    <div>
      <h2>Comentario</h2>
      {commentsList.map((comment, index) => (
        <div key={index}>
          <p>{comment}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add a comment:</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentSection;
