/**
 * File: main.gs
 * Purpose: Main entry point and menu handler
 * Tags: @core @entry-point
 * Depends on: config.gs, constants.gs
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Solar Panel Research")
    .addItem("Open Quote Calculator", "showQuoteCalculator")
    .addItem("Manage Manufacturers", "showManufacturerForm")
    .addItem("View Analytics", "showAnalyticsDashboard")
    .addSeparator()
    .addItem("Settings", "showSettings")
    .addToUi();
}

function showQuoteCalculator() {
  const template = HtmlService.createTemplateFromFile("sidebar/quote_calculator")
    .evaluate()
    .setTitle("Solar Quote Calculator")
    .setWidth(300);

  SpreadsheetApp.getUi().showSidebar(template);
}

function showManufacturerForm() {
  const template = HtmlService.createTemplateFromFile("sidebar/manufacturer_form")
    .evaluate()
    .setTitle("Manage Manufacturers")
    .setWidth(300);

  SpreadsheetApp.getUi().showSidebar(template);
}

function showAnalyticsDashboard() {
  const template = HtmlService.createTemplateFromFile("sidebar/analytics_dashboard")
    .evaluate()
    .setTitle("Analytics Dashboard")
    .setWidth(300);

  SpreadsheetApp.getUi().showSidebar(template);
}

function showSettings() {
  const template = HtmlService.createTemplateFromFile("sidebar/settings")
    .evaluate()
    .setTitle("Settings")
    .setWidth(300);

  SpreadsheetApp.getUi().showSidebar(template);
}