import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import { BACKEND_URL } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

const DeEmployees = ({data}) => {
    const { t } = useTranslation();

    return (
        <Layout title={t("common:header.navbar.six.third")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.six.third")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="employees">
                            {data.map((employee, i) => (
                                <div className="emp-box" key={i}>
                                    <div className="image">
                                        <Image src={employee.image} width={300} height={400} alt="image"/>
                                    </div>
                                    <h4><Link href={`/employments/${encodeURIComponent(employee.id)}`}><a>{employee.fio}</a></Link></h4>
                                    <small></small>
                                    <Link href={`/`}><a className='q'>{t("common:news.question")}</a></Link>
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
    
    const res = await fetch(`${BACKEND_URL}/employees/category/5`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default DeEmployees;