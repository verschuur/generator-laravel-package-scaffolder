/**
 * Creates the empty dir such as views, translations etc
 *
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
  [
    "resources/lang/",
    "resources/views/",
    "database/migrations/",
    "public/"
  ].forEach(function(item) {
    generator.fs.copy(
      generator.templatePath("_.gitignore"),
      generator.destinationPath(item + "/.gitignore")
    );
  });
};
