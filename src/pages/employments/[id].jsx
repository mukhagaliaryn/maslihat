import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import Image from 'next/image';
import { BACKEND_URL } from '../../types';

const EmploymentDetail = ({data}) => {
    const router = useRouter();

    return (
        <Layout title={data.fio}>
            <div className="wrapper">
                <div className="title">
                    <h1>{data.fio}</h1>
                </div>

                <div className="content">
                    <div className="content-list">
                        <div className="emp-profile">
                            <div className="image">
                                <Image src={data.image} width={300} height={400} />
                            </div>
                            <div className="profile-body">
                                <h2>{data.fio}</h2>
                                <small>{router.locale == "kz" ? data.position_kk : data.position}</small>
                                <span></span>
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
    
    const res = await fetch(`${BACKEND_URL}/employees/${context.params.id}`)
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}

export default EmploymentDetail;