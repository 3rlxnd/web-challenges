console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

function isValidJSON(data) {
  try {
      JSON.parse(data);
      return true;
  } catch (error) {
      return false;
  }
}

async function fetchUserData(url) {
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else if (!isValidJSON(response)) {
      throw new Error(`Invalid API Link! Status: ${response.status}`);
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
      console.log(error.message)
      errorElement.textContent = `Error: ${error.message}`;
      userElement.innerHTML = "No user data available.";
    }
  });
  
});
