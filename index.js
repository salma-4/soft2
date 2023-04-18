import express from 'express';

const app= express();
const student=["salma","sobhy" ,"nabawy"];
const studentFunction=(req,res)=>{
    console.log("hello");
    let out='<ul>';
for(let i=0;i<student.length;i++){
    out+='<li>'+student[i]+'</li>'+'<br>'
}

    out+='</ul>';


    res.send(out);
};

app.get('/students',studentFunction)
app.listen(5000);
