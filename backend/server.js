import app from "./app.js";

/*app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})*/

const port = process.env.PORT || 5173;
app.listen(port, () => {
  console.log(`SERVER HAS STARTED AT PORT ${port}`);
});
