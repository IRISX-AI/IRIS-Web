import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../core/ImageComparsion";

export function IRISCompare() {
  return (
    <ImageComparison
      className="aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
      enableHover
    >
      <ImageComparisonImage
        src="/compare/after.png"
        alt="Motion Primitives Dark"
        position="left"
      />
      <ImageComparisonImage
        src="/compare/before.png"
        alt="Motion Primitives Light"
        position="right"
      />
      <ImageComparisonSlider className="bg-white" />
    </ImageComparison>
  );
}
