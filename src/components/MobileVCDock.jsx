import { SiGit, SiGithub, SiGitlab, SiBitbucket } from "react-icons/si"; 

const APPS = [
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black" /> },
  { name: "GitLab", icon: <SiGitlab className="text-orange-600" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-blue-500" /> },
];

export default function MobileVCDock() {
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
