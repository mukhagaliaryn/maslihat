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
                <Image width={24} height={24} src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png" alt="image"/>
            </span>

            <div className="modal-block">
                <form>
                    <input type="text" placeholder='Поиск...' />
                    <button><Image width={30} height={30} src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" alt="image"/></button>
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
                <Image width={24} height={24} src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png" alt="image"/>
            </span>

            <div className="modal-block">
                <div className="up-header-block">
                    <a href={'/'}>{t("common:header.up-header.first")}</a>
                    <a href={'/'}>Фотогалерея</a>
                    <a href={'/'}>Видеогалерея</a>
                    <a href={'/'}>{t("common:header.up-header.second")}</a>
                    <a href={'/contact'}>{t("common:header.up-header.third")}</a>
                    <div className="lng">
                    {router.locales.map(locale => (
                        <Link href={router.asPath} locale={locale} key={locale}>
                            <a>
                                {locale === "kz" ? <Image width={24} height={24} src="https://img.icons8.com/color/48/undefined/kazakhstan.png" alt="image"/> 
                                : locale === "ru" ? <Image width={24} height={24} src="https://img.icons8.com/color/48/undefined/russian-federation.png" alt="image"/> : null}
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
                            <a href={'/apparat'}>{t("common:header.navbar.second.first")}</a>
                            <a href={'/apparat/adep'}>{t("common:header.navbar.second.second")}</a>
                            <a href={'/apparat/apparat-man'}>{t("common:header.navbar.second.third")}</a>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Регламент</p>
                        <div className="select-down">
                            <a href={'/reglament'}>{t("common:header.navbar.third.first")}</a>
                            <a href={'/reglament/plan'}>{t("common:header.navbar.third.second")}</a>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Сессия</p>
                        <div className="select-down">
                            <a href={'/session'}>{t("common:header.navbar.four.first")}</a>
                            <a href={'/session/sheshym-list'}>{t("common:header.navbar.four.second")}</a>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Комиссия</p>
                        <div className="select-down">
                            <a href={'/comission'}>{t("common:header.navbar.five.first")}</a>
                            <a href={'/comission/com-place'}>{t("common:header.navbar.five.second")}</a>
                            <a href={'/comission/work-plan'}>{t("common:header.navbar.five.third")}</a>
                            <a href={'/comission/todo'}>{t("common:header.navbar.five.four")}</a>
                            <a href={'/comission/success-work'}>{t("common:header.navbar.five.five")}</a>
                        </div>
                    </div>
                    <div className="menu">
                        <p>{t("common:header.navbar.six.label")}</p>
                        <div className="select-down">
                            <a href={'/deputats'}>{t("common:header.navbar.six.first")}</a>
                            <a href={'/deputats/maslihat'}>{t("common:header.navbar.six.second")}</a>
                            <a href={'/deputats/employees'}>{t("common:header.navbar.six.third")}</a>
                            <a href={'/deputats/qabylday'}>{t("common:header.navbar.six.four")}</a>
                        </div>
                    </div>
                    <a href={'/employments'}>{t("common:header.navbar.seven")}</a>
                    <a href={'/public'}>{t("common:header.navbar.eight")}</a>
                </nav>
            </div>
        </div>
        : null}
        </>
    )
}