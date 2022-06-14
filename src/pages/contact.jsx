import React from 'react';
import Layout from '../layouts';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';


const Contact = () => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.up-header.third")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.up-header.third")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="contact-list">
                            <div className="mail">
                                <h4>E-mail:</h4>
                                <p>maslihat_shm@mail.ru</p>
                            </div>
                            <div className="facs">
                                <h4>Факс:</h4>
                                <p>+7 (7252) 24-74-00</p>
                            </div>
                            <div className="phones">
                                <h4>Байланыс телефондары:</h4>
                                <p>+7 (7252) 24-74-00 - қабылдау бөлмесі</p>
                                <p>+7 (7252) 24-74-09</p>
                                <p>+7 (7252) 24-74-72</p>
                                <p>+7 (7252) 24-75-57</p>
                            </div>
                            <div className="adress">
                                <h4>Мекен-жайы:</h4>
                                <p>Қазақстан Республикасы, Шымкент қаласы, Қаратау ауданы, Nursultan Nazarbaev даңғылы 10, индекс 160023</p>
                            </div>
                        </div>
                    </div>

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Contact;