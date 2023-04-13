import {CALENDAR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, REPORT_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Report from "./pages/Report";


export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile />
    },
    {
        path: CALENDAR_ROUTE,
        Component: <Calendar />
    },
    {
        path: REPORT_ROUTE,
        Component: <Report />
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTER_ROUTE,
        Component: <Auth />
    },
]