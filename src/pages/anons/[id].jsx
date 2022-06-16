import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import { BACKEND_URL } from '../../types';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

const AnonsDetail = ({data}) => {    
    const router = useRouter();

    return (
        <Layout title={router.locale == "kz" ? data.title_kk : data.title}>
            <div className="wrapper">
                <div className="title">
                    <h1>{router.locale == "kz" ? data.title_kk : data.title}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="reglament">
                            <div className="reg-list">
                                <div className="reg-box">
                                    <h4 style={{textAlign: "left", paddingLeft: "20px"}}>{router.locale == "kz" ? data.title_kk : data.title}</h4>
                                    <span>{ReactHtmlParser(router.locale == "kz" ? data.content_kk: data.content)}</span>
                                    <span style={{display: "flex", alignItems: "center"}}>
                                        <Image width={20} height={20} src="https://img.icons8.com/ios/50/undefined/timer.png"/>
                                        <small style={{marginLeft: "10px"}}>{data.date}</small>
                                    </span>
                                </div>
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
    
    const res = await fetch(`${BACKEND_URL}/anons/${context.params.id}`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}


export default AnonsDetail;