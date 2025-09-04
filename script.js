document.addEventListener('DOMContentLoaded', () => {
  const itinerary = [
    {
      day: 'Friday, October 3, 2025',
      events: [
        { time: '3:00 PM', description: 'Land at Reagan National Airport (DCA)' },
        { time: '3:30 PM', description: 'Check in at Courtyard by Marriott Foggy Bottom and take a short breather' },
        { time: '4:30 PM', description: 'Slow walk through Lincoln, Vietnam Veterans, Korean War, and WWII Memorials; enjoy golden-hour views and Reflecting Pool reflections near sunset (~7:00 PM)' },
        { time: '6:30 PM', description: 'Dinner at Founding Farmers DC (hearty protein dishes)' },
        { time: '8:15 PM', description: 'White House North Lawn photos with the building lit against the sky' },
        { time: '9:00 PM', description: 'Stroll back toward hotel, optional dessert, wind down—skip the coffee stroll' }
      ]
    },
    {
      day: 'Saturday, October 4, 2025',
      events: [
        { time: '7:00–8:00 AM', description: 'Breakfast at hotel' },
        { time: '9:00–11:00 AM', description: 'Smithsonian National Museum of American History (including the Star-Spangled Banner)' },
        { time: '11:15 AM–1:00 PM', description: 'National Air & Space Museum (Wright Flyer, Apollo 11, aviation galleries)' },
        { time: '1:00 PM', description: 'Lunch at Mitsitam Café in the National Museum of the American Indian (bison chili, salmon, etc.)' },
        { time: '2:00–3:30 PM', description: 'U.S. Holocaust Memorial Museum (reflective visit)' },
        { time: '4:00–6:00 PM', description: 'White House West Wing tour—the centerpiece of the trip' },
        { time: '6:30 PM', description: 'Dinner at Old Ebbitt Grill (historic DC establishment)' },
        { time: 'Evening', description: 'Optional stroll through Penn Quarter or along the Georgetown waterfront after a 7–9 mile day' }
      ]
    },
    {
      day: 'Sunday, October 5, 2025',
      events: [
        { time: '6:00 AM', description: 'Wake and quick breakfast at the hotel' },
        { time: '6:45 AM', description: 'Uber to Reagan National Airport' },
        { time: '8:00 AM', description: 'Depart for Omaha' },
        { time: '10:30 AM CDT', description: 'Arrive back in Omaha and wrap up the weekend' }
      ]
    }
  ];

  const container = document.getElementById('itinerary');

  itinerary.forEach((dayInfo) => {
    const section = document.createElement('section');
    section.className = 'day';

    const heading = document.createElement('h2');
    heading.textContent = dayInfo.day;
    section.appendChild(heading);

    const table = document.createElement('table');
    table.className = 'schedule';

    dayInfo.events.forEach(({ time, description }) => {
      const row = document.createElement('tr');

      const timeCell = document.createElement('td');
      timeCell.className = 'time';
      timeCell.textContent = time;
      row.appendChild(timeCell);

      const descCell = document.createElement('td');
      descCell.textContent = description;
      row.appendChild(descCell);

      table.appendChild(row);
    });

    section.appendChild(table);
    container.appendChild(section);
  });
});
