import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoute } from "../inventorySales/routes/DashboardRoute"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y registro */}
        <Route path="/auth/*" element={<AuthRoutes/>} />

        {/* Dashboard */}
        <Route path="/*" element={<DashboardRoute />} />
    </Routes>
)
}
