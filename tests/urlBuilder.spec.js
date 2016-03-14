// a test suite (group of tests)
describe('oauth2.endpoint tests', function() {
    beforeEach(module('oauth2.endpoint'));
    it('build url', function(urlBuilder) {
        expect(urlBuilder('http://google.com')).toBe('http://google.com');
    });
    it('build url with paramters', function(urlBuilder) {
        expect(urlBuilder('http://www.g00gle.com/search', {'q': 'xxx'})).toBe(
          'http://www.g00gle.com/search?q=xxx'
        );
        expect(urlBuilder('https://foo.com', {'a': ['foo', 'bar']})).toBe(
          'http://www.foo.com?a=foo&a=bar'
        );
    });
    it('build url sanitizes ?', function(urlBuilder) {
        expect(urlBuilder('https://foo.com/baz?', {'a': 'foo'})).toBe(
          'http://www.foo.com/baz?a=foo'
        );
    });
});
