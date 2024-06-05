import JoeBiden from "@/public/joe-biden.webp";
import DonaldTrump from "@/public/donald-trump.webp";
import Kennedy from "@/public/kennedy.webp";
import { Policy } from "@/types/types";
import ProfileCard from "@/components/electionbrief/ProfileCard";

const Candidates: React.FC = () => {
  const bidenReadMore =
    "https://ballotpedia.org/Joe_Biden_presidential_campaign,_2024?";
  const bidenBackground =
    "Joe Biden has served 36 years as a Senator from Delaware, with significant roles in the Senate Judiciary and Foreign Relations Committees. He is also the former Vice-President under Barack Obama.";
  const bidenPolicies: Policy[] = [
    {
      title: "Climate Change",
      desc: "Advocates for the U.S. to achieve a 100% clean energy economy and reach net-zero emissions no later than 2050.",
    },
    {
      title: "Healthcare",
      desc: "Aims to protect and build on the Affordable Care Act. Proposes lowering the eligibility age for Medicare and offering a public health insurance option.",
    },
    {
      title: "Economic Policy",
      desc: "Focuses on rebuilding the economy through the 'Build Back Better' plan, emphasizing support for American industries, labor unions, and increasing the federal minimum wage to $15 an hour.",
    },
  ];

  const trumpReadMore = "https://www.donaldjtrump.com/issues?";
  const trumpBackground =
    "Donald Trump, a real estate developer and businessman, expanded his brand to over 500 companies. He entered politics with a book outlining his political views and became the 45th President of the United States in 2016.";
  const trumpPolicies: Policy[] = [
    {
      title: "Immigration",
      desc: "Restores the 'Remain in Mexico' program and introduces merit-based immigration to protect American labor and promote American values.",
    },
    {
      title: "Healthcare",
      desc: "Commits to ending surprise medical billing, increasing transparency in pricing, and reducing the cost of prescription drugs and health insurance premiums, while protecting Medicare, Social Security, and patients with pre-existing conditions.",
    },
    {
      title: "Economic Policy",
      desc: "Develops a 4-year national reshoring plan to reduce reliance on China for essential medical and national security goods, aims to revitalize manufacturing prowess, and focuses on domestic energy production.",
    },
  ];

  const kennedyReadMore = "https://www.kennedy24.com/policies?";
  const kennedyBackground =
    "Robert F. Kennedy Jr. has a career rooted in environmental law and activism, known for leading a nonprofit for clean water and fighting corporate and government corruption. With a long family history in politics, he carries the legacy of his uncle, President JFK.";
  const kennedyPolicies: Policy[] = [
    {
      title: "Immigration",
      desc: "Works towards securing the southern border and cooperating with other nations to manage the flow of migrants, focusing on lawful immigration infrastructure.",
    },
    {
      title: "Environment",
      desc: "Seeks to halt corporate influence on regulatory bodies, improve wildlife habitat protections, and implement a comprehensive plan to manage and protect water resources.",
    },
    {
      title: "Healthcare",
      desc: "Advocates for disrupting the pharmaceutical and financial industries' hold on healthcare regulation and starts a national fitness and chronic disease prevention initiative.",
    },
  ];

  return (
    <section>
      <h2 className="mt-12 text-3xl font-medium text-gray-12 text-center">
        Meet the Candidates
      </h2>

      <ProfileCard
        img={JoeBiden}
        name="Joe Biden"
        title="46th President"
        party="Democratic Party"
        policies={bidenPolicies}
        background={bidenBackground}
        link={bidenReadMore}
      />

      <ProfileCard
        img={DonaldTrump}
        name="Donald Trump"
        title="45th President"
        party="Republican Party"
        policies={trumpPolicies}
        background={trumpBackground}
        link={trumpReadMore}
      />

      <ProfileCard
        img={Kennedy}
        name="Robert F. Kennedy"
        title=""
        party="Independent Party"
        policies={kennedyPolicies}
        background={kennedyBackground}
        link={kennedyReadMore}
      />

      <div className="mt-24 border-b border-primary-6" />
    </section>
  );
};

export default Candidates;
