import Image from "next/image";
import Link from "next/link";
import React from 'react';


const Header = () => {
    return (
        <React.Fragment>
            
            {/* Up Header */}
            <div className="up-header">
                <div className="up-header-block">
                    <Link href={'/'}><a>Басты бет</a></Link>
                    <Link href={'/'}><a>Фотогалерея</a></Link>
                    <Link href={'/'}><a>Видеогалерея</a></Link>
                    <Link href={'/'}><a>Азаматтық бюджет</a></Link>
                    <Link href={'/'}><a>Нашар көретіндерге арналған нұсқа</a></Link>
                    <Link href={'/'}><a>Рус</a></Link>
                </div>
            </div>

            {/* Down Header */}
            <div className="down-header">
                <div className="down-header-block">
                    <div className="logo">
                        <Link href={'/'}><a>
                            <Image src={'/icons/logo_2.png'} width={785} height={785} />    
                            <Image src={'/icons/logo.png'} width={785} height={785} />    
                        </a></Link>
                        <h3>Шаян аудандық мәслихаты</h3>
                    </div>
                    <div className="contacts">
                        <div className="phone">
                            <Image width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEwUlEQVRoge2aa2hbZRjH/89J06JdNzeTtM7L5gWnjnmBXIoUsTJB0A+z2Ikwq6JQxWlNQqcfSpdNi3O2TTcvWMTLhiCCG3Ne6ocN2QbONrFzQkUo3hgOm5MWe5vaJO/jh07ZYOl5z3vO2/ZDfh/zPs/z/v85yZvnOSdAiRIlSpRYvJBKUnV3el0BYgsB9wAQzPxKNh7pdlmbFuwZZiZfT7qdmNsAlJ1fiRrNaOhjF7VpQd4wM/mTqXcAPFYk4pS30rjhdHPwjCvKNGHIBga6B7aiuFkAuDI/JV5wLkkvUlfY19V/HxEdlIj/yyjw2pHWyC/OpenB+gr3pr1E9Brk3pyLhIc6HavSiKVh/5RoALDaRs2G6mRqvbokvVhfYUKD3aLMvAu9aa+SIs3IHFohu0UZuMk3xU8r6NGOpWECLlcpTMRba3YP+lVydSL9s6TAJSKf79BYXwlLwwyMqBZn4PFAzzc3q+brQObQ+tFJfRZGo4N817E2LPiIkw0YNOYk322sDRv0uYP6oxXlYq+DfNexNGxGw98BOKFSnMBtv2+OjKrk6kLqlGbiNxVqD2au+O1thTytSBnOXuzZA8DOQMBEvBkbNxbUZOlD7ne4OZgD0UvyZXlfJho5rqhJK9KNhzkefJ/B/VLBTMeUFWlGvtNKkCA2ngJg/TElWlTNxrnYai3NeOgEgJetI7nJ3zNwh6Imrdjupc2J6W0SH20vBPZXJ1PXKOrShv3hIVGfJw8/DGDCIvJSwbyv+tWTlUrKNKE0LZkttcMMbAIgLEJvLXj+OXDd7uEKlX10oDweZmPhT4n5Ras4AtZP5MbeQ4J1jqLSOBKRmQxvB9jy5jsTPeSvSvc42cstlB61nEdiqDywdLqPgbssYxlvmJOhZ5Egq6+CNpwbBrB8R3pZWbk4BmCd5YbMH2aWeB5BczDnxt52ccUwACzflb7KUygcJdAqifAvjULFAyOtt0zPFbSyM+3Le8SjDKwgwR9l4pGTTnW6ZhgAAjvT17JXHAVjpcTW3xsFseGCTykSbASqBjYxURcA39lXmcEfGAa3Zp6rVb7t5KphAPB19V9PREcA1EiEjzKLxmy89qv/87v7gwBeJ1CkSM6fYN5hTi5JIrF2xq4+1w0Ds8+PBcQhAAGJ8BxAexkYInAdgPtldBHwAxG1jERDh+xo02IYAHw9qTUk+DAU72vb4DNj1vjPMsHaDANATfL46gJ7DgPQ2lMTMMPAW5ybacs+XzdpEauXyzoHV+WNQh/AN+reC8ApEMXm+ieCdsMAsLT76xUV5PkETHXzsR+DYtlYKHmhtXnpbydit49Vjp+5W6YNdQMCbym2Nm8N/a+J+r/NifCDxLwNAGverqzYwvxOMAkSmXgkwUwbYD1Pq0P0RbGlBRnZsvHQQXhEkIABDeVzHuadxRYXbEY1W2qHM5VGHYg6IHNjUJ7tf8TCQ8UW5+WUtsLflboNs083ah0VYn7XjIWfAFHRM2JRGAYAJNjwV6WaQGgHcLXNbAbQbkZDHXOZBRaT4f/oTXv904UmgJ4EELSMJ/wE0DNmNNQnU37xGT6Hs0PIvWDcCcIaEC0DCy9Ap4n5WzaM/eb41AEk6vMLrbVEiRIlSpQoYc2/F6B+67fMgr0AAAAASUVORK5CYII=" />
                            <div className="value">
                                <p>+7(72533)5-96-14</p>
                                <p>+7(7252)53-00-17</p>
                            </div>
                        </div>
                        <div className="email">
                            <Image width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABuUlEQVRIie2Rv2tTURTHP+e+oEgHBxNLIVb8BypK34uToyIUVwdxK8lQSEzaUhQsAScpeS7+gCo4i2vBQXCszbMU6uDUqc1g+2KLlQ4NyT0O8ZX4tLSxAQf7nc6795zP59774Dj/OhIVZ/2FaxaZFeT8EYGrWBndmHDfAZhoQ9XcPCocQGFQjV6NvvcE4Xc3ryI5YPuv6SJbKpILi+703lK8J/l4cQBtPRLkTpfwN47jjH3JXw5/WY6KlB+8VdWn9fHMHECyUh1BeHLws+mKFXJfi5n37QMGt0W5G5Y8Ny7Qn+Vc0zFjW4Xh1bQ/f6qhzhQi9xROxMhN4Jlpnby/Pnlxp3+mesEaeY5wHSAseQId/6AjI4mW/ZyqVKdq6VpjYzxTxlgX+NDRM29acikseYX1nc3dlB8UrMOnCL7fE2l8E1hUMbl6cXiJsprk6eAWQP2b95qy2DP+R8/AC9Ch+GB0g4MEAFbgZTNhJzfzV7YB+meW+2yi8QDVCcD501AkSOwD7YxRyDpNcyNVCabbxt2HKOlDzB5KEOUcwqsu+tun63bg/xbUeshd+10gku2RZA3I9oBznB7lB7xZlBzX794RAAAAAElFTkSuQmCC" />
                            <p className="value">INFO@MASLIHAT-SHYMKENT.KZ</p>   
                        </div>
                        <div className="social-network">
                            <Link href={"/"}><a>
                                <Image width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFc0lEQVRoge2Zy2+UVRiHn/fM9IKAlNIBldaVQJCVobSzKYZLoyaGglHWuDBNXBSmFKRxw86idFrwkgD/AdHQYqKJQA1gSDsFcaOImBihYGDaAcqllM53XhfT6sx02s6caQsLnmSSObf3/H7znes38IxnzAiSS+Wy9t4V4tnNKlIrsBSoAOZOk5YHwDWFPiN6worp7N+x5nK2jbMyUhbuqTTIPoX1zjLdOCfKrls7q85NVXFyI4fOFwTu2zaED6esO3Mo6JfRwYch9q6LT1RpQnELPjm7sLCo+BvQdTOjLzcEuoaHh9+921xzO1O5ydjq0PmCoqKir58WEwAK6wuLijrZ+2thpvKMRgL3bdsTmA/ZUBOY/3B/poJxQ6ss3FMpSCRT2VOCqrVr+puCF5Izxz0Rg+zj6TUBIBjTkp6ZYqSsvXfFkx1S+p3ntxWe31YA309US2Bj4ED3suS8FCPi2c0zpDArPL/WxxqCfbGGYJ+n1E9WVzxfitYUIyqycSYEzgQqWpuc9icnBF7OtwOBmKp2GDHHPcPvvpHCPgCv4HG5UbtSVTYhshnVheltfXFzuLQ1Ug/gEw5P7iRVqz+t+MU8PAwhEo77vE9jDcHBDOWXRz8dC1vOh/yFdjdICJiTVOctn3A1y/5eSk6kG5mftexUrqu1dWNL4uL9vbUquhWhBigfrXNN4KyIHL0ZqjwJfFwW7jkmSAeJA2iupGhNWWYD4Yi6mPD8NhhrCPaVtfYsF+QIwtop2pzGZz+Ibg9eKT3YXe6Lm24czEQbq/7Tn/mIkj1Dam1drCHYF2iPrBVjurMwAfC6eKY7EO6piTUE+6xhC/AoHyH5GREJ9zcFL5S19ixHpSPTBJ4IhVJBOgLhC68M7KjqReRAPlKcjQjE4sPyWeK7HMnFxBgKpWAPA4zgb0Ek48k2G5yNqGrH7T2Vdxfv763NcjhNFGndktbIhjuh1+6AdrpGcTZixBwHUNGtrjHGUGErgKged9bj2tBTewlgdInNCyXxRK0xv7nGcJ8jxfNujMpw2QPS0HIAKXjuumuEfJffaUIsgOfdcx/qrg310f3RI4I4/4r/k4hhrM/5iOT+CxheBRA44xpjDBF7BsCornLW49pQVTYlRMhR1xhjeHA0EZNNrjHy2RDrFracX3AztOYkcDqPOF0DoequkraLJUCdaxz3JwKl/kJvN4Dx9H2gP9cYAjHFVw/gt/FmoMRVT56rljSWhXsqb+6q/gv0HYFYDo0H1Jq6aOPqPxeFe6tEtCEfJfkuv8WCdJQe7C6PNlafVXzVID9O1UigS+KmOtpU+VNpa6TCiB4DivMRkn6xcmGpL266F7VHtkR3rO4F1i9pjWxQYasiNWArEuLlKqJnPTg6EKruAlgU7q0yosfQ1NueC+kXq0Hcb4mPgPYRKdiXOABOTEnbxRK/jTeL6HagyLG/e9HGqufHEulP5B/cjRQDewqI1wfaIp2ietyzvktmzpw+ADs0VO4z3kpF6tCROsR9Yo9yIzmRYkThqsDyvMIn7iXbFNlmjIXhBwAYAzqtLzDl7+RUymQ3oiemsacZRdEfktOpL+iMHptdOXmg+m1yMsVIdHvwisKp2VXkgHCif2f1H8lZ4/YREZoAO2uicseqZ5vTM8cZiYaqfgH9anY0OfFF+n8jMMHOHh18GHoqh5hyJjo4d1emosxHlL3r4iPDw+8JdM2osBxQODViCurYu+pxpvIJz1p3m2tu3xp88AYqnyfiPDEscLB/8MGbk50YstqhXghHVnnQArw9XeqyQeEkYj7qD1X+PFXdnLbawIHuZeL5NqtoLUpF4u2HzHOXmozeB3MNuCaiJ9TYzuj24JXpif2MZzjzL+TD4j4fJ0yfAAAAAElFTkSuQmCC" />
                            </a></Link>
                            <Link href={"/"}><a>
                                <Image width={30} height={30} src="https://img.icons8.com/ios-glyphs/60/000000/facebook-new.png"/>
                            </a></Link>
                            <Link href={"/"}><a>
                                <Image width={30} height={30} src="https://img.icons8.com/material-rounded/48/000000/whatsapp--v1.png"/>
                            </a></Link>
                        </div>
                    </div>
                    <div className="search">
                        <Link href={'/'}><a>
                            <Image src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png" width={30} height={30} />
                        </a></Link>
                    </div>
                </div>
            </div>
           
           {/* Navbar */}
            <div className="navbar">
                <nav>
                    <Link href={'/'}><a>Басты бет</a></Link>
                    <Link href={'/'}><a>Жаңалықтар</a></Link>
                    <Link href={'/'}><a>Қызметі</a></Link>
                    <Link href={'/'}><a>Мәслихат</a></Link>
                    <Link href={'/'}><a>Шешім</a></Link>
                    <Link href={'/'}><a>Құрметті азаматтар</a></Link>
                    <Link href={'/'}><a>Қоғамдық кеңес</a></Link>
                    <Link href={'/'}><a>Жастар</a></Link>
                    <Link href={'/'}><a>Байланыс</a></Link>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;