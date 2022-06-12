import Layout from "../layouts";
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';


const Index = () => {
    const { t } = useTranslation();
    
    return (
        <Layout>
            <div className="landing" style={{backgroundImage: `url('icons/1.jpg')`}}>
                <div className="content">
                    <h1>{t("common:main.landing.h1")}</h1>
                    <div className="links">
                        <Link href={'/news'}><a>{t("common:main.landing.first")}</a></Link>
                        <Link href={'/'}><a>{t("common:main.landing.second")}</a></Link>
                    </div>
                </div>
            </div>

            <div className="virtual-access">
                <div className="content">
                    <h1>{t("common:main.virtual-access.h1")}</h1>
                    <p>{t("common:main.virtual-access.p")}</p>
                </div>
                <Link href={'/'}><a>{t("common:main.virtual-access.button")}</a></Link>
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
                            <Image width={868} height={575} src="/icons/banner.png" />
                            <p className="legend">Аппарат акима г. Шымкента: адреса со входами на карте, отзывы, фото, номера телефонов, время работы и как доехать.</p>
                        </div>
                        <div>
                            <Image width={868} height={575} src="/icons/1.jpg" />
                            <p className="legend">Шаян (Бәйдібек ауданы). Тіл · Бақылау · Өңдеу. Шаян — Түркістан облысы Бәйдібек ауданындағы ауыл, 1964 жылдан Қосақжар ауылдық округі орталығы.</p>
                        </div>
                        <div>
                            <Image width={868} height={575} src="/icons/2.png" />
                            <p className="legend">Түркістан облысы (2018 ж. дейін Оңтүстік Қазақстан облысы) – Қазақстан ... маңызы бар қала мәртебесін алып, Оңтүстік Қазақстан облысының құрамынан алынды.</p>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="announcement">
                <h1>{t("common:main.announcement.h1")}</h1>
                <div className="block">
                    <div className="box">
                        <div className="image">
                            <Image src='/icons/banner.png' width={800} height={450} />
                        </div>
                        <h3>Кезекті 16 сессия</h3>
                        <p>Ақпан 18, 2022 10:00</p>
                        <Link href={'/'}><a>{t("common:main.announcement.more")}</a></Link>
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
                    <Link href={'/'}><a>{t("common:main.announcement.more")}</a></Link>
                </div>
            </div>

            <div className="employments">
                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>{t("common:main.employments.q")}</a></Link>
                </div>

                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>Сұрақ қою</a></Link>
                </div>

                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>Сұрақ қою</a></Link>
                </div>


                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>Сұрақ қою</a></Link>
                </div>

                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>Сұрақ қою</a></Link>
                </div>

                <div className="emp-box">
                    <div className="image">
                        <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                    </div>
                    <div className="rating">
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                    </div>
                    <h4>Жорабаев Жамалбек Асанұлы</h4>

                    <Link href={'/'}><a>Сұрақ қою</a></Link>
                </div>
            </div>

            <div className="partners">
                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} />
                        </div>
                        <small>{t("common:main.partners.first")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} />
                        </div>
                        <small>{t("common:main.partners.second")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} />
                        </div>
                        <small>{t("common:main.partners.third")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} />
                        </div>
                        <small>{t("common:main.partners.four")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} />
                        </div>
                        <small>{t("common:main.partners.five")}</small>
                    </a>
                </Link>
            </div>
        </Layout>
    )
}

export default Index;