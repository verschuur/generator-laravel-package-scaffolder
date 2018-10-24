/**
 * Copies the README.md file from the generator templates to the target dir
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("_README.md"),
    generator.destinationPath("README.md"),
    {
      PACKAGE_NAME: generator.props.package.name
    }
  );
};
