import React from 'react'
import './Post.css'
import Tags from '../Tags/Tags';

function Post({ post, onLike, onRemove, onHide, onShow }) {
    const { author } = post;
    const { photo } = post;

    const handleClick = () => {
        onLike(post.id);
    };

    const handleRemove = () => {
        onRemove(post.id);
    };

    const handleHide = () => {
        onHide(post.id);
    };

    const handleShow = () => {
        onShow(post.id);
    };

    if (!post.hidden) {
        return (
            <article>
                <header>
                    <img className="Post-avatar" src={author.avatar} alt={author.name} width="50" height="50" />
                    <h5>{author.name}</h5>
                    <button onClick={handleRemove}>удалить</button>
                    <button onClick={handleHide}>скрыть</button>
                    <div>{post.created}</div>
                    {post.hit && <span>HIT</span>}
                </header>
                <div>
                    {post.content && <div className="Post-content">{post.content}</div>}
                    {photo && <img src={photo.src} alt={photo.alt} className="Post-photo" />}
                </div>
                <footer>
                    <span className="Post-likes" onClick={handleClick}>
                        <img src={post.likedByMe ? 'https://lms.openjs.io/liked.svg' : 'https://lms.openjs.io/unliked.svg'} alt="" width="20" height="20" />
                        <span className="Post-likes-count">{post.likes}</span>
                    </span>
                    {post.tags && <Tags tags={post.tags} />}
                </footer>
            </article>
        )
    }

    return (
        <article>
            <header>
                <img className="Post-avatar" src={author.avatar} alt={author.name} width="50" height="50" />
                <h5>{author.name}</h5>
                <button onClick={handleShow}>показать</button>
            </header>
        </article>
    )
}

export default Post