import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // Check if the user is logged in
        router.push('/account')
    }, [])
    return <></>
}
