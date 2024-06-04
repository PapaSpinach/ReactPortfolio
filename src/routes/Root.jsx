import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return <div className="flex flex-col min-h-screen">
    <Header />
    <main className="p-8 md:max-w-4xl w-full mx-auto grow">
      <Outlet />
    </main>
    <Footer />
  </div>
}
