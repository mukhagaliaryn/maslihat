import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { BACKEND_URL } from '../../types';
import { useRouter } from 'next/router';

const Apparat = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.second.first")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.second.first")}</h1>
                </div>
                
                <div className="content">
                    
                    <div className="content-list">
                        {data.map((apparat, i) => (
                            <div className="box" key={i}>
                                <div className="image">
                                    <Image src={apparat.image}  width={260} height={320} />
                                </div>
                                
                                <div className="body">
                                    <h2>{apparat.fio}</h2>
                                    <small>{router.locale == "kz" ? apparat.position_kk : apparat.position}</small>
                                    <div className="phone">
                                        <Image width={40} height={40} src="https://img.icons8.com/ios/50/undefined/phone.png"/>
                                        <span>{apparat.phone}</span>
                                    </div>
                                    <div className="email">
                                        <Image width={40} height={40} src="https://img.icons8.com/ios/50/undefined/new-post.png"/>
                                        <span>{apparat.email}</span>
                                    </div>
                                </div>
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
    
    const res = await fetch(`${BACKEND_URL}/employees/category/2`)
    const data = await res.json();

    console.log(data);

    return {
        props: {
            data
        }
    }
}

export default Apparat;