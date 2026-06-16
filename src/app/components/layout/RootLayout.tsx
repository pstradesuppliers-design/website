import { Outlet, useNavigate } from "react-router";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import { WhatsAppButton } from "../home/WhatsAppButton";

export function RootLayout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer onAdmin={() => navigate("/admin")} />
      <WhatsAppButton />
    </div>
  );
}
