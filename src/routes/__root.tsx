import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Link } from "../components/link";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {/* Margin trick lets us start halfway through a grid cell */}
      <div className="-mt-4 -ml-4 pt-12 px-6 pb-10 min-h-fit h-100 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] [background-size:40px_40px] bg-secondary-background">
        <Outlet />
        <div className="hidden lg:block fixed right-0 bottom-0 text-xs opacity-20">
          <Link href="https://www.youtube.com/watch?v=han3AfjH210">
            No, not this guy
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
