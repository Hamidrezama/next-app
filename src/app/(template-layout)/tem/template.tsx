'use client'

import Link from "next/link";
import { ReactNode, useState } from "react";

export default function layLayout({ children }: { children: ReactNode }) {
    const [input, setInput] = useState("")
    return (
        <div>
            <h1>test template</h1>
            <div>
                <input value={input} onChange={(e) => { setInput(e.target.value) }} className="border p-2 rounded-md" type="text" />
            </div>
            <div>
            <div className="flex flex-col m-2 gap-2">
                <Link href={"/tem"}>tem</Link>
                <Link href={"/tem/templatetest1"}>templatetest1</Link>
                <Link href={"/tem/templatetest2"}>templatetest2</Link>
            </div>

                {children}
            </div>
        </div>
    )
}