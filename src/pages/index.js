import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={ clsx( 'hero hero--primary', styles.heroBanner ) }>
      <div className="container">
        <h1 className="hero__title">Optimize Your Website for a Higher Ranking with Slim SEO</h1>
        <p className="hero__subtitle"><em>Automate</em> all the SEO work for your websites with a lightweight yet powerful WordPress SEO plugin.</p>
        <div className={ styles.buttons }>
          <Link
            className="button button--primary button--lg"
            to="/slim-seo/installation/">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title=""
      description={ siteConfig.tagline }>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

