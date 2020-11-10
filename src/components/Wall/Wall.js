import React, { useState } from 'react';
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';

function Wall() {
    const [posts, setPosts] = useState([
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: 'Ну как, вы справились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            hidden: true,
            created: 1603774800,
            tags: ['#deadline', '#homework'],
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: null,
            photo: {
                url: 'https://lms.openjs.io/openjs.jpg',
                alt: 'openjs logo'
            },
            hit: true,
            likes: 10,
            likedByMe: true,
            hidden: false,
            created: 1603501200,
        },
    ]);

    const handlePostLike = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            const likedByMe = !o.likedByMe;
            const likes = likedByMe ? o.likes + 1 : o.likes - 1;
            return { ...o, likedByMe, likes };
        }));
    };

    const handlePostRemove = (id) => {
        setPosts((prevState) => prevState.filter(o => o.id !== id));
    };

    const handlePostHide = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            const hidden = !o.hidden;
            return { ...o, hidden };
        }));
    };


    const handlePostShow = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            const hidden = !o.hidden;
            return { ...o, hidden };
        }));
    };

    const handleSave = (post) => {
        setPosts((prevState) => [{...post}, ...prevState]);
    };

    return (
        <>
            <PostForm onSave={handleSave} />
            <div>
                {posts.map(o => <Post
                    key={o.id}
                    post={o}
                    onLike={handlePostLike}
                    onRemove={handlePostRemove}
                    onHide={handlePostHide}
                    onShow={handlePostShow} />)}
            </div>
        </>
    )
}

export default Wall;