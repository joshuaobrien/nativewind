import plugin from "tailwindcss/plugin";

export const groupIsolate = plugin(function ({ addVariant }) {
  addVariant("group-isolate-hover", "&:group-isolate-hover");
  addVariant("group-isolate-active", "&:group-isolate-active");
  addVariant("group-isolate-focus", "&:group-isolate-focus");
});