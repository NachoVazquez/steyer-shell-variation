module.exports = {
  name: 'flight-tracking-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/flight-tracking/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
