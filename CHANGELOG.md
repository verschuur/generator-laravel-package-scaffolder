# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.2] - 2020-02-06

### Removed

- Github package settings

## [1.4.1] - 2020-02-06

### Changed

- Updated generator dependencies

### Added

- Github package settings

## [1.4.0] - 2020-02-05

### Changed

- Updated generator dependencies
- Updated the PHP version in composer.json to ^7.2
- Updated the laravel/framework version in composer.json to ^6.0
- Updated the phpunit/phpunit version in composer.json to ^8.0
- Updated the orchestra/testbench version in composer.json to ^4.0

## [1.3.6] - 2019-12-09

### Changed

- Updated dependencies

## [1.3.5] - 2019-09-04

### Changed

- Updated dependencies

## [1.3.4] - 2019-09-03

### Changed

- Updated dependencies due to security warnings
  
## [1.3.3] - 2019-08-28

### Changed

- Updated NPM dependencies due to security warnings

## [1.3.2] - 2019-08-12

### Changed

- Updated NPM dependencies due to security warnings

## [1.3.1] - 2019-06-18

- Fixed some minor typos in the readme and the changelog.

## [1.3.0] - 2019-06-18

- Updated the generated composer.json to match Laravel 5.8
- Small namespace fix in the generated TestCase.php file.
- Added a composer script to run the PHPUnit from the vendor dir
- Added PHPStan to the generated package
  
## [1.2.2] - 2019-06-17

- Updated some NPM dependencies due to security warnings. Thanks GitHub 👍🏼
- Also updated this changelog because I forgot it for the 1.2.1 release. ☹️

## [1.2.1] - 2019-06-17

- Updated the readme with extra shields.

### Changed

- Updated some NPM dependencies due to security warnings. Thanks GitHub 👍🏼
- Changed the fully qualified serviceprovider name from string to ::class notation in TestCase.php

### Fixed

- The fully qualified name of the serviceprovider used in the TestCase now matches the actual namespace of the serviceprovider, i.e.: `Vendor\Package\Providers\MyServiceProvider` instead of `Vendor\Package\MyServiceProvider`.
- Fixed the classnames and imports in the generated TestCase.php so the extended tests will actually run 😐

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

### Removed

- Removed Node 9 from the Travis config.

### Fixed

- Updated the generator's package.json `repository` value with the correct repository name.

## [1.0.0] - 2018-10-24

- Initial release 🏎🔥🔥🔥🔥