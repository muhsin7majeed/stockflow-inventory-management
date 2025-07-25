import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.user.isAuthenticated) {
      throw redirect({ to: "/app" });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <h1>Auth Layout</h1>

      <ul>
        <li>
          <Link to="/auth/signin">Signin</Link>
        </li>
        <li>
          <Link to="/auth/signup">Signup</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
