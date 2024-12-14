import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["myGithub"],
    queryFn: async () =>
      fetch("https://api.github.com/users/xubayers").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
