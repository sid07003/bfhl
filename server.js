const express=require("express");
const app=express();

app.use(express.json());

const hasNumbers = (st) => {
    return /\d/.test(st);
};

app.get("/",(req,res)=>{
    res.send("helo ths is my api hosting");
})

app.post("/bfhl", (req, res)=> {
    const arr = req.body.data;

    const is_succes = true;
    const user_id = "Siddharth_Sharma_07072003";
    const email = "siddharth1178.be21@chitkarauniversity.edu.in";
    const roll_number = 2111981178;

    const oddnum = [];
    const evennum = [];
    const alphabets = [];

    arr.map((element) => {
        if (hasNumbers(element)) {
            if (element % 2 == 0) {
                evennum.push(element);
            }
            else {
                oddnum.push(element);
            }
        }
        else {
            alphabets.push(element.toUpperCase());
        }
    })

    const ans = {
        "is_success": is_succes,
        "user_id": user_id,
        "email": email,
        "odd_numbers": oddnum,
        "even_numbers": evennum,
        "alphabets": alphabets
    }

    res.status(200).json(ans);
});

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server started");
    }

})