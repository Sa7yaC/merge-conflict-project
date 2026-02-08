import express from 'express';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

const app = express()
// app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(express.json({limit: '20kb'}))
app.use(express.urlencoded({ extended: true, limit: '20kb' }))
// app.use(express.static("public"))

//import routes
import checkinRoutes from '../src/routes/checkin.routes.js';
// import adminRoutes from '../src/routes/admin.routes.js';

app.use("/api/v1/checkin", checkinRoutes);
// app.use("/api/v1/admin", adminRoutes);
export { app };