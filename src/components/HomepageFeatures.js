import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Deploy in minutes',
    Svg: '../../static/img/rocket.png',
    description: (
      <>
        Statetrace is packaged in a container and ready to deploy into your favorite cloud provider. Keep your data yours with on-prem deoployments.
      </>
    ),
  },
  {
    title: 'Become an audit wizard',
    Svg: '../../static/img/wizard_hat.png',
    description: (
      <>
        Search your application's data history fast with built in search. Automatically index valuable information that lets you answer questions faster.
      </>
    ),
  },
  {
    title: 'Add outbounds',
    Svg: '../../static/img/link.png',
    description: (
      <>
        Keep building with Statetrace by adding new outbounds that put your data where you want it. Ready made adapters make connecting Statetrace easy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
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
