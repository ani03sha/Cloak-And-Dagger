const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.70916bff1e960afb";
const client_secret = "f4d165b374578e33146c85701bcac3b1cc5b120e";

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();

    return {
        data
    }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;
    });
};

searchButton.addEventListener("click", () => {
    showData();
});