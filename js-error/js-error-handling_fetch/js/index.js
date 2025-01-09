console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    

    // Check if the HTTP status is not OK
    if (!response.ok && response.status == 404) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    if (response.ok) {
      throw new Error(`Invalid JSON! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
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
  
      if (result.error) {
        throw new Error(result.error);
      }
  
      const user = result.data;
      userElement.innerHTML = `
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
        <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    } catch (error) {
      errorElement.textContent = `Error: ${error.message}`;
      userElement.innerHTML = "No user data available.";
    }
  });
  
});
