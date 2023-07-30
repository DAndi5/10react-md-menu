"use client";
import Image from 'next/image'
import { Link, TextContainer, Typography } from "react-md";
import '../styles/app.scss';
import styles from "./page.module.scss";

export default function Sale() {
    return (
        <TextContainer >
            <Typography type="headline-2" margin="none">
                Hello, its Sale
            </Typography>
        </TextContainer>
    )
}
