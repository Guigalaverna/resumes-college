async function getResumesList() {
  const resumeList = await axios.get("/resumes-college/resume-list.json");

  return resumeList.data;
}

async function populatePage() {
  const listElement = document.querySelector("ul");

  const resumeList = await getResumesList();

  resumeList.map(resumeItem => {
    const listItemElement = document.createElement("li");

    listItemElement.innerHTML = `<a target='_blank' href="/resumes-college/${resumeItem.source}">${resumeItem.subject} - ${resumeItem.name}</a>`;

    listElement.appendChild(listItemElement);
  });
}

async function changeFilter() {
  const filter = document.querySelector("select").value;

  if (filter !== "null") {
    const resumeList = await getResumesList();
    const listElement = document.querySelector("ul");

    listElement.innerHTML = "";

    const newResumeList = resumeList.filter(i => {
      if (i.subject !== filter) {
        return false;
      } else {
        return true;
      }
    });

    newResumeList.map(resumeItem => {
      const listItemElement = document.createElement("li");

      listItemElement.innerHTML = `<a href="/resumes-college/${resumeItem.source}">${resumeItem.subject} - ${resumeItem.name}</a>`;

      listElement.appendChild(listItemElement);
    });
  } else {
    populatePage();
  }
}

populatePage();
