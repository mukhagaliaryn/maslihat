import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { MenuhModal, SearchModal } from "./Modal";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';


const Header = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(false);

    const onModalHandle = () => {
        setModal(prev => !prev);
    }

    const onMenuHandle = () => {
        setMenu(prev => !prev)
    }

    return (
        <React.Fragment>
            <SearchModal showModal={modal} setShowModal={setModal} />
            <MenuhModal showModal={menu} setShowModal={setMenu} />
            {/* Up Header */}
            <div className="up-header">
                <div className="up-header-block">
                    <Link href={'/'}><a>{t("common:header.up-header.first")}</a></Link>
                    <Link href={'/'}><a >Фотогалерея</a></Link>
                    <Link href={'/'}><a>Видеогалерея</a></Link>
                    <Link href={'/'}><a>{t("common:header.up-header.second")}</a></Link>
                    <Link href={'/contact'}><a>{t("common:header.up-header.third")}</a></Link>
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
            </div>

            {/* Down Header */}
            <div className="down-header">
                <div className="down-header-block">
                    <div className="logo">
                        <Link href={'/'}><a>
                            <Image src={'/icons/logo_2.png'} width={785} height={785} alt="image"/>    
                            <Image src={'/icons/logo.png'} width={785} height={785} alt="image"/>    
                        </a></Link>
                        <h3>{t("common:header.logo")}</h3>
                    </div>
                    <div className="contacts">
                        <div className="phone">
                            <Image width={30} height={30} alt="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACUklEQVRIie2VT0gUURzHP2/cP7NsEAZBeqiDXVq3S8YSZiGElNd0o0IvEdIhOymtneYQupVeig5JRpDQYVmzk0UdgjAokm4uFBV0qEMRQv6ZdWfn16Vsd51d3ZwJAr+3933fH595837vPdjUP5IqN6F3JM6AugQy59NU+3xq6KubYM0R2pkYBMZAGoAmKy+DbkLBYcXBjotHFepRiW1rGrHFVHLGLfCqFStUn1POtrlOha3ZMBiIlck268cHujwEK6t8WpJ094U9Asu7smmhPmRqjZ6AFaQr5GeXaufeeAMWbRxYcEzb9DI6mnMDXFNq5DLP532NLQGgtWRqxpxIDrgBhTIXiBmyroF8LLF3bj2dqPUUzL3hBQ05AWQL3O3ZLJO09wa9AwOL6auvRaS/xD6sh7bcxYWLZNUeFyqfmX7li7TUA00rpiJaEzkYzmemn3gGBrCidVM11EYUKvKHrZp9ew7VWdG6KWZnZSXc0+MP7ToSs3a3fefts4rdv75fFjcCupgPEY6VlD8288GTTBpzemeiFeEGEAW+AIa5V7+NYdh/Dwbo7gvrS/4HiLQV+cI3UfJJofY5VL3QNC44vWrVNUncCOi2OQ7Eq6iyEe74g7mBH/dHvv02y3a1o1LGsqm9P4WoW1VUaSjO5pYDU8VmtUql8ubE0DlBzlN8zteQbNsY+Jey6Ss3NewW4MO6CpS6XDhc8zhVUi4z/dnaf2DMl1NZUDEg4BgUNWimh0aKvmMj4EKF4/07bPF1iUgH0CCIX6G9BBk208mnbnE29f/oJ3A+uf2cq/a6AAAAAElFTkSuQmCC" />
                            <div className="value">
                                <p>+7(72533)5-96-14</p>
                                <p>+7(7252)53-00-17</p>
                            </div>
                        </div>
                        <div className="email">
                            <Image width={30} height={30} alt="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADbklEQVRoge2YTWhcVRiGn+9OZubeEVy0aBHqRoWWgE1d2S7iQsSFKNhMZhlXouIPKNpkJoKZgm1mkoXYWrVRcBNFuBkjCIKgG7Vx0Z1tgyK20p1IBk3BOfN3jptEknNv5idOZgreZ/l9373nfTnnHc5ciIiIiIj4PyNhxeSTJ++VWOw08DBwR38lBfgDI98g5nVVKlyzmwEDbjp7D8IKhgP90dchwu/I0HHlv3l9a9kJGT11y4kHMBxAN07Z5aABkQVgtR+aukN+NcKiXY3Zhcbq9zcao8MfxCrumiCjQKIv+namLnBepRqZ5qdzP9nN0BBvshHmd4FH90xeay5q7TxXWz5zZaeBlgY28cazGWN4B7izZ9JaYDB/Avnq/d458nndajaQAS+TO27XKksFP65lGGM+AkzvpIYhnwzVY4erpeLbtvhUOvtAYNouuOmsBhbjWl65uTy7FuiP50Yx5n1guJeygWsG83y1VPwq0Hkin3KTahLDtCoVtmUy7GdUgIm6Y66441NP2U21NPud2l8+KkIWUD0QXhc4q1KNI2Hik+O5x92EWsUwA8TDxG7DTWftI/IlTV5Qnxd+C7w8k71PNO8Bj+xS/EWNebZWKl61G6mx6bu06CIwsbWuSoVtmjsxAFBBmFPinsHP1+zmRsjP0+G1o2VI83nHvayeBuaB2+1nbQNhRygMD8OMp9Ulb2zymN2sLBX8ZJJDwALtQ+7HdfNQWEjjJ6ZG3MtqBbgQJj6MTndgKwZYTDjVl9f9t8qB58emHkLkAnDYarUOaUK9AbwKDLVafLc7sBUBJmo6eTU05J8Vv1X7y0c2Ql6l05DCVDvxO4nZRgc7YL/gCxzzYsUv3rB7iUxuGKDmzwbuVt7Y5EHtOGfFcKKb9XYb4nb8jTCv9pVPs7BQbznZJqTt6MURCiOFYcZb23fJS+ce3Gnotsz0UffH6g90EdJ2dH3mWmFgBMyKm85+qFz3JB/n14F/Q9rU+jUkeAP+L/TUwAYO8Iyr1GNOOvdSQ7RxjDoH3L0Ha+2JgU0OasyyYzq68O6aXmVgYEQGBk1kYNBEBgZNmIGbfVfRIQJ/2bWAASN83R853aMJagv5tKhzIIE/KoNHytDM2dWAgao/97OY5gjgA+v9kNaGdQMlQ+NYtTT/y6DFRERERETcWvwD4jJBt3P0QcYAAAAASUVORK5CYII=" />
                            <p className="value">INFO@MASLIHAT-SHYMKENT.KZ</p>   
                        </div>
                        <div className="social-network">
                            <Link href={"/"}><a>
                                <Image width={30} height={30} alt="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFc0lEQVRoge2Zy2+UVRiHn/fM9IKAlNIBldaVQJCVobSzKYZLoyaGglHWuDBNXBSmFKRxw86idFrwkgD/AdHQYqKJQA1gSDsFcaOImBihYGDaAcqllM53XhfT6sx02s6caQsLnmSSObf3/H7znes38IxnzAiSS+Wy9t4V4tnNKlIrsBSoAOZOk5YHwDWFPiN6worp7N+x5nK2jbMyUhbuqTTIPoX1zjLdOCfKrls7q85NVXFyI4fOFwTu2zaED6esO3Mo6JfRwYch9q6LT1RpQnELPjm7sLCo+BvQdTOjLzcEuoaHh9+921xzO1O5ydjq0PmCoqKir58WEwAK6wuLijrZ+2thpvKMRgL3bdsTmA/ZUBOY/3B/poJxQ6ss3FMpSCRT2VOCqrVr+puCF5Izxz0Rg+zj6TUBIBjTkp6ZYqSsvXfFkx1S+p3ntxWe31YA309US2Bj4ED3suS8FCPi2c0zpDArPL/WxxqCfbGGYJ+n1E9WVzxfitYUIyqycSYEzgQqWpuc9icnBF7OtwOBmKp2GDHHPcPvvpHCPgCv4HG5UbtSVTYhshnVheltfXFzuLQ1Ug/gEw5P7iRVqz+t+MU8PAwhEo77vE9jDcHBDOWXRz8dC1vOh/yFdjdICJiTVOctn3A1y/5eSk6kG5mftexUrqu1dWNL4uL9vbUquhWhBigfrXNN4KyIHL0ZqjwJfFwW7jkmSAeJA2iupGhNWWYD4Yi6mPD8NhhrCPaVtfYsF+QIwtop2pzGZz+Ibg9eKT3YXe6Lm24czEQbq/7Tn/mIkj1Dam1drCHYF2iPrBVjurMwAfC6eKY7EO6piTUE+6xhC/AoHyH5GREJ9zcFL5S19ixHpSPTBJ4IhVJBOgLhC68M7KjqReRAPlKcjQjE4sPyWeK7HMnFxBgKpWAPA4zgb0Ek48k2G5yNqGrH7T2Vdxfv763NcjhNFGndktbIhjuh1+6AdrpGcTZixBwHUNGtrjHGUGErgKged9bj2tBTewlgdInNCyXxRK0xv7nGcJ8jxfNujMpw2QPS0HIAKXjuumuEfJffaUIsgOfdcx/qrg310f3RI4I4/4r/k4hhrM/5iOT+CxheBRA44xpjDBF7BsCornLW49pQVTYlRMhR1xhjeHA0EZNNrjHy2RDrFracX3AztOYkcDqPOF0DoequkraLJUCdaxz3JwKl/kJvN4Dx9H2gP9cYAjHFVw/gt/FmoMRVT56rljSWhXsqb+6q/gv0HYFYDo0H1Jq6aOPqPxeFe6tEtCEfJfkuv8WCdJQe7C6PNlafVXzVID9O1UigS+KmOtpU+VNpa6TCiB4DivMRkn6xcmGpL266F7VHtkR3rO4F1i9pjWxQYasiNWArEuLlKqJnPTg6EKruAlgU7q0yosfQ1NueC+kXq0Hcb4mPgPYRKdiXOABOTEnbxRK/jTeL6HagyLG/e9HGqufHEulP5B/cjRQDewqI1wfaIp2ietyzvktmzpw+ADs0VO4z3kpF6tCROsR9Yo9yIzmRYkThqsDyvMIn7iXbFNlmjIXhBwAYAzqtLzDl7+RUymQ3oiemsacZRdEfktOpL+iMHptdOXmg+m1yMsVIdHvwisKp2VXkgHCif2f1H8lZ4/YREZoAO2uicseqZ5vTM8cZiYaqfgH9anY0OfFF+n8jMMHOHh18GHoqh5hyJjo4d1emosxHlL3r4iPDw+8JdM2osBxQODViCurYu+pxpvIJz1p3m2tu3xp88AYqnyfiPDEscLB/8MGbk50YstqhXghHVnnQArw9XeqyQeEkYj7qD1X+PFXdnLbawIHuZeL5NqtoLUpF4u2HzHOXmozeB3MNuCaiJ9TYzuj24JXpif2MZzjzL+TD4j4fJ0yfAAAAAElFTkSuQmCC" />
                            </a></Link>
                            <Link href={"/"}><a>
                                <Image width={30} height={30} alt="image" src="data:image/png;base64,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" />
                            </a></Link>
                            <Link href={"/"}><a>
                                <Image width={30} height={30} alt="image" src="data:image/png;base64,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"/ >
                            </a></Link>
                        </div>
                    </div>
                    <div className="search" onClick={() => onModalHandle()}>
                        <Image width={30} height={30} alt="image" src="data:image/png;base64,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" />
                    </div>
                </div>
            </div>
           
           {/* Navbar */}
            <div className="navbar">
                <div className="burger-menu">
                    <div onClick={() => onMenuHandle()}>   
                        <Image width={30} height={30} alt="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAQUlEQVRoge3WIRIAIBACQM////nMmgzOENyNJGiMAQDk1Bl0dyeK3KqqrfNMFXnFAABI8oXSDACAJF8ozQAA4GcLBQIMFrTHesoAAAAASUVORK5CYII=" />
                    </div>
                    
                    <div className="search" onClick={() => onModalHandle()}>
                        <Image width={30} height={30} alt="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge2avU8UQRjG3zFowoef5EwEKxsbtAHUVuy1IVxDAYlRS2PnV6kWdir6D2AiBYUfsURbopJYgWhiQMAYGznJodHws5jVnO/urXfDzO3F7C+5YjaX93mem7vZd2dOJCcnJyeneTE+iwFbROSIiAyISK+IHBSRLhHpiN6yJiIrIjInIq9EZEpEXhhjNnz6CA6wH7gBfKB+PgDXge6sc/wToBO4C3x3CKr5BowBe7LOlQhQBD57CKr5DAxlne8PQAt2VqvxBRgHTgP9QAHYGr0K0bXTwH1gNaXOHaAl67CtwOMqBmeBEaC1znqjwFyVmo/qqeeVaGaTwpaB85uZjaj2haiW5mEmMw3cSzCzBPR51OgHlhN0bvvSqNVIMcHEDNAVQKsrqq0Z9K1VzUAn8dV4KUTYCs0CMK80PwG7Q2lWiusVuezza5yi20P8N30rtOh+bENQyfmgon/rX1ba6yG/WYJtFyuZpYErJtBOfBG7FkpsC/HeeCSIWLqPs8rDAvYhxbvQMSX0hQyaAKANKCkv/a710j6p42r8xBiz7irkijGmLCJP1eUB13ppgfVK/NxVxANTaux8l0gLfFCNX7uKeEBra281kxZ4nxq/dxXxgNbW3momLXCHGpdcRTywqsbbXQv5X94bg/NeXFrgNTXe4SrigZ1qrL3VTFrgj2p8wFXEA1p7ybVQWuA3anzYVcQDWvuda6G0wC/VWDcijeSEGk97VwCOqnZuNaPWsh346qu1TBNKengY9S70bx/nlIdFwOuJSaXYdSU2R+MfD1eUh0shBbuJbwBcCCYY17+qtEvArtCiY0q0HOQ3FNc9RHyL52Zo3WqbeMuE38R7qzQXAN2ABDMwRJwZoBBAqwC8UlobgL41hQV71qOZB3o8ahxKmFmASV8a9ZhpwZ71aMrY3cX2TdRuB66QfNQC8AMo+sxTq7FW7FlPEsvYDbe2Ouq1Ye+z+tbTVKFbgNspxkrAA+AMtlsrANui197o2llggngH9ZsNYDIKmX3oKPgg9vjDNwtECxT2TKupQu8GbhFvTlwoATdRt56mCx2Z6gKuRbNTL4vARVI6KJ+hQ/xtqVfsvnGf2N3FbrH7Y0bsvtiy2OfZaRF5JiIvjTHUULsoIuMiUtnL/xSRYWPMhMcYzQN23dAz/RMYztpbMPLQeej/O3S11ftU1t6CUSX0Yta+gpIQeiVrT8EBTgHvsY3Myaz95OTk5OS48At/iSvMRteG2wAAAABJRU5ErkJggg=="/>
                    </div>
                </div>
                <nav>
                    <Link href={'/'}><a className={router.pathname == "/" ? "active" : ""}>{t("common:header.navbar.first")}</a></Link>
                    <div className="menu">
                        <p>Аппарат</p>
                        <div className="select-down">
                            <Link href={'/apparat'}><a>{t("common:header.navbar.second.first")}</a></Link>
                            <Link href={'/apparat/adep'}><a>{t("common:header.navbar.second.second")}</a></Link>
                            <Link href={'/apparat/apparat-man'}><a>{t("common:header.navbar.second.third")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Регламент</p>
                        <div className="select-down">
                            <Link href={'/reglament'}><a>{t("common:header.navbar.third.first")}</a></Link>
                            <Link href={'/reglament/plan'}><a>{t("common:header.navbar.third.second")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Сессия</p>
                        <div className="select-down">
                            <Link href={'/session'}><a>{t("common:header.navbar.four.first")}</a></Link>
                            <Link href={'/session/sheshym-list'}><a>{t("common:header.navbar.four.second")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>Комиссия</p>
                        <div className="select-down">
                            <Link href={'/comission'}><a>{t("common:header.navbar.five.first")}</a></Link>
                            <Link href={'/comission/com-place'}><a>{t("common:header.navbar.five.second")}</a></Link>
                            <Link href={'/comission/work-plan'}><a>{t("common:header.navbar.five.third")}</a></Link>
                            <Link href={'/comission/todo'}><a>{t("common:header.navbar.five.four")}</a></Link>
                            <Link href={'/comission/success-work'}><a>{t("common:header.navbar.five.five")}</a></Link>
                        </div>
                    </div>
                    <div className="menu">
                        <p>{t("common:header.navbar.six.label")}</p>
                        <div className="select-down">
                            <Link href={'/deputats'}><a>{t("common:header.navbar.six.first")}</a></Link>
                            <Link href={'/deputats/maslihat'}><a>{t("common:header.navbar.six.second")}</a></Link>
                            <Link href={'/deputats/employees'}><a>{t("common:header.navbar.six.third")}</a></Link>
                            <Link href={'/deputats/qabylday'}><a>{t("common:header.navbar.six.four")}</a></Link>
                        </div>
                    </div>
                    <Link href={'/employments'}><a className={router.pathname == "/employments" ? "active" : ""}>{t("common:header.navbar.seven")}</a></Link>
                    <Link href={'/public'}><a className={router.pathname == "/public" ? "active" : ""}>{t("common:header.navbar.eight")}</a></Link>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;