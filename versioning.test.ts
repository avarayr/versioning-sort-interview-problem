import { expect } from 'chai'
import 'mocha'

import { sortVersions } from './versioning'

it('should sort correctly numbered versions', () => {
  const versions = ['0.2.0', '3.1.2', '0.1.6', '5.0.0'];
  const output = ['5.0.0', '3.1.2', '0.2.0', '0.1.6'];
  expect(sortVersions(versions)).to.deep.eq(output);
});

it('should sort correctly numbered versions with different lengths', () => {
  const versions = [
    '1.3.0.9',
    '0.2.0',
    '3.1.2',
    '0.1.6',
    '5.0.0',
    '3.3.3.3',
    '3.3.3.3.3',
    '3.10',
    '0.2.0',
  ]

  const output = [
    '5.0.0',
    '3.3.3.3.3',
    '3.3.3.3',
    '3.1.2',
    '3.10',
    '1.3.0.9',
    '0.2.0',
    '0.2.0',
    '0.1.6',
  ]

  expect(sortVersions(versions)).to.deep.equal(output)
})
