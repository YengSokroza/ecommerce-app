'use client'
import React, { useState } from 'react'
import {ArticleList} from "./text"

type ArticleType = {
	title: string;
	description: string;
};


export default function ArticleComponent() {
    const [article, setArticle] = useState<ArticleType[]>(ArticleList);
    return (
            <article >
                <ul className='list-decimal space-y-8 px-8'>
                    {article.map((item, index) => (
                        <li
                            key={index}
                         >
                            <h1 className='text-lg font-semibold'>{item.title}</h1>
                            <p>{item.description}</p>
                        </li>
                    ))}
                    
                </ul>
            </article>
        


    )
}
