const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.post('/posts', (req, res) => { 
    const { title, content } = req.body; 

    if (!title || !content) {
        return res.status(400).json({ 
            success: false, 
            message: 'Title and content are required!' 
        });
    }

    res.status(201).json({ 
        success: true,
        message: 'Post created successfully!',
        data: {
            id: Math.floor(Math.random() * 1000),
            title: title,
            content: content
        }
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});