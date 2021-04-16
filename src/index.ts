import app from './app';
import * as dotenv from 'dotenv';
import database from './database';

dotenv.config();
const PORT = process.env.PORT ?? '3000';

app.listen(PORT, ( ) => { 
    console.log(`🔥 Server at http://127.0.0.1:${PORT} 🔥`)
    database.authenticate()
        .then( (   ) => console.log("Database is connected") )
        .catch(( e ) => console.log("Error in database: "+ e));
});