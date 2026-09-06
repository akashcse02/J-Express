const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

app.get('/posts', (req, res) => { 
    res.status(200).json({
        success: true,
        message: 'All posts fetched successfully!',
        data: [
            { id: 1, title: 'First Post', content: 'Hello World' },
            { id: 2, title: 'Second Post', content: 'Learning Express' }
        ]
    });
});

app.get('/posts/:id', (req, res) => { 
    const postId = req.params.id;
    
    res.status(200).json({
        success: true,
        message: `Post ${postId} fetched successfully!`,
        data: { 
            id: postId, 
            title: `Title for post ${postId}`, 
            content: 'Dynamic content here' 
        }
    });
});

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});