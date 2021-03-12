import BasicLayout from "../styles/globalstyle";

function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
        <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
