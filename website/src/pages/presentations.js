import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AllToolVideo from '@site/src/components/AllToolVideo';

import Heading from '@theme/Heading';
import styles from './presentations.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Watch All Videos
        </Heading>
        <p className="hero__subtitle">Scroll down to watch all of our deliverable videos.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://hazard-id.streamlit.app/">
            Try out HazardID ↗️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Systems Engineering Group 38">
      <HomepageHeader />
      <main>
        <AllToolVideo />
      </main>
    </Layout>
  );
}
