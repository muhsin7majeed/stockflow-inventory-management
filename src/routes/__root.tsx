import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useAuthAtomValue } from "../atoms/authAtom";

interface RootContext {
  user: {
    isAuthenticated: boolean;
  };
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => {
    const auth = useAuthAtomValue();

    return (
      <>
        <div>
          <span>Auth: {auth.isAuthenticated ? "true" : "false"}</span>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/app">App</Link>
            </li>

            <li>
              <Link to="/app/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/auth">Auth</Link>
            </li>
          </ul>
        </div>

        <hr />

        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});

// export default Route;
