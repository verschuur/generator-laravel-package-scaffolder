'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
var fs = require("fs");

const answers = {
  'package.name': 'My Package',
  'vendor.name': 'Test Vendor',
  'author.name': 'Test Author',
  'author.email': 'test.author@example.org',
  'package.license': 'MIT',
  'package.namespace': 'TestVendor\\MyPackage'
};

/**
* Testing function to check the content of two files against each other
* 
* @param {string} file path to the generated file
* @param {string} fixture path to the fixture  to check against
*/
function equalsFileContent(file, fixture) {
  assert.equalsFileContent(
    file,
    fs.readFileSync(path.join(__dirname, 'fixtures/' + fixture), 'utf8')
  );
}
  
describe('generator-laravel-package-scaffolder:app', () => {
  beforeAll(() => {
    jest.mock('github-username', () => {
      return () => Promise.resolve('test-vendor');
    });
  });
    
  afterAll(() => {
    jest.unmock('github-username');
  });
    
  it('creates a readme file', () => {
    return helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let readme = 'README.md';
      assert.file([readme]);
      equalsFileContent(readme, 'README.md');
    })
  });
    
  it('creates a composer.json file', () => {
    return helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let composer = 'composer.json'
      assert.file([composer]);
      assert.jsonFileContent(composer, JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/composer.json'))));
    });
  });
    
  it('creates a config file', () => {
    return helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let config = 'config/my-package.php'
      assert.file([config]);
      assert.fileContent(config, /My Package package config file/);
    })
  });
    
  it('creates the unit test files', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      // assert the testcase file
      let testcase = 'tests/TestCase.php';
      assert.file([testcase]);
      equalsFileContent(testcase, 'TestCase.php');
      
      // assert the unit test config file
      let config = 'phpunit.xml';
      assert.file([config]);
      equalsFileContent(config, 'phpunit.xml');
    })
  });
    
  it('creates a ServiceProvider file', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let serviceprovider = 'src/Providers/MyPackageServiceProvider.php';
      let contents = fs.readFileSync(path.join(__dirname, 'fixtures/MyPackageServiceProvider.php'), 'utf8');
      assert.file([serviceprovider]);
      equalsFileContent(serviceprovider, 'MyPackageServiceProvider.php');
    })
  });
    
  it('creates a routes file', () => {
    return helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      assert.file(['routes/web.php']);
      assert.fileContent('routes/web.php', /My Package Routes/);
    })
  });
    
  it('creates the gitignore files', () => {
    return helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      assert.file([
        'resources/lang/.gitignore',
        'resources/views/.gitignore',
        'database/migrations/.gitignore',
        'public/.gitignore',
        '.gitignore'
      ]);
    })
  });
    
  it('creates a Command file', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let command = 'src/Console/Commands/MyPackageCommand.php';
      assert.file([command]);
      equalsFileContent(command, 'MyPackageCommand.php');
    })
  });

  it('creates a phpstan.neon.dist file', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts(answers)
    .then(() => {
      let distFile = 'phpstan.neon';
      assert.file([distFile]);
      equalsFileContent(distFile, 'phpstan.neon');
    })
  });
});