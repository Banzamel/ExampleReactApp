import React from "react";
import {useDispatch} from "react-redux";
import {
    CCloseButton,
    CSidebar,
    CSidebarBrand, CSidebarFooter, CSidebarHeader,
    CSidebarToggler,
} from "@coreui/react"

import {set, useTypedSelector} from "@/store";

import {AppSidebarNav} from "./AppSidebarNav.tsx";

// import {logoNegative} from "../assets/brand/logo-negative";
// import {sygnet} from "../assets/brand/sygnet";
// sidebar nav config
import navigation from "@/_nav";
import {NavLink} from "react-router-dom";
import {LucideTestTube} from "lucide-react";

const AppSidebar = () => {
    const dispatch = useDispatch()
    const unfoldable = useTypedSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useTypedSelector((state) => state.sidebarShow)

    return (
        <CSidebar
            position="fixed"
            className={"border-end"}
            colorScheme={"dark"}
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch(set({sidebarShow: visible}))
            }}
        >
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand as={NavLink} to={"/"}>
                    <LucideTestTube className={"sidebar-brand-full"} size={16}/>
                    {/*<CIcon className="sidebar-brand-full" icon={logoNegative} height={35}/>*/}
                    {/*<LucideSidebarOpen className={"sidebar-brand-full"} size={32}/>*/}
                </CSidebarBrand>
                <CCloseButton
                    className={"d-lg-none"}
                    onClick={() => dispatch(set({sidebarShow: false}))}
                />
            </CSidebarHeader>

            <AppSidebarNav items={navigation}/>

            <CSidebarFooter className="d-none d-lg-flex border-top">
                <CSidebarToggler
                    onClick={() => dispatch(set({sidebarUnfoldable: !unfoldable}))}
                />
            </CSidebarFooter>
        </CSidebar>
    )
}

export default React.memo(AppSidebar)
