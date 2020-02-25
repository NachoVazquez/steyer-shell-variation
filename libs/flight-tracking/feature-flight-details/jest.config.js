module.exports = {
  name: 'flight-tracking-feature-flight-details',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/flight-tracking/feature-flight-details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
