function wordWrap(originalText,countAmnt){

          let text = String(originalText)
          
          let count = 0
          let newString="";
          let lastSpace = 0;
    
          for(var letter in text){
          
              let num = parseInt(letter)
              
              if(text[letter]===" "||text.length-1==num){
                    
                    if(text.length-1==num){num+=1}
              	    let sub = text.substring(lastSpace,num)                
                    newString+=sub
                    if(count<countAmnt){}
                    else{newString+="\n";count = 0}
                    lastSpace = letter
              }
             
  
            count++
              
          }   

    return newString

}
