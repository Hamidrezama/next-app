export default async function productId({ params }: {
    params: Promise<{ productId: string }>
}) {

    const productId = (await params).productId
    return <>
        <h1>product id is {productId}</h1>
    </>
}