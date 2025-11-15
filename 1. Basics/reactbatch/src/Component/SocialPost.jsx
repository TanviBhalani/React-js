// import React, { useState } from "react";

// export default function SocialPost() {
//   const [likes, setLikes] = useState(0);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   // Like / Unlike / Reset
//   const increment = () => setLikes(likes + 1);
//   const decrement = () => likes > 0 && setLikes(likes - 1);
//   const reset = () => setLikes(0);

//   // Add comment
//   const addComment = () => {
//     if (comment.trim() !== "") {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "400px",
//         margin: "50px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Post */}
//       <h2>🌟 My First Post</h2>
//       <p>
//         This is a simple React project where you can like, unlike, and comment
//         on a post. 🚀
//       </p>

//       {/* Likes Section */}
//       <h3>{likes} Likes</h3>
//       <button onClick={increment}>👍 Like</button>
//       <button onClick={decrement} disabled={likes === 0}>
//         👎 Unlike
//       </button>
//       <button onClick={reset}>🔄 Reset</button>

//       <hr />

//       {/* Comment Section */}
//       <h3>💬 Comments</h3>
//       <input
//         type="text"
//         value={comment}
//         placeholder="Write a comment..."
//         onChange={(e) => setComment(e.target.value)}
//         style={{ padding: "5px", width: "70%" }}
//       />
//       <button onClick={addComment}>Post</button>

//       {/* Show Comments */}
//       <ul style={{ textAlign: "left", marginTop: "10px" }}>
//         {comments.map((c, index) => (
//           <li key={index}>{c}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

