require("dotenv").config();
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(
    `The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`
);
console.log(
    `The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`
);
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
