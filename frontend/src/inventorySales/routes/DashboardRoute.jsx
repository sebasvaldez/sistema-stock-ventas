import { Routes,Route, Navigate } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"

export const DashboardRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
)
}
