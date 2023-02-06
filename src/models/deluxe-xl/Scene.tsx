import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import sceneUrl from "./scene-transformed.glb?url";

type GLTFResult = GLTF & {
  nodes: {
    deluxe_base_wood_0: THREE.Mesh;
    deluxe_heater_wall_metal_0: THREE.Mesh;
    deluxe_heater_wall_glass_0: THREE.Mesh;
    deluxe_rings_metal_0: THREE.Mesh;
    deluxe_wide_steps_wood_0: THREE.Mesh;
    deluxe_buttons_metal_0: THREE.Mesh;
    deluxe_buttons_button_0: THREE.Mesh;
    deluxe_valve_type02_metal_0: THREE.Mesh;
    deluxe_valve_type02_metal_yellow_0: THREE.Mesh;
    deluxe_valve_type02_metal_black_0: THREE.Mesh;
    deluxe_valve_type02_plastic_red_0: THREE.Mesh;
    deluxe_chimney_metal_0: THREE.Mesh;
    deluxe_chimney_heat_guard_metal_0: THREE.Mesh;
    deluxe_rings_full_metal_0: THREE.Mesh;
    deluxe_step_size_wood_0: THREE.Mesh;
    deluxe_heater_cover_wood_0: THREE.Mesh;
    deluxe_top_heater_cover_wood_0: THREE.Mesh;
    deluxe_poly_cover_on_side_polypropylene_liner_dark_grey_0: THREE.Mesh;
    deluxe_heater_external_large_metal_0: THREE.Mesh;
    deluxe_heater_external_large_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_medium_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_medium_metal_0: THREE.Mesh;
    deluxe_heater_external_small_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_small_metal_0: THREE.Mesh;
    deluxe_heater_external_small_heat_guard_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_heat_guard_metal_0: THREE.Mesh;
    deluxe_heater_external_large_heat_guard_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_black_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_black_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_metal_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_black_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_black_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_glass_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_black_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_glass_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_black_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_metal_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_glass_0: THREE.Mesh;
    deluxe_heater_metal_0: THREE.Mesh;
    deluxe_heater_wood_0: THREE.Mesh;
    deluxe_inside_chimney_metal_0: THREE.Mesh;
    deluxe_inside_chimney_heat_guard_metal_0: THREE.Mesh;
    deluxe_shelve_ornament_wood_0: THREE.Mesh;
    deluxe_metal_holder_metal_0: THREE.Mesh;
    deluxe_interior_high_chair_plastic_white_0: THREE.Mesh;
    deluxe_interior_high_chair_metal_0: THREE.Mesh;
    deluxe_interior_high_chair_black_0: THREE.Mesh;
    deluxe_stir_shovel_on_side_stir_shovel_0: THREE.Mesh;
    deluxe_walls_full_wood_0: THREE.Mesh;
    deluxe_interior_full_plastic_white_0: THREE.Mesh;
    deluxe_interior_full_metal_0: THREE.Mesh;
    deluxe_interior_full_black_0: THREE.Mesh;
    deluxe_combined_massage_system_8x_metal_black_0: THREE.Mesh;
    deluxe_combined_massage_system_8x_plastic_green_0: THREE.Mesh;
    deluxe_combined_massage_system_8x_black_0: THREE.Mesh;
    deluxe_combined_massage_system_8x_metal_0: THREE.Mesh;
    deluxe_interior_chimney_sit_plastic_white_0: THREE.Mesh;
    deluxe_interior_chimney_sit_metal_0: THREE.Mesh;
    deluxe_interior_chimney_sit_black_0: THREE.Mesh;
    deluxe_top_cover_full_on_side_wood_0: THREE.Mesh;
    deluxe_cover_on_side_plastic_white_0: THREE.Mesh;
    deluxe_heater_external_large_90_metal_0: THREE.Mesh;
    deluxe_heater_external_large_90_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_small_90_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_small_90_metal_0: THREE.Mesh;
    deluxe_heater_external_large_heat_guard_90_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_heat_guard_90_metal_0: THREE.Mesh;
    deluxe_heater_external_small_heat_guard_90_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_90_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_90_black_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_90_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_90_black_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_90_metal_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_90_black_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_90_black_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_90_metal_0: THREE.Mesh;
    deluxe_heater_external_large_hatch_glass_90_glass_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_90_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_90_black_0: THREE.Mesh;
    deluxe_heater_external_medium_hatch_glass_90_glass_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_90_black_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_90_metal_0: THREE.Mesh;
    deluxe_heater_external_small_hatch_glass_90_glass_0: THREE.Mesh;
    deluxe_heater_external_medium_90_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_medium_90_metal_0: THREE.Mesh;
    deluxe_led_single_metal_0: THREE.Mesh;
    deluxe_led_single_plastic_green_0: THREE.Mesh;
    deluxe_led_single_glass_0: THREE.Mesh;
    deluxe_led_2x_on_sides_metal_0: THREE.Mesh;
    deluxe_led_2x_on_sides_plastic_green_0: THREE.Mesh;
    deluxe_led_2x_on_sides_glass_0: THREE.Mesh;
    deluxe_led_2x_on_wall_metal_0: THREE.Mesh;
    deluxe_led_2x_on_wall_plastic_green_0: THREE.Mesh;
    deluxe_led_2x_on_wall_glass_0: THREE.Mesh;
    deluxe_air_bubble_system_4x_metal_black_0: THREE.Mesh;
    deluxe_air_bubble_system_4x_plastic_green_0: THREE.Mesh;
    deluxe_air_bubble_system_4x_black_0: THREE.Mesh;
    deluxe_air_bubble_system_4x_metal_0: THREE.Mesh;
    deluxe_air_bubble_system_8x_metal_black_0: THREE.Mesh;
    deluxe_air_bubble_system_8x_plastic_green_0: THREE.Mesh;
    deluxe_air_bubble_system_8x_black_0: THREE.Mesh;
    deluxe_air_bubble_system_8x_metal_0: THREE.Mesh;
    deluxe_hydro_massage_system_6x_metal_black_0: THREE.Mesh;
    deluxe_hydro_massage_system_6x_plastic_green_0: THREE.Mesh;
    deluxe_hydro_massage_system_6x_black_0: THREE.Mesh;
    deluxe_hydro_massage_system_6x_metal_0: THREE.Mesh;
    deluxe_hydro_massage_system_4x_metal_black_0: THREE.Mesh;
    deluxe_hydro_massage_system_4x_plastic_green_0: THREE.Mesh;
    deluxe_hydro_massage_system_4x_black_0: THREE.Mesh;
    deluxe_hydro_massage_system_4x_metal_0: THREE.Mesh;
    deluxe_led_stripe_blue_led_light_blue_0: THREE.Mesh;
    deluxe_led_stripe_red_led_light_red_0: THREE.Mesh;
    deluxe_led_stripe_green_led_light_green_0: THREE.Mesh;
    deluxe_audio_system_audio_system_0: THREE.Mesh;
    deluxe_extended_inside_chimney_metal_0: THREE.Mesh;
    deluxe_combined_massage_system_6x_metal_black_0: THREE.Mesh;
    deluxe_combined_massage_system_6x_plastic_green_0: THREE.Mesh;
    deluxe_combined_massage_system_6x_black_0: THREE.Mesh;
    deluxe_combined_massage_system_6x_metal_0: THREE.Mesh;
    deluxe_combined_massage_system_10x_metal_black_0: THREE.Mesh;
    deluxe_combined_massage_system_10x_plastic_green_0: THREE.Mesh;
    deluxe_combined_massage_system_10x_black_0: THREE.Mesh;
    deluxe_combined_massage_system_10x_metal_0: THREE.Mesh;
    deluxe_c_type_stairs_wood_0: THREE.Mesh;
    deluxe_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_large_90_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_large_90_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_90_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_medium_90_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_small_90_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_small_90_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_large_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_large_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_medium_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_medium_extended_chimney_metal_0: THREE.Mesh;
    deluxe_heater_external_small_extended_chimney_pipe_black_plastic_0: THREE.Mesh;
    deluxe_heater_external_small_extended_chimney_metal_0: THREE.Mesh;
    dummy_material_blue_acrylic_liner_polypropylene_liner_blue_acrylic_0: THREE.Mesh;
    dummy_material_brown_acrylic_liner_polypropylene_liner_brown_acrylic_0: THREE.Mesh;
    dummy_material_wpc_brown_wpc_brown_0: THREE.Mesh;
    dummy_material_grey_acrylic_liner_polypropylene_liner_grey_acrylic_0: THREE.Mesh;
    dummy_material_wpc_grey_wpc_grey_0: THREE.Mesh;
    dummy_material_larch_wood_wood_larch_0: THREE.Mesh;
    dummy_material_oak_wood_wood_oak_0: THREE.Mesh;
    dummy_material_polypropylene_blue_wood_polypropylene_liner_blue_0: THREE.Mesh;
    dummy_material_polypropylene_grey_wood_polypropylene_liner_grey_0: THREE.Mesh;
    dummy_material_polypropylene_light_grey_wood_polypropylene_liner_light_grey_0: THREE.Mesh;
    dummy_material_polypropylene_white_wood_polypropylene_liner_white_0: THREE.Mesh;
    dummy_material_redcedar_wood_wood_redcedar_0: THREE.Mesh;
    dummy_material_spruce_wood_wood_spruce_0: THREE.Mesh;
    dummy_material_thermwood_wood_wood_thermwood_0: THREE.Mesh;
    dummy_material_white_acrylic_liner_polypropylene_liner_white_acrylic_0: THREE.Mesh;
    dummy_material_larch_deluxe_wood_larch_0: THREE.Mesh;
    dummy_material_spruce_deluxe_wood_spruce_0: THREE.Mesh;
    dummy_material_thermwood_deluxe_wood_thermwood_0: THREE.Mesh;
    dummy_material_redcedar_deluxe_wood_redcedar_0: THREE.Mesh;
    dummy_material_oak_deluxe_wood_oak_0: THREE.Mesh;
    dummy_material_polypropylene_white_deluxe_polypropylene_liner_white_0: THREE.Mesh;
    dummy_material_polypropylene_blue_deluxe_polypropylene_liner_blue_0: THREE.Mesh;
    dummy_material_polypropylene_grey_deluxe_polypropylene_liner_grey_0: THREE.Mesh;
  };
  materials: {
    wood: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    glass: THREE.MeshPhysicalMaterial;
    button: THREE.MeshStandardMaterial;
    metal_yellow: THREE.MeshStandardMaterial;
    metal_black: THREE.MeshStandardMaterial;
    plastic_red: THREE.MeshStandardMaterial;
    polypropylene_liner_dark_grey: THREE.MeshStandardMaterial;
    pipe_black_plastic: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    plastic_white: THREE.MeshStandardMaterial;
    stir_shovel: THREE.MeshStandardMaterial;
    plastic_green: THREE.MeshStandardMaterial;
    led_light_blue: THREE.MeshStandardMaterial;
    led_light_red: THREE.MeshStandardMaterial;
    led_light_green: THREE.MeshStandardMaterial;
    audio_system: THREE.MeshStandardMaterial;
    polypropylene_liner_blue_acrylic: THREE.MeshStandardMaterial;
    polypropylene_liner_brown_acrylic: THREE.MeshStandardMaterial;
    wpc_brown: THREE.MeshStandardMaterial;
    polypropylene_liner_grey_acrylic: THREE.MeshStandardMaterial;
    wpc_grey: THREE.MeshStandardMaterial;
    wood_larch: THREE.MeshStandardMaterial;
    wood_oak: THREE.MeshStandardMaterial;
    polypropylene_liner_blue: THREE.MeshStandardMaterial;
    polypropylene_liner_grey: THREE.MeshStandardMaterial;
    polypropylene_liner_light_grey: THREE.MeshStandardMaterial;
    wood_redcedar: THREE.MeshStandardMaterial;
    wood_spruce: THREE.MeshStandardMaterial;
    wood_thermwood: THREE.MeshStandardMaterial;
    polypropylene_liner_white_acrylic: THREE.MeshStandardMaterial;
  };
};

export type NodeConfig = {
  name: keyof GLTFResult["nodes"];
  material: keyof GLTFResult["materials"];
};

export function Model(
  props: JSX.IntrinsicElements["group"] & {
    shownNodes: NodeConfig[];
  }
) {
  const { nodes, materials } = useGLTF(sceneUrl) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100} rotation={[-Math.PI / 2, 0, 0]}>
          {props.shownNodes.map((config) => {
            const node = nodes[config.name];

            if (node) {
              return (
                <mesh
                  key={config.name}
                  geometry={node.geometry}
                  material={materials[config.material]}
                  castShadow
                  receiveShadow
                />
              );
            }

            return null;
          })}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(sceneUrl);
