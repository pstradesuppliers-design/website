// MARKER-MAKE-KIT-INVOKED
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SiteDataProvider } from "./context/SiteDataContext";

export default function App() {
  return (
    <SiteDataProvider>
      <RouterProvider router={router} />
    </SiteDataProvider>
  );
}
