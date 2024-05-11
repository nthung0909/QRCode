const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get('/',async(req,res)=>{
    let img='';
    let qr= await QRCode.toDataURL('https://github.com/nthung0909/QRCode', {
        color: {
            dark: '#FF90BC',
            light: '#0000'
        }
    });
    img = `<image src= " `+qr+ `" />`
    return res.send(img);
});

app.listen(3000, ()=>{
    console.log("app is running at port 3000")
})