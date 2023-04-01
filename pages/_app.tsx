import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "stores";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      <ToastContainer />
    </PersistGate>
  </ReduxProvider>
}
