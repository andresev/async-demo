console.log('Before');
getUser(1, (user) => {
  console.log('User', user);

  // Get the repo
  getRepositories(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});

// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log('Commits', commits))
//   .catch((err) => console.log('Error: ', err.message));

// Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error: ', err.message);
  }
}

displayCommits();

console.log('After');

//callbacks
//Promises
//Async/await

function getUser(id) {
  return new Promise((resolve, reject) => {
    // kick off async work.
    setTimeout(() => {
      console.log('Reading user from a database...');
      resolve({ id: id, gitHubUsername: 'andres' });
      return;
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      console.log('Username: ', username);
      reject(new Error('something went wrong in getting Repo'));
      //resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    console.log(repo);
    setTimeout(() => {
      console.log('Calling GitHubg API...');
      resolve(['commit']);
    }, 2000);
  });
}
