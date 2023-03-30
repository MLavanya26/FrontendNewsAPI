import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            try{
                const response = await axios.get(`http://localhost:5000/api/user`)
                console.log(response.data)
                setArticles(response.data.articles)
            }
            catch(e){
                console.log(e)
            }
        }
        // http://localhost:5000/api/user
        getArticles()
    }, [])
    return (
        <div>
            {articles.map((article,index) => {
                return(
                    <NewsItem key={index}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList