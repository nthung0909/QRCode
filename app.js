const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get('/',async(req,res)=>{
    let img='';
    let qr= await QRCode.toDataURL('[DC9-A3]U42-11/2/0<=>[DC9-A17]U34-Core 59,60<=>[P KT Trệt 1B-R2]U34-Core 59,60<=>[P KT Trệt 1A-R6]U40-Core 90,91<=>[DC7-P10]U25-0/10');
    img = `<image src= " `+qr+ `" />`
    return res.send(img);
});

app.listen(3000, ()=>{
    console.log("app is running at port 3000")
})