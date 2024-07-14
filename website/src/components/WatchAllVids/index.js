import styles from './styles.module.css';

export default function ProjectManagement() {
    return (
        <div>
            <div className={styles.heading}>
                <h3>WATCH ALL VIDEOS</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>A year's worth of development</h1>
            </div>
            <div className={styles.paragraph}>
                <p>You can watch all of our presentations to see how the project evolved over the year.</p>
            </div>
            <div class={styles.buttonContainer}>
                <a href="/2023/group38/presentations">
                    <button className={styles.button}><strong>WATCH ALL VIDEOS</strong></button>
                </a>
            </div>
        </div>
    );
};
