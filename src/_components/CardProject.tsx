interface CardProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
  date: string;
  technologies: string[];
}

export default function CardProject({
  name,
  description,
  image,
  date,
  technologies,
}: CardProjectProps) {
  return (
    <div
      className="flex flex-col justify-center text-container bg-card rounded-2xl p-4 border-2 border-transparent hover:border-2 
    hover:border-emerald-600 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-105"
    >
      <img src={image} alt={name} className="w-full h-full rounded-t-md" />
      <div className="text-left mt-4 pb-4">
        <div className="flex justify-between mb-4">
          <div className="text-xs text-gray-300">{date}</div>
          <div className="flex gap-2">
            {technologies.map((technology) => (
              <img
                src={`/image/${technology.toLowerCase()}-primary.svg`}
                alt={technology}
                className="w-5 h-5 fill-primary"
              />
            ))}
          </div>
        </div>
        <p className="text-md font-bold mb-2">{name}</p>
        <div className="text-sm text-gray-300">{description}</div>
      </div>
    </div>
  );
}
