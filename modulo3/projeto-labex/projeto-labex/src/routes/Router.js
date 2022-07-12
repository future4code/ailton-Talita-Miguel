import HomePage from "../pages/homePages/HomePage"
import AdminHomePage from "../pages/adminHomePage/AdminHomePage"
import ApplicationFormPage from "../pages/applicationFormPage/ApplicationFormPage"
import CreateTripPage from "../pages/createTripPage/CreateTripPage"
import ListTripsPage from "../pages/listTripsPage/ListTripsPage"
import LoginPage from "../pages/loginPage/LoginPage"
import TripDetailsPage from "../pages/tripDetailsPage/TripDetailsPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />

            </Routes>
        </BrowserRouter>
    )
}