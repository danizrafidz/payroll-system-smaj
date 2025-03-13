// function doGet() {
//   const htmlService = HtmlService.createTemplateFromFile("tabelData").evaluate().addMetaTag("viewport","width=device-width, initial-scale=1.0")
//   return htmlService
// }

function doGet(e) {
  if (e.parameters.v != "admin") {
    return loadForm();
  } else {
    return HtmlService.createTemplateFromFile("admin.html").evaluate();
  }
}

function loadForm() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("DataTabel");
  var list = ws
    .getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1)
    .getValues();
  var htmlListArray = list
    .map(function (r) {
      return "<option>" + r[0] + "</option>";
    })
    .join("");
  var tmp = HtmlService.createTemplateFromFile("tabelData");
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

function include(filename) {
  const htmlService =
    HtmlService.createTemplateFromFile(filename).getRawContent();
  return htmlService;
}
