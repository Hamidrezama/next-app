"use client"
import { ReactNode, useState } from "react";

export default function nestedLayout({ children }: { children: ReactNode }) {
    const [input, setInput] = useState("")
    return (
        <div>
            <div>


                <div className="border m-2 p-2 rounded-md">
                    <h1>children</h1>
                    <div>
                        <input value={input} onChange={(e) => { setInput(e.target.value) }} className="border p-2 rounded-md" type="text" />
                    </div>
                </div>


                {children}
            </div>
        </div>
    )
}