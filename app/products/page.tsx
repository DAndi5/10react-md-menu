"use client";
import Image from 'next/image'
import { Link, TextContainer, Typography } from "react-md";
import '../styles/app.scss';

export default function Page() {
    return (
        <TextContainer >
            <Typography type="headline-2" margin="none">
                Hello, welcome to the Product page
            </Typography>
            <Typography type="headline-4" component="p">
                This page is empty since I haven&apos;t really made this site yet. You
                can check out my <Link href="https://github.com/mlaursen">GitHub</Link>{" "}
                for some more information about projects I work on.
            </Typography>
        </TextContainer>
    )
}