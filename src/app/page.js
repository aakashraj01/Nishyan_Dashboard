// pages/_app.js
import './globals.css';
import SideMenu from "../components/SideMenu.js"
import DashboardContainer from "../components/DashboardContainer.js";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
      <SideMenu />
      <DashboardContainer />
    </div>
  );
}

export default MyApp;
