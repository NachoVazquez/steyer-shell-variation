module.exports = {
  name: 'booking-feature-passenger-info',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-passenger-info',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
