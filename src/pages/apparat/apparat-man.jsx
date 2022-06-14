import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import President from '../../components/Kings';
import Layout from '../../layouts';

const ApparatMan = () => {
    const { t } = useTranslation();
    
    return (
        <Layout title={t("common:header.navbar.second.third")}>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("common:header.navbar.second.third")}</h1>
                </div>
                
                <div className="content">
                    <div className="content-list">
                        <h1>Ақпаратқа қол жеткізу мәселелері бойынша уәкілетті тұлғалар тізімі</h1>                            
                    </div>

                    <President />
                </div>
            </div>
        </Layout>
    )
}

export default ApparatMan;