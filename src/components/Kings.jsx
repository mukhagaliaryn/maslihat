import React from 'react';
import Image from 'next/image';

const President = () => {
    return (
        <div className="presidents">
            <div className="box">
                <div className="image">
                    <Image src={'/icons/president.jpg'} width={300} height={400} alt="image"/>
                    <h4>Нұрсұлтан Әбішұлы Назарбаев</h4>
                    <small>Қазақстан Республикасының Тұңғыш Президенті - Елбасы</small>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <Image src={'/icons/tokaev.jpg'} width={300} height={400} alt="image"/>
                    <h4>Қасым-Жомарт Кемелұлы Тоқаев</h4>
                    <small>Қазақстан Республикасының Президенті</small>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <Image src={'/icons/narimbetov4.jpg'} width={300} height={400} alt="image"/>
                    <h4>Нарымбетов Бахадыр Мәдәліұлы</h4>
                    <small>Шымкент қаласы мәслихатының хатшысы</small>
                </div>
            </div>
        </div>
    )
}

export default President;