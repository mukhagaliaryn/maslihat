import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="copy">
                <p>{t("common:footer.copy")}</p>
            </div>
            <Link href={"/"}><a>{t("common:footer.old")}</a></Link>
        </div>
    )
}

export default Footer;