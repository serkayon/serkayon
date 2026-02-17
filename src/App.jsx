import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Press from "./pages/Press";
import Careers from "./pages/Careers";
import CaseStudyCategories from "./pages/CaseStudy/CaseStudyCategories";
import CategoryPage from "./pages/CaseStudy/CategoryPage";
import CaseStudyDetail from "./pages/CaseStudy/CaseStudyDetail";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/press" element={<Press />}></Route>

        <Route path="/case-study" element={<CaseStudyCategories />} />
        <Route path="/case-study/:slug" element={<CategoryPage />} />
        <Route
          path="/case-study/:slug/:productSlug"
          element={<CaseStudyDetail />}
        />

<Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
