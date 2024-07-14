import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '90%',
    Svg: require('@site/static/img/speed.svg').default,
    description: (
      <>
        reduction of time spent on hazard classification.
      </>
    ),
  },
  {
    title: 'Accurate',
    Svg: require('@site/static/img/accurate.svg').default,
    description: (
      <>
        classification of hazards, with respect to the full ISC-UNDRR taxonomy.
      </>
    ),
  },
  {
    title: 'Cross-Compatible',
    Svg: require('@site/static/img/smartphone.svg').default,
    description: (
      <>
        lightweight tool that can run on virtually any modern device.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
