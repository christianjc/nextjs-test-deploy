import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthState } from '@/features/auth/AuthState'

import { Provider } from 'react-redux'
import { store } from '../store/store'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log('App Component')
    }, [])
    return (
        <Provider store={store}>
            <AuthState>
                <Component {...pageProps} />
            </AuthState>
        </Provider>
    )
}
