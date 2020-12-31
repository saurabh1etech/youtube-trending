const app = require('./middleware');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

//Server Code
let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Node app is running at ${process.env.SERVER_URL}:${port}`);
})