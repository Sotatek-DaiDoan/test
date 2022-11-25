import React from "react";

function AuthGuard({ children }: React.PropsWithChildren) {
  // handle logic guard
  return <>{children}</>;
}

export default AuthGuard;
