import React from "react";

const lesson = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'React JS'
    }
]

const ChatApp = () => {
    const [lessonId, setLessonId] = React.useState<number>(1)

    React.useEffect(() => {

        const handleComment = (e: any) => {
            console.log(e.detail    );
            
        }
            

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
           window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    })

    return (
        <div>
            <ul>
            {
                lesson.map((item) => {
                    return <li key={item.id} 
                        style={{
                            color: lessonId === item.id ? 'red' : '#333',
                            cursor: 'pointer'
                        }}
                        onClick={() => {setLessonId(item.id)}}
                        >
                            {item.name}
                        </li>
                })
            }
            </ul>
        </div>
    )
}

export default ChatApp;