# Image Mapping Document

This document provides a comprehensive mapping of images from `src/assets/` to their references in the original HTML files located in `original-code/`. It includes mappings, discrepancies, and recommendations for organizing assets in the Astro structure.

## Referenced Images in Original HTML Files

The following images are referenced in the original HTML files. Paths are relative to the HTML files (e.g., `assets/...` corresponds to `src/assets/...` in the new structure).

### index.html
- `assets/favicon.svg` (link rel="icon")
- `assets/Kunal_Katre_Resume.pdf` (download link)
- `assets/kunal-katre-photo.webp` (hero image and about section)
- `assets/thumb-cowin.png` (commented out in project card)
- `assets/thumb-hr.png` (commented out in project card)
- `assets/thumb-sdk.png` (commented out in project card)

### cv.html
- `assets/favicon.svg` (link rel="icon")

### case-study-heart-rate.html
- `assets/favicon.svg` (link rel="icon")
- `assets/eka-logo.svg` (project logo)
- `assets/hr/instruction video-1.mp4` (video src and in storyboard)
- `assets/hr/result-final-dashboard.png` (video poster - note: file appears to be missing or misnamed; `result-final.png` exists)
- `assets/hr/research.png`
- `assets/hr/v1-step-1.png`
- `assets/hr/v1-measurement-screen.png`
- `assets/hr/v1-error-screen.png`
- `assets/hr/v1-result-screen.png`
- `assets/hr/journey-map.png`
- `assets/hr/FTUX-journey-map.webp`
- `assets/hr/RTUX-journey-map.webp`
- `assets/hr/storyboard-1.webp`
- `assets/hr/storyboard-2.webp`
- `assets/hr/pre-measure-concept-1.webp`
- `assets/hr/pre-measure-concept-2.webp`
- `assets/hr/pre-measure-final.webp`
- `assets/hr/error-handling-passive.webp`
- `assets/hr/error-handling-active.webp`
- `assets/hr/measuring-1.png`
- `assets/hr/measuring-2.png`
- `assets/hr/measuring-final.png`
- `assets/hr/60bpm.mp3` (audio src)
- `assets/hr/user-state-input.png`
- `assets/hr/heart-rate-state.png`
- `assets/hr/reading-confidence.png`
- `assets/hr/actionable-trends.png`
- `assets/hr/pro-active-triggers.png`
- `assets/hr/platform-integration.png`
- `assets/hr/monetization-pathways.png`
- `assets/hr/ecosystem-growth.png`
- `assets/hr/result-final.png`
- `assets/thumb-cowin.png` (next project thumbnail)
- `assets/hr/google-play-badge.svg` (store badge)

### case-study-eka-sdk.html
- `assets/sdk/sdk-architecture.png`
- `assets/sdk/theming-contract.png`

### case-study-cowin.html
- `assets/favicon.svg` (link rel="icon")
- `assets/eka-logo.svg` (project logo)
- `assets/cowin/cowin-hero-visual.png`
- `assets/cowin/fig2-failure-map.png`
- `assets/cowin/book-flow-1.png`
- `assets/cowin/download-flow-1.png`
- `assets/cowin/download-flow-2.png`
- `assets/thumb-hr.png` (next project thumbnail)

## Images Present in src/assets/

The following images exist in `src/assets/`:

### Root level
- `astro.svg`
- `background.svg`
- `eka-logo.svg`
- `favicon.svg`
- `Kunal_Katre_Resume.pdf`
- `kunal-katre-photo (2).webp`
- `kunal-katre-photo.webp`
- `thumb-cowin.png`
- `thumb-hr.png`

### cowin/ subdirectory
- `book-flow-1.png`
- `cowin-hero-visual.png`
- `download-flow-1.png`
- `download-flow-2.png`
- `fig2-failure-map.png`

### hr/ subdirectory
- `60bpm.mp3`
- `actionable-trends.png`
- `ecosystem-growth.png`
- `error-handling-active.webp`
- `error-handling-passive.webp`
- `fig3-before-after.png`
- `FTUX-journey-map.webp`
- `heart-rate-state.png`
- `instruction video-1.mp4`
- `introductory video.mp4`
- `journey-map.png`
- `measuring-1.png`
- `measuring-2.png`
- `measuring-final.png`
- `monetization-pathways.png`
- `platform-integration.png`
- `pre-measure-concept-1.webp`
- `pre-measure-concept-2.webp`
- `pre-measure-final.webp`
- `pro-active-triggers.png`
- `reading-confidence.png`
- `research.png`
- `result-final.png`
- `RTUX-journey-map.webp`
- `storyboard-1.webp`
- `storyboard-2.webp`
- `user-state-input.png`
- `user-state.png`
- `v1-error-screen.png`
- `v1-measurement-screen.png`
- `v1-result-screen.png`
- `v1-step-1.png`

### images/ subdirectory
- `cowin_app_mockup_1765625542009.png`
- `design_system_components_1765625577971.png`
- `heart_rate_monitor_ui_1765625561307.png`

## Public Directory Assets

### Images Present in public/assets/

#### Root level
- `astro.svg`
- `background.svg`
- `eka-logo.svg`
- `favicon.svg`
- `Kunal_Katre_Resume.pdf`
- `kunal-katre-photo (2).webp`
- `kunal-katre-photo.webp`
- `thumb-cowin.png`
- `thumb-hr.png`

#### company logo/ subdirectory
- `crio-1.png`
- `crio.jpeg`
- `eka.png`
- `eka.svg`
- `flipkart.zip`
- `flipkart/Flipkart/Flipkart_Symbol_0.svg`
- `flipkart/Flipkart/Flipkart_Symbol_1.png`
- `flipkart/Flipkart/Flipkart_Symbol_2.webp`
- `flipkart/Flipkart/Flipkart_Symbol_3.png`

#### cowin/ subdirectory
- `book-flow-1.png`
- `cowin-hero-visual.png`
- `download-flow-1.png`
- `download-flow-2.png`
- `fig2-failure-map.png`

#### hr/ subdirectory
- `60bpm.mp3`
- `actionable-trends.png`
- `ecosystem-growth.png`
- `error-handling-active.webp`
- `error-handling-passive.webp`
- `fig3-before-after.png`
- `FTUX-journey-map.webp`
- `heart-rate-state.png`
- `instruction video-1.mp4`
- `introductory video.mp4`
- `journey-map.png`
- `measuring-1.png`
- `measuring-2.png`
- `measuring-final.png`
- `monetization-pathways.png`
- `platform-integration.png`
- `pre-measure-concept-1.webp`
- `pre-measure-concept-2.webp`
- `pre-measure-final.webp`
- `pro-active-triggers.png`
- `reading-confidence.png`
- `research.png`
- `result-final.png`
- `RTUX-journey-map.webp`
- `storyboard-1.webp`
- `storyboard-2.webp`
- `user-state-input.png`
- `user-state.png`
- `v1-error-screen.png`
- `v1-measurement-screen.png`
- `v1-result-screen.png`
- `v1-step-1.png`

#### images/ subdirectory
- `cowin-mockup.png`
- `design-system-mockup.png`
- `heart-rate-mockup.png`

### Correspondence to Original HTML References

The `public/assets/` directory contains assets that directly correspond to the references in the original HTML files. The paths in HTML (e.g., `assets/favicon.svg`) map to `public/assets/favicon.svg` in the original project structure. Key correspondences include:

- Favicon and logos: `favicon.svg`, `eka-logo.svg`
- Profile images: `kunal-katre-photo.webp`
- Thumbnails: `thumb-cowin.png`, `thumb-hr.png`
- Case study assets: All files in `cowin/` and `hr/` subdirectories are referenced in their respective case study HTML files
- Resume: `Kunal_Katre_Resume.pdf`

### Discrepancies Between Available Assets in public/ and References in HTML

Similar to `src/assets/`, there are missing assets referenced in HTML but not present in `public/assets/`:

- `assets/thumb-sdk.png` (referenced in index.html, commented)
- `assets/hr/result-final-dashboard.png` (video poster in case-study-heart-rate.html; `result-final.png` exists instead)
- `assets/hr/error-1.webp` and `assets/hr/error-2.webp` (referenced in commented code)
- `assets/hr/google-play-badge.svg` (store badge)
- `assets/sdk/sdk-architecture.png` and `assets/sdk/theming-contract.png` (case-study-eka-sdk.html)
- `assets/hr/measure-concept-haptic.png` and `assets/hr/measure-concept-final.png` (commented references)

### Analysis of Company Logos in public/assets/company logo/

The `company logo/` directory contains logos for companies associated with the portfolio owner's experience:

- **Crio**: Two files - `crio-1.png` and `crio.jpeg` (likely different formats or versions of the Crio logo)
- **Eka**: Two files - `eka.png` and `eka.svg` (PNG and SVG versions of the Eka Care logo)
- **Flipkart**: A zip file `flipkart.zip` and a subdirectory `flipkart/Flipkart/` containing four symbol files:
  - `Flipkart_Symbol_0.svg` (SVG format)
  - `Flipkart_Symbol_1.png` (PNG format)
  - `Flipkart_Symbol_2.webp` (WebP format)
  - `Flipkart_Symbol_3.png` (another PNG, possibly different variant)

These logos are not referenced in the original HTML files but appear to be prepared for use in an experience or testimonials section. The presence of multiple formats (PNG, JPEG, SVG, WebP) suggests optimization for different use cases - SVGs for scalable logos, raster formats for specific implementations.

### Comparison Between Duplicate Assets in src/assets and public/assets

The `public/assets/` and `src/assets/` directories contain nearly identical content, indicating duplication:

#### Identical Assets:
- All root-level files (`astro.svg`, `background.svg`, `eka-logo.svg`, etc.)
- All files in `cowin/` and `hr/` subdirectories
- Favicon and resume files

#### Differences:
- **images/ subdirectory**:
  - `src/assets/images/`: Contains timestamped mockup files (`cowin_app_mockup_1765625542009.png`, `design_system_components_1765625577971.png`, `heart_rate_monitor_ui_1765625561307.png`)
  - `public/assets/images/`: Contains simpler named mockups (`cowin-mockup.png`, `design-system-mockup.png`, `heart-rate-mockup.png`)

- **Additional in public/assets/**:
  - `company logo/` directory with company logos (not present in `src/assets/`)

This duplication suggests that during migration to Astro, assets were copied to both locations, but `src/assets/` has been updated with newer mockup versions while `public/assets/` retains the original simpler names.

### Recommendations for Primary Source Directory in Astro

1. **Use src/assets/ as Primary**: In Astro, `src/assets/` is the recommended location for assets that will be processed and optimized by the build system. Assets here can be imported directly into components for better bundling and optimization.

2. **public/assets/ for Static Assets**: Reserve `public/assets/` for truly static assets that need to be served directly (e.g., via absolute URLs) or legacy assets. The company logos, if needed for direct linking, could remain here.

3. **Consolidate Duplicates**:
   - Move company logos from `public/assets/company logo/` to `src/assets/company-logos/` for consistency and processing benefits.
   - Decide on mockup versions: The timestamped files in `src/assets/images/` appear newer; consider updating `public/assets/images/` or removing the public versions if not needed.

4. **Asset Organization**:
   - Create `src/assets/company-logos/` for experience-related logos
   - Keep case study assets in their respective subdirectories under `src/assets/`
   - Use `public/assets/` only for assets that must be accessed via direct URLs (e.g., if referenced in external documents)

5. **Migration Strategy**: Update Astro components to import from `src/assets/` instead of referencing `public/` paths. Remove duplicate files from `public/assets/` once migration is complete to avoid confusion and reduce bundle size.

## Mapping Summary

### Mapped Images (Present and Referenced)
Most images in `src/assets/` are directly referenced in the HTML files. Key mappings include:
- Hero and profile photos: `kunal-katre-photo.webp`
- Thumbnails: `thumb-cowin.png`, `thumb-hr.png`
- Case study assets: All files in `cowin/` and most in `hr/` are referenced in their respective case study HTML files
- Logos and icons: `eka-logo.svg`, `favicon.svg`
- Resume: `Kunal_Katre_Resume.pdf`

### Missing Images (Referenced but Not Present in src/assets/)
The following images are referenced in HTML files but do not exist in `src/assets/`:
- `assets/thumb-sdk.png` (referenced in index.html, commented)
- `assets/hr/result-final-dashboard.png` (video poster in case-study-heart-rate.html; likely intended to be `result-final.png`)
- `assets/hr/error-1.webp` (referenced in commented code in case-study-heart-rate.html)
- `assets/hr/error-2.webp` (referenced in commented code in case-study-heart-rate.html)
- `assets/hr/google-play-badge.svg` (store badge in case-study-heart-rate.html)
- `assets/sdk/sdk-architecture.png` (case-study-eka-sdk.html)
- `assets/sdk/theming-contract.png` (case-study-eka-sdk.html)
- `assets/hr/measure-concept-haptic.png` (referenced in commented code)
- `assets/hr/measure-concept-final.png` (referenced in commented code)

### Extra Images (Present in src/assets/ but Not Referenced)
The following images exist in `src/assets/` but are not referenced in any HTML files:
- `astro.svg` (likely added for Astro framework)
- `background.svg` (likely added for Astro framework)
- `kunal-katre-photo (2).webp` (alternative profile photo)
- `hr/fig3-before-after.png`
- `hr/introductory video.mp4`
- `hr/user-state.png`
- `images/cowin_app_mockup_1765625542009.png`
- `images/design_system_components_1765625577971.png`
- `images/heart_rate_monitor_ui_1765625561307.png`

## Recommendations for Astro Asset Organization

1. **Maintain Current Structure**: The existing `src/assets/` structure with subdirectories (`cowin/`, `hr/`, `images/`) is well-organized and mirrors the content organization. Keep this structure as it promotes maintainability.

2. **Handle Missing Assets**:
   - Locate and add missing SDK assets (`sdk-architecture.png`, `theming-contract.png`) to `src/assets/sdk/` if the SDK case study will be migrated.
   - Add `google-play-badge.svg` to `src/assets/hr/` or a shared location.
   - Correct the video poster reference from `result-final-dashboard.png` to `result-final.png` in the Astro components.
   - For commented references, decide if they should be included or removed based on content needs.

3. **Utilize Extra Assets**:
   - `kunal-katre-photo (2).webp`: Consider using as an alternative profile image or remove if unnecessary.
   - `hr/fig3-before-after.png`, `hr/user-state.png`, `hr/introductory video.mp4`: Review if these should be included in the heart rate case study content.
   - `images/` subdirectory assets: These appear to be mockups for the new Astro pages and should be integrated into the appropriate components.

4. **Astro-Specific Assets**:
   - `astro.svg` and `background.svg` are likely framework-specific and should be kept for branding or background elements.

5. **Import Strategy**: In Astro components, import images using ES6 imports (e.g., `import heroImage from '../assets/kunal-katre-photo.webp'`) rather than referencing paths directly. This ensures proper bundling and optimization.

6. **Optimization**: Consider compressing images and using appropriate formats (WebP for photos, SVG for logos) as already implemented.

7. **Future Organization**: As the project grows, consider grouping assets by type (images/, videos/, audio/) or by feature/page if the current structure becomes unwieldy.

## Final Verification and Summary

### 1. Complete Verification Checklist of All Image References

Below is a comprehensive checklist of all image and asset references found in the original HTML files. Each reference is checked against availability in `src/assets/` and `public/assets/`.

#### Present in Both src/assets and public/assets:
- `favicon.svg` (used for favicon links)
- `Kunal_Katre_Resume.pdf` (download link)
- `kunal-katre-photo.webp` (hero and about images)
- `eka-logo.svg` (project logos)
- `thumb-cowin.png` (thumbnails)
- `thumb-hr.png` (thumbnails)
- All assets in `cowin/` subdirectory
- Most assets in `hr/` subdirectory (except missing ones below)

#### Present Only in public/assets:
- `company logo/` directory and contents (not referenced in HTML but available)

#### Missing Assets (Referenced but Not Present):
- `thumb-sdk.png` (commented in index.html)
- `hr/result-final-dashboard.png` (video poster; `result-final.png` exists instead)
- `hr/error-1.webp` (commented reference)
- `hr/error-2.webp` (commented reference)
- `hr/google-play-badge.svg` (store badge)
- `sdk/sdk-architecture.png` (case-study-eka-sdk.html)
- `sdk/theming-contract.png` (case-study-eka-sdk.html)
- `hr/measure-concept-haptic.png` (commented reference)
- `hr/measure-concept-final.png` (commented reference)

### 2. Confirmation of Assets Available in Both Directories

The following assets are duplicated in both `src/assets/` and `public/assets/`:
- Root-level files: `astro.svg`, `background.svg`, `eka-logo.svg`, `favicon.svg`, `Kunal_Katre_Resume.pdf`, `kunal-katre-photo.webp`, `kunal-katre-photo (2).webp`, `thumb-cowin.png`, `thumb-hr.png`
- `cowin/` subdirectory: all 5 PNG files
- `hr/` subdirectory: all 25 files (including MP3, MP4, PNG, WebP)
- `images/` subdirectory: different files in each (timestamped in src, named in public)

This duplication indicates assets were copied during migration but not yet consolidated.

### 3. Identification of Critical Missing Assets

Critical missing assets that may impact functionality if the corresponding sections are migrated:
- `hr/google-play-badge.svg`: Required for the store badge in heart rate case study
- `sdk/sdk-architecture.png` and `sdk/theming-contract.png`: Essential for the SDK case study content
- `hr/result-final-dashboard.png`: Video poster (can use `result-final.png` as alternative)

Non-critical (commented or alternative available):
- `thumb-sdk.png`
- `hr/error-1.webp`, `hr/error-2.webp`
- `hr/measure-concept-haptic.png`, `hr/measure-concept-final.png`

### 4. Final Recommendation for Asset Organization Strategy in Astro

**Primary Recommendation: Use `src/assets/` as the source of truth for importable assets.**

- **Processed Assets**: Place images and media that will be imported into Astro components in `src/assets/`. This allows Astro's build system to optimize, compress, and bundle them properly.
- **Static Assets**: Reserve `public/assets/` for assets that need to be served statically (e.g., if referenced via direct URLs or external links).
- **Consolidation**: Remove duplicates from `public/assets/` after updating components to import from `src/assets/`.
- **Company Logos**: Move `company logo/` from `public/assets/` to `src/assets/company-logos/` for consistency, unless they require direct URL access.
- **Missing Assets**: Source or create the critical missing assets before final migration.

### 5. Quick Reference Table for Optimal Asset Paths

| Asset Type | Optimal Directory | Path Example | Usage |
|------------|-------------------|--------------|-------|
| Component Images | `src/assets/` | `src/assets/kunal-katre-photo.webp` | Import in Astro components |
| Case Study Assets | `src/assets/[case]/` | `src/assets/hr/research.png` | Import for case study pages |
| Static Downloads | `public/assets/` | `/assets/Kunal_Katre_Resume.pdf` | Direct download links |
| Favicon/Icons | `public/` | `/favicon.svg` | HTML head links |
| Company Logos | `src/assets/company-logos/` | `src/assets/company-logos/eka.svg` | Import in experience sections |

This verification ensures all referenced assets are accounted for in the Astro migration, with a clear path forward for organization and optimization.