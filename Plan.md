Crate a module
  -> adds posts to the application
    -> form
      -> required: name, address, description, image
      -> img upload
  -> lists all the posts from last to first
    -> list
      -> listItem
      -> displays: name, address, image
      -> onClick: open post
  -> show clicked post
    -> display all content & date published


Bonus
 -> edit & delete posts
 -> local storage
 -> custom hooks
 -> more complex address (street & number, country, city, post number)


Structure:
App (holds state (posts) and setPosts method, both are passed down to Posts)
 -> Posts
  -> PostsList
  -> PostsListItem
  -> NewPost
  -> ShowPost


  -> posts: [
    { 
      name: "string", 
      address: {
        street: "string",
        country: "string",
        city: "string",
        post number: number
      } 
    }
  ];


Src:
App.js
POSTS -> Posts, PostsList, PostsListItem, PostShow, PostNew, PostEdit, PostForm
UI -> button, nav