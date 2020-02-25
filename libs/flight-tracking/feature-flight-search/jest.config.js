module.exports = {
  name: 'flight-tracking-feature-flight-search',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/flight-tracking/feature-flight-search',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
