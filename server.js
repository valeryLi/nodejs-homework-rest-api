require("dotenv").config();
const app = require("./app");

const { connectMongo } = require("./db");

const PORT = process.env.PORT || 3000;

// app.listen(PORT, async () => {
//   await connectMongo();

//   console.log("Database connection successful");
// });
connectMongo()
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.error(`Server is failed. Error message: ${err.message}`);
    process.exit(1);
  });
