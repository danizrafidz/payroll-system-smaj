function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("DataTabel")
  const dataRange = ws.getRange("A1").getDataRegion()
  const data = dataRange.getDisplayValues()
  
  const headers = data.shift()
  // console.log(headers)
  // console.log(data)

  const jsData = data.map(r => {
    const tempObject = {}
    headers.forEach((header,i) => {
      tempObject[header] = r[i]
    })
    return tempObject
  })

  console.log(jsData)
  return jsData
  
} // end getData function

function editCell(props){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("DataTabel")

  const idCellMatched = ws.getRange("A2:A").createTextFinder(props.id).matchEntireCell(true).matchCase(true).findNext()
  const columnCellMatched = ws.getRange("1:1").createTextFinder(props.field).matchEntireCell(true).matchCase(true).findNext()

  if(idCellMatched === null) throw new Error("No Matching Record")
  if(columnCellMatched === null) throw new Error("Invalid Field")

  const recordRowNumber = idCellMatched.getRow()
  const recordColumnNumber = columnCellMatched.getColumn()

  ws.getRange(recordRowNumber, recordColumnNumber).setValue(props.val)
}

function addRecord(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("DataTabel");

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let hh = today.getHours();
  let nn = today.getMinutes();
  let tt = today.getSeconds();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (hh < 10) hh = '0' + hh;
  if (nn < 10) nn = '0' + nn;
  if (tt < 10) tt = '0' + tt;

  const timestamp = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + nn + ':' + tt;

  ws.appendRow([timestamp]);

  return timestamp
}

// function deleteRecord(){
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const ws = ss.getSheetByName("DataTabel");

//   ws.appendRow([timestamp]);

//   return timestamp
// }