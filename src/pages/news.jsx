import React from 'react';
import Layout from '../layouts';
import Image from 'next/image';
import Link from 'next/link';


const News = () => {
    return (
        <Layout title={'Жаңалықтар'}>
            <div className="news">
                <div className="title">
                    <h1>Жаңалықтар мұрағаты</h1>
                </div>
                <div className="content">
                    <div className="news-list">
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

                    <div className="presidents">
                        <div className="box">
                            <div className="image">
                                <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                                <h4>Нұрсұлтан Әбішұлы Назарбаев</h4>
                                <small>Қазақстан Республикасының Тұңғыш Президенті - Елбасы</small>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                                <h4>Қасым-Жомарт Кемелұлы Тоқаев</h4>
                                <small>Қазақстан Республикасының Президенті</small>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                                <h4>Нарымбетов Бахадыр Мәдәліұлы</h4>
                                <small>Шымкент қаласы мәслихатының хатшысы</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default News;