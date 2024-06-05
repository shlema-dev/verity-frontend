const VotingResources: React.FC = () => {
  return (
    <section className="mt-8 pb-12">
      <h2 className="mt-8 text-3xl font-medium text-gray-12 text-center">
        Voting Resources
      </h2>
      <p className="mt-8 text-xl text-center text-gray-11">
        Elections are the cornerstone of democracy, and your participation is
        crucial. Ensure your voice is heard by staying informed and exercising
        your right to vote!
      </p>

      <ul className="mt-8">
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Registration: </b> Confirm your
            registration at{" "}
            <a
              href="https://www.vote.org/?"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-9"
            >
              Vote.org
            </a>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Voting Options: </b> Explore early
            voting, absentee ballots, and in-person voting.
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Deadlines: </b> Stay informed about
            registration and ballot request deadlines.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default VotingResources;
