/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_rising_8svm.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">About me</Button>
            <Button href={docUrl('doc1.html')}>My blog</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    /* 
    If you want to add this back, don't forget to add the <FeatureCallout /> back to the return function below
    */ 
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>How did I make this?</h2>
        <MarkdownBlock>This website was a pet project I made using the Docusaurus static site generator and is hosted on Amazon S3. I've got some simple documentation under Docs</MarkdownBlock>
      </div>
    );
    

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              "If you'd like a copy of my CV, " +
              "[**let me know**](mailto:lisachan81@gmail.com)",
            image: `${baseUrl}img/undraw_cv.svg`,
            imageAlign: 'left',
            title: "Corporate Slave & Technophile",
          },
        ]}
      </Block>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "I've always been a bit of a zealot when it comes to fixing things. I enjoy getting into the weeds of a problem, blowing things up, rebuilding them and learning a new skill or two along the way. I want my work to make life better for my fellow colleagues and our customers. I especially excel at solving complex issues for big lumbering, bureaucratic and often highly political organisations (while trying my best to murder as few people as possible along the way).",
            image: `${baseUrl}img/undraw_to_the_moon.svg`,
            imageAlign: 'right',
            title: 'About me',
          },
        ]}
      </Block>
    );

    /* 
    If you want to add this back, don't forget to add the <Description /> back to the return function below
    */ 
    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
            'To make your landing page more attractive, use illustrations! Check out ' +
            '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
            'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );
    

    /* 
    If you want to add this back, don't forget to add the <Features /> back to the return function below
    */ 
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    /* 
    If you want to add this back, don't forget to add the <Showcase /> back to the return function below
    */
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is using this?</h2>
          <p>This project has so many users!</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
                    
          <LearnHow />
          <TryOut />
          <FeatureCallout />          
        </div>
      </div>
    );
  }
}

module.exports = Index;
