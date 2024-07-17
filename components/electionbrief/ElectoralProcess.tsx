import Reveal from "../ui/animation/reveal";

const ElectoralProcess: React.FC = () => {
  return (
    <section className="mt-8 pb-12 border-b border-primary-6">
      <Reveal delay={0}>
        <h2 className="mt-8 text-3xl font-medium text-gray-12 text-center">
          Navigating the Electoral Process
        </h2>
        <p className="mt-8 text-xl text-center text-gray-11">
          Understanding the complexities of the U.S. Presidential election is
          essential for every voter. Here&apos;s a brief overview of the key
          steps in the electoral journey.
        </p>

        <ul className="mt-8">
          <li className="mb-6 text-center text-gray-12">
            <p>
              <b className="text-primary-11">Primaries and Caucuses: </b> These
              are state-level elections that determine the nominees from the
              major political parties. While primaries are straightforward
              elections, caucuses are local gatherings where party members
              discuss and vote for their preferred candidate.
            </p>
          </li>

          <li className="mb-6 text-center text-gray-12">
            <p>
              <b className="text-primary-11">National Conventions: </b> Each
              major party holds a national convention to officially nominate
              their presidential candidate. Delegates from each state, chosen
              during the primaries and caucuses, vote for the nominee.
            </p>
          </li>

          <li className="mb-6 text-center text-gray-12">
            <p>
              <b className="text-primary-11">General Election: </b> Held every
              four years on the first Tuesday in November, where citizens vote
              for their preferred candidate. However, they are technically
              voting for their group of electors to back the candidate.
            </p>
          </li>

          <li className="mb-6 text-center text-gray-12">
            <p>
              <b className="text-primary-11">Electoral College: </b> The
              president is not elected directly by the people but by electors in
              the Electoral College. Each state gets a certain number of
              electors based on its representation in Congress. A candidate
              needs <b>270 of the 538</b> electoral votes to win.
            </p>
          </li>
        </ul>
      </Reveal>
    </section>
  );
};

export default ElectoralProcess;
