const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.delete('/posts/:id', (req, res) => { 
    const postId = req.params.id;

    if (!postId) {
        return res.status(400).json({
            success: false,
            message: 'Post ID is required'
        });
    }

    res.status(200).json({ 
        success: true,
        message: `Post with ID ${postId} has been deleted successfully!`
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});