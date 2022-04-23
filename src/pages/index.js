import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>

        <div className={clsx('margin-top--md', styles.buttons)}>
          <a
            className={clsx('button button--secondary button--lg margin--sm', styles.githubButton)}
            href="https://github.com/memassist"
            target="_blank">
            <span className={styles.githubIcon}></span> <span>GitHub</span>
          </a>
          <a
            className={clsx('button button--secondary button--lg margin--sm')}
            href="https://memassist.lezos.gr/"
            target="_blank"
            title="MemAssist Demo">
            Demo of the Tool
          </a>
          <a
            className="button button--secondary button--lg  margin--sm"
            href="https://dl.acm.org/doi/10.1145/3398189?cid=99658696775"
            target="_blank"
            title="A Locality Optimizer for Loop-Dominated Applications Based on Reuse Distance Analysis">
            Read the Publication
          </a>
        </div>

        {/*
        <div className={clsx('margin-top--md', styles.buttons)}>
          <Link
            className="button button--secondary button--lg  margin--sm"
            to={useBaseUrl('docs/tutorial/intro')}>
            ⏱ Tutorial - 5min
          </Link>
          <a
            className="button button--secondary button--lg  margin--sm"
            href="https://dl.acm.org/doi/10.1145/3398189?cid=99658696775"
            target="_blank"
            title="A Locality Optimizer for Loop-Dominated Applications Based on Reuse Distance Analysis">
            Read the Publication
          </a>
        </div>
        */}
      </div>
    </header>
  );
}

function HomepageMain() {
  return (
    <section className={clsx('margin-top--md', styles.main)}>
      <div className="container">
        <h2>Optimize your algorithms in terms of data locality</h2>
        <p className={styles.descriptionText}>
          <strong>MemAssist</strong> is a compiler assisted dynamic code analysis tool that supports the
          optimization of application code in C or MATLAB. It is used to indicate source code refactorings/optimizations that may improve
          temporal locality and reduce cache misses on the targeted architecture cache(s).
          The tool has been primarily deployed as an extension for the Visual Studio IDE
          but is now offered as a web application for hands on evaluation.
        </p>
        <p>
          For more information on MemAssist and how it works refer to:
        </p>
        <figure>
          <blockquote className={styles.blockquote}>
            <p>
              <a href="https://dl.acm.org/doi/10.1145/3398189?cid=99658696775"
                 target="_blank"
                 title="A Locality Optimizer for Loop-Dominated Applications Based on Reuse Distance Analysis">
                A Locality Optimizer for Loop-Dominated Applications Based on
                Reuse Distance Analysis
              </a>
            </p>
          </blockquote>
          <figcaption className={styles.blockquoteFooter}>
            Christakis Lezos, Grigoris Dimitroulakos, Ioannis Latifis, Konstantinos Masselos
            <br/>
            <cite title="ACM TODAES">ACM Transactions on Design Automation of Electronic Systems (TODAES)</cite>,
            Volume 25 Issue 6, September 2020
          </figcaption>
        </figure>
        <p className={clsx('margin-top--lg')}>
          <em>
            Free access to the PDF is provided through the ACM Author-izer service.
            <br/>
            By clicking the link above, you will be transferred to the ACM Digital
            Library page of the publication where the PDF download link will be automatically unlocked.
          </em>
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Locality & Cache Memory Optimization Tool`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        {/*<HomepageFeatures />*/}
        <HomepageMain />
      </main>
    </Layout>
  );
}
