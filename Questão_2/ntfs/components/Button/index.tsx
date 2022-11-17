import styles from './styles.module.css'

type Props = {
    label: string;
    color?: string;
    onClick: () => void;
    fill?: boolean;
    marginLeft?: number;
}

export const Button = ({ label, color, onClick, fill,  marginLeft }: Props) => {

    return (
        <div className={styles.container} onClick={onClick} style={{
            marginLeft: marginLeft ? marginLeft : 0,
            color: fill? '#fff' : color,
            border: color ? `border: 2px solid ${color}` : 'none',
            backgroundImage: fill ? 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)' : 'transparent',
            boxShadow: fill ? 'inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);' : 'none',
        }}>
            <div className={styles.label}>{label}</div>
        </div>
    )
}