Package.describe({
  name: 'thegreatshasha:autoform-selectize',
  summary: 'Custom "selectize" input type for AutoForm',
  version: '0.0.2',
  git: 'https://github.com/thegreatshasha/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js',
    'themes/bootstrap3.css',
  ], 'client');
});
