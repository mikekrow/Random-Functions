function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Help Menu')
      .setWidth(600);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}




function getNotes() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Notes");
  var lstrow = ss.getLastRow();
  var x = 1
  var searchItem = ss.getActiveCell().getValue();
  var me = ""
  
  while(x<lstrow){
    var cell = ss.getRange("a"+x).getValue();
    
    if (cell == searchItem){
      var data1 = ss.getRange("b"+x).getValue();
      var data2 = ss.getRange("c"+x).getValue();
      me+="<tr><td>"+data1.toString()+"</td>"+"<td>"+data2.toString()+"</td>"+"</tr>";
    }
  
  
  
  x++
  
  }

  return "<table>"+me+"</table>";
}
