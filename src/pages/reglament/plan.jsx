import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';

const Plan = () => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.third.second")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.third.second")}</h1>
                </div>

                <div className="content">
                    <div className="content-list">
                        
                    </div>

                    <President />
                </div>
            </div>
            <h1>Жылдық жоспар</h1>
        </Layout>
    )
}

export default Plan;