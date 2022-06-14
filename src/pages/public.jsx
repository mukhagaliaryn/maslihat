import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../components/Kings';
import Layout from '../layouts';

const Public = () => {
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
                        <h1>Hello world</h1>
                    </div>

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Public;