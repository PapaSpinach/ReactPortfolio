import me from '../assets/me.jpg';

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">About Me</h1>

      <section className="flex flex-col gap-8 md:flex-row">
        <img src={me} className="rounded-lg" />

        <article className="space-y-4">
          <p>
            Aspiring software developer with a passion for creating innovative
            and efficient solutions. With a strong foundation in programming
            languages like JavaScript, React, and more. I thrive on solving
            complex problems and continuously learning new technologies. My UNH
            coding class has equipped me with a solid understanding of software
            development principles, and my experience in building web and mobile
            applications has honed my skills in both front-end and back-end
            development.
          </p>

          <p>
            I am eager to contribute to dynamic projects, collaborate with
            talented teams, and make a meaningful impact through technology.
          </p>
        </article>
      </section>
    </div>
  );
}
