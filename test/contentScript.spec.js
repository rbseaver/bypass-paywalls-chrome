const { LocationMock } = require('@jedmao/location');
const { matchDomain, pageContains } = require('../src/js/contentScript');
const { location: savedLocation } = window;

describe('Utility functions', () => {
  beforeAll(() => {
    delete window.location;
  });

  beforeEach(() => {
    window.location = new LocationMock(
      'http://www.washingtonpost.com/article/dsflafsd'
    );
  });

  afterAll(() => {
    window.location = savedLocation;
  });

  test('should match domain', () => {
    const domainMatch = matchDomain('washingtonpost.com');

    expect(domainMatch).toBe(true);
  });
});
