# Yeoman Laravel Package Generator

- [Yeoman Laravel Package Generator](#yeoman-laravel-package-generator)
  - [What's this about then](#whats-this-about-then)
  - [Installation](#installation)
  - [Using the generator](#using-the-generator)
  - [The resulting scaffolded package](#the-resulting-scaffolded-package)
  - [Using the package](#using-the-package)
  - [Contributing](#contributing)
  - [Changelog](#changelog)
  - [Testing](#testing)
    - [Running Tests](#running-tests)
    - [Generating code coverage](#generating-code-coverage)

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

## Using the package

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

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
