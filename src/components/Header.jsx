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
                                <Image width={30} height={30} src="data:image/png;base64,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" />
                            </a></Link>
                            <Link href={"/"}><a>
                                <Image width={30} height={30} src="data:image/png;base64,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"/ >
                            </a></Link>
                        </div>
                    </div>
                    <div className="search">
                        <Link href={'/'}><a>
                            <Image width={30} height={30} src="data:image/png;base64,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" />
                        </a></Link>
                    </div>
                </div>
            </div>
           
           {/* Navbar */}
            <div className="navbar">
                <nav>
                    <Link href={'/'}><a>Басты бет</a></Link>
                    <Link href={'/news'}><a>Жаңалықтар</a></Link>
                    <Link href={'/'}><a>Қызметі</a></Link>
                    <Link href={'/'}><a>Мәслихат</a></Link>
                    <Link href={'/'}><a>Шешім</a></Link>
                    <Link href={'/employments'}><a>Құрметті азаматтар</a></Link>
                    <Link href={'/'}><a>Қоғамдық кеңес</a></Link>
                    <Link href={'/'}><a>Жастар</a></Link>
                    <Link href={'/contact'}><a>Байланыс</a></Link>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;