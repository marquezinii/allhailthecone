import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
const AMBER = "#f2a836";
const PURPLE = "#9472d1";
const INK = "#111019";

interface MotionProgress {
  current: number;
}

interface SceneProps {
  active: boolean;
  lowFidelity: boolean;
  progress: MotionProgress;
}
function StarField({ lowFidelity }: Pick<SceneProps, "lowFidelity">) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = lowFidelity ? 80 : 180;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 4.2 + ((index * 37) % 90) / 30;
      const angle = index * 2.399963;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = ((index * 53) % 150) / 15 - 5;
      values[index * 3 + 2] = Math.sin(angle) * radius - 3;
    }

    return values;
  }, [lowFidelity]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.012;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f7e5c1"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
      />
    </points>
  );
}

const bands = [
  { y: -1.16, bottom: 1.12, top: 0.94, color: PURPLE },
  { y: -0.5, bottom: 0.95, top: 0.77, color: AMBER },
  { y: 0.16, bottom: 0.78, top: 0.6, color: PURPLE },
  { y: 0.82, bottom: 0.61, top: 0.43, color: AMBER },
  { y: 1.48, bottom: 0.44, top: 0.26, color: PURPLE },
] as const;

function GuidanceStar() {
  const shape = useMemo(() => {
    const star = new THREE.Shape();
    star.moveTo(0, 1);
    star.lineTo(0.12, 0.16);
    star.lineTo(0.72, 0);
    star.lineTo(0.12, -0.16);
    star.lineTo(0, -1);
    star.lineTo(-0.12, -0.16);
    star.lineTo(-0.72, 0);
    star.lineTo(-0.12, 0.16);
    star.closePath();
    return star;
  }, []);

  return (
    <group position={[0, 2.72, 0]}>
      <mesh scale={[0.32, 0.42, 0.32]}>
        <shapeGeometry args={[shape]} />
        <meshBasicMaterial color="#fff4cd" side={THREE.DoubleSide} />
      </mesh>
      <pointLight color={AMBER} intensity={5} distance={2.5} />
    </group>
  );
}

const gates = [
  { position: [-2.4, 1.2, -1.4], color: PURPLE, scale: 0.17 },
  { position: [2.35, 0.55, -1.8], color: AMBER, scale: 0.13 },
  { position: [-1.8, -1.45, -1.15], color: AMBER, scale: 0.11 },
  { position: [1.95, -1.1, -1.4], color: PURPLE, scale: 0.15 },
] as const;

function GateNetwork({
  active,
  lowFidelity,
  progress,
}: Pick<SceneProps, "active" | "lowFidelity" | "progress">) {
  const network = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!network.current || !active) return;
    const damping = Math.min(delta, 0.05);
    network.current.rotation.y = THREE.MathUtils.damp(
      network.current.rotation.y,
      -0.18 + state.pointer.x * 0.12 + progress.current * 0.18,
      2.5,
      damping,
    );
    network.current.rotation.x = THREE.MathUtils.damp(
      network.current.rotation.x,
      state.pointer.y * -0.05,
      2.5,
      damping,
    );
  });

  return (
    <group ref={network} position={[0, 0, -1.2]}>
      <mesh rotation={[Math.PI / 2.7, 0.42, -0.22]}>
        <torusGeometry args={[2.8, 0.008, 6, 96]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.34} />
      </mesh>
      <mesh rotation={[Math.PI / 2.25, -0.58, 0.36]}>
        <torusGeometry args={[2.55, 0.009, 6, 96]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.28} />
      </mesh>
      {gates.map((gate, index) => (
        <group key={gate.position.join("-")} position={gate.position}>
          <mesh scale={gate.scale} rotation={[0.4, 0.1, Math.PI / 4]}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={gate.color}
              emissive={gate.color}
              emissiveIntensity={1.1}
              metalness={0.75}
              roughness={0.18}
            />
          </mesh>
          {!lowFidelity && index < 2 && (
            <pointLight color={gate.color} intensity={3} distance={1.2} />
          )}
        </group>
      ))}
    </group>
  );
}

function ConeRelic({ active, progress }: Omit<SceneProps, "lowFidelity">) {
  const assembly = useRef<THREE.Group>(null);
  const cone = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Mesh>(null);
  const crown = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    if (!assembly.current || !cone.current || !halo.current || !crown.current)
      return;

    const damping = Math.min(delta, 0.05);
    const pointerX = active ? state.pointer.x : 0;
    const pointerY = active ? state.pointer.y : 0;
    const scroll = progress.current;

    assembly.current.rotation.x = THREE.MathUtils.damp(
      assembly.current.rotation.x,
      pointerY * 0.12 - scroll * 0.08,
      4,
      damping,
    );
    assembly.current.rotation.y = THREE.MathUtils.damp(
      assembly.current.rotation.y,
      pointerX * 0.22 + scroll * 0.3,
      4,
      damping,
    );
    assembly.current.position.y = THREE.MathUtils.damp(
      assembly.current.position.y,
      scroll * 0.34,
      3,
      damping,
    );
    assembly.current.position.z = THREE.MathUtils.damp(
      assembly.current.position.z,
      scroll * 0.55,
      3,
      damping,
    );

    if (active) {
      cone.current.rotation.y += delta * 0.08;
      halo.current.rotation.z += delta * 0.16;
      crown.current.rotation.y -= delta * 0.1;
    }

    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(
        light.current.position.x,
        pointerX * 3.2,
        5,
        damping,
      );
      light.current.position.y = THREE.MathUtils.damp(
        light.current.position.y,
        2.4 + pointerY * 1.8,
        5,
        damping,
      );
    }
  });

  return (
    <group ref={assembly}>
      <pointLight ref={light} color={AMBER} intensity={32} distance={11} />
      <pointLight position={[-3, -1, 2]} color={PURPLE} intensity={24} />
      <group ref={cone}>
        <mesh position={[0, -1.66, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.55, 0.28, 1.7]} />
          <meshStandardMaterial
            color={PURPLE}
            metalness={0.58}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0, -1.47, 0]} castShadow>
          <boxGeometry args={[2.16, 0.14, 1.42]} />
          <meshStandardMaterial
            color={AMBER}
            emissive={AMBER}
            emissiveIntensity={0.16}
            metalness={0.72}
            roughness={0.21}
          />
        </mesh>
        {bands.map((band) => (
          <mesh key={band.y} position={[0, band.y, 0]} castShadow>
            <cylinderGeometry
              args={[band.top, band.bottom, 0.67, 64, 1, false]}
            />
            <meshStandardMaterial
              color={band.color}
              emissive={band.color}
              emissiveIntensity={band.color === AMBER ? 0.14 : 0.08}
              metalness={0.54}
              roughness={0.28}
            />
          </mesh>
        ))}
      </group>

      <mesh ref={halo} position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.75, 0.035, 12, 96]} />
        <meshStandardMaterial
          color={AMBER}
          emissive={AMBER}
          emissiveIntensity={1.25}
        />
      </mesh>
      <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2.35, 0.35, 0.2]}>
        <torusGeometry args={[2.25, 0.012, 8, 96]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.52} />
      </mesh>

      <group ref={crown} position={[0, 2.04, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.065, 12, 48]} />
          <meshStandardMaterial
            color={AMBER}
            metalness={0.8}
            roughness={0.16}
          />
        </mesh>
        {[-0.28, -0.14, 0, 0.14, 0.28].map((x, index) => (
          <mesh
            key={x}
            position={[x, index === 2 ? 0.28 : 0.2, 0]}
            scale={[0.65, index === 2 ? 1.2 : 0.9, 0.65]}
          >
            <coneGeometry args={[0.11, 0.5, 12]} />
            <meshStandardMaterial
              color={AMBER}
              emissive={AMBER}
              emissiveIntensity={0.25}
              metalness={0.8}
              roughness={0.18}
            />
          </mesh>
        ))}
      </group>

      <GuidanceStar />
    </group>
  );
}

function SanctuaryScene(props: SceneProps) {
  useFrame((state, delta) => {
    const pointerX = props.active ? state.pointer.x : 0;
    const pointerY = props.active ? state.pointer.y : 0;
    const damping = Math.min(delta, 0.05);
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      pointerX * 0.28,
      3,
      damping,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      0.22 + pointerY * 0.16 + props.progress.current * 0.2,
      3,
      damping,
    );
    state.camera.lookAt(0, 0.15, 0);
  });

  return (
    <>
      <ambientLight color="#6f5ca7" intensity={1.35} />
      <directionalLight position={[3, 5, 5]} color="#fff0cf" intensity={2.1} />
      <StarField lowFidelity={props.lowFidelity} />
      <GateNetwork
        active={props.active}
        lowFidelity={props.lowFidelity}
        progress={props.progress}
      />
      <ConeRelic active={props.active} progress={props.progress} />
      <mesh position={[0, -2.12, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.15, 72]} />
        <meshStandardMaterial
          color={INK}
          emissive={PURPLE}
          emissiveIntensity={0.13}
          metalness={0.5}
          roughness={0.7}
          transparent
          opacity={0.9}
        />
      </mesh>
    </>
  );
}
interface CanvasProps extends SceneProps {
  onReady: () => void;
}

export default function SacredConeCanvas({
  active,
  lowFidelity,
  progress,
  onReady,
}: CanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 8.8], fov: 38, near: 0.1, far: 40 }}
      dpr={lowFidelity ? 1 : [1, 1.5]}
      frameloop={active ? "always" : "demand"}
      gl={{
        alpha: true,
        antialias: !lowFidelity,
        powerPreference: "high-performance",
      }}
      shadows={!lowFidelity}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.18;
        onReady();
      }}
    >
      <SanctuaryScene
        active={active}
        lowFidelity={lowFidelity}
        progress={progress}
      />
    </Canvas>
  );
}
