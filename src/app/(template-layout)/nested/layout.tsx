"use client"
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function nestedLayout({ children }: { children: ReactNode }) {
    const [input, setInput] = useState("")
    return (
        <div>
            <div>


                <div className="border m-2 p-2 rounded-md">
                    <h1>parent</h1>
                    <div>
                        <input value={input} onChange={(e) => { setInput(e.target.value) }} className="border p-2 rounded-md" type="text" />
                    </div>
                </div>


                {children}

                <div className="flex flex-col m-2 gap-2 border  p-2 w-fit">
                    <Link href={"/nested/temp"}>nested temp</Link>
                    <Link href={"/nested/temp/nestedtest1"}>nestedtest1</Link>
                    <Link href={"/nested/temp/nestedtest2"}>nestedtest2</Link>
                    <Link href={"/nested/temp/nestedtest3"}>nestedtest3</Link>
                    <Link href={"/nested/temp/nestedtest4"}>nestedtest4</Link>
                </div>
            </div>
        </div>
    )
}