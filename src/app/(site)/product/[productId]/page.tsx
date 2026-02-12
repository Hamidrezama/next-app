import { Metadata } from "next"

type props = {
    params: Promise<{ productId: string }>
}


export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
    const id = (await params).productId
    return {
        title: `product ${id}`
    }
}
export default async function productId({ params }: props) {

    const productId = (await params).productId
    return <>
        <h1>product id is {productId}</h1>
    </>
}