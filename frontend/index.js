function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const navElem = document.createElement('nav')
    links.forEach(link => {
      const aElem = document.createElement('a')
      aElem.href = link.href
      aElem.textContent = link.textContent
      aElem.title = link.title
      navElem.appendChild(aElem)
    })
    return navElem
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    function* gen() {
      yield learner.fullName
      yield `Learner ID: ${learner.id}`
      yield `Date of Birth: ${learner.dateOfBirth}`
      yield `Favorite Language: ${languages.find(x => x.id == learner.favLanguage).name}`
    }
    const card = document.createElement('div')
    card.classList.add('learner-card')
    const cardData = gen()

    for (let i = Object.entries(learner).length; i > 0; i--) {
      const pElem = document.createElement('p')
      pElem.textContent = cardData.next().value
      card.appendChild(pElem)
    }
    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    const secElem = document.querySelector('section')
    learners.forEach(learner => {
      secElem.appendChild(buildLearnerCard(learner, languages))
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')

    const companyInfo = document.createElement('div')
    const socialMedia = document.createElement('div')
    const copyright = document.createElement('div')
    companyInfo.classList.add('company-info')
    socialMedia.classList.add('social-media')

    const companyName = document.createElement('p')
    const address = document.createElement('p')
    const contactEmail = document.createElement('p')
    
    const emailLink = document.createElement('a')

    companyName.classList.add('company-name')
    address.classList.add('address')
    contactEmail.classList.add('contact-email')

    emailLink.href = `mailto:${footerData.contactEmail}`
    
    companyName.textContent = footerData.companyName
    address.textContent = footerData.address
    contactEmail.textContent = 'Email: '
    emailLink.textContent = footerData.contactEmail
    copyright.textContent = `\u00A9 BLOOM INSTITUTE OF TECHNOLOGY ${new Date().getFullYear()}`

    Object.entries(footerData.socialMedia).forEach(media => {
      const aElem = document.createElement('a')
      aElem.textContent = media[0].charAt(0).toUpperCase() + media[0].substring(1).toLowerCase()
      aElem.href = media[1]
      socialMedia.appendChild(aElem)
    })

    footer.appendChild(companyInfo)
    footer.appendChild(socialMedia)
    footer.appendChild(copyright)
    companyInfo.appendChild(companyName)
    companyInfo.appendChild(address)
    companyInfo.appendChild(contactEmail)
    contactEmail.appendChild(emailLink)
    
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  const learnerList = document.querySelectorAll('section div')
  learnerList.forEach(learner => {
    learner.addEventListener('click', event => {
      if (event.currentTarget.classList.contains('active')) {
        return
      }
      if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active')
      }
      event.currentTarget.classList.add('active')
    }, true)
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
