import { useEffect, useState } from "react";
import Link from "../src/components/Link";
import Head from "next/head";
import PageTitle from "../src/components/PageTitle";
import FAQScreen from "../src/screens/FAQScreen";

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

export default FAQScreen;

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta
        })

    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq
        },
    };
}

// export default function FAQPage({faq, qualquercoisa}) {
//     console.log(faq);
//     console.log(qualquercoisa);
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    //     fetch(FAQ_API_URL)
    //         .then((respostaDoServidor) => {
    //             return respostaDoServidor.json();
    //         })
    //         .then((resposta) => {
    //             console.log(resposta);
    //             setFaq(resposta);
    //         })
    // }, [])


    // return (
    //     <div>
    //         <PageTitle>
    //             FAQ - Alura Cases Campanha!
    //         </PageTitle>
    //         <h1>FAQ</h1>

    //         <Link href="/">
    //             Voltar para Home!
    //         </Link>
    //         <ul>
    //             {faq.map(({ answer, question }) =>
    //                 <li key={question}>
    //                     <h2>{question}</h2>
    //                     <p>{answer}</p>
    //                 </li>
    //             )}
    //         </ul>
    //     </div>
    // )

// }