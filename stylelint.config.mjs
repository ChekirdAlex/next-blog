import propertyGroups from "stylelint-config-recess-order/groups";

const sectionStarts = new Set([
  "position",
  "inline-size",
  "font",
  "background",
]);

/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    "@stylistic/color-hex-case": "upper",
    "declaration-empty-line-before": null,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: sectionStarts.has(group.properties[0])
        ? "always"
        : "never",
      noEmptyLineBetween: true,
    })),
  },
};

export default config;
