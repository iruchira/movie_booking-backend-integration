
// will create a mongoose object and connect to it.
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
    // console.log(typeof(db.movies.));
    // console.log(db.movies);
    
    //var marr = [...db.movies];
    // marr.forEach(movie => {
    //     console.log(movie.title);
    // });
    // console.log({...db.movies});
    // console.log({...db.artists});
    // console.log({...db.genres});
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

