/**
 * Copies the routes file from the generator templates to the target dir.
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("routes/_web.php"),
    generator.destinationPath("routes/web.php"),
    {
      PACKAGE_NAME: generator.props.package.name
    }
  );
};
