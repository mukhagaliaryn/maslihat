import React from 'react';
import Layout from '../../layouts';
import President from '../../components/Kings';
import Image from 'next/image';
import { BACKEND_URL } from '../../types';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const CommissionList = ({data}) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Layout title={t("common:header.navbar.five.first")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.five.first")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="employees">
                            {data.map((employee, i) => (
                                <div className="emp-box" key={i}>
                                    <div className="image">
                                        <Image src={employee.image} width={300} height={400} alt="image"/>
                                    </div>
                                    <h4>{employee.fio}</h4>
                                    <small>{router.locale == "kz" ? employee.position_kk : employee.position}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                    <President />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    
    const res = await fetch(`${BACKEND_URL}/employees/category/4`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default CommissionList;