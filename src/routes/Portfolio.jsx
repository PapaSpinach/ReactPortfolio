import computer from '../assets/computer.jpg';
import portfolio from '../assets/portfolio.png';
import workdayScheduler from '../assets/workday-scheduler.png';
import noteTaker from '../assets/note-taker.png';
import soJournal from '../assets/sojournal.png';
import regex from '../assets/regex.jpg';
import Project from '../components/Project';

const portfolioItems = [
  {
    label: 'Portfolio',
    link: 'https://github.com/PapaSpinach/Aaron-Dev-Portfolio',
    image: portfolio,
  },
  {
    label: 'Workday Scheduler',
    link: 'https://github.com/PapaSpinach/3rd-Party-API-Work-Scheduler',
    image: workdayScheduler,
  },
  {
    label: 'README Generator',
    link: 'https://github.com/PapaSpinach/ReadMe-Gen-Node-Challenge',
    image: computer,
  },
  {
    label: 'Note Taker',
    link: 'https://xprsnotetaker-19c0d554db79.herokuapp.com/',
    image: noteTaker,
  },
  {
    label: 'soJournal',
    link: 'https://sojournal603-f40ec6e39edd.herokuapp.com/login',
    image: soJournal,
  },
  {
    label: 'Regex Tutorial',
    link: 'https://gist.github.com/PapaSpinach/05db20e410ad68469d17e8956d1543ab',
    image: regex,
  },
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <section className="grid grid-cols-2 gap-4">
        {portfolioItems.map((item) => {
          return (
            <Project key={item.link} label={item.label} link={item.link} image={item.image} />
          );
        })}
      </section>
    </div>
  );
}
