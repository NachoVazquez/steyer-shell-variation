module.exports = {
  name: 'shared-utils-transloco-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/utils-transloco-config',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
