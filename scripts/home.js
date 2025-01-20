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
});


const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]

// DOM elements
const coursesContainer = document.querySelector('.courses');
const totalCreditsElement = document.getElementById('total-credits');

// Function to render courses
function renderCourses(filter) {
  coursesContainer.innerHTML = '';

  // Filter courses based on the filter type
  const filteredCourses = courses.filter((course) =>
    filter === 'all' ? true : course.subject === filter
  );

  // Map through courses and generate HTML
  filteredCourses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add(
      'course-card',
      course.completed ? 'completed' : 'incomplete'
    );

    courseCard.textContent = `${course.subject} ${course.number}`;
    coursesContainer.appendChild(courseCard);
  });

  // Calculate total credits dynamically
  const totalCredits = filteredCourses.reduce(
    (sum, course) => sum + course.credits,
    0
  );
  totalCreditsElement.textContent = totalCredits;
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

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.filters button');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => {
              btn.classList.remove('selected');
          });
          this.classList.add('selected');
      });
  });
});