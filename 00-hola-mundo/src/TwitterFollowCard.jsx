import { useState } from "react"

export function TwitterFollowCard({ userName = 'unknown', children, initialIsFollowing })
{
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => setIsFollowing(!isFollowing)


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    alt="El avatar de midudev"
                    src={`https://unavatar.io/${userName}`}
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}