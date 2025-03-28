# Solar Panel Research Dashboard

A Google Sheets-based dashboard for solar panel and shingle research, powered by Google Apps Script. This tool helps homeowners and evaluators compare solar shingles and solar panel systems through structured data entry, visual outputs, and ROI calculators.

## 🔑 Key Features

- Compare solar products across multiple manufacturers
- Track quotes and cost configurations
- Capture installer details and certifications
- Centralize product reviews and reputation research
- Sidebar forms for data input
- Toggleable debugging features

## 📚 Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [Testing Guide](docs/TESTING_HELP.md)
- [UI Design](docs/UI_DESIGN.md)
- [Validation Strategy](docs/VALIDATION_STRATEGY.md)

## 🛠️ Development

This project uses:
- Google Apps Script
- Google Sheets
- CLASP
- GitHub Actions

## 📋 Setup

1. Clone the repository
2. Install CLASP: `npm install -g @google/clasp`
3. Login to Google: `clasp login`
4. Create a new Google Sheet
5. Link to your sheet: `clasp create --type sheets`
6. Push code: `clasp push`

## 🧪 Testing

Run tests using the built-in test suite:
1. Open your Google Sheet
2. Go to `Extensions → Apps Script`
3. Run `test_suite.gs`

## 📝 License

MIT