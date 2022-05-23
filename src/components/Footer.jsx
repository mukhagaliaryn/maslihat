import Link from 'next/link';

const Footer = () => {
    return (
        <div className="footer">
            <div className="copy">
                <p>© 2021 Түркістан облыстық мәслихаты</p>
            </div>
            <Link href={"/"}><a>Сайттың ескі нұсқасына өтіңіз</a></Link>
        </div>
    )
}

export default Footer;