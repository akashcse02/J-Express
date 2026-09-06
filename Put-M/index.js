const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.put('/posts/:id', (req, res) => { 
    const postId = req.params.id;
    const { title, content } = req.body; 

    if (!title && !content) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide at least one field to update.' 
        });
    }

    const updatedPost = {
        id: postId,
        title: title || 'Original Title', 
        content: content || 'Original Content',
        updatedAt: new Date()
    };

    res.status(200).json({ 
        success: true,
        message: 'Post updated successfully!',
        data: updatedPost
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});