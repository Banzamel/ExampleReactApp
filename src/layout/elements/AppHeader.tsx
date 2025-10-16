import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {set, useTypedSelector} from "@/store";
import {
    CContainer,
    CHeader,
    CHeaderNav,
    CHeaderToggler,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CHeaderDivider,
} from "@coreui/react";

// import {logo} from "../assets/brand/logo";
import {LucideLanguages, LucideMenu, LucideSettings} from "lucide-react";
import {AppBreadcrumb} from "@layout/elements";


const AppHeader = (): React.JSX.Element => {
    const headerRef = useRef<HTMLDivElement>(null)

    const { i18n, t } = useTranslation()
    const dispatch = useDispatch()
    const sidebarShow = useTypedSelector((state) => state.sidebarShow)
    const asideShow = useTypedSelector((state) => state.asideShow)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            headerRef.current &&
            headerRef.current.classList.toggle("shadow-sm", document.documentElement.scrollTop > 0)
        })
    }, [])

    return (
        <CHeader position="sticky" className="mb-4" ref={headerRef}>
            <CContainer fluid>
                <CHeaderToggler
                    // className={classNames("d-lg-none", {
                    //     "prevent-hide": !sidebarShow,
                    // })}
                    onClick={() => dispatch(set({ sidebarShow: !sidebarShow }))}
                >
                    <LucideMenu/>
                </CHeaderToggler>
                {/*<CForm className="d-none d-md-flex ms-auto">*/}
                {/*    <CInputGroup>*/}
                {/*        <CInputGroupText id="search-addon" className="bg-body-secondary border-0 px-1">*/}
                {/*            <LucideSearch size={16} className="my-1 mx-2 text-body-secondary" />*/}
                {/*        </CInputGroupText>*/}
                {/*        <CFormInput*/}
                {/*            placeholder={t("search")}*/}
                {/*            aria-label="Search"*/}
                {/*            aria-describedby="search-addon"*/}
                {/*            className="bg-body-secondary border-0"*/}
                {/*        />*/}
                {/*    </CInputGroup>*/}
                {/*</CForm>*/}
                <CHeaderNav className="d-none d-md-flex ms-auto">
                    {/*<AppHeaderDropdownNotif />*/}
                    {/*<AppHeaderDropdownTasks />*/}
                    {/*<AppHeaderDropdownMssg />*/}
                </CHeaderNav>
                <CHeaderNav className="ms-auto ms-md-0">
                    <li className="nav-item py-1">
                        <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
                    </li>
                    <CDropdown variant="nav-item" placement="bottom-end">
                        <CDropdownToggle caret={false}>
                            <LucideLanguages size={20} />
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem
                                active={i18n.language === "en"}
                                className="d-flex align-items-center"
                                as="button"
                                onClick={() => i18n.changeLanguage("en")}
                            >
                                {/*<CIcon className="me-2" icon={cifGb} size="lg" /> */}
                                {t("english")}
                            </CDropdownItem>
                            <CDropdownItem
                                active={i18n.language === "es"}
                                className="d-flex align-items-center"
                                as="button"
                                onClick={() => i18n.changeLanguage("es")}
                            >
                                {/*<CIcon className="me-2" icon={cifEs} size="lg" />*/}
                                {t("spanish")}
                            </CDropdownItem>
                            <CDropdownItem
                                active={i18n.language === "pl"}
                                className="d-flex align-items-center"
                                as="button"
                                onClick={() => i18n.changeLanguage("pl")}
                            >
                                {/*<CIcon className="me-2" icon={cifPl} size="lg" />*/}
                                {t("polish")}
                            </CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    {/*<CDropdown variant="nav-item" placement="bottom-end">*/}
                    {/*    <CDropdownToggle caret={false}>*/}
                    {/*        {colorMode === "dark" ? (*/}
                    {/*            <CIcon icon={cilMoon} size="lg" />*/}
                    {/*        ) : colorMode === "auto" ? (*/}
                    {/*            <CIcon icon={cilContrast} size="lg" />*/}
                    {/*        ) : (*/}
                    {/*            <CIcon icon={cilSun} size="lg" />*/}
                    {/*        )}*/}
                    {/*    </CDropdownToggle>*/}
                    {/*    <CDropdownMenu>*/}
                    {/*        <CDropdownItem*/}
                    {/*            active={colorMode === "light"}*/}
                    {/*            className="d-flex align-items-center"*/}
                    {/*            as="button"*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => setColorMode("light")}*/}
                    {/*        >*/}
                    {/*            <CIcon className="me-2" icon={cilSun} size="lg" /> {t("light")}*/}
                    {/*        </CDropdownItem>*/}
                    {/*        <CDropdownItem*/}
                    {/*            active={colorMode === "dark"}*/}
                    {/*            className="d-flex align-items-center"*/}
                    {/*            as="button"*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => setColorMode("dark")}*/}
                    {/*        >*/}
                    {/*            <CIcon className="me-2" icon={cilMoon} size="lg" /> {t("dark")}*/}
                    {/*        </CDropdownItem>*/}
                    {/*        <CDropdownItem*/}
                    {/*            active={colorMode === "auto"}*/}
                    {/*            className="d-flex align-items-center"*/}
                    {/*            as="button"*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => setColorMode("auto")}*/}
                    {/*        >*/}
                    {/*            <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto*/}
                    {/*        </CDropdownItem>*/}
                    {/*    </CDropdownMenu>*/}
                    {/*</CDropdown>*/}
                    <li className="nav-item py-1">
                        <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
                    </li>
                    {/*<AppHeaderDropdown />*/}
                </CHeaderNav>
                <CHeaderToggler
                    onClick={() => dispatch(set({ asideShow: !asideShow }))}
                    style={{ marginInlineEnd: "-12px" }}
                >
                    <LucideSettings size={20} />
                </CHeaderToggler>
            </CContainer>
            <CHeaderDivider/>
            <CContainer fluid>
                <AppBreadcrumb />
            </CContainer>
        </CHeader>
    )
}

export default AppHeader;
