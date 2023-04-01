import Overview from '../models/NearbyCompanyOverview';

import salon1 from '../../assets/images/place-C1.png';
import salon2 from '../../assets/images/place-C2.png';
import salon3 from '../../assets/images//place-C3.png';
import salon4 from '../../assets/images//place-C4.png';
import salon5 from '../../assets/images/place-C5.png';
import salon6 from '../../assets/images//place-C6.png';
import salon7 from '../../assets/images//place-C7.png';

export const NEARBYCOMPANYDATA = [
  new Overview(
    1,
    'Lisbon Spa',
    salon1,
    '4.5 ',
    ' 120 reviews',
    '1 km • London',
    '$$$ ',
    '• Nail Salon',
    ['9:00 AM', '4:45 PM', '7:00 PM'],
  ),
  new Overview(
    2,
    'The Xiao',
    salon2,
    '1.2 ',
    ' 2 reviews',
    '1.2 km • London',
    '$$$ ',
    '• Body Salon',
    ['9:30 AM', '3:45 PM', '5:00 PM'],
  ),
  new Overview(
    3,
    'Matrix Spa',
    salon3,
    '4.5 ',
    ' 44 reviews',
    '1.5 km • London',
    '$$ ',
    '• Japanese Spa',
    ['12:15 PM', '3:35 PM', '5:20 PM'],
  ),
  new Overview(
    4,
    "Vito's Salon",
    salon4,
    '5.0 ',
    ' 469 reviews',
    '3.4 km • London',
    '$ ',
    '• Romantic Salon',
    ['9:00 AM', '4:45 PM', '7:55 PM'],
  ),
  new Overview(
    5,
    'La Casa',
    salon5,
    '4.4 ',
    ' 95 reviews',
    '3.7 km • London',
    '$$$ ',
    '• Italian Restaurant',
    ['9:00 AM', '11:45 AM', '4:55 PM'],
  ),
  new Overview(
    6,
    'Ristorante',
    salon6,
    '4.6 ',
    ' 92 reviews',
    '4.2 km • London',
    '$$$ ',
    '• French Cuisine',
    ['10:00 AM', '1:45 PM', '5:55 PM'],
  ),
  new Overview(
    7,
    'Secret Store',
    salon7,
    '4.8 ',
    ' 75 reviews',
    '6.9 km • London',
    '$$$ ',
    '• Exotic Adventure',
    ['9:00 AM', '4:45 PM', '7:55 PM'],
  ),
];
