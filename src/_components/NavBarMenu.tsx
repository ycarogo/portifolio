import { socialMidias } from "@/data/socialMidias";

export default function NavBarMenu() {
  return (
    <div className="fixed top-0 left-0 w-full bg-sidebar shadow-lg">
      <div className="flex justify-end p-4 pr-16 pl-16">
        {/* <div className="text-2xl font-bold ">Logo</div> */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {socialMidias.map((socialMidia) => (
              <li key={socialMidia.name}>
                <a
                  href={socialMidia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialMidia.image} alt={socialMidia.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
