const express = require('express');
const app = express();
const hostname = 'localhost';
const port = '80';


//Serving static files in static folder
app.use('/staticfiles',express.static('static')); //Here first static is the location on our website and second is the folder name.

//Setting pug as view engine or template engine
app.set('view engine', 'pug')  //Always refer docs and google


//Showing root location
app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
    // document.querySelector('.home').classList.add('active');
})
app.get('/About',(req,res)=>{
    res.status(200).render('about.pug');
    // document.querySelector('.about').classList.add('active');
})
app.get('/Contact',(req,res)=>{
    res.status(200).render('contact.pug');
    // document.querySelector('.contact').classList.add('active');
})

app.listen(80,()=>{
    console.log(`server is starting on http://${hostname}:${port}`);
})