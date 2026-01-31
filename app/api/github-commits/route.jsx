

export async function GET() {
  const username = "jesh-rc"; // replace with your GitHub username
  const token = process.env.GITHUB_TOKEN; // your personal access token

  try {
    // Fetch user repos
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch repos");

    const repos = await res.json();

    // Sum commits for all repos
    let totalCommits = 0;

    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`,
        {
          headers: { Authorization: `token ${token}` },
        }
      );

      if (!commitsRes.ok) continue; // skip if API call fails

      // GitHub returns commit count in headers: x-total-count (only for some endpoints)
      const linkHeader = commitsRes.headers.get("link");
      if (linkHeader) {
        const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
        if (match) {
          totalCommits += parseInt(match[1]);
        } else {
          totalCommits += 1; // at least one commit
        }
      } else {
        const commits = await commitsRes.json();
        totalCommits += commits.length;
      }
    }

    return new Response(JSON.stringify({ totalCommits }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
