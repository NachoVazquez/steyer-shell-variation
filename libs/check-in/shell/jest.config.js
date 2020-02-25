module.exports = {
  name: 'check-in-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
