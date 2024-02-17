import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/loader";
const AlertsPage = React.lazy(() => import('../pages/alerts'));
const NotFound = React.lazy(() => import('../pages/notFound'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<AlertsPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}