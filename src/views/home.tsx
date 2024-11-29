import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

function Home({ userId }) {
  const items = useQuery(api.items.listItems, { userId });

  if (items === undefined) {
    return <div >Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
