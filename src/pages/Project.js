import React from 'react';

import '../styles/projectstyle.css'

const Home = () => {
  return (
    <>
    <section className="projects">
    <div className="main-container-project">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </span>
      </h2>

      <div className="projects__content">
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">test</h3>
            <p className="projects__row-content-desc">
              test
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-1" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">test</h3>
            <p className="projects__row-content-desc">
             test
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-2" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">test</h3>
            <p className="projects__row-content-desc">
              test
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-3" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">test</h3>
            <p className="projects__row-content-desc">
              test
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-4" target="_blank">Case Study</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Home;
