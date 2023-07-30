"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

import Container from './Container';
import {Button} from '@react-md/button';
import CloseButton from './CloseButton';
import {TextIconSpacing} from '@react-md/icon';
import {useState} from 'react';


import {ReactNode} from "react";

type NavLink = {
    label: string;
    href: string;
    icon?: ReactNode;
};

type Props = {
    navLinks: NavLink[],
     // navid: string,
};

const FONT_FAMILIES = ['Roboto', 'Sans-serif', 'Serif', 'Monospace', 'Fantasy'];

const Navigation = ({navLinks,}: Props) => {
    const pathname = usePathname();
    const [textAlign, setTextAlign] = useState(navLinks.href);
    return (
        <>
            <CloseButton/>
            <Container>
                {navLinks.map((link, href) => {
                    const isActive = pathname === link.href;
                    return (
                        <Button id="text-button-1" theme="primary" onClick={() => setTextAlign(href)}>
                            <TextIconSpacing icon={link.icon} iconAfter className={isActive ? "text-blue-500" : ""}>
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={isActive ? "text-blue-500" : ""}
                                >
                                    {link.label}
                                </Link>
                            </TextIconSpacing>
                        </Button>
                    );
                })}
            </Container>
        </>
    );
};

export {Navigation};
