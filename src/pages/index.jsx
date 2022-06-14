import Layout from "../layouts";
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { BACKEND_URL } from "../types";
import { useRouter } from "next/router";


const Index = ({anons, news, employees}) => {

    const { t } = useTranslation();
    const router = useRouter()
    
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
                        <Image src='/icons/narimbetov4.jpg' width={300} height={400} alt="image"/>
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
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} >
                        {news.map((news, i) => (
                                <div key={i}>
                                    <Image width={1280} height={720} src="/icons/banner.png" alt="image"/>
                                    <p className="legend">{router.locale == "kz" ? news.title_kk : news.title}</p>
                                </div>
                            )
                        )}
                    </Carousel>
                </div>
            </div>

            <div className="announcement">
                <h1>{t("common:main.announcement.h1")}</h1>
                <div className="block">
                    {anons.map((anon, i) => (
                        <div className="box" key={i}>
                            <div className="image">
                                <Image src='/icons/banner.png' width={800} height={450} alt="image"/>
                            </div>
                            <h3>{router.locale == 'kz' ? anon.title_kk : anon.title}</h3>
                            <p>{anon.date}</p>
                            <Link href={'/'}><a>{t("common:main.announcement.more")}</a></Link>
                        </div>
                    ))}
                </div>

                <div className="see-more">
                    <Link href={'/'}><a>{t("common:main.announcement.more")}</a></Link>
                </div>
            </div>

            <div className="employments">
                {employees.map((emp, i) => (
                    <div className="emp-box" key={i}>
                        <div className="image">
                            <Image src={emp.image} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} alt="image"/>
                        </div>
                        <h4>{emp.fio}</h4>

                        <Link href={'/'}><a>{t("common:main.employments.q")}</a></Link>
                    </div>
                ))}
                
            </div>

            <div className="partners">
                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} alt="image"/>
                        </div>
                        <small>{t("common:main.partners.first")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} alt="image"/>
                        </div>
                        <small>{t("common:main.partners.second")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} alt="image"/>
                        </div>
                        <small>{t("common:main.partners.third")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} alt="image"/>
                        </div>
                        <small>{t("common:main.partners.four")}</small>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a className="box">
                        <div className="logo">
                            <Image src={'/icons/logo_2.png'} width={100} height={100} alt="image"/>
                        </div>
                        <small>{t("common:main.partners.five")}</small>
                    </a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    
    const res = await fetch(`${BACKEND_URL}/`)
    const data = await res.json();
    const anons = data.anons;
    const news = data.news;
    const employees = data.employees;

    return {
        props: {
            anons,
            news,
            employees
        }
    }
}

export default Index;