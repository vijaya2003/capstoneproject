var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());

// var express = require("express");
// var router = express.Router();
// const app = express();
const { async } = require("@firebase/util");
const { FieldValue } = require("firebase-admin");
const { db } = require("./firebase.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/fsubmit', function(req, res) {
  res.render("fsubmit")
});
app.get('/aclubs', function(req, res) {
  res.render("aclubs")
});





// app.get('/sclubs', function(req, res) {
//   // const id1=req.query.regno;
//   //   const id2=req.query.pass;
//   const id1="1236"
//   const id2="123"
//     try{
//       db.collection("student").where("pass","==",id2).where("regno","==",id1).get()
//       .then((docs)=>{
//           if(docs.size >0){
//               //console.log(doc);
//               res.render("sclubs")
//           }
           
//               else{
//                   res.send("no user available")
//               }
// })
//      }catch(error){
//       res.json("hello");
//   }
// });

// app.get('/demoo', function(req, res) {
//   const id1=req.query.regno;
//     const id2=req.query.pass;
//   // const id1="1229"
//   // const id2="12345"
//     console.log(id1)
//     try{
//             db.collection("student").where("pass","==",id2).where("regno","==",id1).get()
//             .then((docs)=>{
//                 if(docs.size >0){
//                     //console.log(doc);
//                     res.send("sucess")
//                     res.end()
//                 }
                 
//                     else{
//                         res.send("no user available")
//                         res.end()
//                     }
//       })
//            }catch(error){
//             res.json("hello");
//             res.end()
//         }
// });



app.get("/slog", (req, res, next) => {
  const studentname = req.query.regno;
  console.log(studentname);
  const studentpass = req.query.pass;
  try {
    db.collection("student")
      .where("regno", "==", studentname)
      .where("pass", "==", studentpass)
      .get()
      .then((docs) => {
        if (docs.size > 0) {
          //console.log(doc);
          res.render("sclubs");
        } else {
          res.render("invalid");
        }
      });
  } catch (error) {
    res.json("error");
  }
});

app.get("/alog", (req, res, next) => {
  const studentname = req.query.regno;
  console.log(studentname);
  const studentpass = req.query.pass;
  try {
    db.collection("admin")
      .where("regno", "==", studentname)
      .where("pass", "==", studentpass)
      .get()
      .then((docs) => {
        if (docs.size > 0) {
          //console.log(doc);
          res.render("aclubs");
        } else {
          res.render("invalid");
        }
      });
  } catch (error) {
    res.json("error");
  }
});
app.get('/sd', function(req, res) {
  res.render("slog")
});
app.get('/ad', function(req, res) {
  res.render("alog")
});
app.get('/astform1', function(req, res) {
  res.render("astform1")
});
app.get('/rytform1', function(req, res) {
  res.render("rytform1")
});
app.get('/gamform1', function(req, res) {
  res.render("gamform1")
});
app.get('/sportform1', function(req, res) {
  res.render("sportform1")
});
app.get('/gdscform1', function(req, res) {
  res.render("gdscform1")
});
app.get('/isteform1', function(req, res) {
  res.render("isteform1")
});
app.get('/physform1', function(req, res) {
  res.render("physform1")
});
app.get('/pgform1', function(req, res) {
  res.render("pgform1")
});
app.get('/mecform1', function(req, res) {
  res.render("mecform1")
});
app.get('/ssign', function(req, res) {
  res.render("ssign")
});
app.get('/asign', function(req, res) {
  res.render("asign")
});
app.get('/slog', function(req, res) {
  res.render("slog")
});




app.get("/astform2/:id", async (req, res) => {
  const c = req.params.id;
  console.log(c);
  try {
    const usersRef = db.collection(c);
    const doc = await usersRef.get();
    let responseArr = [];
    doc.forEach((ele) => {
      responseArr.push(ele.data());
      console.log(ele.data());
    });
    res.render("astform2", { responseArr: responseArr });
    //res.send("hello")
    console.log(responseArr);

    //res.end()
  } catch (error) {
    res.send(error);
  }
});







app.get('/astform2',async (req,res)=>{
  try{
      const usersRef=db.collection("astform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('astform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/gamform2',async (req,res)=>{
  try{
      const usersRef=db.collection("gamform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('gamform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/gdscform2',async (req,res)=>{
  try{
      const usersRef=db.collection("gdscform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('gdscform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/isteform2',async (req,res)=>{
  try{
      const usersRef=db.collection("isteform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('isteform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/mecform2',async (req,res)=>{
  try{
      const usersRef=db.collection("mecform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('mecform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/pgform2',async (req,res)=>{
  try{
      const usersRef=db.collection("pgform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('pgform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/physform2',async (req,res)=>{
  try{
      const usersRef=db.collection("physform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('physform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/rytform2',async (req,res)=>{
  try{
      const usersRef=db.collection("rytform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('rytform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});
app.get('/sportform2',async (req,res)=>{
  try{
      const usersRef=db.collection("sportform1");
      const doc=await usersRef.get();
      let responseArr=[];
      doc.forEach(ele=>{
          responseArr.push(ele.data());
          console.log(ele.data())
      })
       res.render('sportform2',{responseArr:responseArr});
      //res.send("hello")
      console.log(responseArr)
     
//res.end()
  }catch(error){
      res.send(error);
  }
});









app.get("/bastform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("astform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bgamform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("gamform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bgdscform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("gdscform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bisteform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("isteform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bmecform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("mecform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bpgform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("pgform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/bphysform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("physform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});
app.get("/brytform1", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    eventname: req.query.eventname,
    time: req.query.time,
    date: req.query.date,
    place: req.query.place
  };
  db.collection("rytform1").add(UserJson);
  res.render("fsubmit", { title: "fsumit" });
});







app.get("/admin", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    regno: req.query.regno,
    pass: req.query.pass
  };
  db.collection("admin").doc(req.query.regno).set(UserJson);
  res.render("alog", { title: "fsumit" });
});


app.get("/student", function (req, res){
  // const id = req.body.name;
  const UserJson = {
    regno: req.query.regno,
    pass: req.query.pass
    
  };
  db.collection("student").add(UserJson);
  res.render("slog", { title: "fsumit" });
});



// app.get('/daclubs', function(req, res) {
//   const id1=req.body.regno;
//     const id2=req.body.pass;

//     console.log(id1)
//     try{
//       console.log(id1)
//       db.collection("admin").where("regno","==",id1).where("pass","==",id2).get()
//       .then((docs)=>{
//         console.log(docs);
//           if(docs.size >0){
//               console.log(docs);
//               res.render("aclubs")
//           }
           
//               else{
//                   res.send("no user available")
//               }
// })
//      }catch(error){
//       res.json("hello");
//   }
// });



// app.get('/dsclubs', function(req, res) {
//   const id1=req.query.regno;
//   const id2=req.query.pass;
  
//     try{
//       db.collection("student").where("pass","==",id2).where("regno","==",id1).get()
//       .then((docs)=>{
//           if(docs.size >0){
//               //console.log(doc);
//               res.render("sclubs")
//           }
           
//               else{
//                   res.send("no user available")
//               }
// })
//      }catch(error){
//       res.json("hello");
//   }
// });





app.get('/', function(req, res) {
    res.render("forms");
});

app.listen(3000);