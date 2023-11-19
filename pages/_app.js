import GlobalStyle from "../src/theme/GlobalStyle";

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App;