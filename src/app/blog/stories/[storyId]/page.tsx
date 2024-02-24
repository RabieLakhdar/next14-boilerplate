export default function stories({ params }: { params: { storyId: string } }) {
    return <h1>blog with story {params.storyId}</h1>
}
