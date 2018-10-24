/**
 * Copies the TestCase file from the generator templates to the target dir,
 * changing the attributes
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("tests/_TestCase.php"),
    generator.destinationPath(`tests/TestCase.php`),
    {
      PACKAGE_NAMESPACE: generator.props.package.namespace,
      CLASS_NAME: generator.props.package.basename,
      PACKAGE_SLUG: generator.props.package.slug,
      PACKAGE_ALIAS: generator.props.package.alias
    }
  );

  generator.fs.copyTpl(
    generator.templatePath("_phpunit.xml"),
    generator.destinationPath(`phpunit.xml`),
    {
      PACKAGE_NAME: generator.props.package.name
    }
  );
};
