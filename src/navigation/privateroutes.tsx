import Home from "../pages/Home";
import ItemAdd from "../pages/ItemAdd";
import ItemEdit from "../pages/ItemEdit";
import ItemShow from "../pages/ItemShow";

export const privateroutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/item/show/:id",
        element: <ItemShow />
    },
    {
        path: "/item/add",
        element: <ItemAdd />
    },
    {
        path: "/item/edit/:id",
        element: <ItemEdit />
    },
]