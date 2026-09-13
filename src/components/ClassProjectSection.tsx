import { SectionHeader } from './SectionHeader';

const featureGroups = [
  {
    title: 'Accounts',
    text: 'The registration and login screens let users create an account, sign in, and access information specific to an account after authenticating.',
  },
  {
    title: 'Movie Browsing',
    text: 'The movie listing page shows the available movies, helps users search for movies by title, and displays detailed pages with information about individual movies along with their reviews.',
  },
  {
    title: 'Cart and Orders',
    text: 'Users can add movies to a shopping cart, update or remove cart items, clear the cart, complete an order, and later view the previous orders.',
  },
  {
    title: 'Reviews',
    text: 'Authenticated users can create reviews, view reviews on movie pages, edit or delete their own reviews, and report inappropriate reviews.',
  },
  {
    title: 'Administration',
    text: 'Django’s admin tools allow for management of users, movies, reviews, and orders from an administrator account and dashboard.',
  },
  {
    title: 'Responsive / General Pages',
    text: 'The site includes an About page with information and was styled to work across different screen sizes.',
  },
];

const processNotes = [
  {
    title: 'Planning and Requirements',
    text: 'I started by reviewing the required user stories and identifying the main parts of the application: accounts, movies, reviews, cart and order functionality, and administration.',
  },
  {
    title: 'Incremental Development',
    text: 'I developed the application feature by feature instead of trying to build everything at once. I followed the textbook and tested each major feature as it was added.',
  },
  {
    title: 'Debugging and Testing',
    text: 'I repeatedly ran the application locally and tested normal user functions such as registration, browsing movies, cart operations, orders, and review management as I was developing them. This helped catch issues that were not obvious from just reading the code alone.',
  },
  {
    title: 'Deployment',
    text: 'After the application worked locally, I deployed it to PythonAnywhere so it could be accessed through a normal web browser.',
  },
];

export function ClassProjectSection() {
  return (
    <section id="class-project" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Class Project"
          title="Class Project - GT Movies Store"
          description="A completed Django web application for browsing movies, placing orders, and managing movie reviews."
        />

        <div className="mt-10 space-y-8">
          <div className="glass-panel p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Project Overview</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">What the app does</h3>
            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              GT Movies Store is a Django web application I developed for my CS2340 class. It allows users to browse movies,
              search by title, view movie information and reviews, manage a shopping cart, place orders, and create,
              edit, or delete their own reviews. I built it with Python and Django and deployed it using PythonAnywhere.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Python', 'Django', 'HTML', 'CSS', 'PythonAnywhere'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Screens and Required User Stories</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">How the app meets requirements</h3>
            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              The required user stories were handled through the main screens of the application. The site was organized around account pages, movie browsing, cart and order management,
              review management, general information pages, and admin tools.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featureGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-base font-semibold text-white">{group.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{group.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Development Process</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">How I developed the project</h3>
              <div className="mt-6 space-y-4">
                {processNotes.map((note) => (
                  <div key={note.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-base font-semibold text-white">{note.title}</h4>
                    <p className="mt-2 leading-7 text-slate-300">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Video Demonstration</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  This walkthrough demonstrates the main user flows and features of the completed GT Movies Store
                  application.
                </p>
                <video
                  className="mt-5 aspect-video w-full rounded-3xl border border-white/10 bg-black/30 object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/gt-movies-store-demo.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="glass-panel p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanSignal">Project Links</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a href="https://tdewangan1011.pythonanywhere.com/" className="btn-primary">
                    Live GT Movies Store
                  </a>
                  <a
                    href="https://github.com/tdewangan1011/moviesstore"
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
