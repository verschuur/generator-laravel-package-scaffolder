/**
 * Copies the config file from the generator templates to the target dir,
 * changing the name of the file to the slugged version of the package name
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("config/_config.php"),
    generator.destinationPath(`config/${generator.props.package.slug}.php`),
    {
      PACKAGE_NAME: generator.props.package.name
    }
  );
};
