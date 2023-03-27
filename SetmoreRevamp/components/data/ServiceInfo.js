import ServiceInfoOverview from '../models/CompanyInfoOverview';

export const SERVICEINFO = [
  new ServiceInfoOverview(
    1,
    'Majesty Nail Bar',
    'majesty description',
    4.5,
    ['classic manicures', 'pedicures', 'gel extensions', 'acrylic extensions'],
    ['Jenna', 'Chloe', 'Kat'],
    ['9:00 AM', '12:15 PM', '3:45 PM'],
  ),
  new ServiceInfoOverview(
    2,
    'Serenity Spa',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada dolor. Maecenas id pretium nibh.',
    4.0,
    ['Facial', 'Massage', 'Body Treatment'],
    ['Jessica', 'Bella', 'John'],
    ['10am', '12pm', '2pm'],
  ),

  // add more services here
];
