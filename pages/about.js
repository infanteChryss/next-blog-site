import Head from 'next/head'
import Link from 'next/link'
import AboutStyles from '../styles/About.module.css'

const about = () => {
    return(
        <section className={AboutStyles.about_me}>
            <Head> 
                <title>About Me</title>
            </Head>
            <div className={"content"}>
                <h3>About Me</h3>
                <p>
                    Lorem ipsum keme keme keme 48 years kasi intonses effem pamenthol shogal ng at ang pinkalou wasok ang ang jowabelles bakit bongga intonses bongga sa wasok shongaers mabaho at ang sa paminta jongoloids chopopo antibiotic keme keme na at bakit makyonget chapter krang-krang ang katol pamenthol jowa kabog buya ng mahogany ganda lang ng klapeypey-klapeypey guash Gino shonget matod krung-krung majubis urky shonga ano urky nang na bella na intonses ng nang lulu katagalugan bella warla na ang warla balaj at ang shongaers at ang kemerloo 48 years sa jowabella majonders jowabelles thunder ang shogal fayatollah kumenis 48 years bakit bella tamalis warla fayatollah kumenis shontis ang jupang-pang keme buya nang effem ang at nang at at nang bakit at sangkatuts.
                </p>
                <Link href="/contact-me">
                    <a  className={[AboutStyles.btn, "elevate"].join(" ")}>Contact Me</a>
                </Link>
            </div>
        </section>
    )
}

export default about
