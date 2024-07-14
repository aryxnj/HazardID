import styles from './styles.module.css';

export default function ProjectManagement() {
    return (
        <div>
            <div className={styles.heading}>
                <h3>PROJECT MANAGEMENT</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>"A goal without a plan is just a wish."</h1>
            </div>
            <div className={styles.paragraph}>
                <p>In order to ensure the project is delivered on time and to a high standard, a project management plan was developed. This plan includes a Gantt chart and meeting minutes for every meeting. Please feel free to check out our project management plans!</p>
            </div>
            <div className={styles.img}>
                <img src="img/Ganttchart.png" alt="Project Management" />
            </div>
            <div class={styles.buttonContainer}>
                <a href="https://www.notion.so/wonjunlee33/Gantt-chart-0407a00c26cd49f59bee88b10d1ddce7">
                    <button className={styles.button}><strong>FULL GANTT CHART</strong></button>
                </a>
                <a href="https://www.notion.so/wonjunlee33/Meeting-Minutes-ebde29a3ae48420d8dd3cc7eab230974">
                <button className={styles.button}><strong>MEETING MINUTES</strong></button>
                </a>
            </div>
        </div>
    );
};
