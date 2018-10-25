# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2018-10-26

### Added

- Added PHPUnit as a dev dependency in composer.json.
- A .gitignore file now gets added to the scaffolded package root.

### Changed

- Updated the `getPackageProviders()` function documentation with the correct return and params types in TestCase.php
- Renamed the placeholder directories `.gitignore` template to `.gitignore.placeholders` in preparation for the main gitignore addition.
- Rewrote the placeholder dirs module to a more generic gitignore writer module.
- Updated the readme with extra information regarding the service provider content.
- Updated this changelog to conform to the format.
- 
### Removed

- Removed Node 9 from the Travis config.

### Fixed

- Updated the generator's package.json `repository` value with the correct repository name.

## [1.0.0] - 2018-10-24

- Initial release 🏎🔥🔥🔥🔥