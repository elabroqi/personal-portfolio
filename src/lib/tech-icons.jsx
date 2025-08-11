import {
  SiAnaconda, SiAmazonaws, SiExpress, SiNextdotjs, SiNodedotjs,
  SiReact, SiTailwindcss, SiThreedotjs, SiUnity
} from "react-icons/si";

const frameworks = [
  { name: "Anaconda", Icon: SiAnaconda },
  { name: "AWS", Icon: SiAmazonaws },
  { name: "Express", Icon: SiExpress },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "NodeJS", Icon: SiNodedotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "ThreeJS", Icon: SiThreedotjs },
  { name: "Unity", Icon: SiUnity },
];

<div className="flex flex-wrap justify-center gap-6">
  {frameworks.map(({ name, Icon }) => (
    <div key={name} className="flex flex-col items-center hover:scale-110 transition-transform">
      <div className="w-14 h-14 rounded-full grid place-items-center
                      bg-primary/10 ring-1 ring-primary/20 text-primary">
        <Icon className="w-7 h-7" aria-label={name} /> {/* follows text-primary */}
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{name}</span>
    </div>
  ))}
</div>
