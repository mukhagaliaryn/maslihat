import React from 'react';
import Layout from '../../layouts';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import President from '../../components/Kings';
import { BACKEND_URL } from '../../types';


const News = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={'Жаңалықтар'}>
            <div className="wrapper">
                <div className="title">
                    <h1>Жаңалықтар мұрағаты</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        {data.map((news, i) => (
                            <div className="news-box" key={i}>
                                <h4>{router.locale == "kz" ? news.title_kk : news.title}</h4>
                                <small className="date">
                                    <Image width={20} height={20} src="https://img.icons8.com/ios/50/undefined/timer.png"/>
                                    {news.date}
                                </small>

                                <Link href={`/news/${encodeURIComponent(news.id)}`}><a>{t("common:news.btn")}</a></Link>
                            </div>
                        ))}
                    </div>

                    <President />
                </div>
                
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const response = await fetch(`${BACKEND_URL}/news`)
    const data = await response.json();

    return {
        props: {
            data
        },
    }
}


export default News;