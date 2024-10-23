import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
mongoose.connect("mongodb+srv://manan-2003:qiRO0yjD686sscII@cluster0.qmmba.mongodb.net/demodb?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected")).catch(err => console.log(err));

// mongoose schema for carrer page
const submissionshcema = new mongoose.Schema({
    name: String,
    email: String,
    resume: String,
});
const Submission = mongoose.model('Submission', submissionshcema);

// mongoose schema for apply job page
const submissionjobshcema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    resume: String,
});
const JobSubmission = mongoose.model('JobSubmission', submissionjobshcema);

// Multer configuration for file uploads for carrer page
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Multer configuration for file uploads for apply job page
const jobresumestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const resumeupload = multer({ jobresumestorage });

// Route to handle form submissions of carrer page
app.post('/submit', upload.single('resume'), async (req, res) => {
    try {
        const { name, email } = req.body;
        const resume = req.file ? req.file.filename : null;

        // Create a new submission
        const submission = new Submission({ name, email, resume });
        await submission.save();

        res.status(200).json({ message: 'Submission successful!' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting data' });
    }
});

// route to handle form submissions of apply job page
app.post('/jobsubmit', resumeupload.single('resume'), async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const resume = req.file ? req.file.filename : null;

        // Create a new submission
        const jobsubmission = new JobSubmission({ name, email, role, resume });
        await jobsubmission.save();

        res.status(200).json({ message: 'Submission successful!!' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting data' });
    }
});

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});