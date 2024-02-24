export default function about({ params }:
    {
        params: { slug: string[] }
    }) {
    if (params.slug?.length === 2) {
        return (
            <h1>{`view docs with param1: ${params.slug[0]} and param2: ${params.slug[1]}`}</h1>
        )
    } else if (params.slug?.length === 1) {
        return (
            <h1>{`view docs with only param: ${params.slug[0]}`}</h1>
        )
    }

    return <h1>Docs page, example of segments, with 1, 2 or no param of url</h1>
}
