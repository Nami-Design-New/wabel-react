import { RouterProvider } from "react-router-dom";
import { router } from "./Providers/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
