import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

export default function Gallery() {
  const imageModules = import.meta.glob(
    "/public/images/*.{jpg,jpeg,png,webp,gif}"
  );

  // Extract filenames from the paths
  const imageFilenames = Object.keys(imageModules)
    .map((path) => path.replace("/public/images/", ""))
    .sort(() => Math.random() - 0.5);

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {imageFilenames.map((filename) => (
        <div key={filename} className="break-inside-avoid mb-4">
          <img
            src={`${import.meta.env.BASE_URL}images/${filename}`}
            alt={filename}
            className="w-full rounded shadow-md hover:shadow-lg transition-shadow duration-200"
          />
        </div>
      ))}
    </div>
  );
}
