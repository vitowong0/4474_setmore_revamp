import Overview from '../models/BookedAppointmentsOverview';

import apt1 from '../../assets/images/place-C1.png';
import apt2 from '../../assets/images/place-C2.png';
import apt3 from '../../assets/images//capy.png';

export const BOOKEDAPPOINTMENTS = [
  new Overview(1, 'The Xiao', 'April 8, 2023', '2:00 AM', apt1),
  new Overview(2, "Vito's Salon", 'April 8, 2023', '3:00 AM', apt2),
  new Overview(3, 'Capybara Land', 'May 7th, 2023', '1:00 PM', apt3),
];
