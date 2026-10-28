// FAQ content. One entry per category: `label` drives the left-hand menu, `questions`
// drive the accordion shown when that menu item is active. Add or remove categories
// freely — the layout adapts to the array length.
//
// placeholderAnswer is rendered under every question until real support copy exists.
// Write the answers here first, then swap `questions` to objects of
// { question, answer } and read item.answer in FaqBrowser.jsx.

export const placeholderAnswer =
  'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.'

export const faqCategories = [
  {
    id: 'enrollment',
    label: 'Enrollment and registration',
    questions: [
      'How do I enroll in an online course?',
      'What are the benefits of online learning?',
      'Are there any prerequisites for enrolling in online courses?',
      'What should I do if I forget my password?',
      'Can I enroll in multiple courses at once?',
    ],
  },
  {
    id: 'technical',
    label: 'Technical requirements',
    questions: [
      'What kind of internet connection do I need?',
      'Can I use the learning website offline?',
      'How do I enable or disable cookies in my browser?',
      'Does the learning website support multiple languages?',
      'Can I use a VPN to access the learning website?',
    ],
  },
  {
    id: 'assessments',
    label: 'Assessments and grading',
    questions: [
      'How is my performance assessed in the courses?',
      'When will I receive my grades?',
      'Can I see my grades for each assessment?',
      'How do I know what I need to improve on?',
      'What happens if I miss an assessment or deadline?',
    ],
  },
  {
    id: 'support',
    label: 'Communication and support',
    questions: [
      'How can I contact support if I have a problem?',
      'How do I report technical issues with the website?',
      'Can I access support through live chat?',
      'How do I access the knowledge base or help center?',
      'How can I escalate a support issue if it is not resolved?',
    ],
  },
  {
    id: 'certificates',
    label: 'Certificates and degrees',
    questions: [
      'Are the certificates and degrees accredited?',
      'Can I earn a certificate or degree entirely online?',
      'How can I verify the authenticity of my certificate or degree?',
      'Can I request a physical copy of my certificate or degree?',
      'What should I do if I lose my certificate or degree?',
    ],
  },
]
