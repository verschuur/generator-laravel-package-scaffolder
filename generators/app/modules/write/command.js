/**
 * Copies the Command file from the generator templates to the target dir,
 * changing the attributes
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("src/Console/Commands/_Command.php"),
    generator.destinationPath(
      `src/Console/Commands/${generator.props.package.basename}Command.php`
    ),
    {
      PACKAGE_NAMESPACE: generator.props.package.namespace,
      CLASS_NAME: generator.props.package.basename,
      PACKAGE_SLUG: generator.props.package.slug
    }
  );
};
