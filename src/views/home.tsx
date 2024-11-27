import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

function Home() {
  
  const items = useQuery(api.items.listItems);

  //  loading state
  if (items === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      
      {/* Display items in a list */}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {/* Replace these fields with your actual data fields */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
