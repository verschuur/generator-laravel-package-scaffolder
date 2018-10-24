const _ = require("lodash");

/**
 * Copies the composer file from the generator templates to the target dir while updating the settings
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath("_composer.json"),
    generator.destinationPath(`composer.json`),
    {
      VENDOR_SLUG: generator.props.vendor.slug,
      PACKAGE_SLUG: generator.props.package.slug,
      AUTHOR_NAME: generator.props.author.name,
      AUTHOR_EMAIL: generator.props.author.email,
      LICENSE: generator.props.package.license,
      PACKAGE_NAMESPACE: _.replace(
        generator.props.package.namespace,
        /[\\]/g,
        "\\\\"
      ),
      PACKAGE_ALIAS: generator.props.package.alias,
      CLASS_NAME: generator.props.package.basename
    }
  );
};
