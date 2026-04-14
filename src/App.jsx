const sections = [
  {
    title: 'Friendly Aliases',
    links: [
      'usafeus://find_help',
      'usafeus://angel_drink',
      'usafeus://helpful_answers',
      'usafeus://resources',
      'usafeus://questions',
      'usafeus://national_resources',
    ],
  },
  {
    title: 'Direct Page IDs',
    links: [
      'usafeus://home',
      'usafeus://ad_menu',
      'usafeus://ad_map',
      'usafeus://need_help_now',
      'usafeus://need_help_now_additional',
      'usafeus://what_now',
      'usafeus://training',
      'usafeus://helpful_answers_categories',
    ],
  },
  {
    title: 'Helpful Answers Categories',
    links: [
      'usafeus://helpful_answers_sexual_assault',
      'usafeus://helpful_answers_sexual_harassment',
      'usafeus://helpful_answers_stalking',
      'usafeus://helpful_answers_dating_violence',
      'usafeus://helpful_answers_hazing',
      'usafeus://helpful_answers_alcohol_and_substance_use',
      'usafeus://helpful_answers_sextortion_and_solicitation',
      'usafeus://helpful_answers_trafficking_and_grooming',
      'usafeus://helpful_answers_social_withdrawal',
    ],
  },
  {
    title: 'Home Screen Trays',
    links: [
      'usafeus://time_to_leave',
      'usafeus://expect_me',
    ],
  },
  {
    title: 'Dotted Paths',
    links: [
      'usafeus://campus.find_help',
      'usafeus://campus.angel_drink',
      'usafeus://campus.helpful_answers',
      'usafeus://campus.helpful_answers_sexual_assault',
      'usafeus://campus.national_resources',
    ],
  },
  {
    title: 'Find Help Resource Categories',
    links: [
      'usafeus://campus.health-service',
      'usafeus://campus.safety-police',
      'usafeus://campus.title-ix',
      'usafeus://campus.crisis-center',
      'usafeus://campus.counseling-center',
      'usafeus://campus.confidential-advisor',
      'usafeus://campus.fsl-resources',
      'usafeus://campus.community-resources',
      'usafeus://campus.safe-spaces',
      'usafeus://campus.help-a-friend',
    ],
  },
  {
    title: 'Plan My Night',
    links: [
      'usafeus://plan_it',
      'usafeus://track_it',
      'usafeus://check_it',
    ],
  },
  {
    title: 'National Resources Sub-Pages',
    links: [
      'usafeus://campus.national_resources.Sexual_Violence_Resources',
      'usafeus://campus.national_resources.Suicide_Prevention',
      'usafeus://campus.national_resources.Multi-Cultural_Resources',
      'usafeus://campus.national_resources.Transgender_Resources',
      'usafeus://campus.national_resources.LGBQ_Resources',
      'usafeus://campus.national_resources.Male_Survivor_Resources',
      'usafeus://campus.national_resources.Hazing_Resources',
      'usafeus://campus.national_resources.Veteran_Resources',
      'usafeus://campus.national_resources.Sexual_Exploitation',
      'usafeus://campus.national_resources.Gambling_Resources',
      'usafeus://campus.national_resources.Alcohol_and_Substance_Use_Resources',
    ],
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          USAFE In-App Link Tester
        </h1>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link}
                      className="block text-blue-600 hover:text-blue-800 underline break-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
