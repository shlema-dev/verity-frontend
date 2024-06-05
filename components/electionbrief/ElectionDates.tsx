const ElectionDates: React.FC = () => {
  return (
    <div className="mt-8 pb-12 border-b border-primary-6">
      <h2 className="mt-8 text-3xl font-medium text-gray-12 text-center">
        Important Election Dates
      </h2>
      <ul className="mt-8">
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">June 2024: </b> The final states will
            hold their <b>presidential primary contests.</b>
          </p>
        </li>
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">September 16, 2024: </b> The first{" "}
            <b>general election presidential debate</b> will take place in San
            Marcos, TX.
          </p>
        </li>
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">October 1, 2024: </b> Tune in for the
            second <b>general election presidential debate</b> in Petersburg,
            VA.
          </p>
        </li>
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">October 9, 2024: </b> The third{" "}
            <b>general election presidential debate</b> is scheduled in Salt
            Lake City, UT.
          </p>
        </li>
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">November 5, 2024: </b>{" "}
            <b>General Election Day</b> across the United States.
          </p>
        </li>
        <li className="mb-6 text-center text-gray-12">
          <p>
            <b className="text-primary-11">January 6, 2025: </b> the{" "}
            <b>formal counting of electoral votes </b>
            and announcement of results.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ElectionDates;
