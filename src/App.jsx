// import React, { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import BackToTop from "./components/ui/BackToTop";
// import WhatsApp from "./components/ui/WhatsApp";
// // import Loading from "./components/Loading";

// const Home = lazy(() => import("./pages/Home"));
// const GalleryPage = lazy(() => import("./pages/GalleryPage"));
// const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/404"));
// const Visit = lazy(() => import("./pages/Visit"));
// const DinePage = lazy(() => import("./pages/DinePage"));
// const AccommodationPage = lazy(() => import("./pages/AccommodationPage"));
// const HallPage = lazy(() => import("./pages/HallPage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ArticlePage = lazy(() => import("./pages/ArticlePage"));
// const Enquiry = lazy(() => import("./pages/Enquiry"));

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />

//         {/* <Suspense fallback={<Loading />}> */}
//         <Suspense fallback={<></>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/accommodation" element={<AccommodationPage />} />
//             <Route path="/occasions" element={<HallPage />} />
//             <Route path="/dine" element={<DinePage />} />
//             <Route path="/gallery" element={<GalleryPage />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/places-to-visit" element={<Visit />} />
//             <Route path="/enquiry-form" element={<Enquiry />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/:slug" element={<ArticlePage />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Suspense>
//         <Footer />
//         <BackToTop />
//         <WhatsApp />
//       </Router>
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Visit from "./pages/Visit";
import DinePage from "./pages/DinePage";
import AccommodationPage from "./pages/AccommodationPage";
import HallPage from "./pages/HallPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import Enquiry from "./pages/Enquiry";
import Meta from "./utils/Meta";

import { HelmetProvider } from "react-helmet-async";
import withDataFetching from "./hoc/withDataFetching";

const App = ({ data: metaData }) => {
  const { title, meta_description, meta_keywords, favicon, fb_upload } =
    metaData;

  return (
    <>
      <HelmetProvider>
        <Router>
          <Meta
            title={title}
            description={meta_description}
            keywords={meta_keywords}
            favicon={favicon}
            fbUpload={fb_upload}
            canonicalUrl={"https://mithilayatriniwas.com"}
          />
          <Navbar />
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
            <Route path="/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTop />
          <WhatsApp />
        </Router>
      </HelmetProvider>
    </>
  );
};

const transformMetaData = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return metaData;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_metadata.php",
  transformMetaData
)(App);
