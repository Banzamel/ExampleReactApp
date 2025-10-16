import React, {FC, LazyExoticComponent, ReactNode} from "react"
import {Translation} from "react-i18next";

export type Route = {
    component?: LazyExoticComponent<FC>
    exact?: boolean
    name?: ReactNode | string
    path?: string
    routes?: Route[]
}

// examples
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"))
const Blank = React.lazy(() => import("./views/blank/Blank"))

/**
 * See {@link https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config GitHub}.
 */
const routes = [
    {path: "/", exact: true, name: <Translation>{(t) => t("home")}</Translation>},
    {path: "/dashboard", name: <Translation>{(t) => t("dashboard")}</Translation>, component: Dashboard},
    {path: "/blank", name: <Translation>{(t) => t("blank")}</Translation>, component: Blank},
    {path: "/users", exact: true, name: <Translation>{(t) => t("users")}</Translation>},
    {path: "/users/dashboard", name: <Translation>{(t) => t("dashboard")}</Translation>, component: Dashboard},
]

export default routes
