import styles from './styles.module.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from 'next/link';
import { useState } from 'react';

type Props = {
    label: string;
    color?: string;
    onClick: () => void;
    fill?: boolean;
}

export const Button = ({ label, color, onClick, fill }: Props) => {

    return (
        <div className={styles.container} onClick={onClick} style={{
            color: fill? '#fff' : color,
            borderColor: color,
            backgroundImage: fill ? 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)' : 'transparent'
        }}>
            {label}
        </div>
    )
}