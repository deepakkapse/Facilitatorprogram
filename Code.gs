function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}


/* PROCESS FORM */
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){//Execute if form passes search text
      result = search(formObject.searchtext);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = '142FbylWc7109R0RsXQ42NuN_TFs-D3RTtIYJOSBR1QM'; //** CHANGE !!!
  var dataRage        = 'Data!A2:Y';                                    //** CHANGE !!!
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}
