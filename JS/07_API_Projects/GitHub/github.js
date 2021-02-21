// Client-ID
// 227fdecb062c81a8e977

// Client secret
// da5f2481373990b4c9892e9413f5e56067e88d4e
class GitHub {
  constructor() {
    this.client_id = '227fdecb062c81a8e977';
    this.client_secret = 'da5f2481373990b4c9892e9413f5e56067e88d4e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Async
  async getUser(user) {
    // const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    // const repoResponse = await fetch(
    //   `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    // );

    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // same as profile: profile,
      profile,

      // repos: repos,
      repos,
    };
  }
}
