import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    { id: '1', title: 'First Post', content: 'Hello!', category: 'tech', date: '2023-01-01' },
    { id: '2', title: 'Second Post', content: 'More text', category: 'business', date: '2023-01-15' },
  ],
  filters: {
    category: '',
    search: '',
    sortBy: 'newest',
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state?.posts.push(action.payload);
      },
      prepare(title, content, category) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            category,
            date: new Date().toISOString(),
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content, category } = action.payload;
      const existingPost = state?.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
        existingPost.category = category;
      }
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      state.posts = state?.posts.filter(post => post.id !== id);
    },
    filterByCategory(state, action) {
      state.filters.category = action.payload;
    },
    filterBySearch(state, action) {
      state.filters.search = action.payload;
    },
    sortPosts(state, action) {
      state.filters.sortBy = action.payload;
    },
  },
});

// Selectors
export const selectAllPosts = state => state.posts.posts;
export const selectFilters = state => state.posts.filters;

export const selectFilteredPosts = state => {
  const { posts } = state.posts;
  const { category, search, sortBy } = state.posts.filters;

  return posts
    .filter(post => {
      const matchesCategory = category ? post.category === category : true;
      const matchesSearch = search
        ? post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
};

export const {
  postAdded,
  postUpdated,
  postDeleted,
  filterByCategory,
  filterBySearch,
  sortPosts,
} = postsSlice.actions;

export default postsSlice.reducer;