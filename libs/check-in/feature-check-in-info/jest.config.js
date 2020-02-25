module.exports = {
  name: 'check-in-feature-check-in-info',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/feature-check-in-info',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
