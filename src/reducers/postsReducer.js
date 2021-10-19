function postReducer(posts, action) {
  switch(action.type) {
    case "ADD":
      return [action.newPost, ...posts];
    case "DELETE":
      return posts.filter(post => post.id !== action.id);
    case "UPDATE":
      return [action.newPost, ...posts.filter(post => post.id !== action.id)];
    default:
      return posts;
  }
};

export default postReducer;