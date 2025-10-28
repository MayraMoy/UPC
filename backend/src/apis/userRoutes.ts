import { Router } from 'express';
import { UserService } from '../services/userService';
import { PostService } from '../services/postService';

const router = Router();
const userService = new UserService();
const postService = new PostService();

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    const newUser = await userService.createUser({ email, name });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { email, name } = req.body;
    
    const existingUser = await userService.getUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const updatedUser = await userService.updateUser(id, { email, name });
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const existingUser = await userService.getUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    await userService.deleteUser(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users/:id/posts
router.get('/:id/posts', async (req, res) => {
  try {
    const authorId = parseInt(req.params.id);
    const posts = await postService.getPostsByAuthor(authorId);
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;