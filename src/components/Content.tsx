import React from "react";

const Content = () => {

    // const buttons = ['posts', 'comments', 'albums', 'users']
    // const [title, setTitle] = React.useState<string>('')
    // const [posts, setPosts] = React.useState<any>([])
    // const [type, setType] = React.useState<any>('posts')
    // const [btnGoToTop, setBtnGoToTop] = React.useState<boolean>(false)
    // const [width, setWidth] = React.useState<number>(window.innerWidth)
    // const [countdown, setCountdown] = React.useState<number>(180)

    // React.useEffect(() => {
    //     const timerId = setInterval (() => {
    //         setCountdown(prevState => prevState - 1)
    //         console.log('Countdown...');
    //     }, 1000)

    //     return () => clearInterval(timerId);
    // },[])

    // React.useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     .then(res => res.json())
    //     .then(posts =>{
    //         setPosts(posts);
    //     })
    // }, [type])

    // React.useEffect(() => {
    //     document.title = title;
    // })

    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         setBtnGoToTop(window.scrollY >= 200)
    //     } 

    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         window.removeEventListener('resize', handleResize);
    //     }
    // },[])

    return (
        <div>
            {/* <h1 >{countdown}</h1> */}
            {/* <h1 >{width}</h1>
            {buttons.map(item => <button style={type === item ? {color: '#fff', backgroundColor: '#333',} : {}} onClick={() => setType(item)} key={item}>{item}</button>)}
            <input onChange={e => setTitle(e.target.value)}/>
            <ul>
                {posts.map((item: any) => <li key={item.id}>{item.title || item.name}</li>)}
            </ul>
            {btnGoToTop && 
            <button style={{position:'fixed', bottom: '20px', right: '20px'}}>
                Go to top   
            </button>} */}
            
        </div>
    )
}

export default Content;