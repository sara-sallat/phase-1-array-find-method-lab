// code your solution here
 function superbowlWin(record){
    const result=record.find(item => item.result==="W")
        if(result){
            return result.year
        }
        else{
            return undefined
        }
        
    }