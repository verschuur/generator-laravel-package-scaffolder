"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const _ = require("lodash");
const path = require('path');
const username = require("username");
const fs = require('fs')

const readmeWriter = require("./modules/write/readme");
const configWriter = require("./modules/write/config");
const composerWriter = require("./modules/write/composer");
const serviceProviderWriter = require("./modules/write/serviceProvider");
const testCaseWriter = require("./modules/write/testCase");
const routesWriter = require("./modules/write/routes");
const commandWriter = require("./modules/write/command");
const placeholderDirsWriter = require("./modules/write/placeholderDirs");
const prompts = require("./modules/prompts");


module.exports = class extends Generator {
  initializing() {
    this.log(`Welcome to the ${chalk.green('Laravel Package Scaffolder!')}`);
    this.log(chalk.bgRed(`Before starting, make sure you are in the directory where you want to scaffold the package!`));
    this.props = {};
  }
  
  /**
   * Prompt for the package settings, and set the generator properties
   * for the scaffolding values.
   */
  prompting() {
    this.log(chalk.green("Fetching GitHub info, please wait..."));
    
    return this.user.github.username().then(
      vendor => {
        // set the vendor name here so the answers prompts can use it
        this.props.vendor = {
          name: vendor
        };
      },
      error => {
        this.props.vendor = {
          name: username.sync()
        };
      }
    ).finally(() => {
      return this.prompt(prompts(this)).then(props => {
        _.merge(this.props, props);
          
        // set the rest of the properties based on the answers
        this.props.vendor.slug = _.kebabCase(this.props.vendor.name);
        this.props.package.slug = _.kebabCase(this.props.package.name);
        this.props.package.alias = this.props.package.basename;
      });
    });
  }
      
  // default() {}
  
  /**
   * Scaffold the various files and directories
   */
  writing() {
    readmeWriter(this);
    composerWriter(this);
    configWriter(this);
    serviceProviderWriter(this);
    testCaseWriter(this);
    routesWriter(this);
    commandWriter(this);
    placeholderDirsWriter(this);
  }
      
  // install() {}
};
    