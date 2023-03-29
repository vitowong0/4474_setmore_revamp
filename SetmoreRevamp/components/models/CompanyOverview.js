class CompanyOverview {
  constructor(
    id,
    name,
    image,
    description,
    rating,
    services,
    staff,
    timesAvailable,
    duration,
    cost,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.rating = rating;
    this.services = services;
    this.staff = staff;
    this.timesAvailable = timesAvailable;
    this.duration = duration;
    this.cost = cost;
  }
}

export default CompanyOverview;
