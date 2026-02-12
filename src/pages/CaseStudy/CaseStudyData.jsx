import hyundai from "./CaseStudyAssests/hyundai.png";
import bioPm from "./CaseStudyAssests/Bio-Pm.png";
import columnImg from "./CaseStudyAssests/cig.png"
import repetoryImg from "./CaseStudyAssests/repetory.jpeg";

// Hyundai images
import hyundaiSolution from "./CaseStudyAssests/hyundai-1.jpeg";
import hyundaiResult from "./CaseStudyAssests/hyundai-1.jpeg";

// Bio PM images
import bioSolution from "./CaseStudyAssests/pm-5.png"
import bioResult from "./CaseStudyAssests/pm-9.png";

// Column images
import columnSolution from "./CaseStudyAssests/cii-dashboard.png";
import columnResult from "./CaseStudyAssests/cii-dashboard.png";

// Repetory images
import repetorySolution from "./CaseStudyAssests/repetory.jpeg";
import repetoryResult from "./CaseStudyAssests/repetory.jpeg";


const caseStudies = [
  {
    category: "Machine Tools",
    slug: "machine-tools",
    products: [
      {
        title: "Monitoring System:AI-powered quality control",
        slug: "hyundai-pm",
        heroImage: hyundai,
    solutionImage: hyundaiSolution,
resultImage: hyundaiResult,
        intro: `
Modern manufacturing industries demand high precision, quality assurance, and efficient production processes. Manual inspection methods often lead to inconsistencies, delays, and increased defect rates. To address these challenges, a real-time machine monitoring dashboard was developed for shaft diameter inspection. The system continuously monitors machine performance and measures shaft dimensions with high accuracy. By integrating AI-powered quality control, the solution improves operational efficiency, reduces defects, and ensures consistent product quality.
        `,

        challenge: `
Manufacturing industries face significant challenges in maintaining accurate shaft diameter measurements during production. Traditional inspection methods are time-consuming and prone to human error, leading to quality variations and increased defect rates. Lack of real-time monitoring makes it difficult to detect deviations early, affecting production efficiency and machine performance. Additionally, ensuring consistent quality while improving Overall Equipment Effectiveness (OEE) requires an intelligent and automated monitoring solution. These challenges highlighted the need for a reliable system capable of real-time inspection and AI-driven quality control.
        `,

        solution: `
To overcome these challenges, a real-time machine monitoring dashboard was developed for continuous shaft diameter inspection. The system captures real-time machine data and analyzes shaft measurements using AI-based algorithms. It automatically detects defects and deviations, enabling quick corrective actions during production. The dashboard provides visual insights into machine performance, quality metrics, and operational efficiency. AI-powered quality control improves accuracy and reduces manual intervention in inspection processes. This intelligent monitoring system enhances productivity, reliability, and overall manufacturing performance.
        `,

        results: `
The implementation of the system resulted in a 30% increase in Overall Equipment Effectiveness (OEE).
Defect rates were reduced by 25% through AI-driven quality inspection.
Real-time monitoring enabled early detection of production issues and improved process control.
The solution enhanced manufacturing efficiency, product quality, and operational reliability.
        `,

        conclusion: `
The real-time machine monitoring dashboard significantly improves shaft inspection accuracy and production efficiency. AI-powered quality control enables smarter manufacturing and ensures consistent product quality.        `,
      },

      {
        title: "Bio Predictive Maintenance:Predicts bioreactor failures and audits machine performance",
        slug: "bio-product",
        heroImage: bioPm,
     solutionImage: bioSolution,
resultImage: bioResult,


        intro: `
Bioreactors play a critical role in industrial and pharmaceutical production processes, where operational stability and batch reliability are essential. Unexpected equipment failures and process deviations can lead to production downtime and reduced efficiency. To address these challenges, an AI-driven predictive maintenance and machine auditing platform was developed for bioreactors. The system analyzes PLC data through Modbus communication to monitor key operational parameters. By providing real-time insights and early failure detection, the solution enhances process reliability and operational performance.        `,

        challenge: `
Bioreactor systems involve complex processes that require continuous monitoring of parameters such as agitation load, temperature stability, and pH/DO behavior. Traditional monitoring methods often fail to detect early-stage performance degradation and maintenance risks. Lack of real-time visibility into machine performance can result in unexpected failures, increased downtime, and reduced batch reliability. Additionally, ensuring operational transparency and audit readiness requires accurate tracking of process deviations and machine conditions. These challenges highlighted the need for an intelligent system capable of predictive maintenance and real-time machine auditing.
        `,

        solution: `
To overcome these challenges, an AI-driven predictive maintenance and machine auditing platform was developed for bioreactor monitoring. The system collects and analyzes PLC data using Modbus communication protocols. It continuously monitors agitation load, temperature stability, pH/DO behavior, and process variations in real time. AI-based algorithms detect early signs of performance degradation and maintenance risks. The platform provides real-time dashboards for process monitoring, operational transparency, and performance analysis. This solution improves system reliability, reduces downtime, and enhances batch production efficiency.
        `,

        results: `
The system enabled early detection of equipment performance degradation and potential failures.
Real-time monitoring improved operational efficiency and reduced unplanned downtime.
Batch reliability and process stability were significantly enhanced through predictive insights.
The platform ensured audit-ready operational transparency with continuous performance tracking
        `,

        conclusion: `
The AI-driven predictive maintenance platform enhances bioreactor reliability through real-time monitoring and intelligent failure prediction. It ensures efficient operations, reduced downtime, and improved batch performance.        `,
      },
    ],
  },

  {
    category: "Column Integrity Guard:Proactive column stability monitoring",
    slug: "column-integrity",
    products: [
      {
        title: "Column Integrity Guard",
        slug: "column-guard",
        heroImage: columnImg,
       solutionImage: columnSolution,
resultImage: columnResult,


        intro: `
Packed-bed bioreactors are widely used in enzyme-based industrial processes where column stability and process consistency are critical for optimal performance. However, column degradation and flow irregularities can significantly impact product yield and operational efficiency. To address these challenges, a Column Integrity Guard system was developed to monitor packed-bed stability and process behavior. The system analyzes hydrodynamic stability, pressure variation, and flow characteristics in real time. By enabling proactive maintenance and early detection of performance issues, the solution ensures reliable and consistent process performance
        `,

        challenge: `
Enzyme-based packed-bed bioreactors are prone to operational issues such as channeling, bed compaction, and performance degradation. Traditional monitoring methods often fail to detect early signs of column instability, leading to inconsistent process performance and reduced yield. Variations in pressure and flow behavior can increase the risk of unexpected column failure and operational downtime. Additionally, maintaining process consistency and protecting system performance requires continuous monitoring and predictive maintenance capabilities. These challenges highlighted the need for an intelligent solution for real-time column integrity monitoring and machine auditing.
        `,

        solution: `
To address these challenges, a Column Integrity Guard system was developed for continuous monitoring of packed-bed bioreactor performance. The system analyzes hydrodynamic stability, pressure variations, and flow behavior in real time. It integrates PLC data to detect early signs of channeling, bed compaction, and column degradation. AI-driven analytics enable predictive maintenance and proactive identification of performance risks. The platform provides continuous machine auditing and process monitoring through real-time insights. This solution ensures process consistency, protects yield, and reduces the risk of unexpected column failure.
        `,

        results: `
The system enabled early detection of column degradation and flow irregularities.
Process consistency and operational stability were significantly improved.
Predictive maintenance reduced the risk of unexpected column failures and downtime.
Continuous monitoring enhanced yield protection and overall system reliability
        `,

        conclusion: `
The Column Integrity Guard enhances packed-bed bioreactor stability through real-time monitoring and predictive maintenance. It ensures consistent process performance, improved reliability, and reduced operational risk.        `,
      },
    ],
  },

  {
    category: "Repetory (PET Bottle Counting)",
    slug: "repetory",
    products: [
      {
        title: "Repetory App",
        slug: "repetory-app",
        heroImage: repetoryImg,
      solutionImage: repetorySolution,
resultImage: repetoryResult,


        intro: `
The RePETory system is an AI-powered Reverse Vending Machine designed for automated PET bottle collection and recycling. It integrates deep learning, industrial automation, and cloud analytics to create a smart recycling ecosystem. The system validates, processes, and tracks PET bottle deposits while ensuring material purity and operational efficiency. By combining AI-based bottle identification with PLC-controlled automation, the platform enhances recycling accuracy and user engagement. The solution supports sustainable waste management through intelligent monitoring and reward-based participation.
        `,

        challenge: `
Traditional recycling systems often suffer from low user participation, inefficient material sorting, and lack of automation. Manual collection processes result in contamination of recyclable materials and reduced recycling efficiency. Additionally, operators lack real-time insights into machine performance and recycling activity. Ensuring accurate PET bottle identification while maintaining operational efficiency and system scalability remains a significant challenge. These limitations highlighted the need for an intelligent, automated, and user-friendly recycling solution..
        `,

        solution: `
To address these challenges, the RePETory system was developed as an AI-powered automated recycling platform. The system uses deep learning models to accurately identify and validate PET bottles in real time. PLC and Modbus-controlled mechanisms automate bottle handling and processing operations. A touchscreen kiosk interface provides a guided workflow and reward-based user engagement. User can view the points earned by them by recycling the bottles in the app we created,This integrated solution improves recycling efficiency, material purity, and operational transparency..
        `,

        results: `
The system improved PET bottle classification accuracy and material purity.
Automated processing increased recycling efficiency and reduced manual intervention.
Real-time analytics enhanced machine monitoring and operational optimization.
Reward-based engagement significantly increased user participation in recycling programs
        `,

        conclusion: `
The RePETory system provides a scalable and intelligent solution for automated PET bottle recycling. It enhances sustainability through AI-driven automation, operational efficiency, and improved user engagement.        `,
      },
    ],
  },
];

export default caseStudies;
