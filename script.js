function fetchUserData() {
    const username = document.getElementById('usernameInput').value;

    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                displayUserData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert('Please enter a GitHub username.');
    }
}

function displayUserData(data) {
    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
        <p><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p> `;

}


function displayUserInfo(data) {
    const resultElement = document.getElementById('result');

    // Create elements to display user information

    const username = document.createElement('h2');
    username.innerText = data.login;

    const repoCount = document.createElement('p');
    repoCount.innerText = `Repositories: ${data.public_repos}`;

    const followersCount = document.createElement('p');
    followersCount.innerText = `Followers: ${data.followers}`;

    const followingCount = document.createElement('p');
    followingCount.innerText = `Following: ${data.following}`;

    // Append elements to the result container
    resultElement.appendChild(username);
    resultElement.appendChild(repoCount);
    resultElement.appendChild(followersCount);
    resultElement.appendChild(followingCount);
}
