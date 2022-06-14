import React from 'react';
import Layout from '../layouts';
import Image from 'next/image';
import Link from 'next/link';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const Employments = () => {
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
                            <div className="emp-box">
                                <div className="image">
                                    <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} alt="image"/>
                                </div>
                                <div className="rating">
                                    <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                                    <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                                    <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                                    <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                                    <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                                </div>
                                <h4>Жорабаев Жамалбек Асанұлы</h4>

                                <Link href={'/'}><a>Сұрақ қою</a></Link>
                            </div>
                        </div>
                    </div>
                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Employments;