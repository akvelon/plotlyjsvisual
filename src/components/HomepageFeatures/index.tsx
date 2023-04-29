import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'All in one',
    Svg: require('@site/static/img/import.svg').default,
    description: (
      <>
        All Plotly.JS charts in one convenient visual.
      </>
    ),
  },
  {
    title: 'User friendly editor',
    Svg: require('@site/static/img/create.svg').default,
    description: (
      <>
        Chart studio provides a user friendly editor.
      </>
    ),
  },
  {
    title: 'Reusable charts',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        You can easily import and export charts to share with your colleagues.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
