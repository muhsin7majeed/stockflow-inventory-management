import "./App.css";
import { useAuthAtomValue } from "./atoms/authAtom";

import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
  routeTree,
  context: {
    user: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const auth = useAuthAtomValue();

  return (
    <>
      <RouterProvider router={router} context={{ user: auth }} />
    </>
  );
}

export default App;
