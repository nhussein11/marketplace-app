import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";

import { NavBar } from "~/components/NavBar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="dark:text-white light:black" >
        <NavBar />
        <Component {...pageProps} />;
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
