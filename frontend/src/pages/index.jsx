import Header from "@/components/common/Header"
import HeroSection from "@/components/common/HeroSection"
import Features from "@/components/common/Features"
import Footer from "@/components/common/Footer"
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function LandingPage() {
    const {currentUser} = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/dashboard?tab=home");
        } else {
            navigate("/");
        }
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

