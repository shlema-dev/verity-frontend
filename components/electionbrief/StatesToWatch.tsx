const StatesToWatch: React.FC = () => {
  return (
    <section className="mt-8 pb-12 border-b border-primary-6">
      <h2 className="mt-8 text-3xl font-medium text-gray-12 text-center">
        Battleground States to Watch
      </h2>
      <p className="mt-8 text-xl text-center text-gray-11">
        The outcome in these key states can pivot the election results:
      </p>

      <ul className="mt-8 flex flex-wrap gap-8 justify-center">
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Arizona</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Nevada</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Florida</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Georgia</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Michigan</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">North Carolina</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Pennsylvania</b>
          </p>
        </li>

        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">Wisconsin</b>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default StatesToWatch;
