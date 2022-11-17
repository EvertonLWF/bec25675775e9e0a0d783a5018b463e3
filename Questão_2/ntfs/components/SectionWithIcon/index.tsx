/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'

type Props = {
    label: string;
    onClick: () => void;
    icon: string;
    count: string;
}

export const SectionWithIcon = ({ label, onClick, icon,count   }: Props) => {

    return (
        <div className={styles.container}>
            <img src={icon} alt="icon" />
            <h2>{count}</h2>
            <span>{label}</span>
        </div>
    )
}