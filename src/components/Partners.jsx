import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const Partner = () => {
    const { t } = useTranslation();

    return (
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
    )
}

export default Partner;