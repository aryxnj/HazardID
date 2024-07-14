import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProjectDescription from '@site/src/components/ProjectDescription';
import ProjectManagement from '@site/src/components/ProjectManagement';
import TheTeam from '@site/src/components/TheTeam';
import ToolDemo from '@site/src/components/ToolDemo';
import ToolVideo from '@site/src/components/ToolVideo';
import WatchAllVids from '@site/src/components/WatchAllVids';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
        <ProjectDescription />
        <HomepageFeatures />
        <ProjectManagement />
        <TheTeam />
        {/* <ToolDemo /> */}
        <ToolVideo />
        <WatchAllVids />
      </main>
    </Layout>
  );
}
