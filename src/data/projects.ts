export const projects = {
  element: [
    {
      name: "How we used AI to simplify Rule Creation",
      date: "2025",
      problem: "As our business model shifts to a Managing General Agent, our task is to validate Partner data against a set of rules and address any violations efficiently. Creating and managing business rules was complex and time-consuming for non-technical users, requiring extensive documentation and IT support.",
      challenges: [
        "Rules are stored in two separate systems, with no automatic cross-check or synchronization for updates.",
        "The Underwriting team depends heavily on developers to update rules.",
        "There's no automated way to detect violations; checks are performed manually, which is time-consuming."
      ],
      marketResearch: "We explored various available tools, but none suited our specific needs. Most tools were either too expensive or overly complex. Our team was confident we could build a tailored automation solution that fit our unique business model.",
      designSprint: {
        title: "Ideation & Design Sprint",
        description: "I led a design sprint with key stakeholders, product managers, and engineers.",
        outcomes: [
          "We defined the core problem.",
          "We established a clear vision for what we wanted to solve.",
          "We generated enough sketches for the UX team to develop wireframes and conduct initial testing.",
          "Engineers began groundwork for creating a proof of concept."
        ]
      },
      testingResults: {
        title: "Testing and Results",
        description: "Our sketches created the base for the engineering team to rapidly prototype a proof of concept. I tested it with the Underwriting and Claims team.",
        usabilityIssues: [
          { topic: "Case sensitivity", insight: "Needs to recognize lowercase letters", action: "Engineer to implement" },
          { topic: "Field confusion", insight: "Users started in \"Validation rules\" but should use \"ValGTP\"", action: "UI will clarify this" },
          { topic: "Adding rules", insight: "Multiple clicks due to unclear \"type\" field location", action: "Will add visible feedback" },
          { topic: "Default rules", insight: "Generic rules should be pre-loaded—currently not", action: "Next iteration" },
          { topic: "Violation highlights", insight: "Violated fields need clear highlighting for easier identification", action: "Create clear UI with red to indicate violation, green for success" }
        ],
        outOfScope: "A visual way for users to see which rules are generic, which have a validation rule attached to them, and which rules are mandatory."
      },
      prototypeVideoUrl: "/videos/rule-creation-prototype.mov",
      impact: [
        { metric: "Setup time for partner rules", before: "Up to 2 weeks", after: "3 days", description: "Significantly faster onboarding and configuration" },
        { metric: "Manual rule updates", before: "Excel + JSON", after: "Single integrated system", description: "Reduced manual effort and error risk" },
        { metric: "Accuracy of rule testing", before: "Manual checks, prone to errors", after: "Automated testing with data", description: "Increased confidence and fewer violations" }
      ],
      visuals: [
        { type: "design-sprint", title: "Design Sprint Stickies", url: "/images/visuals/valgtp-designsprint-stickies.png" },
        { type: "wireframes", title: "ValGTP First Wireframe", url: "/images/visuals/Val GTP First wireframe.jpg" },
        { type: "wireframes", title: "Design Sprint Wireframe", url: "/images/visuals/design-sprint-wireframe-engineer.png" }
      ],
      relatedProjects: [
        { name: "How We Fixed our Design-Dev Communication Gap", company: "element" },
        { name: "Boosting Payment Success", company: "element" }
      ]
    },
    {
      name: "How We Fixed our Design-Dev Communication Gap",
      date: "2024",
      problem: "Our Company strategy shifted → my role changed to sole UX/UI designer in one team. Through observation and a Spotify health check our team identified that the Design-to-Developer process was unclear. Result: confusion, lack of communication, and misaligned outputs.",
      workshop: {
        title: "Workshop",
        description: "In true UX Research style I called a mini-workshop with the Product Owner & Engineering Lead.",
        goals: [
          "Identify pain points",
          "Brainstorm solutions",
          "Agree on a clear plan"
        ]
      },
      challenges: [
        "Developers were unclear which design version was final in Figma",
        "Jira tickets were missing design links or had outdated links",
        "No documented naming conventions of business terms (design vs dev mismatch)",
        "1 designer (75% capacity) vs 8 full-time developers → Designer could not keep up with the team output capacity",
        "Poor communication on design compromises → when shipping, designer noticed discrepancies vs the original design",
        "No designer QA process",
        "Unclear where to document components"
      ],
      solutions: {
        title: "Solutions & Improvements",
        figmaImprovements: {
          title: "Figma file confusion",
          points: [
            "Introduced a dedicated \"Developer File\" → only final sketches",
            "Teal background → quick recognition"
          ]
        },
        handoverPractices: {
          title: "Figma handover best practices",
          rules: [
            "@Developers → Question unclear designs immediately (via the Jira Story)",
            "@Designer/PO → Always add correct Figma link in Jira",
            "@Designer/PO → Align naming conventions before handover. Use the \"4 eye principle\" before handing over"
          ]
        },
        additionalAgreements: [
          "Devs handle less complex features independently → Designer only does QA before shipping",
          "Any gaps/issues → logged in Feature Request board for prioritization by PO"
        ]
      },
      outOfScope: [
        "Storyboard as documentation tool → rejected (too much overhead)",
        "Well-documented style guidelines in Figma → sufficient for now"
      ],
      impact: [
        { metric: "Design Location Clarity", before: "Unclear", after: "Always known", description: "Developers always knew where the final design was" },
        { metric: "Implementation Mistakes", before: "Frequent", after: "Reduced", description: "Fewer mistakes in implementation" },
        { metric: "Design Compromise Handling", before: "Ad-hoc", after: "Structured", description: "Designer had structured way to handle design compromises" },
        { metric: "Team Communication", before: "Friction", after: "Improved", description: "Communication improved → less friction" }
      ],
      learnings: [
        "Only by asking and talking, problems can be identified.",
        "Addressing problems early on can save a lot of time in the long run.",
        "As a designer, I wasn't just designing interfaces—I was designing processes."
      ]
    },
    {
      name: "Boosting Payment Success",
      date: "2024",
      problem: "The Operations team receives a high volume of customer queries related to outstanding payments, causing inefficiencies and delays in payment completion. Additionally, many customers fail to complete their payments after receiving the first dunning email.",
      solution: "By improving the clarity and usability of the dunning email and customer portal, we aimed to increase payment completion from the first dunning email by 50% and reduce customer queries to the Operations team by improving self-service options.",
      impact: [
        { metric: "Payment completion rate (first dunning email)", before: "18%", after: "56%", description: "Significantly reducing manual follow-ups and operational overhead" },
        { metric: "Customer queries related to payments", before: "1,200/mo", after: "840/mo", description: "Significantly reduced email queries to the operation team" }
      ],
      videoUrl: "/videos/dunning-before.mov",
      hasInteractivePrototype: true,
      hasAfterPrototype: true,
      problems: [
        "Payment instructions, Amount, IBAN, reference are buried in the text and not visually distinct.",
        "No due date",
        "No clear consequences",
        "No information about the related instalment term/product",
        "No hyperlink to pay or to view account"
      ],
      solutions: [
        "Hyperlink to pay",
        "Higher contrast between text",
        "Clear heading acting as a call to action",
        "Product information is visible and clear",
        "Clear amount to be paid and due date is clear and in red",
        "Banking details are clear and easy to read",
        "Tip for customer to use photo scanning of bank details"
      ]
    },
    {
      name: "Data Visualization Platform",
      date: "2024",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      solution: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      impact: [
        { metric: "Data Processing Speed", before: "12 min", after: "3 min" },
        { metric: "User Adoption", before: "23%", after: "67%" },
        { metric: "Error Rate", before: "8%", after: "1.2%" }
      ],
      image: "/images/mockups/macbook-mockup-shape-square.png",
      comingSoon: true
    }
  ],
  mello: [
    {
      name: "Mobile App Redesign",
      date: "2020",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      solution: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      impact: [
        { metric: "App Store Rating", before: "2.8/5", after: "4.5/5" },
        { metric: "User Retention", before: "34%", after: "72%" },
        { metric: "Daily Active Users", before: "1.2K", after: "3.8K" }
      ],
      pdfUrl: "/pdfs/mello-mobile-app-redesign.pdf"
    }
  ],
  freelance: [
    {
      name: "UX/UI for a smarter bulk merge app",
      date: "2020",
      problem: "Sales teams struggled with inefficient Salesforce data management, requiring manual processes that consumed valuable time and led to errors.",
      solution: "Designed an intuitive UX/UI for a bulk merge tool that streamlined Salesforce operations and reduced manual workload.",
      impact: [
        { metric: "Processing Time", before: "2.5 hrs", after: "30 min" },
        { metric: "Data Accuracy", before: "85%", after: "98%" },
        { metric: "User Satisfaction", before: "2.8/5", after: "4.6/5" }
      ],
      pdfUrl: "/pdfs/freelance/bulk-merge-case-study.pdf"
    },
    {
      name: "Designing a foodsharing experience",
      date: "2020",
      problem: "Food waste and social isolation increased during the pandemic, while people sought meaningful ways to connect with their communities.",
      solution: "Created a food-sharing platform that connects neighbors to share meals, reduce waste, and build community bonds.",
      impact: [
        { metric: "Food Waste Reduction", before: "0%", after: "35%" },
        { metric: "Community Connections", before: "0", after: "150+" },
        { metric: "User Engagement", before: "0%", after: "78%" }
      ],
      pdfUrl: "/pdfs/freelance/appetit-case-study.pdf"
    }
  ]
} as const;