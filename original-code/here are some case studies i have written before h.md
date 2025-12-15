<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# here are some case studies i have written before hand. I want you to improve the design system and website case studies. Lets write one detailed story first and move to second in next responce.

To elevate these to a "Senior Product Designer" level, we must shift the narrative from *execution* ("I did X") to *strategy* ("I enabled Y through X").

Below is the **Design System Case Study (Story 2)**. This is your strongest asset for senior roles because it demonstrates **Systems Thinking**, **Operational Leadership**, and **Technical fluency**.

### **Case Study: The "Code-Connected" Design System**

**Title Idea:** *Automating Consistency: A Multi-Platform Token Pipeline*
**Role:** Design Systems Architect
**Duration:** 3 Months (Core Infrastructure Setup)

***

#### **1. The Executive Summary (The "Hook")**

Most design systems are static "reference libraries" that drift out of sync with production code. At Eka Care, supporting three distinct platforms (Android, iOS, Web) meant that "visual drift" was inevitable and expensive.

I architected a **"Traceable Token Pipeline"**—a system where Figma is not just a drawing tool, but the **Single Source of Truth** that compiles directly to production code. By treating design tokens as a software dependency, I reduced the "interpretation gap" between design and engineering to zero for connected components.

***

#### **2. The Problem: The "Drifting" UI \& Native Friction**

Eka Care operates in a high-trust domain: Healthcare. Users trust apps that feel "native" and secure. Our previous attempts at a "One Size Fits All" system created two critical failures:[^1]

1. **Visual Drift:** Developers manually copied Hex codes, leading to 50+ shades of "Brand Blue" and inconsistent spacing across platforms.
2. **The "Uncanny Valley" of UX:** We were forcing web-like components onto mobile. An iOS user expects a specific "push/pop" navigation; giving them a web modal eroded trust.

**The Stakeholder Pitch:** "We are wasting 20% of every sprint fixing UI bugs that shouldn't exist. We need a system that enforces consistency *automatically*, not manually."

***

#### **3. The Strategy: "Native-First" \& Automation**

I established two core architectural principles:

1. **Semantic Abstraction:** We won't just name colors `Blue/500`. We will name them `Action/Primary/Background`. This allows us to re-theme the entire app for a hospital partner (white-labeling) without touching a single line of feature code.[^2]
2. **The "Zero-Handoff" Pipeline:** Design decisions should flow to code without human intervention.

**The Tech Stack (My "Design Engineering" Contribution):**

* **Input:** Figma + Tokens Studio (managing multi-dimensional themes).
* **Middleware:** GitHub Actions + Style Dictionary (transforming JSON to platform code).
* **Output:** Native binaries (`.xml` for Android, `.swift` for iOS, `.css` for Web).

*(Self-Correction/Note):* I initially faced bandwidth constraints. Instead of waiting for a full engineering team, I built the Proof of Concept (PoC) myself using AI tools to write the transformation scripts, proving the value before asking for resources.

***

#### **4. Execution: The "Button" Pilot**

I chose the humble **Button** component as the "Tracer Bullet" to prove the system.

**Step A: The Token Taxonomy (Standardization)**
I audited our existing messy styles and restructured them using the **C.T.I. (Category-Type-Item)** standard:

* *Old:* `EkaBlue`, `Red-Error`
* *New:* `sys.color.action.primary`, `sys.color.feedback.critical`

**Step B: The Pipeline Build**
I configured a GitHub Action that listens for changes in the Figma Token JSON file.

* **Trigger:** I push a new color update in Figma.
* **Action:** The build script runs `Style Dictionary`.
* **Result:** A Pull Request is automatically created in the Android, iOS, and Web repos with the updated code files.

**Step C: Native Mapping**
Instead of building custom components from scratch, I mapped our tokens to **Material 3 (Android)** and **UIKit (iOS)**.

* *Why?* This ensures we inherit all accessibility features (screen readers, dynamic type) and native interaction patterns (ripples, haptics) for free.[^3]

***

#### **5. The Outcome \& "So What?"**

While we didn't track "time saved" explicitly, the qualitative impact was binary:

* **Zero Handoff Errors:** It is now *impossible* for a developer to use the wrong color for a connected component. The system enforces it.
* **Multi-Brand Ready:** This architecture laid the groundwork for our white-label business. We can now spin up a "Hospital X" themed app simply by swapping the Token JSON file, a process that used to take weeks of refactoring.[^4]
* **Engineering Trust:** By speaking their language (JSON, GitHub, CI/CD), I bridged the gap between Design and Dev, transforming the Design System from a "nuance" into a "dependency."

***

### **Review \& Next Steps**

This draft positions you as a **Technical Designer** who solves business problems (scaling/trust) using infrastructure.

* **Critique:** Does this sound like *you*?
* **Action:** If you approve this angle, I will draft **Story 1 (Webflow/Marketing)** next. It will focus on "Operational Velocity" rather than just "Web Design."

*(Self-Correction for Story 1 Preview: We will focus on the "Hackathon" speed and "Marketing Autonomy" as the key wins.)*
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^21][^22][^23][^24][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.linkedin.com/posts/vikalpsahni_ai-healthcare-innovation-activity-7266774313310003200-7R7s

[^2]: https://www.toptal.com/designers/design-systems/design-system-case-study

[^3]: https://bajdesign.net/design-system

[^4]: https://emilycampbell.co/info/case-study-design-systems/

[^5]: case-study-heart-rate.html

[^6]: case-study-cowin.html

[^7]: case-study-eka-sdk.html

[^8]: https://www.linkedin.com/posts/mrtylerwhite_uxportfolio-productdesign-designleadership-activity-7336001863223242753-LiI8

[^9]: https://www.fionaburns.co/design-systems-case-study

[^10]: https://www.reddit.com/r/UXDesign/comments/1befia9/head_senior_and_lead_designers_this_is_my_first/

[^11]: https://www.youtube.com/watch?v=gHtUb_Wdg54

[^12]: https://blog.arianaescobar.com/how-i-write-case-studies-for-my-product-design-portfolio

[^13]: https://www.youtube.com/watch?v=uLw12qqryjA

[^14]: http://uxlondon.s3.amazonaws.com/slides/MetricsDrivenDesign.pdf

[^15]: https://smart-interface-design-patterns.com/articles/design-case-study/

[^16]: https://www.linkedin.com/pulse/case-study-building-e-commerce-website-webflow-codemapio

[^17]: https://uxdesign.cc/a-metrics-driven-approach-to-evaluate-success-of-ux-design-dd3bea098820

[^18]: https://uxplanet.org/design-case-study-building-a-design-system-for-saas-application-a8837c606e0

[^19]: https://webflow.com/blog/write-the-perfect-case-study

[^20]: https://autentika.com/blog/measuring-design-system-efficiency-key-metrics-for-demonstrating-financial-impact

[^21]: https://www.behance.net/search/projects/design system case study

[^22]: https://uxplaybook.org/articles/ux-case-study-minto-pyramid-structure-guide

[^23]: https://webflow.com/made-in-webflow/case-study

[^24]: http://ndl.ethernet.edu.et/bitstream/123456789/57972/1/33.pdf

