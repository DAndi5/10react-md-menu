'use client';
import '../styles/app.scss';
import {
    ArrowDropDownSVGIcon, ArrowUpwardSVGIcon,
    CheckBoxSVGIcon, CheckSVGIcon,
    Configuration,
    FileDownloadSVGIcon,
    KeyboardArrowDownSVGIcon,
    KeyboardArrowLeftSVGIcon,
    KeyboardArrowRightSVGIcon,
    MenuSVGIcon,
    NotificationsSVGIcon,
    RadioButtonCheckedSVGIcon,
    RemoveRedEyeSVGIcon
} from 'react-md';

import MenuLink from "./Layout";
import React from "react";
import {ReactNode} from "react";

const icons: ReactNode  = {
    back: <KeyboardArrowLeftSVGIcon />,
    checkbox: <CheckBoxSVGIcon />,
    dropdown: <ArrowDropDownSVGIcon />,
    download: <FileDownloadSVGIcon />,
    expander: <KeyboardArrowDownSVGIcon />,
    forward: <KeyboardArrowRightSVGIcon />,
    menu: <MenuSVGIcon />,
    notification: <NotificationsSVGIcon />,
    radio: <RadioButtonCheckedSVGIcon />,
    password: <RemoveRedEyeSVGIcon />,
    selected: <CheckSVGIcon />,
    sort: <ArrowUpwardSVGIcon />,
}

const Header = () => {
    return (
        <Configuration icons={icons} >
            <MenuLink/>
        </Configuration>
    )
}
export default Header

