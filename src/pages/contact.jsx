import React from 'react';
import Layout from '../layouts';
import President from '../components/Kings';


const Contact = () => {
    return (
        <Layout title={'Байланыс'}>
            <div className="contacts">
                <div className="title">
                    <h1>Байланыс</h1>
                </div>
                <div className="content">
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

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Contact;