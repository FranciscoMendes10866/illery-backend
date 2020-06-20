import 'dotenv/config'

import app from './app'

const port = process.env.PORT || 3003;

app.listen(port,
    () => console.log(`🐱‍🚀 Up and runin\' on localhost:${port} 🐱‍💻`));
