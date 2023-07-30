import {useState} from 'react';
import cn from 'classnames';
import {Checkbox, Select} from '@react-md/form';

import {Layout} from '@react-md/layout';
import {Grid} from '@react-md/utils';
import { CurrentChildren } from './CurrentChildren';

import styles from './styles/ControllingTheLayout.module.scss';
import LayoutVisibility from './LayoutVisibility';
import {Navigation} from "./Navigation";

const options = [
    'temporary',
    'temporary-mini',
    'toggleable',
    'toggleable-mini',
    'clipped',
    'floating',
    'full-height',
];
import {
    HomeSVGIcon,
    WidgetsSVGIcon,
    StarSVGIcon,
    PersonSVGIcon,
    CakeSVGIcon,
    ConfigurableIcons,
} from "react-md"

import {ReactNode} from "react";

type NavLink = {
    label: string;
    href: string;
    icon?: ReactNode;
};

const navItems: NavLink [] = [
    {label: "Home", href: "/", icon: <HomeSVGIcon/>},
    {label: "Products", href: "/products", icon: <CakeSVGIcon/>},
    {label: "Sale", href: "/sale", icon: <StarSVGIcon/>},
    {label: "Profile", href: "/profile", icon: <PersonSVGIcon/>},
];

export default function MenuLink() {
    const [defaultVisible, setDefaultVisible] = useState(false);
    const [desktopLayout, setDesktopLayout] = useState('full-height');
    const [selectedId, setSelectedId] = useState('/');

    return (
        <Layout
            id="custom-layout"
            title=""
            navHeaderTitle=<WidgetsSVGIcon/>
            tabletLayout="toggleable"
            landscapeTabletLayout="toggleable"
            desktopLayout="temporary-mini"
            largeDesktopLayout="toggleable"
            defaultToggleableVisible={defaultVisible}
            mainProps={{component: 'div'}}
            navProps={{
                children: <Navigation navLinks={navItems} id={selectedId}/>
            }}
        >
            <Grid columns={1} className={styles.container}>
                <CurrentChildren route={selectedId} />
                {/*<Checkbox*/}
                {/*    id="visibility"*/}
                {/*    label="Toggleable default visible?"*/}
                {/*    checked={defaultVisible}*/}
                {/*    onChange={(event) => setDefaultVisible(event.currentTarget.checked)}*/}
                {/*    className={styles.center}*/}
                {/*/>*/}
                {/*<Select*/}
                {/*    id="desktop-layout"*/}
                {/*    label="Desktop Layout"*/}
                {/*    value={desktopLayout}*/}
                {/*    options={options}*/}
                {/*    onChange={(nextValue) => {*/}
                {/*        if (options.includes(nextValue)) {*/}
                {/*            setDesktopLayout(nextValue);*/}
                {/*        }*/}
                {/*    }}*/}
                {/*    className={cn(styles.center, styles.select)}*/}
                {/*/>*/}
                {/*<LayoutVisibility />*/}
            </Grid>
        </Layout>
    );
}
