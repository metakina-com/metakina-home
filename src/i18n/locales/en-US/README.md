# English (en-US) Internationalization Files Structure

This directory contains the English language internationalization files organized by functionality modules.

## File Structure

- `common.json` - Common components (LocaleSwitcher, Navigation, Company, form validation, etc.)
- `layout.json` - Layout components (Header, Footer)
- `pages.json` - Page components (Home, Consult, challenges, solutions, etc.)
- `forms.json` - Form-related (RWAForm, stepValidation, etc.)
- `legal.json` - Legal documents (privacy policy, terms of service)
- `index.js` - Entry point that merges all JSON files

## Usage

The `index.js` file automatically imports and merges all JSON files. The i18n system will use this merged object.

## Adding New Translations

When adding new translations:

1. Choose the appropriate JSON file based on functionality
2. Follow the existing key structure
3. Ensure consistency across all language versions

## Maintenance

When modifying these files:

- Keep the same structure across all languages (zh-CN, ja-JP, en-US)
- Update all language versions simultaneously
- Test the application after changes
