import Layout from "../layouts";
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Index = () => {

    return (
        <Layout>
            <div className="landing" style={{backgroundImage: `url('https://the-steppe.com/images/news/5213-QtH8hW4m.jpg')`}}>
                <div className="content">
                    <h1>Шаян аудандық мәслихаты</h1>
                    <div className="links">
                        <Link href={'/'}><a>Жаңалықтар</a></Link>
                        <Link href={'/'}><a>Тікелей эфир</a></Link>
                    </div>
                </div>
            </div>

            <div className="virtual-access">
                <div className="content">
                    <h1>Виртуалдық қабылдау</h1>
                    <p>Сіздер мұнда өз өтініштеріңізді және ұсыныстарыңызды қалдыра аласыздар</p>
                </div>
                <Link href={'/'}><a>Депутатқа сұрақ қою</a></Link>
            </div>


            <div className="last-news">
                <div className="assistance">
                    <div className="image">
                        <Image src='/icons/narimbetov4.jpg' width={300} height={400} />
                    </div>
                    <h2>Нарымбетов Бахадыр Мәдәліұлы</h2>
                    <p>Шымкент қаласы мәслихатының хатшысы</p>
                    <ul>
                        <li>Мәслихат шешімдері</li>
                        <li>«Шымкент -2025» даму бағдарламасы</li>
                        <li>Тұрақты комиссиялар</li>
                    </ul>
                </div>

                <div className="slider">
                    <Carousel autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src="/icons/banner.png" />
                            <p className="legend">Аппарат акима г. Шымкента: адреса со входами на карте, отзывы, фото, номера телефонов, время работы и как доехать.</p>
                        </div>
                        <div>
                            <img src="/icons/1.jpg" />
                            <p className="legend">Шаян (Бәйдібек ауданы). Тіл · Бақылау · Өңдеу. Шаян — Түркістан облысы Бәйдібек ауданындағы ауыл, 1964 жылдан Қосақжар ауылдық округі орталығы.</p>
                        </div>
                        <div>
                            <img src="/icons/2.png" />
                            <p className="legend">Түркістан облысы (2018 ж. дейін Оңтүстік Қазақстан облысы) – Қазақстан ... маңызы бар қала мәртебесін алып, Оңтүстік Қазақстан облысының құрамынан алынды.</p>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="announcement">
                <h1>Хабарландыру</h1>
                <div className="block">
                    <div className="box">
                        <div className="image">
                            <Image src='/icons/banner.png' width={800} height={450} />
                        </div>
                        <h3>Кезекті 16 сессия</h3>
                        <p>Ақпан 18, 2022 10:00</p>
                        <Link href={'/'}><a>Толығырақ</a></Link>
                    </div>

                    <div className="box">
                        <div className="image">
                            <Image src='/icons/banner.png' width={800} height={450} />
                        </div>
                        <h3>Кезекті 15 сессия</h3>
                        <p>Ақпан 18, 2022 10:00</p>
                        <Link href={'/'}><a>Толығырақ</a></Link>
                    </div>

                    <div className="box">
                        <div className="image">
                            <Image src='/icons/banner.png' width={800} height={450} />
                        </div>
                        <h3>Кезекті 14 сессия</h3>
                        <p>Ақпан 18, 2022 10:00</p>
                        <Link href={'/'}><a>Толығырақ</a></Link>
                    </div>
                    <div className="box">
                        <div className="image">
                            <Image src='/icons/banner.png' width={800} height={450} />
                        </div>
                        <h3>Кезекті 14 сессия</h3>
                        <p>Ақпан 18, 2022 10:00</p>
                        <Link href={'/'}><a>Толығырақ</a></Link>
                    </div>
                </div>

                <div className="see-more">
                    <Link href={'/'}><a>Толығырақ</a></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Index;