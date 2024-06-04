// eslint-disable-next-line react/prop-types
export default function Project({ label, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      key={link}
      style={{ backgroundImage: `url("${image}")` }}
      className="bg-cover bg-center aspect-square rounded overflow-hidden"
    >
      <div className="p-8 bg-neutral/80 text-neutral-content h-full w-full hover:bg-neutral/70 transition-colors">
        <h3 className="text-xl font-bold">{label}</h3>
      </div>
    </a>
  );
}
