import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import { BACKEND_URL } from '../../types';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';

const Qabylday = ({data}) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Layout title={t("common:header.navbar.six.four")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.six.four")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="reglament">
                            <div className="reg-list">
                                {data.map((timetable, i) => (
                                    <div className="reg-box" key={i}>
                                        <h4 style={{display: "flex", alignItems: "center", textAlign: "left", paddingLeft: "20px"}}>
                                            <Image width={30} height={30} src="https://img.icons8.com/ios-glyphs/30/undefined/user--v1.png"/> 
                                            {router.locale == "kz" ? timetable.title_kk : timetable.title}
                                        </h4>
                                        <span>{ReactHtmlParser(router.locale == "kz" ? timetable.content_kk: timetable.content)}</span>
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
    
    const res = await fetch(`${BACKEND_URL}/solution/category/6`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default Qabylday;