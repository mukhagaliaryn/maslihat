import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../components/Kings';
import Layout from '../layouts';
import ReactHtmlParser from 'react-html-parser';
import { BACKEND_URL } from '../types';

const Public = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.eight")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.eight")}</h1>
                </div>

                <div className="content">
                    <div className="content-list">
                        <div className="reglament">
                            <div className="reg-list">
                                {data.map((solution, i) => (
                                    <div className="reg-box" key={i}>
                                        <h4>{router.locale == "kz" ? solution.title_kk : solution.title}</h4>
                                        <span>{ReactHtmlParser(router.locale == "kz" ? solution.content_kk: solution.content)}</span>
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
    
    const res = await fetch(`${BACKEND_URL}/solution/category/7`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}


export default Public;