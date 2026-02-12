"use client"
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname()
    console.log(pathname.split("/"));

    return (
        <div>
            page not found
        </div>
    )
}