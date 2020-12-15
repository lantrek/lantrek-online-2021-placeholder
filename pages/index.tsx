import { useContext } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import { LanguageContext, locales } from '../intl/LanguageProvider';
import useTranslation from '../intl/useTranslation';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useContext(LanguageContext);
  const router = useRouter();

  function handleLocaleChange (language: string) {
    const regex = new RegExp(`^/(${ locales.join('|') })`);
    setLocale(language);
    router.push(router.pathname, router.asPath.replace(regex, `/${ language }`));
  }

  const title = 'Lantrek Online 2021 - 4.-7. maaliskuuta, 2021';
  const description = ' LanTrek Online 2021 tapahtuma järjestetään 4-7.3.2021. Tapahtumassa on luvassa peliturnauksia, kilpailuita, etäpisteitä ympäri Tamperetta, streamaajia ja koko viikonlopun kestävä TV-lähetys';

  return (
    <>
      <div id="root">
        <Head>
          <title>Lantrek Online 2021</title>
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
                  <img src="/logo.svg" alt="Lantrek Online 2021" title="Lantrek Online 2021" width="234" height="72"/>
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
              <h3>{ t('4th - 7th of March, 2021') }</h3>
              <h1>{ t('THIS YEAR') }<br/> { t('ONLINE ONLY') }!</h1>
              <Link href="https://facebook.com/story.php?story_fbid=10160184267810730&id=201321150729">
                <a className="button announcement-link" target="_blank">{ t('Read announcement (Finnish only)') }</a>
              </Link>
              <div className="link-group">
                <Link href="https://2018.lantrek.org">
                  <a className="button" target="_blank">2018</a>
                </Link>
                <Link href="https://2020.lantrek.org">
                  <a className="button" target="_blank">2019</a>
                </Link>
                <Link href="https://2020.lantrek.org">
                  <a className="button" target="_blank">2020</a>
                </Link>
                <Link href="https://lantrek.1g.fi/kuvat/">
                  <a className="button" target="_blank">{ t('Gallery') }</a>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 website-opened">
              <p>{ t('Website will be opened in January') }.</p>
            </div>
          </div>
        </section>
      </div>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVBFTWL" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
    </>
  );
};

export default Home;