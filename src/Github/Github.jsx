import React, { useEffect, useState } from 'react'

import './github.css'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hitpatel852003')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    return (
        <div className="github-card">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={'300px'}/>
        </div>
        // <div>github page</div>
    )
}

export default Github
