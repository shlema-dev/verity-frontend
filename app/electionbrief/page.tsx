import Candidates from "@/components/electionbrief/Candidates";
import ElectionBriefHero from "@/components/electionbrief/ElectionBriefHero";
import ElectionDates from "@/components/electionbrief/ElectionDates";
import ElectoralProcess from "@/components/electionbrief/ElectoralProcess";
import StatesToWatch from "@/components/electionbrief/StatesToWatch";
import VotingResources from "@/components/electionbrief/VotingResources";

export default function ElectionBriefPage() {
  return (
    <div className="max-w-7xl mb-12 flex flex-col w-full h-full">
      <ElectionBriefHero />
      <Candidates />
      <ElectionDates />
      <ElectoralProcess />
      <StatesToWatch />
      <VotingResources />
    </div>
  );
}
