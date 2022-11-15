import styles from './styles.module.css'

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
            backgroundImage: fill ? 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)' : 'transparent',
            boxShadow: fill ? 'inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);' : 'none'
        }}>
            {label}
        </div>
    )
}