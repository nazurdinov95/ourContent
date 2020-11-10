import React, { useState } from 'react';

export default function PostForm({ onSave }) {
    const [post, setPost] = useState({
        id: Date.now(),
        author: {
            avatar: 'https://lms.openjs.io/logo_js.svg',
            name: 'OpenJS'
        },
        content: '',
        photo: null,
        hit: false,
        likes: 0,
        likedByMe: false,
        hidden: false,
        created: 1603774800,
        tags: null,
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        post.id = Date.now();
        if (post.tags) {
            post.tags = post.tags.filter(tg => !!tg);
        }
        
        const {photo} = post;
        if(photo && !photo.url) {
            post.photo = null;
        }
        
        onSave(post);
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        if (name === 'tags') {
            const parsed = value.trim() ? value.replace('#', '').split(' ') : null;
            setPost((prevState) => ({ ...prevState, [name]: parsed }));
            return;
        }

        if (name === 'photo') {
            setPost((prevState) => ({ ...prevState, [name]: {url: value.trim(), alt: '' }}));
            return;
        }

        if (name === 'alt') {
            const {photo} = post;
            setPost((prevState) => ({ ...prevState, photo: {url:photo?.url, [name]: value.trim() }}));
            return;
        }

        setPost((prevState) => ({ ...prevState, [name]: value }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <textarea name="content" placeholder="content" value={post.content} onChange={handleChange}></textarea>
            <input name="tags" placeholder="tags" value={post.tags?.join(' ') || ''} onChange={handleChange}></input>
            <input name="photo" placeholder="photo" value={post.photo?.url || ''} onChange={handleChange}></input>
            <input name="alt" placeholder="alt" value={post.photo?.alt || ''} onChange={handleChange}></input>
            <button>Ok</button>
        </form>
    )
};