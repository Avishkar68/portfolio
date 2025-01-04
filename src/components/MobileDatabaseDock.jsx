import { SiMongodb, SiMysql, SiPostgresql, SiRedis, SiOracle } from "react-icons/si";

const APPS = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "Oracle", icon: <SiOracle className="text-orange-500" /> },  // Added Oracle logo
];

export default function MobileDatabaseDock() {
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
