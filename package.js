Package.describe({
  name: 't3db0t:invites',
  version: '0.0.2',
  summary: 'An invitation management system',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  // api.use('ecmascript');
  api.use('check');
  api.use(['templating', 'blaze-html-templates'], 'client');
  api.use(['random', 'email'], 'server');

  api.addFiles([
    'client/templates.html',
    'client/templates.js',
    'client/templates.css',
  ], 'client');

  api.addFiles([
    'lib/invites-common.js',
    'lib/collections.js'
  ]);

  api.addFiles([
    'server/invites-server.js',
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export(['Invites', 'InvitesCollection']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('t3db0t:meteor-invites');
  api.addFiles('meteor-invites-tests.js');
});
