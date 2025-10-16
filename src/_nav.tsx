import {ReactElement} from "react"
import {CNavGroup, CNavItem, CNavTitle} from "@coreui/react"
import {ElementType} from "react"
import {LucideLayoutDashboard, LucidePuzzle, LucideUsers} from "lucide-react";
import {Translation} from "react-i18next";

export type Badge = {
    color: string
    text: string
}

export type NavItem = {
    component: string | ElementType
    name: string | ReactElement
    icon?: string | ReactElement
    badge?: Badge
    to?: string
    items?: NavItem[]
}

const _nav: NavItem[] = [
    {
        component: CNavItem,
        name: "Dashboard",
        // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
        icon: <LucideLayoutDashboard size={20} className={"nav-icon"}/>,
        badge: {
            color: "info-gradient",
            text: "NEW",
        },
        to: "/dashboard",
    },
    {
        component: CNavItem,
        name: "Blank",
        // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
        icon: <LucideUsers size={20} className={"nav-icon"}/>,
        to: "/blank",
    },
    {
        component: CNavTitle,
        name: <Translation>{(t) => t("users")}</Translation>,
    },
    {
        component: CNavItem,
        name: "Users",
        // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
        icon: <LucideUsers size={20} className={"nav-icon"}/>,
        to: "/users",
    },
    {
        component: CNavGroup,
        name: <Translation>{(t) => t("base")}</Translation>,
        to: "/base",
        icon: <LucidePuzzle className={"nav-icon"}/>,
        items: [
            {
                component: CNavItem,
                name: "Accordion",
                to: "/users/dashboard",
            },
        ]
    }
]

export default _nav
