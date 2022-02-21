const express = require('express')
const bodyparser = require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=> {
    res.sendFile(__dirname + '/index1.html')
})

app.post('/equals',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)

    if(req.body.res == '+'){
    const result=n1 + n2
    res.send('' + result)
}

else if(req.body.res == '-'){
    const result=n1 - n2
    res.send(''+ result)
}

else if(req.body.res == '/'){
    const result=n1 / n2
    res.send(''+ result)
}

else if(req.body.res == '*'){
    const result=n1 * n2
    res.send(''+ result)
}
else {
    res.send('Oops!! select operation')
}
});


app.listen(1000,(res)=>{
    console.log("Server running at Port 1000")
})