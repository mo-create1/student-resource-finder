const resources = [
  {
    name: "Khan Academy",
    category: "tutoring",
    description: "Free online courses and tutorials in many subjects.",
    link: "https://www.khanacademy.org/"
  },
  {
    name: "Local Library",
    category: "library",
    description: "Access to free books, study spaces, and online resources.",
    link: "https://www.yourlibrarywebsite.com/"
  },
  {
    name: "ScholarshipPortal",
    category: "scholarships",
    description: "Find scholarships and financial aid opportunities.",
    link: "https://www.scholarshipportal.com/"
  },
  {
    name: "Teen Mental Health Hotline",
    category: "mental-health",
    description: "Free, confidential support for teens struggling with mental health.",
    link: "https://www.teenmentalhealth.org/"
  }
];

const resourceList = document.getElementById('resourceList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function displayResources(items) {
  resourceList.innerHTML = '';
  items.forEach(resource => {
    const card = document.createElement('div');
    card.classList.add('resource-card');
    card.innerHTML = `
      <h3>${resource.name}</h3>
      <p><strong>Category:</strong> ${resource.category.replace('-', ' ')}</p>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank">Visit</a>
    `;
    resourceList.appendChild(card);
  });
}

function filterResources() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  
  const filtered = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm) || 
                          resource.description.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  displayResources(filtered);
}

displayResources(resources);
searchInput.addEventListener('input', filterResources);
categoryFilter.addEventListener('change', filterResources);