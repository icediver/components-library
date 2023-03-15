import Layout from "@/app/components/layout/Layout";
import type {AppProps} from 'next/app';
import './globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp
