import React from 'react';
import Layout from '../layouts';
import Image from 'next/image';
import Link from 'next/link';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { BACKEND_URL } from '../types';

const Employments = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.seven")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.seven")}</h1>
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
    
    const res = await fetch(`${BACKEND_URL}/employees/`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default Employments;