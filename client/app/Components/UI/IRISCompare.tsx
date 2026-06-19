import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../core/ImageComparsion"; // Ensure this path matches your project structure

export function IRISCompare() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#10b981]/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
      {/* ── Floating Labels so users know what they are looking at ── */}
      <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-md bg-black/60 border border-white/10 backdrop-blur-md pointer-events-none">
        <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Legacy (v1.3)
        </span>
      </div>

      <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-md bg-[#10b981]/20 border border-[#10b981]/30 backdrop-blur-md pointer-events-none">
        <span className="text-[10px] sm:text-xs font-mono text-[#10b981] font-bold uppercase tracking-widest">
          Current Release
        </span>
      </div>

      <ImageComparison className="aspect-[16/10] w-full" enableHover>
        <ImageComparisonImage
          src="/compare/before.png"
          alt="IRIS v1.3 Legacy"
          position="left"
        />
        <ImageComparisonImage
          src="/compare/after.png"
          alt="IRIS Current Release"
          position="right"
        />

        {/* ── Upgraded Slider with Custom Drag Handle ── */}
        <ImageComparisonSlider className="bg-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.8)] w-[2px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black/90 border border-[#10b981] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] backdrop-blur-md">
            {/* Double Arrow Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 9l-4 3 4 3" />
              <path d="M16 9l4 3-4 3" />
            </svg>
          </div>
        </ImageComparisonSlider>
      </ImageComparison>
    </div>
  );
}
