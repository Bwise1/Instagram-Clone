import Stories from "./Stories"
import Posts from "./Posts"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Left part */}
            <section className="col-span-2">
                {/* stories */}
                <Stories />
                <Posts />
            </section>
            
            {/* Right part */}
            <section>
                {/* Mini Profile */}
                {/* Left part */}
            </section>
        </main>
    )
}

export default Feed
