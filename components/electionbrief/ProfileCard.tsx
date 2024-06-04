import { Policy } from "@/types/types";
import Image, { StaticImageData } from "next/image";

interface ProfileProps {
  img: StaticImageData;
  name: string;
  title?: string;
  party: string;
  policies: Policy[];
  background: string;
  link: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  img,
  name,
  title,
  party,
  policies,
  background,
  link,
}) => {
  return (
    <div className="relative mt-12 py-8 px-4 lg:px-8 w-full border border-primary-8 rounded-xl flex flex-col lg:flex-row lg:gap-8 items-center lg:items-start text-center lg:text-start bg-primary-2 dark:bg-gradient-to-t dark:from-primary-2 dark:to-primary-4">
      <div className="lg:self-center">
        <div className="relative w-48 h-48 border-2 border-primary-8 rounded-full">
          <Image
            src={img}
            placeholder="blur"
            alt="Profile picture"
            quality={100}
            fill
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 600px, 1200px"
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <p className="mt-4 text-xl text-primary-12 font-semibold lg:text-center">
          {name}
        </p>
        <p className="text-md text-primary-11 lg:text-center">{party}</p>
        <p className="text-md text-primary-11 lg:text-center">{title}</p>
      </div>
      <div>
        <p className="mt-8 text-xl text-primary-12 font-semibold">Policies</p>
        <ul className="mt-2">
          {policies.map((policy, index) => (
            <li key={index} className="mb-4">
              <p className="text-primary-12">
                <b>{policy.title}: </b>
                {policy.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mt-8 mb-2 text-xl text-primary-12 font-semibold">
          Background
        </p>
        <p className="text-primary-11 mb-4">{background}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:absolute lg:bottom-8 lg:right-16 text-primary-12"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
