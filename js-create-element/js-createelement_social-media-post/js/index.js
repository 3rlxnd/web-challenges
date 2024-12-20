console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise

let newPost = document.createElement("article")
newPost.classList.add("post")

// Content

let postContent = document.createElement("p")
postContent.classList.add("post__content")
postContent.textContent = "Saucy is whatever text goes here!"

// Footer

let postFooter = document.createElement("footer")
postFooter.classList.add("post__footer")

let postUsername = document.createElement("span")
postUsername.classList.add("post__username")
postUsername.textContent = "@username"

let postButton = document.createElement("button")
postButton.type = "button"
postButton.classList.add("post__button")
postButton.setAttribute("data-js", "my-like-button")
postButton.textContent = "Like ♥"

postFooter.append(postUsername, postButton)

newPost.append(postContent, postFooter)

document.body.append(newPost)

const myLikeButton = document.querySelector('[data-js="my-like-button"]');
myLikeButton.addEventListener("click", handleLikeButtonClick);

console.log(newPost)