import { Button } from '../Button'
import styles from './styles.module.css'

type Props = {

}

export const Section = ({ }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <span>Overline</span>
                <h1>Sapien ipsum scelerisque convallis fusce</h1>
                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className={styles.containerLeftButtons}>
                    <Button
                        label="Get started"
                        color="blue"
                        onClick={() => { }}
                        fill
                    />
                    <Button
                        label="Learn more"
                        color="blue"
                        onClick={() => { }}
                    />
                </div>
            </div>
            <div className={styles.containerRight}></div>
        </div>
    )
}