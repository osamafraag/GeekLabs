import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/loader";
const AlertsPage = React.lazy(() => import('../pages/alerts'));
// const Training = React.lazy(() => import('../pages/training'));
// const Automation = React.lazy(() => import('../pages/automation'));
// const Portfolio = React.lazy(() => import('../pages/portfolio'));
// const Trading = React.lazy(() => import('../pages/trading'));
const NotFound = React.lazy(() => import('../pages/notFound'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<AlertsPage />} />
      {/* <Route path="/training" element={<Training />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/trading" element={<Trading />} /> */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}