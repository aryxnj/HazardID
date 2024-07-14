import styles from './styles.module.css';

export default function ToolVideo() {
    return (
        <div>
            <div className={styles.heading}>
                <h3>HazardID KEYNOTE</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Watch our HazardID keynote!</h1>
            </div>
            <iframe width="560" height="315" className={styles.video} src="https://www.youtube.com/embed/rJ80z_-ae_g?si=nC7iwRpKNPgwb1Od" title="HazardID Keynote" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};
