const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const postInput = document.querySelector("#bodyPost");
const postsContainer = document.querySelector("#postsContainer");

const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  posts.forEach((element) => {
    const post = renderPost(element.title, element.body, element.id);
    postsContainer.append(post);
  });
}

getPosts();

form.addEventListener("submit", createPost);

async function createPost(event) {
  event.preventDefault();
  const title = titleInput.value;
  const postContent = postInput.value;

  console.log(title, postContent);

  const payload = {
    body: postContent,
    title: title,
    userId: 1,
  };
  //Daten an Server schicken

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  const post = renderPost(data.title, data.body, data.id);
  postsContainer.prepend(post);
}

function renderPost(title, body, id) {
  const postElement = document.createElement("div");
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("p");

  titleElement.textContent = title;
  contentElement.textContent = body;

  postElement.id = "Post" + id;

  postElement.append(titleElement, contentElement);

  return postElement;
}
