function postsReducer(posts, action) {
  switch(action.type) {
    case "ADD":
      return [action.newPost, ...posts];
    case "UPDATE":
      return [action.updatedPost, ...posts.filter(post => post.id !== action.id)];
    case "DELETE":
      return posts.filter(post => post.id !== action.id);
    default:
      return posts;
  }
};

export default postsReducer;