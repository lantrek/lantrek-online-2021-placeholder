import { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useTranslation from '../intl/useTranslation';
import { NextPage } from 'next';
import { LanguageContext, locales } from '../intl/LanguageProvider';
import { useRouter } from 'next/router';
import { Modal, Button } from 'react-bootstrap'

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  function handleLocaleChange (language: string) {
    const regex = new RegExp(`^/(${ locales.join('|') })`);
    setLocale(language);
    router.push(router.pathname, router.asPath.replace(regex, `/${ language }`));
  }

  const title = 'Lantrek 2022 - 3-6. maaliskuuta, 2022';
  const description = ' LanTrek 2022 tapahtuma järjestetään 3-6.3.2022, Tampereen messu- ja urheilukeskuksessa! Kaikkien iloksi palaamme jälleen fyysiseksi tapahtumaksi välivuoden jälkeen - vähänkö siistiä!';

  return (
    <>
      <div id="root">
        <Head>
          <title>Lantrek 2022 - 3-6. maaliskuuta, 2022</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta charSet="utf-8"/>
          <meta name="description" content={ description }/>

          <meta property="og:type" content="website"/>
          <meta property="og:title" content={ title }/>
          <meta property="og:description" content={ description }/>
          <meta property="og:image" content="/meta_photo.jpg"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:title" content={ title }/>
          <meta property="twitter:description" content={ description }/>
          <meta property="twitter:image" content="/meta_photo.jpg"/>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TVBFTWL');`,
          }}>
          </script>
          ...
        </Head>
        <div className="texture-1"></div>
        <div className="texture-2"></div>
        <div className="texture-3"></div>
        <div className="texture-4"></div>
        <section className="wrapper">
          <div className="header">
            <div className="wrapper">
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <img src="/logo.svg" alt="Lantrek 2022" title="Lantrek 2022" width="234" height="72"/>
                </div>
                <div className="col-xs-12 col-md-8 social-media-links">
                  <div className="link-group">
                    <Link href="https://www.facebook.com/lantrek.org">
                      <a className="button" target="_blank"><img src="/facebook.svg" alt="" width="16" height="16"/> Facebook</a>
                    </Link>
                    <Link href="https://www.instagram.com/lantrekofficial">
                      <a className="button" target="_blank"><img src="/instagram.svg" alt="" width="16" height="16"/> Instagram</a>
                    </Link>
                    <Link href="https://www.twitter.com/LanTrekRy">
                      <a className="button" target="_blank"><img src="/twitter.svg" alt="" width="16" height="16"/> Twitter</a>
                    </Link>
                    <button onClick={ () => handleLocaleChange('en') }>EN</button>
                    <button onClick={ () => handleLocaleChange('fi') }>FI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content row">
            <div className="col-xs-12 col-md-8">
              <h3>{ t('3rd - 6th of March, 2022') }</h3>
              <h1>{ t('GAMING AGAIN AT') }<br/> <span>{ t('TAMPERE EXHIBITION AND SPORTS CENTRE') }!</span></h1>
              <div className="link-group">
                <Button variant="primary" onClick={handleShow}>
                  { t('Press release') }
                </Button>
                <Link href="https://2020.lantrek.org">
                  <a className="button" target="_blank">2019</a>
                </Link>
                <Link href="https://2020.lantrek.org">
                  <a className="button" target="_blank">2020</a>
                </Link>
                <Link href="https://2021.lantrek.org">
                  <a className="button" target="_blank">2021</a>
                </Link>
                <Link href="https://lantrek.1g.fi/kuvat/">
                  <a className="button" target="_blank">{ t('Gallery') }</a>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 website-opened">
              <p>{ t('Website will be opened later') }.</p>
            </div>
          </div>
        </section>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton closeVariant={'white'}>
          <Modal.Title>LanTrek 2022 - Taas pelataan</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVBFTWL" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
    </>
  );
};

export default Home;