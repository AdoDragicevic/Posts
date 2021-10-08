Basic:
  Module
  -> adds posts to the application
    -> form
      -> required: title, author, address, description, image
      -> img upload
  -> lists all the posts from last to first
      -> displays: name, address, image
      -> onClick: open post
  -> show clicked post
    -> display all content & date published


Bonus
 -> edit & delete posts
 -> local storage
 -> custom hooks
 -> search posts (by author / title)
 -> multipage form
 -> custom form validation
 -> loading animation
 -> cloudinary picture upload

 
 Left:
  -> refactor from module to single page application
  -> add gallery module - connect posts to galleries
  -> optimization (e.g. memo)
  -> reduce img size on upload
  -> delete uploaded img from cloudinary when post is deleted / img replaced
  -> perfect styling
  -> pagination
  -> line animation below multi page form
  -> dark mode with context
  -> maybe reducer? (might be an overkill for this project)