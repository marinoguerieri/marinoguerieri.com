import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import 'typeface-roboto';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='en' />
        {/* <title>{title}</title> */}
        <title>
          Marino Guerieri / Web developer & tech. support specialist
        </title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-16x16.png'
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href='/img/safari-pinned-tab.svg'
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />
        {/* 
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta property='og:image' content='/img/og-image.jpg' /> */}

        {/* Google site verification */}
        <meta
          name='google-site-verification'
          content='o43OZMMJ-zu7ajQZeWZwQDlr33h5m4fsks8bcUNEWG4'
        />
      </Helmet>
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
