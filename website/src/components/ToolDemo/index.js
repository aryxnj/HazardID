import styles from './styles.module.css';

export default function ToolDemo() {
    return (
        <div>
            <div className={styles.heading}>
                <h3>TOOL DEMO</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Try out our tool!</h1>
            </div>
            <div className={styles.paragraph}>
                <p>Please consult the "Appendices" page for a detailed user manual and for the login credentials.</p>
            </div>
            <iframe
                src="https://hazard-id.streamlit.app/?embed=true"
                className={styles.streamlit}
                height="100%"
                width="100%"
            ></iframe>
        </div>
    );
};
