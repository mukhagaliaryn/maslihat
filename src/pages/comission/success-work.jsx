import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import Image from 'next/image';
import { BACKEND_URL } from '../../types';


const SuccessWork = ({data}) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Layout title={t("common:header.navbar.five.five")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.five.five")}</h1>
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
    
    const res = await fetch(`${BACKEND_URL}/files/category/3`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default SuccessWork;