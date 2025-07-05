import AdminPanel from "./components/AdminPanel";
import AIPoweredFeatures from "./components/AIPoweredFeatures";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileApps from "./components/MobileApps";
import OrbitIcons from "./components/OrbitIcons";
import PlugAndPlay from "./components/PlugAndPlay";
import PreEvent from "./components/PreEvent";
import PreFooter from "./components/PreFooter";

// src/App.tsx
function App() {
    return (
        <main className="min-h-screen bg-white text-black">
			<Hero/>
			<CTA/>
			<PreEvent/>
			<OrbitIcons/>
			<AdminPanel/>
			<MobileApps/>
			<AIPoweredFeatures/>
			<PlugAndPlay/>
			<PreFooter/>
			<Footer/>
        </main>
    );
}

export default App;
