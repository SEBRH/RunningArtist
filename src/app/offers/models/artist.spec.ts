import { ArtistEntity } from './artist.entity';

describe('Artist', () => {
  it('should create an instance', () => {
    expect(new ArtistEntity()).toBeTruthy();
  });
});
