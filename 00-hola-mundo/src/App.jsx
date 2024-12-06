import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdezs',
        isFollowing: false
    }
]

export function App()
{
    /*const formattedUsername = <span>@midudev</span>
    const addAt = (userName) => `@${userName}`
    const [name, setName] = useState('midudev')*/
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) =>
                (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>


    )
}