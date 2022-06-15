import { useRouter } from 'next/router';
import React from 'react';
import { BACKEND_URL } from '../../types';
import Layout from '../../layouts';
import President from '../../components/Kings';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';

const NewsDetail = ({data}) => {
    const router = useRouter();

    return (
        <Layout title={router.locale == "kz" ? data.title_kk : data.title}>
            <div className="wrapper">
                <div className="title">
                    <h1>{router.locale == "kz" ? data.title_kk : data.title}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="news-body">
                            <Image src={data.image} width={800} height={420} />
                            <h4>{router.locale == "kz" ? data.title_kk : data.title}</h4>
                            <span>
                                <Image width={20} height={20} src="https://img.icons8.com/ios/50/undefined/timer.png"/>
                                <small>{data.date}</small>
                            </span>
                            <div className='body'>
                                {ReactHtmlParser(router.locale == "kz" ? data.content_kk : data.content)}
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

    const response = await fetch(`${BACKEND_URL}/news/${context.params.id}`)
    const data = await response.json();

    return {
        props: {
            data
        },
    }
}


export default NewsDetail;