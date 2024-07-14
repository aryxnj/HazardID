import styles from './styles.module.css';

export default function AllToolVideo() {
    return (    
        <div>
            {/* <div className={styles.heading}>
                <h3>HCI PRESENTATION</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Human Computer Interaction</h1>
            </div>
            <div className={styles.paragraph}>
                <p>This presentation contains various HCI-related considerations that the eventually aided in creating the first version of HazardID.</p>
            </div>
            <iframe src="/src/img/hci.pdf" width="560" height="315" className={styles.video}></iframe> */}
            <div className={styles.heading}>
                <h3>PRESENTATION 1 (ELEVATOR PITCH)</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Showcasing our solution</h1>
            </div>
            <div className={styles.paragraph}>
                <p>This video acts as an elevator pitch for our beta product.</p>
            </div>
            <iframe width="560" height="315" className={styles.video} src="https://www.youtube.com/embed/GiQdoBPTXbE?si=KMnGbzQRHzQ1Qj2J" title="HazardID Presentation1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className={styles.heading}>
                <h3>PRESENTATION 2 (FINAL PRESENTATION)</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Demonstrating our final deliverable</h1>
            </div>
            <div className={styles.paragraph}>
                <p>This video contains an overview of our final deliverable.</p>
            </div>
            <iframe width="560" height="315" className={styles.video} src="https://www.youtube.com/embed/9nTXCVPAGFg?si=OXk5gBgCnqwGE14J" title="HazardID Presentation2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className={styles.heading}>
                <h3>PORTFOLIO VIDEO</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>A technical walkthrough</h1>
            </div>
            <div className={styles.paragraph}>
                <p>This video contains a comprehensive technical walkthrough of our final deliverable.</p>
            </div>
            <iframe width="560" height="315" className={styles.video} src="https://www.youtube.com/embed/rJ80z_-ae_g?si=nC7iwRpKNPgwb1Od" title="HazardID Keynote" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className={styles.heading}>
                <h3>LINKS</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>Link to videos</h1>
            </div>
            <div className={styles.paragraph}>
                <p>If the above embeds do not work, please use the following links:</p>
                <p><a href="https://youtu.be/GiQdoBPTXbE">Presentation 1</a></p>
                <p><a href="https://youtu.be/9nTXCVPAGFg">Presentation 2</a></p>
                <p><a href="https://youtu.be/rJ80z_-ae_g">Portfolio Video</a></p>
            </div>
        </div>
    );
};
