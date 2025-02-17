document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navBar = document.querySelector(".nav-bar");

  menuButton.addEventListener("click", (e) => {
      e.preventDefault();
      const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
      menuButton.setAttribute("aria-expanded", !expanded);
      navBar.classList.toggle("show");
      menuButton.classList.toggle("show");
  });

  const courses = [
      {
          subject: 'CSE',
          number: 110,
          title: 'Introduction to Programming',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'This course will introduce students to programming...',
          technology: ['Python'],
          completed: true
      },
      {
          subject: 'WDD',
          number: 130,
          title: 'Web Fundamentals',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'This course introduces students to the World Wide Web...',
          technology: ['HTML', 'CSS'],
          completed: true
      },
      {
          subject: 'CSE',
          number: 111,
          title: 'Programming with Functions',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'CSE 111 students become more organized, efficient...',
          technology: ['Python'],
          completed: true
      },
      {
          subject: 'CSE',
          number: 210,
          title: 'Programming with Classes',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'This course will introduce the notion of classes and objects...',
          technology: ['C#'],
          completed: true
      },
      {
          subject: 'WDD',
          number: 131,
          title: 'Dynamic Web Fundamentals',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'This course builds on prior experience in Web Fundamentals...',
          technology: ['HTML', 'CSS', 'JavaScript'],
          completed: true
      },
      {
          subject: 'WDD',
          number: 231,
          title: 'Frontend Web Development I',
          credits: 2,
          certificate: 'Web and Computer Programming',
          description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
          technology: ['HTML', 'CSS', 'JavaScript'],
          completed: false
      }
  ];

  // DOM elements
  const coursesContainer = document.querySelector('.courses');
  const totalCreditsElement = document.getElementById('total-credits');
  const courseDetails = document.getElementById("course-details");

  // Function to render courses
  function renderCourses(filter) {
      coursesContainer.innerHTML = '';

      // Filter courses based on the selected filter
      const filteredCourses = courses.filter((course) =>
          filter === 'all' ? true : course.subject === filter
      );

      filteredCourses.forEach((course) => {
          const courseCard = document.createElement('div');
          courseCard.classList.add(
              'course-card',
              course.completed ? 'completed' : 'incomplete'
          );

          courseCard.textContent = `${course.subject} ${course.number}`;
          courseCard.addEventListener("click", () => displayCourseDetails(course)); // Attach modal function

          coursesContainer.appendChild(courseCard);
      });

      // Calculate total credits dynamically
      const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
      totalCreditsElement.textContent = totalCredits;
  }

  // Function to display course details in a modal
  function displayCourseDetails(course) {
      if (!courseDetails) return;

      // Set modal content
      courseDetails.innerHTML = `
          <button id="closeModal">❌</button>
          <h2>${course.subject} ${course.number}</h2>
          <h3>${course.title}</h3>
          <p><strong>Credits:</strong> ${course.credits}</p>
          <p><strong>Certificate:</strong> ${course.certificate}</p>
          <p>${course.description}</p>
          <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
      `;

      courseDetails.showModal();

      // Add event listener to close button
      document.getElementById("closeModal").addEventListener("click", () => {
          courseDetails.close();
      });

      // Close modal when clicking outside it
      courseDetails.addEventListener("click", (event) => {
          if (event.target === courseDetails) {
              courseDetails.close();
          }
      });
  }

  // Event listeners for filter buttons
  document.querySelectorAll('button[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');
          renderCourses(filter);
      });
  });

  // Initial render (show all courses)
  renderCourses('all');

  // Highlight selected filter button
  document.querySelectorAll('.filters button').forEach(button => {
      button.addEventListener('click', function () {
          document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('selected'));
          this.classList.add('selected');
      });
  });
});


// const courseDetails = document.querySelector('.course-details');

// function displayCourseDetails(course) {
//   courseDetails.innerHTML = '';
//   courseDetails.innerHTML = `
//   <button id="closeModal">❌</button>
//   <h2>${course.subject} ${course.number}</h2>
//   <h3>${course.title}</h3>
//   <p><strong>Credits</strong>: ${course.credits}</p>
//   <p><strong>Certificate</strong>: ${course.certificate}</p>
//   <p>${course.description}</p>
//   <p><strong>Technologies</strong>: ${course.technology.join(',')}</p>
//   `;
//   courseDetails.showModal();

//   closeModal.addEventListener('click', () => {
//     courseDetails.close();
//   });
// }
// courseCard.addEventListener('click', () => {
//   displayCourseDetails(course);
// });
