import app from './app';
import mongoose from 'mongoose';
import config from './config';

async function main() {
  try {
    // connect mongodb database
    await mongoose.connect(config.database_url as string);

    // setup database listener
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
