/**
 * Copies the phpstan.neon. file from the generator templates to the target dir
 * @param  {yeoman-generator} generator The Yeoman generator instance
 */
module.exports = function(generator) {
    generator.fs.copyTpl(
      generator.templatePath("_phpstan.neon"),
      generator.destinationPath("phpstan.neon")
    );
  };
  