import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredPosts, postDeleted } from '../Slices/postSlice';
import PostFilters from '../Slices/postSlice';
const  Home = ()=> {
   const { t } = useTranslation();
    const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{t('Home')}</h1> 
      <PostFilters />
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Category: {post.category}</p>
          <p>Date: {new Date(post.date).toLocaleDateString()}</p>
          <button onClick={() => dispatch(postDeleted({ id: post.id }))}>
            Delete Post
          </button>
        </article>
      ))}
    </>
  );
}

export default Home;