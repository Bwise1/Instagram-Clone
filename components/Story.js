function Story({img, username}) {
    return (
        <div className="rounded-full">
            <img src={img} alt="" />
            <p>{username}</p>
        </div>
    )
}

export default Story
