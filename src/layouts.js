import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.content} />
                <link rel="shortcut icon" href="/icons/logo.png"/>
            </Head>
            <Script>{`
                
            `}</Script>
            <div id='root'>
                <div id='root-wrapper'>
                    {/* Header */}
                    <Header />
                    {/* ==================== */}
                    
                    {/* Main components */}
                    {props.children}
                    {/* ==================== */}
                </div>

                {/* Footer */}
                <Footer />
                {/* ==================== */}
            </div>
        </React.Fragment>
    )
}


Layout.defaultProps = {
    title: "Шаян аудандық мәслихаты - Ресми сайт",
    content: "В соответствии со статьей 9 Закона Республики Казахстан «Об Общественных советах», Туркестанский областной маслихат сообщает о проведении конкурса по избранию членов Общественного совета Туркестанской области."
}

export default Layout;