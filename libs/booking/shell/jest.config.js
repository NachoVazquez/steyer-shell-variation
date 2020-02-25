module.exports = {
  name: 'booking-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
