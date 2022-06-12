import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export const SearchModal = ({showModal, setShowModal}) => {

    return (
        <>
        {showModal ?
        <div className="window">
            <span className="close-btn" onClick={() => setShowModal(prev => !prev)}>
                <Image width={24} height={24} src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png"/>
            </span>

            <div className="modal-block">
                <form>
                    <input type="text" placeholder='Поиск...' />
                    <button><img src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png"/></button>
                </form>
            </div>
        </div>
        : null}
        </>
    )
}

export const MenuhModal = ({showModal, setShowModal}) => {
    const { t } = useTranslation();
    const router = useRouter();


    return (
        <>
        {showModal ?
        <div className="window">
            <span className="close-btn" onClick={() => setShowModal(prev => !prev)}>
                <Image width={24} height={24} src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png"/>
            </span>

            <div className="modal-block">
                <div className="up-header-block">
                    <Link href={'/'}><a>{t("common:header.up-header.first")}</a></Link>
                    <Link href={'/'}><a>Фотогалерея</a></Link>
                    <Link href={'/'}><a>Видеогалерея</a></Link>
                    <Link href={'/'}><a>{t("common:header.up-header.second")}</a></Link>
                    <Link href={'/'}><a>{t("common:header.up-header.third")}</a></Link>
                    <div className="lng">
                    {router.locales.map(locale => (
                        <Link href={router.asPath} locale={locale} key={locale}>
                            <a>
                                {locale === "kz" ? <Image width={24} height={24} src="https://img.icons8.com/color/48/undefined/kazakhstan.png"/> 
                                : locale === "ru" ? <Image width={24} height={24} src="https://img.icons8.com/color/48/undefined/russian-federation.png"/> : null}
                            </a>
                        </Link>
                    ))}
                    </div>
                    
                </div>

                <nav>
                    <a href={'/'}>{t("common:header.navbar.first")}</a>
                    <div className="menu">
                        <p>Аппарат</p>
                        <div className="select-down">
                            <a href={'/'}>{t("common:header.navbar.second.first")}</a>
                            <a href={'/'}>{t("common:header.navbar.second.second")}</a>
                            <a href={'/'}>{t("common:header.navbar.second.third")}</a>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Регламент</p>
                        <div className="select-down">
                            <Link href={'/'}><a>{t("common:header.navbar.third.first")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.third.second")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Сессия</p>
                        <div className="select-down">
                            <Link href={'/'}><a>{t("common:header.navbar.four.first")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.four.second")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Комиссия</p>
                        <div className="select-down">
                            <Link href={'/'}><a>{t("common:header.navbar.five.first")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.five.second")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.five.third")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.five.four")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.five.five")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>{t("common:header.navbar.six.label")}</p>
                        <div className="select-down">
                            <Link href={'/'}><a>{t("common:header.navbar.six.first")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.six.second")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.six.third")}</a></Link>
                            <Link href={'/'}><a>{t("common:header.navbar.six.four")}</a></Link>
                        </div>
                    </div>
                    <Link href={'/employments'}><a>Құрметті азаматтар</a></Link>
                    <Link href={'/employments'}><a>Қоғамдық кеңес</a></Link>
                </nav>
            </div>


        
        </div>
        : null}
        </>
    )
}