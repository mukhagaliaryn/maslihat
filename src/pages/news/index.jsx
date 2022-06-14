import React from 'react';
import Layout from '../../layouts';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import President from '../../components/Kings';


const News = () => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={'Жаңалықтар'}>
            <div className="wrapper">
                <div className="title">
                    <h1>Жаңалықтар мұрағаты</h1>
                </div>
                <div className="content">
                    <div className="content-list">

                        <div className="news-box">
                            <h4>ТЕАТРДА РЕФЕРЕНДУМ БОЙЫНША ТҮСІНДІРМЕ ЖҰМЫСТАРЫ ЖҮРГІЗІЛДI</h4>
                            <p>ТЕАТРДА РЕФЕРЕНДУМ БОЙЫНША ТҮСІНДІРМЕ ЖҰМЫСТАРЫ ЖҮРГІЗІЛДI 
                                Шымкент қаласындағы Орыс драма театрында республикалық 
                                референдумды ұйымдастыру және ел тұрғындарын
                            </p>
                            <small className="date">25.05.2022</small>

                            <Link href={'/'}><a>Ары қарай оқу</a></Link>
                        </div>

                        <div className="news-box">
                            <h4>ТЕАТРДА РЕФЕРЕНДУМ БОЙЫНША ТҮСІНДІРМЕ ЖҰМЫСТАРЫ ЖҮРГІЗІЛДI</h4>
                            <p>ТЕАТРДА РЕФЕРЕНДУМ БОЙЫНША ТҮСІНДІРМЕ ЖҰМЫСТАРЫ ЖҮРГІЗІЛДI 
                                Шымкент қаласындағы Орыс драма театрында республикалық 
                                референдумды ұйымдастыру және ел тұрғындарын
                            </p>
                            <small className="date">25.05.2022</small>

                            <Link href={'/'}><a>Ары қарай оқу</a></Link>
                        </div>
                    </div>

                    <President />
                </div>
                
            </div>
        </Layout>
    )
}

export default News;