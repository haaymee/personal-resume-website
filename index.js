import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __rootDir = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__rootDir, 'public')));

// Home Page
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log("Server is running");
});