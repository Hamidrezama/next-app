import { notFound } from "next/navigation"

export default async function docs({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params
    if (slug && parseInt(slug[0]) > 1000) {
        notFound()
    }
    return <>
        <h1>{slug}</h1>
    </>
}