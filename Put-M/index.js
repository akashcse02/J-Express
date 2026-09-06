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
            message: 'Please provide title or content to update.' 
        });
    }

    res.status(200).json({ 
        success: true,
        message: `Post ${postId} updated successfully!`,
        data: {
            id: postId,
            title: title || 'Previous Title',
            content: content || 'Previous Content'
        }
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});