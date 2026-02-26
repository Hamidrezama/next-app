"use client"

import { useRouter } from "next/navigation"


export default function orderPage() {

    const router = useRouter()
    const orderhandeler = () => {
        router.push("/")
        // router.replace("/")
        // router.back()
        // router.forward()
        // redirect("/")
    }

    return (
        <div>
            <div>ordering page</div>
            <button className="border px-2 m-2 rounded-md cursor-pointer" onClick={orderhandeler}>order</button>
        </div>
    )
}