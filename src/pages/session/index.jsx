import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import { BACKEND_URL } from '../../types';
import Image from 'next/image';

const MaslihatSheshymdery = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.four.first")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.four.first")}</h1>
                </div>

                <div className="content">
                    <div className="content-list">
                        {data.map((file, i) => (
                            <div className="file-box" key={i}>
                                <h4>{router.locale == "kz" ? file.title_kk : file.title}</h4>
                                <a href={file.file}>
                                    <Image width={30} height={30} src="https://img.icons8.com/ios/50/undefined/download--v1.png"/>
                                </a>
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
    
    const res = await fetch(`${BACKEND_URL}/files/category/1`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default MaslihatSheshymdery;