import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../layouts';
import President from '../../components/Kings';
import { BACKEND_URL } from '../../types';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';


const Anons = ({data}) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Layout title={t("common:main.announcement.h1")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:main.announcement.h1")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="reglament">
                            <div className="reg-list">
                                {data.map((anons, i) => (
                                    <div className="reg-box" key={i}>
                                        <h4 style={{textAlign: "left", paddingLeft: "20px"}}>{router.locale == "kz" ? anons.title_kk : anons.title}</h4>
                                        <span>{ReactHtmlParser(router.locale == "kz" ? anons.content_kk: anons.content)}</span>
                                        <Link href={`/anons/${encodeURIComponent(anons.id)}`}><a className='more'>{t("common:news.btn")}</a></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    
    const res = await fetch(`${BACKEND_URL}/anons`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default Anons;