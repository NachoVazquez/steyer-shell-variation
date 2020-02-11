module.exports = {
  name: 'airline-admin-web-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/airline-admin-web-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
