const express = require('express');
const app = express();
app.get('/api/data', (req, res) => {
    res.status(200).json({ message: "Production Ready App on AWS EC2", status: "UP" });
});
app.listen(3000, () => console.log('Server running on port 3000'));
