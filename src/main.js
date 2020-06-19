const app = require('./app');

const port = process.env.PORT || 3333;

app.listen(port,
    () => console.log(`🐱‍🚀 Up and runin\' on localhost:${port} 🐱‍💻`));
