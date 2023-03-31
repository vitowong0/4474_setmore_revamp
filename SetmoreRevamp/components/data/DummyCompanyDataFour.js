import Overview from '../models/CompanyOverview';
import salon1 from '../../assets/images/place-C1.png';
import salon2 from '../../assets/images/place-C2.png';
import salon3 from '../../assets/images/place-C3.png';
import salon4 from '../../assets/images/place-C4.png';
import heartoutline from '../../assets/icons/white_heart_outline.png';

export const COMPANYDATAFOUR = [
  new Overview(
    1,
    'Company3',
    salon1,
    'blah blah description 1',
    4.5,
    ['Manicure', 'Pedicure', 'Nail Art'],
    ['Sarah', 'Emily', 'Alex'],
    ['9:00 AM', '11:00 AM', '1:00 PM'],
    ['30 minutes', '30 minutes', '1 hour'],
    ['$40', '$40', '$75'],
    heartoutline,
  ),
  new Overview(
    2,
    'Serenity Spa',
    salon2,
    'blah blah description 2',
    4.0,
    ['Facial', 'Massage', 'Body Treatment'],
    ['Jessica', 'Bella', 'John'],
    ['10:00 AM', '12:45 PM', '2:30 PM'],
    ['30 minutes', '1 hour', '2 hours'],
    ['$50', '$75', '$225'],
    heartoutline,
  ),
  new Overview(
    3,
    'Skin  Medical Aesthetics',
    salon3,
    'blah blah description 3',
    4.3,
    ['Hydra Facial', 'PRP', 'Cool Peel'],
    ['Sae Eun', 'Alyssa', 'Rachel'],
    ['10:30 AM', '12:15 PM', '2:55 PM'],
    ['1 hour', '1 hour', '45 minutes'],
    ['$150', '$425', '$425'],
    heartoutline,
  ),
  new Overview(
    4,
    "Vito's Mystery Restaurant",
    salon4,
    "enjoy vito's delicious meat for free",
    4.3,
    ['Facial', 'Massage', 'Back Breaking'],
    ['Vito'],
    ['12:30 AM', '1:15 AM', '2:55 AM'],
    ['15 minutes', '25 minutes', '1 hour'],
    ['$0', '$0', '$0'],
    heartoutline,
  ),
];