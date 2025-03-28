/**
 * File: validation.gs
 * Purpose: Common validation functions used across forms
 * Tags: @utils @validation
 * Depends on: config.gs
 */

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function validateNumericRange(value, min, max) {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
}

function validateRequiredField(field, value) {
  return value !== null && value !== undefined && value.toString().trim() !== "";
}

function validateSystemSize(size) {
  const config = getConfig();
  return validateNumericRange(size, config.MIN_SYSTEM_SIZE, config.MAX_SYSTEM_SIZE);
}

function validateQuoteData(quoteData) {
  return {
    isValid: validateRequiredField("manufacturer", quoteData.manufacturer) &&
             validateRequiredField("product", quoteData.product) &&
             validateSystemSize(quoteData.systemSize) &&
             validateRequiredField("price", quoteData.price),
    errors: [] // TODO: Add detailed error messages
  };
}

function validateManufacturerData(manufacturerData) {
  return {
    isValid: validateRequiredField("companyName", manufacturerData.companyName) &&
             validateRequiredField("productName", manufacturerData.productName) &&
             validateRequiredField("productType", manufacturerData.productType) &&
             validateRequiredField("powerOutput", manufacturerData.powerOutput),
    errors: [] // TODO: Add detailed error messages
  };
}

function validateInstallerData(installerData) {
  return {
    isValid: validateRequiredField("name", installerData.name) &&
             (installerData.email ? validateEmail(installerData.email) : true) &&
             (installerData.website ? validateURL(installerData.website) : true),
    errors: [] // TODO: Add detailed error messages
  };
}