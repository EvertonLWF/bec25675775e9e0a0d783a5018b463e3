import styles from './styles.module.css'

type Props = {
    label: string;
    color?: string;
    onClick: () => void;
}

export const Newsletter = ({ label, color, onClick }: Props) => {

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Newsletter" placeholder-color='red'/>
            <div className={styles.buttonNewsLetter} onClick={onClick}>
                <p>{label}</p>
            </div>
        </div>
    )
}