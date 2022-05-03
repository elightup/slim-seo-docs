import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Zero Configuration',
    Svg: require('@site/static/img/settings.svg').default,
    description: (
      <>
        Simply install and done! All the SEO tasks are done automatically without going through complicated options.
      </>
    ),
  },
  {
    title: 'Super Lightweight',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        With just 40 KB, you have a super fast and full-featured SEO plugin that can do the job that other bloated plugins do.
      </>
    ),
  },
  {
    title: 'High-Quality Code',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Modern, modular code that is made by WordPress developers with more than 12 years in plugin development.
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
        <h3>{title}</h3>
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
