import { NameParser } from "./nameParser.service";

describe('parseNames', function() {
  let nameParser: NameParser;

  beforeEach(() => {
    nameParser = new NameParser();
  })
  
  it('should parse names correctly', () => {
    expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
  })
  
})