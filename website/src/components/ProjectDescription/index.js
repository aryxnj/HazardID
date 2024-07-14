import styles from './styles.module.css';

export default function ProjectDescription() {
    return (
        <div>
            <div className={styles.sponsors}>
                <img src="img/logo-github.svg" alt="SVG 1" />
                <img src="img/logo-python.svg" alt="SVG 2" />
                <img src="img/logo-gpt.svg" alt="SVG 3" />
                <img src="img/logo-llama.svg" alt="SVG 4" />
                <img src="img/logo-streamlit.svg" alt="SVG 5" />
            </div>
            <div className={styles.heading}>
                <h3>PROJECT MOTIVATION</h3>
            </div>
            <div className={styles.heading_desc}>
                <h1>"Efficiency is key in this line of work."</h1>
            </div>
            <div className={styles.paragraph}>
                <p>
                Many factors, such as climate change, post-pandemic complications, and civil conflicts are driving a rise in hazard events around the world - many more people are affected each year. As thus, the importance of reporting on such hazard events and classifying them properly becomes increasingly evident: the more they are accurately scrutinised, the more they can be used as aggregate data to prevent casualties or property damage. However, different organisations report and classify hazards differently, making collaboration difficult and the collection of big data next to impossible. To mitigate this rift, a 2018 collaboration between the United Nations Disaster Risk Reduction (UNDRR) and the International Science Council sought to unionise the hazard classification process. They proposed a detailed hazard taxonomy scheme with over 300 different hazard types. Unfortunately, almost no organisations have adopted the taxonomy scheme today despite rigorous planning and efforts. This is due to its complexity: even an expert on natural hazards would find it difficult to accurately classify every event report scenario. Reading through the 100+ pages of definitions is also a chore; a faster and easier way to classify hazards is necessary for the widespread adoption of this taxonomy scheme.
                </p>
                <p>
                This project aims to build a piece of lightweight software that will guide a user to correctly classify the hazard with respect to the full ISC-UNDRR taxonomy. The software combines Large Language Models (LLM) with a user-friendly interface to help guide a user towards a quick and accurate classification of the hazards involved in a disaster report. 
                </p>
                <p>
                The final deliverable, HazardID, redefines hazard classification by swiftly processing data, distilling expert-specific knowledge, and optimising the entire classification workflow. All this is achieved while upholding the accuracy equivalent to that of a hazard expert manually tagging reports. This tool marks the inception of a broader initiative aimed at democratising access to the intricate expert-tailored taxonomy scheme, ultimately fostering increased adoption. Its encourages the establishment of a standardised hazard taxonomy, ensuring uniformity across organisations once and for all.
                </p>
            </div>
        </div>
    );
};
