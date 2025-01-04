import { FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const APPS = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
];

export default function MobileDock() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4 bg-transperent p-4 rounded-lg">
      {APPS.map((app, index) => (
        <div
          key={index}
          className="aspect-square w-12 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <span className="text-2xl">{app.icon}</span>
        </div>
      ))}
    </div>
  );
}
