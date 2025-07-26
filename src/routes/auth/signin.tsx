import { useState } from "react";
import {
  createFileRoute,
  useLocation,
  useNavigate,
  type ParsedLocation,
} from "@tanstack/react-router";
import { useSetAuthAtom } from "@/atoms/authAtom";

export const Route = createFileRoute("/auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const location: ParsedLocation<{ redirect: string }> = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const setAuth = useSetAuthAtom();

  const handleSignin = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setAuth({ isAuthenticated: true });
      setIsLoading(false);

      const redirect = location.search.redirect || "/app";
      console.log(redirect);

      navigate({ to: redirect });
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleSignin} disabled={isLoading}>
        {isLoading ? "Loading..." : "Signin"}
      </button>
    </div>
  );
}
