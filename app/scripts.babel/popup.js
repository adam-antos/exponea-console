'use strict';

const backgroundPage = chrome.extension.getBackgroundPage();
backgroundPage.trackEvent('popup', 'created');

function updateEndpointsTextArea() {
  var urls = backgroundPage.getFilters().join('\n');
  $('#apiEndpoints').val(urls);
}

$('form[name="settingsForm"] input[type="submit"][name="save"]').click((evt) => {
  backgroundPage.trackEvent('popup', 'save');
  var endpoints = $('#apiEndpoints').val().split('\n');
  backgroundPage.updateFilters(endpoints);
});

$('form[name="settingsForm"] input[type="submit"][name="reset"]').click((evt) => {
  backgroundPage.trackEvent('popup', 'reset');
  backgroundPage.resetFilters();
  updateEndpointsTextArea();
  evt.preventDefault();
  return false;
});

updateEndpointsTextArea();