module.exports = {
  name: 'check-in-feature-ticket-finder',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/feature-ticket-finder',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
