import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';

const Adep = () => {
    const { t } = useTranslation();
    const router = useRouter()

    return (
        <Layout title={t("common:header.navbar.second.second")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.second.second")}</h1>
                </div>

                <div className="content">
                    
                    <div className="content-list">
                        <span style={{fontSize: "14px"}}>
                            {router.locale == 'kz' ?
                                `Қазақстан Республикасы Президентінің 2015 жылғы 29 желтоқсандағы Жарлығына сәйкес
                                этикалық нормалар мен қағидаларды одан әрі жетілдіру жөніндегі шаралар туралы "№153
                                Қазақстан Республикасы мемлекеттік қызметшілерінің мінез-құлқын
                                Әдеп жөніндегі уәкілі Түркістан облыстық мәслихаты аппараты басшысының орынбасарына жүктелген
                                мәслихат-тұрақты комиссиялар бөлімінің басшысы Турежанов Сәкен Нұрмаханұлы
                                2021 жылдың 6 сәуірінен бастап.`
                            :
                                `В соответствии с Указом Президента Республики Казахстан от 29 декабря 2015 
                                года №153 «О мерах по дальнейшему совершенствованию этических норм и правил 
                                поведения государственных служащих Республики Казахстан» функции уполномоченного 
                                по этике возложены на заместителя руководителя аппарата Тукестанского областного 
                                маслихата-руководителя отдела постоянных комиссий Турежанова Сакена Нурмахановича 
                                с 6 апреля 2021 года.`
                            }
                        </span>
                    
                                                    
                    </div>


                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default Adep;