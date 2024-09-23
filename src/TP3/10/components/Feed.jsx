import "../main.css"
import Post from "./Post"

const Feed = () => {
    const commentsOne = [{
        author: "Luiz",
        comment: "Nice"
    }]

    const commentsTwo = [{
        author: "Marcos",
        comment: "Legal"
    }]

    const commentsThree = [{
        author: "Joao",
        comment: "Eita"
    }, 
    {
        author: "Joiej",
        comment: "Lá"
    }
    ]

    return (
        <div id="feed">
            <h3 className="section-title">Feed</h3>
            < Post author="Lucas" description="Lorem ipsum" postTitle="Title" shares={1} likes={1} date="2024-09-18" comments={commentsOne}/>
            < Post author="Ash" description="Lorem ipsum" postTitle="Title" shares={12} likes={3} date="2024-09-18" comments={commentsTwo}/>
            < Post author="John" description="Lorem ipsum" postTitle="Title" shares={13} likes={5} date="2024-09-18" comments={commentsThree}/>
        </div>
    )
}

export default Feed;