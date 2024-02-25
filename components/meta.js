import Head from "next/head"
import {useRouter} from "next/router"
import { siteMeta } from "/lib/constans"
const{siteTitle,siteDesc,siteUrl,siteLocale,siteType}=siteMeta


export default function Meta({pageTitle,pageDesc}){
    const desc = pageDesc ?? siteDesc

    // ページのURL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    return(
    <Head>
        <title>{pageTitle}|{siteTitle}</title>
  
        <meta property="og:title" content={`${pageTitle}|${siteTitle}`} />
        <meta property="og:description" content={desc} />
        <link rel="canonical" href={url}/>
        <link property="og:url" content={url}/>
    </Head>
    )
}