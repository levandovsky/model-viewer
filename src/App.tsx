import {
  CameraControls,
  Environment,
  Html,
  OrthographicCamera,
  Plane,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { ARButton as ThreeARButton, XR } from "@react-three/xr";
import CamControls from "camera-controls";
import { useEffect, useRef, useState } from "react";
import { Scene } from "three";
import { USDZExporter } from "three/examples/jsm/exporters/USDZExporter";
import "./App.css";
import { Model as DeluxeXl, NodeConfig } from "./models/deluxe-xl/Scene";

const {
  ACTION: { TOUCH_DOLLY_ROTATE, TOUCH_ROTATE, NONE },
} = CamControls;

const isXRSupported = async (mode: XRSessionMode) => {
  if (!navigator.xr) return false;

  return navigator.xr.isSessionSupported(mode);
};
const angleToRadian = (angle: number) => angle * (Math.PI / 180);

const exporter = new USDZExporter();

const shownNodes: NodeConfig[] = [
  {
    name: "deluxe_base_wood_0",
    material: "plastic_white",
  },
  {
    name: "deluxe_walls_full_wood_0",
    material: "wood_oak",
  },
  {
    name: "deluxe_interior_full_plastic_white_0",
    material: "plastic_white",
  },
  {
    name: "deluxe_step_size_wood_0",
    material: "wood_oak",
  },
];

const viewUSDZ = async (scene: Scene) => {
  const result = await exporter.parse(scene);
  const blob = new Blob([result], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  if (!a.relList.supports("ar")) return;

  a.style.display = "none";
  a.href = url;
  a.rel = "ar";
  a.download = "deluxe-xl.usdz";
  const imageElement = document.createElement("img");
  a.appendChild(imageElement);
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

const ARButton = () => {
  const scene = useThree((s) => s.scene);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const supported = await isXRSupported("immersive-ar");
      setSupported(supported);
    })();
  }, []);

  if (supported) {
    return <ThreeARButton />;
  }

  return (
    <Html as="div" wrapperClass="test">
      <button
        onClick={() => {
          viewUSDZ(scene);
        }}
      >
        View AR
      </button>
    </Html>
  );
};

export const App = () => {
  return (
    <main>
      <section
        style={{
          width: "100%",
          height: "50%",
        }}
      >
        <Canvas shadows>
          <color attach="background" args={["#fff"]} />
          <XR>
            <ARButton />
            <directionalLight
              castShadow
              position={[2, 10, 3]}
              intensity={1}
              shadow-mapSize={1024}
            />
            <DeluxeXl shownNodes={shownNodes} />
            <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              args={[500, 500]}
            >
              <shadowMaterial transparent opacity={0.4} />
            </Plane>
            <OrthographicCamera />
            <CameraControls
              maxPolarAngle={angleToRadian(80)}
              minPolarAngle={angleToRadian(0)}
              polarAngle={angleToRadian(60)}
              azimuthAngle={angleToRadian(-120)}
              maxZoom={1}
              minZoom={1}
              distance={4}
              maxDistance={4}
              minDistance={3}
              dragToOffset={false}
              touches={{
                one: TOUCH_ROTATE,
                two: TOUCH_DOLLY_ROTATE,
                three: NONE,
              }}
            />
            <Environment preset="warehouse" />
          </XR>
        </Canvas>
      </section>
    </main>
  );
};
