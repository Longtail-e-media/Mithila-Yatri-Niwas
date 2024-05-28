import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/404"));
const Visit = lazy(() => import("./pages/Visit"));
const DinePage = lazy(() => import("./pages/DinePage"));
const AccommodationPage = lazy(() => import("./pages/AccommodationPage"));
const HallPage = lazy(() => import("./pages/HallPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const Enquiry = lazy(() => import("./pages/Enquiry"));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/hall" element={<HallPage />} />
            <Route path="/dine" element={<DinePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/places-to-visit" element={<Visit />} />
            <Route path="/enquiry-form" element={<Enquiry />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTop />
        <WhatsApp />
      </Router>
    </>
  );
};

export default App;
