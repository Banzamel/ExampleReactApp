import React from "react"
import {useDispatch} from "react-redux"
import {useTranslation} from "react-i18next"
import {
    CAvatar, CBadge,
    CCloseButton,
    CListGroup,
    CListGroupItem, CNav, CNavItem, CNavLink,
    CSidebar,
    CSidebarHeader,
    CTabContent,
    CTabPane
} from "@coreui/react"

import {set, useTypedSelector} from "@/store"
import {LucideCalendar, LucideList, LucideMapPin, LucideSettings, LucideSpeech} from "lucide-react";

const AppAside = () => {
    const dispatch = useDispatch()
    const asideShow = useTypedSelector((state) => state.asideShow)
    const asideShowTab = useTypedSelector((state) => state.asideShowTab)
    const {t} = useTranslation()

    return (
        <CSidebar
            colorScheme="light"
            size="lg"
            overlaid
            placement="end"
            visible={asideShow}
            onVisibleChange={(visible) => {
                dispatch({type: "set", asideShow: visible})
            }}
        >
            <CSidebarHeader className="p-0 position-relative">
                <CNav className="w-100" variant="underline" role={"tablist"}>
                    <CNavItem>
                        <CNavLink
                            href="#"
                            active={asideShowTab === 1}
                            onClick={() => dispatch(set({asideShowTab: 1}))}
                        >
                            <LucideList/>
                            <CBadge shape={"rounded-pill"} color={"info"} size={"sm"} className={"position-absolute"}>
                                22
                            </CBadge>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href="#"
                            active={asideShowTab === 2}
                            onClick={() => dispatch(set({asideShowTab: 2}))}
                        >
                            <LucideSpeech/>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href="#"
                            active={asideShowTab === 3}
                            onClick={() => dispatch(set({asideShowTab: 3}))}
                        >
                            <LucideSettings/>
                        </CNavLink>
                    </CNavItem>
                </CNav>
                <CCloseButton
                    className="float-end me-2"
                    onClick={() => dispatch(set({asideShow: false}))}
                />
            </CSidebarHeader>
            <CTabContent>
                <CTabPane visible={asideShowTab === 1}>
                    <CListGroup flush>
                        <CListGroupItem
                            className="list-group-item border-start-4 border-start-secondary bg-body-secondary text-center fw-semibold text-body-secondary text-uppercase small">
                            {t('today')}
                        </CListGroupItem>
                        <CListGroupItem href="#" className="border-start-4 border-start-warning">
                            <CAvatar src={""} size="lg" className="float-end"/>
                            <div>
                                Meeting with <strong>Lucas</strong>
                            </div>
                        </CListGroupItem>
                        <CListGroupItem href="#" className="border-start-4 border-start-info">
                            <CAvatar src={""} size="lg" className="float-end"/>
                            <div>
                                Skype with <strong>Megan</strong>
                            </div>
                        </CListGroupItem>
                        <CListGroupItem
                            className="border-start-4 border-start-secondary bg-body-secondary text-center fw-semibold text-body-secondary text-uppercase small">
                            {t('tomorrow')}
                        </CListGroupItem>
                        <CListGroupItem href="#" className="border-start-4 border-start-danger">
                            <div>
                                New UI Project - <strong>deadline</strong>
                            </div>
                        </CListGroupItem>
                        <CListGroupItem href="#" className="border-start-4 border-start-success">
                            <div>
                                <strong>#10 Startups.Garden</strong> Meetup
                            </div>
                            <small className="text-body-secondary me-3">
                                <LucideCalendar/> 1 - 3pm
                            </small>
                            <small className="text-body-secondary">
                                <LucideMapPin/> Palo Alto, CA
                            </small>
                        </CListGroupItem>
                        <CListGroupItem href="#" className="border-start-4 border-start-primary border-bottom">
                            <div>
                                <strong>Team meeting</strong>
                            </div>
                            <small className="text-body-secondary me-3">
                                <LucideCalendar/> 3 - 4pm
                            </small>
                            <small className="text-body-secondary">
                                creativeLabs HQ
                            </small>

                        </CListGroupItem>
                    </CListGroup>
                </CTabPane>
                <CTabPane visible={asideShowTab === 2}>
                    ewfewffew
                </CTabPane>
                <CTabPane visible={asideShowTab === 3}>
                    qweqweqweqwe
                </CTabPane>
            </CTabContent>
        </CSidebar>
    )
}

export default React.memo(AppAside)
