module.exports = {
  name: 'booking-feature-seat-listing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-seat-listing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
