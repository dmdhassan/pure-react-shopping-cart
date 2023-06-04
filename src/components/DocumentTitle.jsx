import React, { useEffect, useState } from 'react';


const DocumentTitle = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController()
        fetch(`https://www.reddit.com/r/${title}.json`, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setPosts(data.data.children.map(p => p.data)))
            .catch(err => {
                console.log(err.message)
                setError('error while fetching...')
            });

        return () => {
            abortController.abort();
        }
    }, [title, setPosts]);

    useEffect(() => {
        document.title = title;
        document.addEventListener("click", () => {
            console.log("-- you just clicked --")
        });

        return function cleanUp() {
            document.removeEventListener('click', () => {
                console.log("-- click event cleaned --")
            })
        }
    }, []);

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleClick() {
        console.log('you clicked')
    };

    return ( 
       <>
         <form>
            <input type="text" value={title} onChange={handleChange}/>
        </form>

        <div>
            {posts.map(post => <p>{post.selftext}</p>)}
        </div>
       </>
     );
}
 
export default DocumentTitle;