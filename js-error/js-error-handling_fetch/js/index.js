console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    throw new Error(`HTTP error!` ,{ cause: response.status });
  } else if (!contentType.includes('application/json')) {
    throw new Error(`Invalid API Link!`, { cause: response.status });
  } else return await response.json()
}


const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    try {
      let result = await fetchUserData(endpoint.url);

      const user = result.data;
      console.log(user)
      userElement.innerHTML = `
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
        <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    } catch (error) {
      errorElement.textContent = `Error: ${error.message} Status: ${error.cause}`;
      userElement.innerHTML = "No user data available.";
    }
  });
});
