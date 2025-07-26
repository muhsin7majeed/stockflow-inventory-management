import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useAuthAtomValue } from "../atoms/authAtom";
import SidebarWithHeader from "@/components/sidebar-with-header";

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
        <SidebarWithHeader>
          <Outlet />
        </SidebarWithHeader>

        <TanStackRouterDevtools />
      </>
    );
  },
});

// export default Route;
