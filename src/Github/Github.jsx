import React, { useEffect, useState } from 'react'
import './github.css'
import { useSelector } from 'react-redux'

function Github() {
    const theme = useSelector((state) => state.theme.mode);
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
        <div className={`bg-${theme === "dark" ? "light" : "dark"}`}>
            <div className={`github-card bg-${theme === "dark" ? "light" : "dark"}`}>
                Github followers: {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={'300px'} />
            </div>
        </div>
        // <div>github page</div>
    )
}

export default Github
