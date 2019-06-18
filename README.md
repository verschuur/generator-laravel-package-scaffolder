# Yeoman Laravel Package Generator

![Code Climate issues](https://img.shields.io/codeclimate/issues/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square) ![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square) ![Scrutinizer](https://img.shields.io/scrutinizer/g/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square) ![Travis (.org)](https://img.shields.io/travis/verschuur/generator-laravel-package-scaffolder.svg?style=flat-square)

- [Yeoman Laravel Package Generator](#Yeoman-Laravel-Package-Generator)
  - [What's this about then](#Whats-this-about-then)
  - [Installation](#Installation)
  - [Using the generator](#Using-the-generator)
  - [The resulting scaffolded package](#The-resulting-scaffolded-package)
  - [Using your package](#Using-your-package)
  - [Testing your package](#Testing-your-package)
  - [Contributing](#Contributing)
  - [Changelog](#Changelog)
  - [Security](#Security)
  - [Testing](#Testing)
    - [Running Tests](#Running-Tests)
    - [Generating code coverage](#Generating-code-coverage)

## What's this about then

This Yeoman generator will quickly and easily scaffold a Laravel package, getting you up and running within a few seconds.

It will generate the necessary files such as a service provider and a composer file, while also generating placeholder directories for migrations, translations etc.

The service provider will be configured with all the correct settings for loading and/or publishing your assets. Just uncomment what you need and you're done.

For a full overview of the scaffolded files, [have a look over here](#the-resulting-scaffolded-package).

## Installation

If you haven't done so already, install the Yeoman generator:

`npm install -g yo`

After that, install the scaffolder generator:

`npm install -g generator-laravel-package-scaffolder`

## Using the generator

Run the following command:

`yo laravel-package-scaffolder`

and follow the instructions.

## The resulting scaffolded package

Given a package with the name _"MyPackage"_, the resulting package will have the following directory structure and files:

``` bash
.
├── README.md
├── .gitignore
├── composer.json
├── config
│   └── my-package.php
├── database
│   └── migrations
│       └── .gitignore
├── phpstan.neon
├── phpunit.xml
├── public
│   └── .gitignore
├── resources
│   ├── lang
│   │   └── .gitignore
│   └── views
│       └── .gitignore
├── routes
│   └── web.php
├── src
│   ├── Console
│   │   └── Commands
│   │       └── MyPackageCommand.php
│   ├── Providers
│   │   └── MyPackageServiceProvider.php
└── tests
    └── TestCase.php
```

## Using your package

If you want to use your package on the local filesystem in a Laravel app for development purposes, include the package in the app's composer.json file:

```json
"repositories": [
    {
        "type": "path",
        "url": "path/to/your/package/root"
    }
],
```

Next, add your package to the require section of the app's composer.json file:

```json
"require": {
    "vendor/package": "*"
}
```

After the composer.json file has been updated, run the composer update command:

```bash
composer update
```

This will symlink the package into the app's vendor dir.

**Note**: If you update your package's composer.json file, you need to run the composer update command again to update the app's autoloader.

This is only necessary for the composer.json file. Changes in any other files in your package will be automatically updated thanks to the symlink.

## Testing your package

This generator automatically adds both [PHPUnit]([nu.nl](https://phpunit.de/)) and [PHPStan](https://github.com/phpstan/phpstan) for static analysis. Both are added to the composer.json `scripts` attribute. You can run them using:

- `composer run test`
- `composer run analysis`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Security

If you discover any security-related issues, please email govert.verschuur@gmail.com instead of using the issue tracker.

## Testing

The generator is fully backed (well, almost fully backed 😐) by unit tests. The test runner of choice is Jest.

### Running Tests

``` bash
jest
```

### Generating code coverage

``` bash
jest --coverage --coverageDirectory=coverage/jest
```
