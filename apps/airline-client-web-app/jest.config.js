module.exports = {
  name: 'airline-client-web-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/airline-client-web-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
