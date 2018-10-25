/**
 * Creates the various .gitignore files
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
      generator.templatePath("_.gitignore.placeholders"),
      generator.destinationPath(item + "/.gitignore")
    );
  });

  generator.fs.copy(
    generator.templatePath("_.gitignore.main"),
    generator.destinationPath(".gitignore")
  );
};
