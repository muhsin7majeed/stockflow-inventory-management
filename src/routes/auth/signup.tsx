import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSignup = () => {
    console.log("Signup");
  };

  return (
    <>
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}
