export class ArtistEntity {
  id: number;
  title: string;
  description: string;
  points: number;
  businessId: number;

  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.points = 0;
    this.businessId = 0;
  }
}
