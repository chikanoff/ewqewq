import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePages from "./pages/DevicePages";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    
    {
        path: BASKET_ROUTE,
        component: Basket,
    }, 
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: DevicePages,
    }

]