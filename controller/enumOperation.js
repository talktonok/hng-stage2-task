
const store =   async (req, res) => {
    const EnumType = {
        addition: "+",
        subtraction: "-",
        multiplication: "*"
    }
  let x = req.body.x;
  let solution = 0;
        let y = req.body.y;

  const operation_type = EnumType[req.body.operation_type];

        if(operation_type == "*"){
            solution = x * y
        }else if(operation_type == "+"){
            solution = x + y
        }else if(operation_type == "-"){
            solution = x - y
        }else{
            solution = 0
        }


  try {
    if(solution!=0){
    const result = {
        slackUsername : "IbrahimNok",
        operation_type: req.body.operation_type,
        x : req.body.x,
        y : req.body.y,
        result: solution
        
      };
    res.status(200).json(result)
    }else{
        res.status(200).json({'message': 'enter a valid input'})
    }

}
catch (error) {
    res.status(400).json({message: error.message})
}
}

module.exports = 
{
    store
}