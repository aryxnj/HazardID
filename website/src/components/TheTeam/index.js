import styles from './styles.module.css';

export default function ProjectManagement() {
    return (
        <div>
            <div className={styles.heading}>
                <h3>INTRODUCING THE TEAM</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>COMP0016 Systems Engineering Group 38</h1>
            </div>
            <div className={styles.paragraph}>
                <p>This project was developed by a team of three students from the University College London (UCL) Department of Computer Science, as part of the COMP0016 Systems Engineering module.</p>
            </div>
            <div class={styles.namecards}>
                <div>
                    <img src="img/wonjunlee.jpg" alt="Wonjun" />
                    <h3>Wonjun Lee</h3>
                    <div class={styles.role}>
                        Researcher<br />
                        Components Developer<br />
                        Report Editor
                    </div>
                    <br />
                    <h4>EMAIL: wonjun.lee.22@ucl.ac.uk</h4>
                </div>
                <div>
                    <img src="img/jasperkoenig.jpg" alt="Jasper" />
                    <h3>Jasper Koenig</h3>
                    <div class={styles.role}>
                        Researcher<br />
                        Core API Developer<br />
                        Components Integrator
                    </div>
                    <br />
                    <h4>EMAIL: jasper.koenig.22@ucl.ac.uk</h4>
                </div>
                <div>
                    <img src="img/aryanjain.jpg" alt="Aryan" />
                    <h3>Aryan Jain</h3>
                    <div class={styles.role}>
                        Researcher<br />
                        Frontend Developer<br />
                        Project Administrator
                    </div>
                    <br />
                    <h4>EMAIL: aryan.jain.22@ucl.ac.uk</h4>
                </div>
            </div>
        </div>
    );
};
