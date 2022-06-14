import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import { BACKEND_URL } from '../../types';

const Plan = ({data}) => {
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
                        <div className="reglament">
                            <div className="head">
                                <span>{t("common:reglament.plan.first")}</span>
                            </div>
                            <h4>{t("common:header.navbar.third.second")}</h4>

                            <div className="plan-list">
                                {data.map((plan, i) => (
                                    <div className="plan-box" key={i}>
                                        <h4>{router.locale == 'kz' ? plan.section_kk: plan.section_ru}</h4>
                                        <span>{router.locale == 'kz' ? plan.desc_kk : plan.desc}</span>
                                        <span>{router.locale == 'kz' ? plan.commission_kk : plan.commission}</span>
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
    
    const res = await fetch(`${BACKEND_URL}/plan`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default Plan;