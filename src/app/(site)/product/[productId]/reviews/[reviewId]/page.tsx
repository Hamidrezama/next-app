export default async function reviewId({ params }:
    {
        params: Promise<{ productId: string, reviewId: string }>
    }
) {
    const { productId, reviewId } = await params

    return <>
        product is {productId} and review is {reviewId}
    </>
}