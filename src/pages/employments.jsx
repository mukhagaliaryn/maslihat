import React from 'react';
import Layout from '../layouts';
import Image from 'next/image';
import Link from 'next/link';

const Employments = () => {
    return (
        <Layout title={'Құрметті азаматтар'}>
            <div className="employers">
                <div className="title">
                    <h1>Құрметті азаматтар</h1>
                </div>
                <div className="content">
                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>

                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>

                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>


                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>

                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>

                    <div className="emp-box">
                        <div className="image">
                            <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} />
                        </div>
                        <div className="rating">
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                            <Image src="https://img.icons8.com/fluency/48/000000/star.png" width={24} height={24} />
                        </div>
                        <h4>Жорабаев Жамалбек Асанұлы</h4>

                        <Link href={'/'}><a>Сұрақ қою</a></Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Employments;