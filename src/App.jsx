import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Travel from "./pages/Travel";
import PlanTrip from "./pages/PlanTrip";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="destinations" element={<Destinations />} />

        <Route path="destinations/:id" element={<DestinationDetails />} />

        <Route path="travel" element={<Travel />} />

        <Route path="plan-trip" element={<PlanTrip />} />

        <Route path="about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
