import React from 'react';
import Layout from '../layouts';
import President from '../components/Kings';
import useTranslation from 'next-translate/useTranslation';

const Form = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("common:form.h1")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:form.h1")}</h1>
                </div>
                <div className="content">
                    <div className="content-list">
                        <div className="form">
                            <div className="form-group">
                                <input type="text" placeholder='Аты-жөні...' />
                            </div>
                            <div className="form-group">
                                <input type="phone" placeholder='Телефон нөмері...' />
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder='ЖСН' />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder='example@gmail.com' />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <button>Жіберу</button>
                            </div>
                        </div>
                    </div> 

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Form;