import express from 'express';
import cors from 'cors';

import config from './config.js';
import userRoute from './routes/userRoute.js';
import user_roleRoute from './routes/user_roleRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
//user
app.use('/api', userRoute);
app.use('/api/newUser', userRoute);
app.use('/api/user/:id', userRoute);
app.use('/api/updateUser/:id', userRoute);
app.use('/api/delateUser/:id', userRoute);

//user_role
app.use('/api', user_roleRoute);
app.use('/api/newUser_role', user_roleRoute);
app.use('/api/user_role/:id', user_roleRoute);
app.use('/api/updateUser_role/:id', user_roleRoute);
app.use('/api/delateUser_role/:id', user_roleRoute);


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

