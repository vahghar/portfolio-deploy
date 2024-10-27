import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "cplusplus",
  "react",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "python",
  "numpy",
  "pandas",
  "swagger",
  "bun",
  "mongodb",
  "nodedotjs"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
