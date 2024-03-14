import { useEffect } from "react";

export default function Page() {
  const [state, setState] = useState("initialState");
  // Client-side Rendering
  useEffect(() => {
    console.log("Client-side Rendering");

    // Fetch data from an API
    // Update state
    setState("newState");
  }, []);

  return <div>{state}</div>;
}
