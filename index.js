async function getResumesList() {
    const resumeList = await axios.get('/resumes-college/resume-list.json')

    return resumeList.data
}

async function populatePage() {
    const listElement = document.querySelector('ul')

    const resumeList = await getResumesList()

    resumeList.map(resumeItem => {
        const listItemElement = document.createElement('li')

        listItemElement.innerHTML = `<a href="${resumeItem.source}">${resumeItem.subject} - ${resumeItem.name}</a>`

        listElement.appendChild(listItemElement)
    })

    
}

populatePage()