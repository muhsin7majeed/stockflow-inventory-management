import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,

  beforeLoad: async ({ context, location }) => {
    if (!context.user.isAuthenticated) {
      throw redirect({
        to: "/auth/signin",
        search: { redirect: location.href },
      });
    }
  },
});

function RouteComponent() {
  return <div>Hello "/app/"!</div>;
}
