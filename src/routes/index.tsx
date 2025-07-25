import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context }) => {
    if (context.user.isAuthenticated) {
      throw redirect({ to: "/app" });
    } else {
      throw redirect({ to: "/auth/signin" });
    }
  },
});
