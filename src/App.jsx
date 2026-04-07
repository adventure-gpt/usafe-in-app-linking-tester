const links = [
  'usafeus://',
  'usafeus://find_help',
  'usafeus://angel_drink',
  'usafeus://need_help_now',
  'usafeus://ad_menu',
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          USAFE In-App Links
        </h1>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={link}
                className="block text-blue-600 hover:text-blue-800 underline text-lg break-all"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
