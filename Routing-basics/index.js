const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.post('/posts', (req, res) => { 
    const { title, content, author } = req.body; 

    if (!title || !content) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide both title and content.' 
        });
    }

    const newPost = {
        id: Math.floor(Math.random() * 1000),
        title: title,
        content: content,
        author: author || 'Anonymous',
        createdAt: new Date()
    };

    res.status(201).json({ 
        success: true,
        message: 'Post created successfully!',
        data: newPost
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});