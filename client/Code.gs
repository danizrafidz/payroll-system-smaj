// function doGet() { 
//   const htmlService = HtmlService.createTemplateFromFile("payroll-system").evaluate().addMetaTag("viewport","width=device-width, initial-scale=1.0")
//   return htmlService 
// }
 
function doGet(e) { 
  if(e.parameters.v != "form") {  
  return loadForm();
  } else {
    return HtmlService.createTemplateFromFile("payroll-system").evaluate();
  }
}

function loadForm() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("DataTabel");
  var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(),1).getValues();
  var htmlListArray = list.map (function(r) { return '<option>' + r[0] + '</option>'; }).join('');
  var tmp = HtmlService.createTemplateFromFile("login-html");
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

function include(filename) {
  const htmlService = HtmlService.createTemplateFromFile(filename).getRawContent();
  return htmlService
}

function userClicked(userInfo) {
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

  ws.appendRow([timestamp, userInfo.nama, userInfo.jabatan, userInfo.masakerja, userInfo.gaji_pokok, userInfo.tunjangan, userInfo.uang_makan, userInfo.uang_transport, userInfo.total_lembur, userInfo.bpjs_kesehatan1, userInfo.bpjs_tenagakerja1, userInfo.gaji_kotor, userInfo.no_bpjskes, userInfo.no_bpjstk, userInfo.bpjs_kesehatan2, userInfo.bpjs_tenagakerja2, userInfo.jaminan_pensiun, userInfo.status, userInfo.jml_potongan, userInfo.gaji_bersih]);
}