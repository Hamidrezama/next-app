import Link from "next/link";

type articleProps = {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang: string; name: string }>
}

export default async function newArticles({ params, searchParams }: articleProps) {

    const { articleId } = await params
    const { lang = "en" } = await searchParams
    const { name } = await searchParams
    return (
        <div>
            <h1>

                articles {articleId}
            </h1>
            <h2>
                article language is {lang}
            </h2>
            <h2>
                name is {name}
            </h2>
            <div className="flex flex-col">
                <Link href={`/articles/${articleId}?lang=en`}>english</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>french</Link>
                <Link href={`/articles/${articleId}?lang=es`}>espain</Link>
            </div>
        </div>
    )
}