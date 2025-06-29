export default function GalleryCard({ item }) {
  let sptags = item.galSearchKeyword.includes(",")
    ? item.galSearchKeyword.split(",")
    : [item.galSearchKeyword];

  sptags = sptags.map((kw) => (
    <span
      key={kw}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold to-gray-700 mr-2 mb-2"
    >
      {kw}
    </span>
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="h-48 w-full"
        src={
          item.galWebImageUrl.includes("http:")
            ? item.galWebImageUrl.replace("http:", "https:")
            : item.galWebImageUrl
        }
        alt={item.galTitle}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{item.galTitle}</div>
        <div className="text-gray-700">{item.galPhotographyLocation}</div>
        <div className="px-6 pt-4 pb-2 ">{sptags}</div>
      </div>
    </div>
  );
}
