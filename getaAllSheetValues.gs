 //open a worksheet and get all displayvalues on google sheets
 function getAllSheetValues(sheetId){

         var targetSheet = SpreadsheetApp.openById(sheetId).getSheets();
         let dataArray =[]         

         for(var i = 0; i<targetSheet.length;++i){

               let lstRow = targetSheet[i].getLastRow()
               let lstCol = targetSheet[i].getLastColumn()
               let columnLetter = findColumnLetterOnly(lstCol)
               let range = "A1:"+columnLetter+lstRow
               let data = targetSheet[i].getRange(range).getDisplayValues()

               for(var j = 0;j<data.length;j++){dataArray.push(data[j])}

         }

         return dataArray

      }
