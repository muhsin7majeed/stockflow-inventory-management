import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>

        <hr />

        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});

export default Route;
