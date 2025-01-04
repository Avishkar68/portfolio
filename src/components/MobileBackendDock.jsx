import { SiNodedotjs , SiExpress, SiMongodb, SiTensorflow , SiPython } from "react-icons/si";
const APPS = [
  { name: "Node.js", icon: <SiNodedotjs  className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Mongoose", icon: <SiMongodb className="text-green-500" /> },
  { name: "TensorFlow.js", icon: <SiTensorflow className="text-yellow-500" /> },
];

export default function MobileBackendDock() {
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
