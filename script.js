document.addEventListener('DOMContentLoaded', () => {
  const itinerary = {
    'Friday, October 3, 2025': [
      '3:00 PM: Land at Reagan National (DCA)',
      '3:30 PM: Check in at Courtyard by Marriott Foggy Bottom',
      '4:30–7:00 PM: Walk the Lincoln, Vietnam Veterans, Korean War, and WWII Memorials',
      '6:30 PM: Dinner at Founding Farmers DC',
      '8:15 PM: White House North Lawn photos',
      '9:00 PM: Stroll back toward hotel & wind down'
    ],
    'Saturday, October 4, 2025': [
      '7:00–8:00 AM: Breakfast at hotel',
      '9:00–11:00 AM: Smithsonian National Museum of American History',
      '11:15 AM–1:00 PM: National Air & Space Museum',
      '1:00 PM: Lunch at Mitsitam Café (American Indian Museum)',
      '2:00–3:30 PM: U.S. Holocaust Memorial Museum',
      '4:00–6:00 PM: White House West Wing tour',
      '6:30 PM: Dinner at Old Ebbitt Grill',
      'Evening: Optional stroll through Penn Quarter or Georgetown waterfront'
    ],
    'Sunday, October 5, 2025': [
      '6:00 AM: Wake and quick breakfast',
      '6:45 AM: Uber to DCA',
      '8:00 AM: Depart for Omaha',
      '10:30 AM (CDT): Arrive back in Omaha'
    ]
  };

  const container = document.getElementById('itinerary');

  Object.entries(itinerary).forEach(([day, events]) => {
    const section = document.createElement('section');
    section.className = 'day';

    const heading = document.createElement('h2');
    heading.textContent = day;
    section.appendChild(heading);

    const list = document.createElement('ul');

    events.forEach((event) => {
      const item = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        item.classList.toggle('completed', checkbox.checked);
      });
      item.appendChild(checkbox);

      const span = document.createElement('span');
      span.textContent = event;
      item.appendChild(span);

      list.appendChild(item);
    });

    section.appendChild(list);
    container.appendChild(section);
  });
});

