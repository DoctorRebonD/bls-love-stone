const SHEET_ID = '1M4VE_g_4alGAFKePzdD9NRhiA_MoEGNERbO13pDvmv0';
const SHEET_NAME = 'Inscriptions';

function doPost(e) {
  const email = String((e && e.parameter && e.parameter.email) || '').trim();
  if (!email) {
    return ContentService.createTextOutput('missing email');
  }

  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  sheet.appendRow([new Date(), email]);

  return ContentService.createTextOutput('ok');
}
