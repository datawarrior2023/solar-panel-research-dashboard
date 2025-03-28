/**
 * File: constants.gs
 * Purpose: Global constants and configuration values
 * Tags: @utils @constants
 * Depends on: none
 */

const CONSTANTS = {
  PRODUCT_TYPES: {
    SHINGLE: "Shingle",
    PANEL: "Panel",
    HYBRID: "Hybrid",
  },

  WARRANTY_YEARS: {
    MIN: 10,
    MAX: 30,
    DEFAULT: 25,
  },

  EFFICIENCY_RANGES: {
    SHINGLE: {
      MIN: 14,
      MAX: 22,
    },
    PANEL: {
      MIN: 15,
      MAX: 23,
    },
  },

  SYSTEM_SIZE: {
    MIN: 4.0, // kW
    MAX: 30.0, // kW
    DEFAULT: 8.0,
  },

  COST_PER_WATT: {
    MIN: 2.0,
    MAX: 5.0,
    DEFAULT: 3.5,
  },

  UI_ELEMENTS: {
    SIDEBAR_WIDTH: 300,
    FORM_SPACING: 10,
    BUTTON_HEIGHT: 30,
  },

  DATE_FORMAT: "MM/dd/yyyy",
  CURRENCY_FORMAT: "$#,##0.00",
  PERCENTAGE_FORMAT: "0.0%",

  ERROR_MESSAGES: {
    REQUIRED_FIELD: "This field is required",
    INVALID_EMAIL: "Please enter a valid email address",
    INVALID_URL: "Please enter a valid URL",
    INVALID_RANGE: "Value must be between {min} and {max}",
    SYSTEM_SIZE: "System size must be between 4kW and 30kW",
  },
};

function getConstants() {
  return CONSTANTS;
}