import { Router } from 'express';
import { PostService } from '../services/postService';

const router = Router();
const postService = new PostService();

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = await postService.getPostById(id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const { title, content, published, authorId } = req.body;
    
    if (!title || !authorId) {
      return res.status(400).json({ error: 'Title and authorId are required' });
    }
    
    const newPost = await postService.createPost({
      title,
      content,
      published: published || false,
      authorId: parseInt(authorId)
    });
    
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;