// app/api/github-commits/route.jsx
export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = "jesh-rc";

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  try {
    console.log("Fetching GitHub contributions...");
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 60 * 60, // ✅ cache for 1 hour
      },
    });

    if (!res.ok) throw new Error("Failed to fetch GitHub contributions");

    const data = await res.json();

    const totalCommits =
      data?.data?.user?.contributionsCollection?.totalCommitContributions || 0;

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
