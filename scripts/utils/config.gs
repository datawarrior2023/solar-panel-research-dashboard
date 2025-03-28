/**
 * File: config.gs
 * Purpose: Global configuration settings and constants
 * Tags: @config @utils
 * Depends on: none
 */

const CONFIG = {
  DEBUG: true,
  CI_MODE: false,
  SHEET_NAMES: {
    DASHBOARD: "Dashboard",
    MANUFACTURERS: "ManufacturersData",
    COMPANY_RESEARCH: "CompanyResearch",
    USER_INPUTS: "UserInputs",
    QUOTES: "QuotesData",
    INSTALLERS: "InstallersData",
    BACKEND_CALCS: "Backend_Calcs",
  },
  TAX_CREDIT_DEFAULT: 0.3, // 30% federal tax credit
  MIN_SYSTEM_SIZE: 4.0, // kW
  MAX_SYSTEM_SIZE: 30.0, // kW
  DEFAULT_SOLAR_OFFSET: 1.0, // 100% offset
};

function getConfig() {
  return CONFIG;
}

function isDebugMode() {
  return CONFIG.DEBUG;
}

function logDebug(message, data = null) {
  if (CONFIG.DEBUG) {
    Logger.log(`[DEBUG] ${message}`);
    if (data) Logger.log(JSON.stringify(data));
  }
}