
import React, { useState } from 'react';

const quizData = [
{
    question: 'Which foundational business performance metrics are derivable from business architecture?',
    options: {
      A: 'Efficiency, effectiveness and impact',
      B: 'Efficiency, effectiveness and automation level',
      C: 'Effectiveness, impact and breadth of coverage',
      D: 'Automation level, process alignment and effectiveness'
    },
    answer: 'C'
  },
{
    question: 'During the planning stage, a business architecture methodology enables which outcome?',
    options: {
      A: 'User story articulation',
      B: 'Business process modeling',
      C: 'Well-articulated scope definition',
      D: 'Return on investment determination'
    },
    answer: 'C'
  },
{
    question: 'Which scenario describes a situation where multiple, parallel value streams would be used to design a business solution?',
    options: {
      A: 'A customer wants to restart an application for membership in an insurance plan',
      B: 'After completing setup of a new account, an account holder wants to make a purchase',
      C: 'A loan payer, notified that a loan default is proceeding, takes action to pay the loan installment',
      D: 'An investor wants to invest in a mutual fund that is very similar to other funds they already hold'
    },
    answer: 'C'
  },
{
    question: 'Solution architecture:',
    options: {
      A: 'Informs the makeup and context of value streams and capability alignment',
      B: 'Is a technical practice that does not directly interact with business architecture',
      C: 'Frames solution deployment of stakeholder value and capability improvements',
      D: 'Implements business process model notation designs using value stream views'
    },
    answer: 'C'
  },
{
    question: 'What is an attribute of capabilities?',
    options: {
      A: 'They map to other views of the business',
      B: 'They are capabilities if they are automated',
      C: 'They are comprised of business processes',
      D: 'They encapsulate people, processes and tools'
    },
    answer: 'A'
  },
{
    question: 'How should a business architecture practitioner engage stakeholders to respond to an in flight initiative that does not align with a new company strategy?',
    options: {
      A: 'Reassess the identified solution and the overarching strategy driving the solution',
      B: 'Recommend suspension of resource allocation, funding and all work on the initiative',
      C: 'Create a stakeholder communication plan to broadcast deficiencies and potential mitigating\nactions',
      D: 'Determine if changes should be addressed within the initiative or deferred to another initiative\nIT Certification Guaranteed, The Easy Way!\n2'
    },
    answer: 'D'
  },
{
    question: 'What is a benefit of information mapping?',
    options: {
      A: 'It provides a basis for building the capability map',
      B: 'It serves as basis for establishing a business initiative roadmap',
      C: 'It surfaces major participating and triggering stakeholder categories',
      D: 'It streamlines cross-business unit communication and collaboration'
    },
    answer: 'D'
  },
{
    question: 'What is the main purpose of business architecture tooling?',
    options: {
      A: 'It ensures that desktop technologies are not used to manage the business architecture',
      B: 'It establishes a formal link between the business architecture and operational databases',
      C: 'It enables teams to capture, manage, communicate and share the business architecture',
      D: 'It provides a way to integrate business architecture with the software development process'
    },
    answer: 'C'
  },
{
    question: 'What is important to consider in business capability outsourcing?',
    options: {
      A: 'Internal stakeholder mapping identifies capabilities that should be outsourced to third parties',
      B: 'Information mapping highlights where shared databases should be established with a third party',
      C: 'Capabilities managed by third parties are highlighted so they can be removed from the capability\nmap',
      D: 'Value stream / capability cross-mapping highlights where capabilities should be synchronized in-\nhouse or among third parties'
    },
    answer: 'D'
  },
{
    question: 'Business architecture positively impacts the ability of an organization to:',
    options: {
      A: 'Improve overall product quality',
      B: 'Streamline operational efficiency',
      C: 'Enable operating cost reductions',
      D: 'Deploy a wide range of business scenarios'
    },
    answer: 'D'
  },
{
    question: 'The set of competencies that illustrate the role of a business architecture practitioner are:',
    options: {
      A: 'Facilitation, influencing and leadership',
      B: 'Decision making, strategy develpment and innovation',
      C: 'Program management, consultancy and IT governance',
      D: 'Subject matter expertise, decision making and leadership'
    },
    answer: 'A'
  },
{
    question: 'An information mapping principle states that information:',
    options: {
      A: 'Manifests itself as a data model',
      B: 'Is owned by information systems',
      C: 'Is represented in a relational database',
      D: 'Improves decision making and innovation\nIT Certification Guaranteed, The Easy Way!\n3'
    },
    answer: 'D'
  },
{
    question: 'What is the primary role of the stakeholder in relation to stages of a value stream?',
    options: {
      A: 'Defining the stage',
      B: 'Triggering the stage',
      C: 'Participating in the stage',
      D: 'Gaining value from the stage'
    },
    answer: 'C'
  },
{
    question: 'Which statement about policy is accurate?',
    options: {
      A: 'Policy may be adopted or proposed',
      B: 'Policy is limited to statutory guidelines',
      C: 'Policy has little impact on business objectives',
      D: 'Policy is limited to government issued regulations'
    },
    answer: 'A'
  },
{
    question: 'A consultant is working on a business initiative involving three business units, each of which uses a different enterprise architecture framework. Which action should the consultant take to efficiently and effectively establish and leverage business architecture to form an integrated approach and solution?',
    options: {
      A: 'Define core business architecture domains for each business unit and then try to align them using\neach framework',
      B: 'Utilize a different architecture framework approach for each business unit and then compare and\nalign business perspectives',
      C: 'Map an enterprise view of core business architecture domains and use it to analyze gaps and\nsimilarities across business units',
      D: 'Map out the business processes for each of the three organizations and then align those processes\nthrough the view of each framework'
    },
    answer: 'C'
  },
{
    question: 'In addition to value streams, the next two business architecture perspectives, in order of priority, that should be used in merger and acquisition analysis are:',
    options: {
      A: 'Stakeholders and information',
      B: 'Stakeholders and capabilities',
      C: 'Business units and processes',
      D: 'Capabilities and business units'
    },
    answer: 'D'
  },
{
    question: 'A benefit of having a capability map is that the map:',
    options: {
      A: 'Represents a business strategy',
      B: 'Enables laser-like investment analysis',
      C: 'Serves as a starting point for a business model',
      D: 'Provides a comprehensive perspective on value analysis\nIT Certification Guaranteed, The Easy Way!\n4'
    },
    answer: 'B'
  },
{
    question: 'A company has decided to merge three business units in order to achieve operational cost reduction. Which business architecture domain is used to identify potential overlaps or discrepancies?',
    options: {
      A: 'Policy',
      B: 'Strategy',
      C: 'Process',
      D: 'Value stream'
    },
    answer: 'D'
  },
{
    question: 'A capability named Credit Risk Rating exists in five business units, each of which applies a variation of credit risk rating rules during operational processes. While rated as working optimally and assigned yellow or green on the individual business unit capability heat maps, it might be designated as red, indicating poorly functioning, on a heat map providing an aggregated view of capabilities because it:',
    options: {
      A: 'Provides inconsistent results across business units',
      B: 'Exists in more than one business unit that share other capabilities',
      C: 'Enables multiple value stream stages, across multiple value streams',
      D: 'Is implemented using different software systems and manual techniques'
    },
    answer: 'A'
  },
{
    question: 'Compared to the business analyst role, the scope of the business architecture practitioner role is:',
    options: {
      A: 'Broader, represents the IT environment, and may help set project priorities',
      B: 'The same, but utilizes different mapping techniques at the beginning of a project',
      C: 'Broader, utilizes different mapping techniques, and may help set project priorities',
      D: 'Broader, utilizes the same mapping techniques, and manages business analysts'
    },
    answer: 'C'
  },
{
    question: 'What is the definition of a capability?',
    options: {
      A: 'A product delivered to customers',
      B: 'A satisfied business requirement',
      C: 'A representation of what the business does',
      D: 'A description of how a business does things'
    },
    answer: 'C'
  },
{
    question: 'An insurance company is divesting one of its personal insurance lines. Which action should the business architecture practitioner pursue first?',
    options: {
      A: 'Deliver strategic objective input to the newly divested business',
      B: 'Provide input to the organizational structure of the divested entity\nIT Certification Guaranteed, The Easy Way!\n5',
      C: 'Identify which capabilities are divested, kept in house or fit both criteria',
      D: 'Assess which application systems are to be retained, kept in house or sunset'
    },
    answer: 'C'
  },
{
    question: 'As a basic starting point for turning strategy into actionable results, business challenges and objectives should be mapped to which business architecture domain category?',
    options: {
      A: 'Organization',
      B: 'Stakeholders',
      C: 'Value streams',
      D: 'Products and services'
    },
    answer: 'C'
  },
{
    question: 'A large retail company has a strong desire to establish a joint venture in a global location to increase manufacturing and research/development capabilities. Which business architecture practice helps identify the manner in which the two organizations can combine capabilities to optimize stakeholder value of the joint venture?',
    options: {
      A: 'Information mapping',
      B: 'Stakeholder mapping',
      C: 'Value stream mapping',
      D: 'Business performance management'
    },
    answer: 'C'
  },
{
    question: 'What is the relationship between business architecture and the System Development Lifecycle (SDLC)?',
    options: {
      A: 'The SDLC provides a framework under which business architecture is deployed',
      B: 'Business architecture is framed within and completed as a step within the SDLC',
      C: 'Business architecture provides a separate and independently valuable perspective',
      D: 'Business architecture and SDLC both focus on providing perspective on a given project'
    },
    answer: 'C'
  },
{
    question: 'What is a benefit of business performance management?',
    options: {
      A: 'It delivers a solution roadmap to the business, outlining initiative priorities',
      B: 'It provides financial management reporting for decision making purposes',
      C: 'It provides statistical analysis of software system interruptions and downtime',
      D: 'It enables management to track progress against business strategies and objectives'
    },
    answer: 'D'
  },
{
    question: 'To which IT architecture domain does information mapping closely relate?',
    options: {
      A: 'Data',
      B: 'Technical',
      C: 'Application',
      D: 'Shadow systems'
    },
    answer: 'A'
  },
{
    question: 'Which approach should a company take to determine the number of metrics utilized when establishing business performance metrics?',
    options: {
      A: 'Identify a handful of select organizational and performance metrics that are most important to the\noverall business',
      B: 'Identify a large quantity of metrics for the important aspects of the business and a smaller quantity\nfor the less important ones',
      C: 'Establish multidimensional metrics that measure multiple components of the business to reduce\nthe number of metrics utilized',
      D: 'Establish any number of metrics, but ensure they are categorized in a manner that reflects the\nimportant components of the business'
    },
    answer: 'A'
  },
{
    question: 'What is a benefit of business architecture?',
    options: {
      A: 'It establishes a business strategy for business units and the enterprise',
      B: 'It enables the business to craft and drive holistic transformation strategies',
      C: 'It delivers techniques to improve business processes and operational efficiencies',
      D: 'It provides a better way of crafting software platform definitions and virtualization requirements'
    },
    answer: 'B'
  },
{
    question: 'When designing an automation solution, what is an effective business architecture perspective for providing input to SOA services orchestration and reusability?',
    options: {
      A: 'Business unit to capability mapping',
      B: 'Business process to capability mapping',
      C: 'Value stream stage to capability mapping',
      D: 'Information concept to capability mapping'
    },
    answer: 'C'
  },
{
    question: 'A business architecture practitioner is responsible for:',
    options: {
      A: 'Identifying and evaluating investment opportunities',
      B: 'Enabling impact analysis and effective response to change',
      C: 'Managing change adoption at both enterprise and business unit levels',
      D: 'Evaluating the effect of emerging technologies on business improvement initiatives'
    },
    answer: 'B'
  },
{
    question: 'Organizations are motivated to leverage business architecture to improve business requirements analysis by the ability to:',
    options: {
      A: 'Structure agile user stories within a Scaled Agile Framework',
      B: 'Frame use cases within a larger development environment context',
      C: 'Trace requirements to business strategy through value and capability perspectives',
      D: 'Ensure that business requirements are well articulated in terms of structure, grammar and\nnotation'
    },
    answer: 'C'
  },
{
    question: 'Which statement about business models and business architecture is accurate?',
    options: {
      A: 'A business architecture requires a pre-existing business model as a starting point',
      B: 'Best practices dictate that there should only be one business model for a business',
      C: 'A business model requires a pre-existing business architecture as a starting point',
      D: 'Best practices dictate that there should only be one business architecture for a business'
    },
    answer: 'D'
  },
{
    question: 'A business unit wants to enable a new capability. How should the capability be represented on a heat map?',
    options: {
      A: 'In red, indicating a poor score for the capability',
      B: 'In purple, indicating the capability does not exist but is desirable',
      C: 'In a color indicating the minimum desired performance level for the capability if it did exist in the\nbusiness unit',
      D: 'In a color representing the average performance level of all of the capabilities under the parent\ncapability under which the capability is assigned'
    },
    answer: 'B'
  },
{
    question: 'A company is establishing a business architecture practice of information mapping. Practitioners have identified an implicit information concept that is not formally articulated today. In order for the data architecture to consume or leverage this information, the information should be:',
    options: {
      A: 'Omitted from the data architecture for being non-explicit',
      B: 'Used to inform and refine services architecture mapping',
      C: 'Translated into explicit information within the data architecture',
      D: 'Incorporated into explicit data already defined in the data architecture'
    },
    answer: 'C'
  },
{
    question: 'As it pertains to initiative investment and planning, a business architecture practitioner is responsible for:',
    options: {
      A: 'Identifying projects for implementation',
      B: 'Setting the strategy that defines the business case',
      C: 'Establishing performance metrics to evaluate the decision',
      D: 'Monitoring internal and external factors post-implementation'
    },
    answer: 'C'
  },
{
    question: 'A business architecture practitioner:',
    options: {
      A: 'Translates strategy into actionable project plans',
      B: 'Works with the business to map business capabilities and ensure they support strategic goals',
      C: 'Provides a holistic perspective in defining business system initiatives to deliver strategic objectives',
      D: 'Leverages business and IT capabilities to optimize business performance to satisfy customer needs'
    },
    answer: 'B'
  },
{
    question: 'SOA services are distinct, non-ambiguous and non-redundant. Which business representation shares these characteristics? IT Certification Guaranteed, The Easy Way! 8',
    options: {
      A: 'Capabilities',
      B: 'Value streams',
      C: 'Business processes',
      D: 'Information concepts'
    },
    answer: 'A'
  },
{
    question: 'Within the business architecture context, how should one complete the statement: "Strategies are only as good as..."?',
    options: {
      A: 'The funding that enables and sustains them',
      B: 'The ability of the business to implement them',
      C: 'The ability to measure progress towards them',
      D: 'The managers that implement them and track them'
    },
    answer: 'C'
  },
{
    question: 'A principle associated with the business architecture knowledgebase is that the knowledgebase is:',
    options: {
      A: 'Built upon a relational database management system',
      B: 'Based upon a standardized, industry accepted metamodel',
      C: 'Populated as appropriate to the value it delivers and strategies and projects it facilitates',
      D: 'Housed in a repository-based software tool that incorporates import / export and reporting\nfeatures'
    },
    answer: 'C'
  },
{
    question: 'A company offers a product that is a rebranded product from a third party business partner. What should the business architecture practitioner for the company do?',
    options: {
      A: "Omit the product from the company's product map",
      B: "Omit the product from the company's strategic plan",
      C: "Incorporate the product into the company's product map",
      D: "Merge the company's product map with the third party's product map"
    },
    answer: 'C'
  },
{
    question: 'A business architecture practitioner should manage relationships for which category of stakeholders?',
    options: {
      A: 'End consumers',
      B: 'Business partners',
      C: 'Board of Directors',
      D: 'Business subject matter experts'
    },
    answer: 'D'
  },
{
    question: 'A value stream is comprised of what?',
    options: {
      A: 'Stages',
      B: 'Capabilities',
      C: 'Stakeholders\nIT Certification Guaranteed, The Easy Way!\n9',
      D: 'Business units'
    },
    answer: 'A'
  },
{
    question: 'What is a benefit of aligning business architecture with Lean Six Sigma?',
    options: {
      A: 'Business architecture serves as a prerequisite for establishing Lean Six Sigma value streams',
      B: 'Lean Six Sigma value stream definition is a prerequisite for establishing a business architecture',
      C: 'Business architecture surfaces upstream and downstream impacts of Lean Six Sigma efforts across\nbusiness units',
      D: 'Business architecture provides additional information to Lean Six Sigma work regarding process\nmodel decompositions'
    },
    answer: 'C'
  },
{
    question: 'A benefit of leveraging business architecture in the context of System Development Lifecycle (SDLC) initiative planning is that it enables the business to frame projects within the context of:',
    options: {
      A: 'The impact on business processes',
      B: 'A portfolio-wide execution perspective',
      C: 'A business capability mapping perspective',
      D: 'Project-specific business tactics and action items'
    },
    answer: 'B'
  },
{
    question: 'Capability decomposition:',
    options: {
      A: 'Produces business processes',
      B: 'Results in capability stratification',
      C: 'Results in lower level capabilities',
      D: 'Succeeds when it reaches level 3'
    },
    answer: 'C'
  },
{
    question: 'In a well-constructed capability map, the map represents:',
    options: {
      A: 'A project portfolio',
      B: 'Business unit names',
      C: 'A single business unit',
      D: 'A rationalized view of the business'
    },
    answer: 'D'
  },
{
    question: 'What does a capability heat map represent?',
    options: {
      A: 'Effectiveness of a given capability',
      B: 'Impact a capability has on the business',
      C: 'Which business unit uses the capability',
      D: 'Which value stream relies on the capability'
    },
    answer: 'A'
  },
{
    question: 'Which cross-mapping is commonly used as a way to understand where a certain organization may have unique versus overlapping abilities?',
    options: {
      A: 'Business unit to location cross-mapping\nIT Certification Guaranteed, The Easy Way!\n10',
      B: 'Business unit to capability cross-mapping',
      C: 'Information to business unit cross-mapping',
      D: 'Business unit to value stream cross-mapping'
    },
    answer: 'B'
  },
{
    question: 'What accurately describes an information map?',
    options: {
      A: 'A semantic web',
      B: 'A business vocabulary',
      C: 'A relational data model',
      D: 'A conceptual data model'
    },
    answer: 'B'
  },
{
    question: 'Business strategies are realized through:',
    options: {
      A: 'Mergers and acquisitions',
      B: 'Progress towards strategic goals',
      C: 'A portfolio of programs and projects',
      D: 'Initiatives that target specific outcomes'
    },
    answer: 'D'
  },
{
    question: 'Which situation is likely to result in the creation of a relationship between one information concept and another information concept?',
    options: {
      A: 'Stakeholder Management represents both customer and business partner',
      B: 'Stakeholder Management and Agreement Management are level one capabilities',
      C: 'Account / Customer Matching is a defined capability under Account Management',
      D: 'Asset Management and Financial Management are level one supporting capabilities'
    },
    answer: 'C'
  },
{
    question: 'Business process models arise from which business perspective?',
    options: {
      A: 'The business architecture',
      B: "An organization's operating model",
      C: "An organization's business model",
      D: 'Lean Six Sigma value stream models'
    },
    answer: 'B'
  },
{
    question: 'A holistic perspective on enterprise architecture is described as a/an:',
    options: {
      A: 'Framework for strategic business planning',
      B: 'Collection of IT disciplines, domains and technologies',
      C: 'Orchestrated perspective on people, process and technology',
      D: 'Unified perspective of business architecture and IT architecture'
    },
    answer: 'D'
  },
{
    question: 'What is a value stream?',
    options: {
      A: 'A stakeholder triggered, end-to-end perspective',
      B: 'A starting point for triggering other value streams\nIT Certification Guaranteed, The Easy Way!\n11',
      C: 'A detailed view of what the business does to deliver value',
      D: 'A decision structure represented by formal modeling notation'
    },
    answer: 'A'
  },
{
    question: 'Which business architecture perspectives are commonly used to identify current state business challenges and future state business vision?',
    options: {
      A: 'Decisions and events',
      B: 'Initiatives and projects',
      C: 'Policy, rules and regulations',
      D: 'Value streams and capabilities'
    },
    answer: 'D'
  },
{
    question: 'The role of a business architecture team mentor is to:',
    options: {
      A: 'Manage the work of the business architecture team',
      B: 'Set up and socialize the business architecture governance structure',
      C: 'Provide guidance on mapping, governance, team building and integration',
      D: 'Develop the business architecture maps in collaboration with the business'
    },
    answer: 'C'
  },
{
    question: 'You are a portfolio manager who was assigned to help prioritize various projects under consideration for funding in this coming year. You have heat-mapped capabilities, value streams and value stream / capability cross-mappings for the business areas targeted by these projects. You have been asked to quickly provide feedback on more than three dozen projects. Projects should be prioritized based on their ability to:',
    options: {
      A: 'Improve effectiveness of high impact stakeholders and product categories',
      B: 'Increase process efficiencies in high impact value streams and capabilities',
      C: 'Increase automation across a wide breadth of value streams and capabilities',
      D: 'Improve effectiveness of high impact capabilities across multiple value streams'
    },
    answer: 'D'
  },
{
    question: 'Which related, but separate, discipline is combined with business architecture to find and analyze opportunities for operational cost reduction?',
    options: {
      A: 'IT architecture',
      B: 'Portfolio management',
      C: 'Requirements analysis',
      D: 'Lean Six Sigma analysis'
    },
    answer: 'D'
  },
{
    question: 'What is a benefit of using business architecture information maps to inform data architecture?',
    options: {
      A: 'It articulates security related requirements for the data architecture',
      B: 'It provides a business specific vocabulary as a basis for data architecture',
      C: 'It enables data architecture to sidestep entity relationship mapping considerations',
      D: 'It establishes the basic principles for master data management in data architecture\nIT Certification Guaranteed, The Easy Way!\n12'
    },
    answer: 'B'
  },
{
    question: "Which business architecture enabled analysis approach helps an executive identify revenue streams highlighted in the company's business model?",
    options: {
      A: 'Highlighting all business capabilities associated with money management',
      B: 'Identifying where a Product Management capability is tied to a given business unit',
      C: 'Identifying all value stream stages enabled by the Collection Management capability',
      D: 'Pinpointing where customer stakeholders are involved in a given value stream stage'
    },
    answer: 'C'
  },
{
    question: 'A target state IT architecture that effectively aligns to business vision is achieved by taking which transformational path?',
    options: {
      A: 'Transformation of the data and application architectures, as dictated by IT best practices',
      B: 'Transformation of data and application architectures, in alignment with business architecture',
      C: 'Transformation of the underlying technical architecture, applying state-of-the-art technologies',
      D: 'Transformation of data, application, and solution architectures, in alignment with business process\nmodels'
    },
    answer: 'B'
  },
{
    question: 'A group of architects have agreed to the following: 1. The capability map will dictate, where possible, definitions and terms used in the information map. 2. The capability map will be used to frame the definition and automation of various SOA services. 3. The information map will be used to frame business data terminology and relationships used to craft the data architecture. What is the predictive result?',
    options: {
      A: 'Business processes will effectively align with SOA services',
      B: 'The data architecture will effectively align to the capability map',
      C: 'SOA defined services will effectively align to the data architecture',
      D: 'The solution architecture will effectively align to the data architecture'
    },
    answer: 'C'
  },
{
    question: 'What should the Business Architecture Maturity Model provide the organization?',
    options: {
      A: 'Guidance on how to establish sponsorship and governance',
      B: 'Projected cost savings at various levels of organizational maturity',
      C: 'A framework upon which a business architecture may be constructed',
      D: 'Ability to evaluate a business architecture against a defined industry baseline'
    },
    answer: 'D'
  },
{
    question: 'What is the value business architecture provides to inform, align and drive solution architecture?',
    options: {
      A: 'Establishes an agile requirements approach and methodology',
      B: 'Frames the data persistency approach used by a solution architecture',
      C: 'Provides best practices for establishing a technical architecture deployment',
      D: 'Provides a frame of reference for articulating the scope of solution deployments\nIT Certification Guaranteed, The Easy Way!\n13'
    },
    answer: 'D'
  },
{
    question: 'When mapping capabilities to value streams, a business architecture practitioner should:',
    options: {
      A: 'Incorporate business unit into the mapping',
      B: 'Only include capabilities required in every case',
      C: 'Map value stream stages to enabling capabilities',
      D: 'Concurrently build the value stream and the capabilities'
    },
    answer: 'C'
  },
{
    question: 'A project team is attempting to build an SOA service. Which business perspective should be aligned to information concepts to inform the team of the data the service needs to access?',
    options: {
      A: 'Capability',
      B: 'Value stream',
      C: 'Business unit',
      D: 'Business process'
    },
    answer: 'A'
  },
{
    question: 'What is a comprehensive definition of stakeholders?',
    options: {
      A: 'Employees and any internally defined business roles within the organization',
      B: 'Customers, patients, constituents or other recipients of products and services',
      C: 'Business partners and other third parties, including agents, brokers and outsourcers',
      D: 'Individuals or organizations with a vested interest in achieving value through a particular outcome'
    },
    answer: 'D'
  },
{
    question: 'Which business architecture perspective is useful in framing business design discussions and case management automation insights?',
    options: {
      A: 'Value streams',
      B: 'Capability map',
      C: 'Business model',
      D: 'Organization map'
    },
    answer: 'A'
  },
{
    question: 'Which business architecture perspective is useful in requirements elicitation in terms of knowing "who and what to ask" in a specific value focused context?',
    options: {
      A: 'Business unit / business process / stakeholder',
      B: 'Value stream / capability / business unit',
      C: 'Value stream / business process / stakeholder',
      D: 'Value stream stage / capability / stakeholder cross-mapping'
    },
    answer: 'D'
  },
{
    question: 'What are the Business / IT Architecture Transformation Framework components that frame the foundation for business / IT architecture transformation?',
    options: {
      A: 'Business vision and strategy, business initiatives, as-is IT architecture and long-term IT vision',
      B: 'Capability map, information map, as-is application architecture and to-be application architecture\nIT Certification Guaranteed, The Easy Way!\n14',
      C: 'Business vision and strategy, IT vision and strategy, to-be application architecture and to-be data\narchitecture',
      D: 'As-is business architecture, business architecture positioned vision, as-is IT architecture and to-be\nIT architecture'
    },
    answer: 'D'
  },
{
    question: 'Execution of a successful business architecture effort requires:',
    options: {
      A: 'Willingness to pilot change options and adopt the one with optimal cost/benefit results',
      B: 'Executive sponsorship with authority to drive change and willingness to accept decision\nresponsibility',
      C: 'A strong business architect to act as project manager and pull together all business unit managers\nwho will be affected',
      D: 'A business architecture center of excellence that coordinates interactions among all players in a\nbusiness change project'
    },
    answer: 'B'
  },
{
    question: 'Which business architecture perspective provides a clear indicator of where business process improvement opportunities may exist?',
    options: {
      A: 'Business capability heat maps',
      B: 'Value stream stage decompositions',
      C: 'Stakeholder to value stream cross-mapping',
      D: 'Business value stream-to-business process mapping'
    },
    answer: 'A'
  },
{
    question: 'What are the perspectives of the Kaplan and Norton Balanced Scorecard?',
    options: {
      A: 'Financial, customer, internal, learning, growth',
      B: 'Capability, organization, information, value stream',
      C: 'Buyers, suppliers, competitors, internal stakeholders',
      D: 'Customer, competitors, market forces, economic indicators'
    },
    answer: 'A'
  },
{
    question: 'What is a comprehensive definition of the term strategy?',
    options: {
      A: 'A checklist that can be used to establish project plans and program deployments',
      B: 'A varied collection of goals and objectives for a particular business unit in relation to competition',
      C: 'A specific course of action that is of a longer-term perspective as opposed to a tactical course of\naction',
      D: "A pattern or plan that integrates an organization's major goals, policies and action sequences into\na cohesive whole"
    },
    answer: 'D'
  },
{
    question: 'Which business architecture perspective is commonly tied directly to stakeholder?',
    options: {
      A: 'Product',
      B: 'Strategy\nIT Certification Guaranteed, The Easy Way!\n15',
      C: 'Information',
      D: 'Value stream'
    },
    answer: 'D'
  },
{
    question: 'Which factors drive the level of sophistication required in a business architecture tool at a given organization?',
    options: {
      A: 'In-house software tooling policies and protocols',
      B: 'Vendor tooling options, market availability and stated directions',
      C: 'Business architecture metamodel definitions and related standards',
      D: 'Level of business architecture maturity and overall breadth of coverage'
    },
    answer: 'D'
  },
{
    question: "What is a business architecture practitioner's role when defining scope for a business solution?",
    options: {
      A: 'Determining the level of responsibility of the primary stakeholder',
      B: 'Identifying the affected business processes and tracing their impacts',
      C: "Examining the organization's change readiness strategy at the enterprise level",
      D: 'Assessing the impacts to capabilities and value streams across business units'
    },
    answer: 'D'
  },
{
    question: 'What is a key challenge when a business architecture center of excellence reports to a business leader?',
    options: {
      A: 'Accessing business strategy and plans',
      B: 'Asserting a common vision and practices',
      C: 'Having access to the business subject matter experts',
      D: 'Ensuring integration with solution deployment activities'
    },
    answer: 'D'
  },
{
    question: 'What is the central focal point of an organization map?',
    options: {
      A: 'Capability',
      B: 'Enterprise',
      C: 'Business Unit',
      D: 'Business Partner'
    },
    answer: 'B'
  },
{
    question: 'What is considered a business blueprint?',
    options: {
      A: 'Porter value chain',
      B: 'Year-end financial projections',
      C: 'Program deployment roadmap',
      D: 'Application system interface map'
    },
    answer: 'A'
  },
{
    question: 'Which business architecture perspective is commonly used to assess the alignment of a Lean Six Sigma perspective and business architecture? IT Certification Guaranteed, The Easy Way! 16',
    options: {
      A: 'Value stream',
      B: 'Strategy map',
      C: 'Capability map',
      D: 'Stakeholder map'
    },
    answer: 'A'
  },
{
    question: 'Which aspect of business architecture should be utilized on a business unit operational improvement?',
    options: {
      A: 'Considering customer, trading partner and collaborative partner needs',
      B: 'Aligning business units with IT architecture to deliver rationalized systems',
      C: 'Defining the scope of impact of objectives within a particular business unit strategy',
      D: 'Capability cross-mapping to ensure other business units are not adversely affected'
    },
    answer: 'D'
  },
{
    question: 'What is considered to be a core business architecture domain?',
    options: {
      A: 'Strategy',
      B: 'Stakeholder',
      C: 'Organization',
      D: 'Business process'
    },
    answer: 'C'
  },
{
    question: 'Business architecture arises from which business perspective?',
    options: {
      A: 'Business strategy',
      B: 'Capability and value mapping',
      C: "An organization's business model",
      D: "An organization's operational model"
    },
    answer: 'C'
  },
{
    question: 'What is a benefit of organization mapping?',
    options: {
      A: 'It defines the foundation for the business vocabulary',
      B: 'It establishes a basis for business / IT transformation',
      C: 'It provides a foundation for defining customer and partner value delivery',
      D: 'It creates a basis for collaborating on investment opportunities that cross business units'
    },
    answer: 'D'
  },
{
    question: 'A proposed business initiative is targeting multiple business capabilities. The business architecture practitioner should rate the business value of the project based on the:',
    options: {
      A: 'Aggregated effectiveness and impact ratings of all capabilities affected by the initiative',
      B: 'Aggregated effectiveness and impact ratings of all value streams affected by the initiative',
      C: 'Effectiveness and impact ratings of all capabilities and value stream stages affected by the initiativ\ne',
      D: 'Effectiveness and breadth of coverage of all capabilities and value stream stages affected by the\ninitiative\nIT Certification Guaranteed, The Easy Way!\n17'
    },
    answer: 'C'
  },
{
    question: 'Which business architecture perspective is used for identifying business process role definitions?',
    options: {
      A: 'Stakeholder to capability relationship mapping',
      B: 'Stakeholder to business unit relationship mapping',
      C: 'Stakeholder to value stream stage relationship mapping',
      D: 'Triggering stakeholder to value stream relationship mapping'
    },
    answer: 'C'
  },
{
    question: 'Business architecture practitioners work with:',
    options: {
      A: 'Operations managers to assess resource acquisition',
      B: 'The strategy team to assess and define business strategy',
      C: 'Business analysts to develop business solution requirements',
      D: 'Subject matter experts to determine impacts of strategic change'
    },
    answer: 'D'
  },
{
    question: 'Which business architecture mapping perspective provides supply chain analysts with insights into third party value exchange?',
    options: {
      A: 'Capability mapping',
      B: 'Organization mapping',
      C: 'Value stream mapping',
      D: 'Value network mapping'
    },
    answer: 'D'
  },
{
    question: 'In the business architecture metamodel, domain categories and relationships are:',
    options: {
      A: 'Inclusive of business processes and business requirements',
      B: 'Driven by the results of business information mapping exercises',
      C: 'Derived from business architecture best practices and usage scenarios',
      D: 'Limited to the fixed set of core and extended business architecture domains'
    },
    answer: 'C'
  },
{
    question: "A business architecture practitioner's role in facilitating strategic business alignment is to:",
    options: {
      A: 'Translate business unit imperatives and architecture into consolidated detailed designs',
      B: 'Facilitate corporate and business unit strategy sessions to ensure alignment across the enterprise',
      C: 'Align business unit imperatives and architecture with the corresponding IT direction and\narchitecture',
      D: 'Align business unit imperatives and architecture with the overarching corporate imperatives and\narchitecture'
    },
    answer: 'D'
  },
{
    question: 'Business architecture practitioners should have the basic ability to:',
    options: {
      A: 'Craft agile business requirements to address a specific business issue',
      B: 'Drive business process design efforts, prioritization, documentation and optimization\nIT Certification Guaranteed, The Easy Way!\n18',
      C: 'Socialize and leverage business blueprints to enable business planning and issue analysis',
      D: 'Create and leverage service-oriented architecture components to deploy automation solutions'
    },
    answer: 'C'
  },
{
    question: 'What is the primary business architecture tooling requirement in a scenario where a lightweight business architecture tool is going to coexist with an enterprise architecture tool?',
    options: {
      A: 'Enough budget to ensure that both tools can be funded for a long-term period of time',
      B: 'Third party service support to ensure that the information in both tools remains aligned',
      C: 'Tool interoperability that would enable updates in one tool to be reflected in the other tool',
      D: 'The ability for practitioners to enter and update business architecture information in both tools'
    },
    answer: 'C'
  },
{
    question: 'Which business blueprint is useful for mapping initiatives to business objectives and key performance indicators?',
    options: {
      A: 'Hoshin Kanri',
      B: 'Stakeholder Map',
      C: 'Business Motivation Model',
      D: 'Norton Kaplan Strategy Map'
    },
    answer: 'A'
  },
{
    question: 'What is the primary benefit of applying business architecture when analyzing the impact of globalization?',
    options: {
      A: 'It highlights high risk locations where expansion may undesirable and not recommended',
      B: 'It identifies the gaps and related opportunities available for global instantiation of capabilities',
      C: 'It clarifies the role of business units and stakeholders in driving globalization of the business',
      D: 'It provides visibility into numerous aspects of the enterprise that are impacted by globalization'
    },
    answer: 'D'
  },
{
    question: 'What is the definition of case management?',
    options: {
      A: 'A technical design solution that does not require a business perspective',
      B: 'A business process modeling technique that goes beyond the "happy path"',
      C: 'A business architecture practice for mapping stakeholders to value stream stages',
      D: 'A method or practice of coordinating work by organizing all of the relevant pieces into one place'
    },
    answer: 'D'
  },
{
    question: 'What is a benefit of using business architecture performance analysis in conjunction with business / IT architecture alignment?',
    options: {
      A: 'Improved clarity as to how to improve the overall data architecture',
      B: 'The ability to adjust business strategy based on IT funding models',
      C: 'Improved perspectives for focusing and prioritizing IT investments',
      D: 'Greater clarity in establishing IT technical architecture approaches'
    },
    answer: 'C'
  },
{
    question: 'Which business architecture domain is commonly mapped to value stream to enable business IT Certification Guaranteed, The Easy Way! 19 planning?',
    options: {
      A: 'Capability',
      B: 'Information',
      C: 'Business unit',
      D: 'Business process'
    },
    answer: 'A'
  },
{
    question: 'Who is best qualified to identify, name and define a given capability?',
    options: {
      A: 'A person who has and exercises that capability',
      B: 'Executives who are in charge of the capability',
      C: 'Business architects building the capability map',
      D: 'Business analysts with knowledge of the subject matter'
    },
    answer: 'A'
  },
{
    question: 'What is an accurate description of business architecture?',
    options: {
      A: 'An agile requirements, user story specification technique',
      B: 'A business notation approach for business process modeling',
      C: 'A business perspective that is based on UML modeling approaches',
      D: 'Blueprinting approaches that deliver business abstraction and transparency'
    },
    answer: 'D'
  },
{
    question: 'Which business architecture perspective ensures that business requirements address business weaknesses or limitations?',
    options: {
      A: 'Product heat maps',
      B: 'Capability heat maps',
      C: 'Information heat maps',
      D: 'Business unit heat maps'
    },
    answer: 'B'
  },
{
    question: 'What is true about business architecture and business processes?',
    options: {
      A: 'Business processes are part of the core or foundational business architecture perspective',
      B: 'Business process decomposition is an effective approach to defining business capabilities',
      C: 'End-to-end business processes are represented in business architecture as value streams',
      D: 'Business architecture provides a framework for assessing process improvement opportunities'
    },
    answer: 'D'
  },
{
    question: 'A business wants to improve its ability to establish viable products and reduce the percentage of failed products in its portfolio. Management is not sure where the issues lie today and needs help assessing the situation. Which perspective represents an effective starting point and focus for business performance analysis?',
    options: {
      A: 'The "Deliver Product" value stream going from concept to completion',
      B: 'The "Product Management" capability and all children of this capability',
      C: 'The overall capability map and all related heat mappings and impact ratings\nIT Certification Guaranteed, The Easy Way!\n20',
      D: 'The product-to-stakeholder cross-mapping as defined in the business architecture'
    },
    answer: 'A'
  },
{
    question: 'An executive team of portfolio managers is trying to determine if various initiatives intersect on common business focal points in order to avoid work on overlapping or redundant projects. Which business architecture perspectives should be incorporated into initiative mapping to perform this analysis?',
    options: {
      A: 'Value streams and business processes',
      B: 'Products and services',
      C: 'Business goals and objectives',
      D: 'Value stream stages and capabilities'
    },
    answer: 'D'
  },
{
    question: 'What is a principle of the Business Architecture Maturity Model?',
    options: {
      A: 'It measures the levels of success or failure of business strategy and goals',
      B: 'It establishes a baseline to measure business performance against stated objectives',
      C: 'The value provided to the enterprise increases as the business architecture practice matures',
      D: 'As the scope of the organization and business architecture practice evolves, the maturity model\nevolves with it'
    },
    answer: 'C'
  },
{
    question: 'In which situation should management make organization mapping a priority?',
    options: {
      A: 'There is general agreement across business units regarding shared capabilities',
      B: 'The business is relatively monolithic, where redundancy is limited or understood',
      C: 'Most stakeholders have a shared perspective of the business with little discrepancy',
      D: 'A government agency is launching an initiative across multiple departments and regions'
    },
    answer: 'D'
  },
{
    question: 'What does articulating a value stream require?',
    options: {
      A: 'Value stream stage decomposition into multiple sub-stages',
      B: 'A dynamic rules-based routing map and a routing map worksheet',
      C: 'Stage name, definition, participating stakeholders and entrance / exit criteria',
      D: 'Business process decomposition of that stage, including process swim lanes'
    },
    answer: 'C'
  },
{
    question: 'The Norton Kaplan Strategy Map creates a mapping of strategy that represents which hierarchical relationship?',
    options: {
      A: 'Lower level to higher level business objectives',
      B: 'Ends to be achieved and means to achieve those ends',
      C: 'Learning, internal, customer and financial perspectives',
      D: 'Strategies, objectives, initiatives and key performance indicators\nIT Certification Guaranteed, The Easy Way!\n21'
    },
    answer: 'C'
  },
{
    question: 'In order to effectively govern the practice of business architecture, executive sponsorship should be established:',
    options: {
      A: 'Incrementally as needed',
      B: 'Jointly across major business segments',
      C: 'Within individual independent business units',
      D: 'Within the IT department in alignment with IT architecture governance policies'
    },
    answer: 'B'
  },
{
    question: 'As a business architecture domain category, which definition of a policy is correct?',
    options: {
      A: 'A course or principle of action',
      B: 'An internally defined business rule',
      C: 'A legal statement from the legal team',
      D: 'A third party agreement for insurance coverage'
    },
    answer: 'A'
  },
{
    question: 'What is a comprehensive definition of an initiative?',
    options: {
      A: 'A business investment requiring capital funding',
      B: 'A large project that is outsourced to a third party',
      C: 'A technology deployment to improve automation',
      D: 'A course of action being executed or selected for execution'
    },
    answer: 'D'
  },
{
    question: 'A commonly used definition of a business model states that a business model:',
    options: {
      A: 'Is a combination of various business architecture mapping perspectives',
      B: 'Defines the relationships among business objectives, initiatives and value',
      C: 'Represents a formal approach for executives to articulate business strategy',
      D: 'Describes the rationale of how an organization creates, delivers and captures value'
    },
    answer: 'D'
  },
{
    question: 'In addition to value streams and capabilities, the domains of business architecture that should be used when shifting to a customer-centric business model are:',
    options: {
      A: 'Products and processes',
      B: 'Organization and information',
      C: 'Processes and application systems',
      D: 'Application systems and information'
    },
    answer: 'B'
  },
{
    question: 'A benefit of product mapping is that it:',
    options: {
      A: 'Provides context for aligning business objectives with initiatives',
      B: 'Enables executives to align customer offerings with strategic plans',
      C: 'Establishes a way to better align capabilities with application architecture',
      D: 'Offers a point of focus for determining how to improve stakeholder performance\nIT Certification Guaranteed, The Easy Way!\n22'
    },
    answer: 'B'
  },
{
    question: 'In investment analysis, business architecture:',
    options: {
      A: 'Leverages the capability map as a standalone blueprint',
      B: 'Defines the elements of IT where cost savings can be achieved',
      C: 'Enables strategic and organizational alignment of investment options',
      D: 'Identifies financial performance metrics to inform investment analysis'
    },
    answer: 'C'
  },
{
    question: "What is a key factor in an organization's ability to transform itself in a business architecture context?",
    options: {
      A: 'Access to capital to fund initiatives in a timely manner',
      B: 'Business transparency through business architecture',
      C: "IT's ability to support change through application development",
      D: 'The availability of competent resources with required skill sets'
    },
    answer: 'B'
  },
{
    question: 'Capabilities are based on business:',
    options: {
      A: 'Objects',
      B: 'Initiatives',
      C: 'Processes',
      D: 'Organization charts'
    },
    answer: 'A'
  },
{
    question: 'A common starting point for stakeholder mapping is:',
    options: {
      A: 'Board members, business executives and investors',
      B: 'Business partners, distributors, agents and representatives',
      C: 'External stakeholders who receive direct benefit from the business',
      D: 'Employees who play distinct roles within business process modeling efforts'
    },
    answer: 'C'
  },
{
    question: "A business architecture practitioner's advisory role is described as trusted advisor to:",
    options: {
      A: 'IT as a liaison to the business',
      B: 'Business executives and planning teams',
      C: 'Other business architecture practitioners',
      D: 'Analysts and software development teams'
    },
    answer: 'B'
  },
{
    question: 'How should an organization visualize where it wants to take the business to in the future?',
    options: {
      A: 'Mapping current state systems to the target business model',
      B: 'Establishing a target state solution architecture aligned to business vision',
      C: 'Linking business strategy and vision to IT strategy, using a one-for-one mapping',
      D: 'Viewing business vision and strategy through the lens of the business architecture'
    },
    answer: 'D'
  },
{
    question: 'What is an example of a business model framework?',
    options: {
      A: "Porter's Five Forces Model",
      B: 'The Business Model Canvas',
      C: "Norton Kaplan's Strategy Map",
      D: 'A value stream / capability cross-mapping'
    },
    answer: 'B'
  },
{
    question: 'What is the purpose of the business architecture knowledgebase?',
    options: {
      A: 'It provides a centralized location in which business architects can store business architecture\nblueprints and related artifacts for record keeping purposes',
      B: 'It ensures that business architecture perspectives are consistent, complete and aligned vertically\nand horizontally across the business',
      C: 'It establishes a means of diagramming the conceptual data model that would be derived from\nconcepts defined in the business information map',
      D: 'It enables business subject matter experts to connect project-based business architecture artifacts\ninto an enterprise perspective'
    },
    answer: 'B'
  },
{
    question: 'What is the primary business architecture focal point when undertaking a change management initiative?',
    options: {
      A: 'Enterprise objective setting',
      B: 'Initiative planning and mapping',
      C: 'Capability-to-business unit mapping',
      D: 'Business architecture and agile methodology alignment'
    },
    answer: 'C'
  },
{
    question: 'What does the Business Architecture Maturity Model assess?',
    options: {
      A: 'Business performance',
      B: 'Specific business capabilities',
      C: 'Integration with related disciplines',
      D: 'Business architecture tool abilities'
    },
    answer: 'C'
  },
{
    question: 'What is the goal of a value stream?',
    options: {
      A: 'To satisfy or delight the customer',
      B: 'To deliver value to participating stakeholders',
      C: 'To ensure that each stage is hit in sequence',
      D: 'To reduce the time it takes to move from end-to-end'
    },
    answer: 'A'
  },
{
    question: 'Which business architecture domain is cross-mapped with value streams to highlight the impact of a change management initiative on the business?',
    options: {
      A: 'Capability\nIT Certification Guaranteed, The Easy Way!\n24',
      B: 'Information',
      C: 'Stakeholder',
      D: 'Requirements'
    },
    answer: 'A'
  },
{
    question: 'What is the basic building block of the organization map?',
    options: {
      A: 'Capability',
      B: 'Business Unit',
      C: 'Value Stream Stage',
      D: 'Information Concept'
    },
    answer: 'B'
  },
{
    question: 'What is a principle of product mapping?',
    options: {
      A: 'A product name is unique for each individual business unit',
      B: 'A rebranded product is an offering from a business partner',
      C: 'A product may be created and managed internally or by a business partner',
      D: 'A product map must include a product family or product line mapping perspective'
    },
    answer: 'C'
  },
{
    question: 'How does a shift in strategy impact business capabilities?',
    options: {
      A: 'Business capabilities would have to be heat mapped again',
      B: 'Business capability map is updated to reflect the new strategy',
      C: 'Business capabilities are reassessed to ensure alignment with strategy',
      D: 'Business capabilities are translated into business system requirements'
    },
    answer: 'C'
  },
{
    question: 'As a company aligns its IT applications to business architecture, what describes a primary relationship between business architecture and application systems?',
    options: {
      A: 'Processes are defined by applications',
      B: 'Capabilities are defined by applications',
      C: 'Processes are automated via applications',
      D: 'Capabilities are automated via applications'
    },
    answer: 'D'
  },
{
    question: 'Business / IT architecture transformation is defined as:',
    options: {
      A: 'The state in which systems are aligned to capabilities',
      B: 'The state in which business and IT architecture are aligned',
      C: 'The means of achieving business / IT architecture alignment',
      D: 'The means of ensuring that business processes are automated'
    },
    answer: 'C'
  },
{
    question: 'What are the essential components of the Business Architecture Framework?',
    options: {
      A: 'Methodology, software tools and vignettes',
      B: 'Metamodel, user stories and process models\nIT Certification Guaranteed, The Easy Way!\n25',
      C: 'Business blueprints, use cases and software tools',
      D: 'Knowledgebase, blueprints and business scenarios'
    },
    answer: 'D'
  },
{
    question: 'What is the overriding benefit provided by business architecture in a globalization scenario?',
    options: {
      A: 'It recognizes capability overlaps that must be eliminated in order to support global expansion',
      B: 'It delivers transparency and highlights gaps and redundancies needed to deliver global business\nvalue',
      C: 'It identifies information concepts aligned to capabilities, which must be considered for language\nimpacts',
      D: 'It highlights where the domestic organization should rework processes that support global\ncommunications'
    },
    answer: 'B'
  },
{
    question: 'During business architecture mapping efforts, it is the responsibility of the highest ranking business sponsor representative to:',
    options: {
      A: 'Provide direction and specify the approach for mapping',
      B: 'Provide detailed subject matter expertise as input to the maps',
      C: 'Oversee the quality of the maps and manage the governance process',
      D: 'Motivate the team and communicate to executive steering committees'
    },
    answer: 'D'
  },
{
    question: 'In addition to capability and business unit, which business architecture domain completes the application architecture mapping perspective?',
    options: {
      A: 'Initiative',
      B: 'Value stream',
      C: 'Business process',
      D: 'Information concept'
    },
    answer: 'B'
  },
{
    question: 'What is the benefit of heat mapping the capability map when conceiving, building and launching a new product?',
    options: {
      A: 'It identifies the resources required to deploy the new product',
      B: 'It identifies current processes needed to implement the new product',
      C: 'It provides insight to the capabilities of highest value to the product launch team',
      D: 'It identifies if improved or new capabilities are required to enable the product launch'
    },
    answer: 'D'
  },
{
    question: 'What is a principle of business performance management?',
    options: {
      A: 'Considers financial earnings as an essential input',
      B: 'Requires threshold settings to be established by IT',
      C: 'Defines measures that may be subjective or objective',
      D: 'Measures how well a business is performing against objectives\nIT Certification Guaranteed, The Easy Way!\n26'
    },
    answer: 'D'
  },
{
    question: 'Business architecture is defined by the scope of:',
    options: {
      A: 'The business',
      B: 'The enterprise',
      C: "A manager's authority",
      D: 'A project using the business architecture'
    },
    answer: 'A'
  },
{
    question: 'What is a definitive indicator of how important a capability is to the business?',
    options: {
      A: 'Being a level one capability',
      B: 'Heat map ranking on the heat map',
      C: 'Impact or criticality rating of the capability',
      D: 'Being listed in the strategic capability category'
    },
    answer: 'C'
  },
{
    question: 'A basic principle of business architecture is that business architecture is:',
    options: {
      A: 'Not prescriptive',
      B: 'Defined by deliverables',
      C: 'About third party interface management',
      D: "Applied using Porter's Five Forces Model"
    },
    answer: 'A'
  },
{
    question: 'What is a benefit of aligning business architecture and IT architecture?',
    options: {
      A: 'Technical debt can be more effectively defined and eradicated',
      B: 'IT resources can be used to improve the business architecture',
      C: 'IT architecture can be used to define and scope business initiatives',
      D: 'IT strategies can be more effectively aligned to business-driven planning'
    },
    answer: 'D'
  },
{
    question: 'In order to accurately assess the specific value an initiative plans to deliver to a customer, to what should that initiative be mapped?',
    options: {
      A: 'Capability',
      B: 'Value stream',
      C: 'Business unit',
      D: 'Information concept'
    },
    answer: 'B'
  },
{
    question: "A company has decided to form a joint venture with a vendor supplier of an outsourced capability. What is the impact to the company's pre-joint venture capability map?",
    options: {
      A: 'The joint venture adds business capabilities to the map',
      B: 'There is no change to the pre-joint venture capability map',
      C: 'The value stream / capability cross-mapping must be changed',
      D: 'There is no change to capabilities, but the value stream changes\nIT Certification Guaranteed, The Easy Way!\n27'
    },
    answer: 'B'
  },
{
    question: 'What is the purpose of a dynamic rules-based routing map?',
    options: {
      A: 'To establish relationships across multiple business process models',
      B: 'To represent information exchange across a series of business capabilities',
      C: 'To define workflow within the context of a series of value network exchanges',
      D: 'To represent a rules-based stakeholder work transition in complex environments'
    },
    answer: 'D'
  },
{
    question: 'What do a value stream and a business process have in common?',
    options: {
      A: 'Each shows the business "in motion," moving left to right',
      B: 'Each decomposes into dynamic rules-based routing maps',
      C: 'Each must be stakeholder triggered as a basis for existence',
      D: 'Each represents how a business delivers value to a customer'
    },
    answer: 'A'
  },
{
    question: 'It is important to apply change management when establishing a business architecture practice because it:',
    options: {
      A: 'Helps business architecture practitioners transition into their new roles',
      B: 'Creates integration between business architecture and the change management discipline',
      C: 'Ensures that the results from business change initiatives are socialized and adopted within the\norganization',
      D: 'Ensures that the business architecture practice is formally adopted and appropriately integrated\nwithin the organization'
    },
    answer: 'D'
  },
{
    question: 'To ensure that initiatives are aligned to strategy, an initiative should be:',
    options: {
      A: 'Vetted by strategic planning committees',
      B: 'Driven directly out of a specific business unit',
      C: 'Run through the program management office',
      D: 'Tied directly to one or more explicit business objectives'
    },
    answer: 'D'
  },
{
    question: 'Assuming that an insurance / multi-service financial institution has multiple divisions with multiple products and partners, the minimum number of value streams that could represent customer product acquisition is as many as needed to represent:',
    options: {
      A: 'All product lines',
      B: 'Major insurance divisions',
      C: 'Each customer segment',
      D: 'A common value perspective'
    },
    answer: 'D'
  },
{
    question: 'A benefit of leveraging business architecture in the context of defining a solution architecture is that it:',
    options: {
      A: 'Defines where technological gaps should be prioritized to assist with technology architecture\ndesign',
      B: 'Enables prioritization of business focal points to streamline widespread business process modeling\ndeployments',
      C: 'Provides the application and data architecture perspective required to help shape and design\nbusiness architecture',
      D: 'Provides a solution focus that reaches beyond individual projects, ensuring that business unit\nstrategies are addressed holistically'
    },
    answer: 'D'
  },
{
    question: 'A capability that has been automated:',
    options: {
      A: 'Is a service',
      B: 'Is a capability',
      C: 'Is an IT capability',
      D: 'Is an application system'
    },
    answer: 'B'
  },
{
    question: 'A strong motivation for pursuing stakeholder mapping efforts is that stakeholder mapping:',
    options: {
      A: 'Establishes role definitions for business process modeling efforts',
      B: 'Provides a way to better define new or desired business capabilities',
      C: 'Establishes a framework for defining information related perspectives',
      D: 'Enables a business to focus its investments on improving value delivery'
    },
    answer: 'D'
  },
{
    question: 'What is the primary mapping activity that supports regulatory compliance management?',
    options: {
      A: 'Policy mapping',
      B: 'Strategy mapping',
      C: 'Capability mapping',
      D: 'Information mapping'
    },
    answer: 'A'
  },
{
    question: 'In which business architecture perspective are stakeholder types normally reflected?',
    options: {
      A: 'Product mapping',
      B: 'Initiative mapping',
      C: 'Capability mapping',
      D: 'Information mapping'
    },
    answer: 'D'
  },
{
    question: 'What is a benefit of value stream mapping?',
    options: {
      A: 'It helps envision value delivery for participating stakeholders',
      B: 'It establishes a foundation for a well-defined business vocabulary\nIT Certification Guaranteed, The Easy Way!\n29',
      C: 'It provides an investment focus for improving customer satisfaction',
      D: 'It allows each business unit to avoid viewing value delivery holistically'
    },
    answer: 'C'
  },
{
    question: 'What will drive a business architecture team to establish and deploy a formal business architecture knowledgebase?',
    options: {
      A: 'Value streams, capabilities and related cross-mappings are being managed using a sophisticated\nspreadsheet',
      B: 'The team is in the early stages of defining and populating its business capabilities, value streams\nand stakeholders',
      C: 'The sole business architecture blueprint currently in place is a mature, centralized and relatively\nmature capability map',
      D: 'The business architecture includes well-defined business objectives, value streams, stakeholders,\ncapabilities, initiatives and corresponding relationships'
    },
    answer: 'D'
  },
{
    question: 'What are the key benefits to piloting a business architecture approach prior to establishing a practice area within an organization?',
    options: {
      A: 'It provides executive visibility and jump starts business architecture baseline',
      B: 'It jump starts business architecture baseline and creates detailed methodology',
      C: 'It establishes relationships with downstream consumers and documents integration points',
      D: 'It provides immediate value to business subject matter experts and creates detailed methodology'
    },
    answer: 'A'
  },
{
    question: 'How does business architecture benefit business performance management?',
    options: {
      A: 'It produces insights into system development lifecycle improvements',
      B: 'It delivers effectiveness ratings associated with tangible business focal points',
      C: 'It provides organization and stakeholder mappings as a basis for impact analysis',
      D: 'It establishes business process models as a way of determining operational efficiency'
    },
    answer: 'B'
  },
{
    question: 'What is an example of a business architecture scenario?',
    options: {
      A: 'Strategy map',
      B: 'Balanced Scorecard',
      C: 'Merger & acquisition',
      D: 'Business architecture knowledgebase'
    },
    answer: 'C'
  },
{
    question: 'What is an aspect of dynamic rules-based routing maps and routing map worksheets?',
    options: {
      A: 'Event trigger',
      B: 'Decision tree\nIT Certification Guaranteed, The Easy Way!\n30',
      C: 'Business model',
      D: 'Business capability'
    },
    answer: 'A'
  },
{
    question: 'What is true about capability definitions?',
    options: {
      A: 'All capabilities require definitions',
      B: 'Only some capabilities require definitions',
      C: 'The definitions use the capability terms in the definitions',
      D: 'The definitions should be comprised of as many sentences as needed'
    },
    answer: 'A'
  },
{
    question: "What is the business architecture practitioner's role when there is a change in strategy?",
    options: {
      A: 'Compare system and process architectures within business capabilities and develop business\nrequirements to align them',
      B: 'Highlight value streams and core business capabilities and define the impacts on value delivery,\ncapabilities and business areas',
      C: "Identify what needs to change through financial gap analysis and create business capabilities to\nimprove the organization's financial position",
      D: 'Formulate an acceptable business solution and then build a comprehensive design that defines the\nscope and outlines business requirements'
    },
    answer: 'B'
  },
{
    question: 'Which perspective closely ties a business requirement to business strategy?',
    options: {
      A: 'A policy',
      B: 'A service',
      C: 'A capability',
      D: 'An outcome'
    },
    answer: 'D'
  },
{
    question: 'What are the four domains of IT architecture?',
    options: {
      A: 'Application, Data, Infrastructure and Content',
      B: 'Technical, Data, Solution and Shadow Systems',
      C: 'Application, Data, Shadow Systems and Technical',
      D: 'Technical, Solution, Content and Shadow Systems'
    },
    answer: 'C'
  },
{
    question: 'What is the correct sequence of events when establishing a business architecture practice within an organization?',
    options: {
      A: 'Create business architecture baseline, socialize baseline to obtain buy-in and then communicate\nbusiness value',
      B: 'Determine business architecture objectives, communicate business value and then establish\nbusiness architecture baseline',
      C: 'Establish business architecture baseline, map to IT architecture and then assess opportunities to\nIT Certification Guaranteed, The Easy Way!\n31\nleverage business architecture',
      D: 'Formalize the governance structure, build the business architecture baseline and then determine\nbusiness architecture objectives'
    },
    answer: 'B'
  },
{
    question: 'What is a core competency for a business architecture practitioner?',
    options: {
      A: 'Collaboration',
      B: 'Process modeling',
      C: 'Strategy development',
      D: 'Software tool installation'
    },
    answer: 'A'
  },
{
    question: 'Under which circumstances should an organization select a lightweight business architecture tool over a more comprehensive enterprise architecture tool?',
    options: {
      A: "The CIO wants to establish an in-house capacity to manage the organization's software portfolio",
      B: 'A near-term goal involves using the business architecture to plan and manage IT architecture\ntransformation efforts',
      C: 'Practitioners are focused on aligning the business architecture with a more comprehensive set of\nIT oriented assets',
      D: 'A robust business architecture has been mapped out that requires more sophisticated levels of\ngovernance, reporting and analysis'
    },
    answer: 'D'
  },
{
    question: 'What is the overriding benefit of using business architecture in conjunction with application portfolio management?',
    options: {
      A: 'It provides an application architecture componentization perspective',
      B: 'It establishes a framework for assessing and selecting IT technologies',
      C: "It improves a business's ability to evaluate IT application operational costs",
      D: 'It provides a business value perspective on application portfolio investments'
    },
    answer: 'D'
  },
{
    question: 'When approaching and socializing a business architecture practice, a successful business architecture practitioner should:',
    options: {
      A: 'Think globally, but act locally',
      B: 'Focus on solution architecture',
      C: 'Provide maps, not business solutions',
      D: 'Start with current state IT perspective'
    },
    answer: 'A'
  },
{
    question: 'In addition to capability, which business architecture domain is commonly heat mapped to enable business performance analysis?',
    options: {
      A: 'Stakeholder',
      B: 'Organization\nIT Certification Guaranteed, The Easy Way!\n32',
      C: 'Value stream',
      D: 'Business process'
    },
    answer: 'C'
  },
{
    question: 'What is a benefit of synchronized business / IT architecture transformation?',
    options: {
      A: 'It establishes clarity in technical architecture definition and framing',
      B: 'It helps frame solution deployments in a cost effective, manageable timeline',
      C: 'It quantifies the ability of the organization to dispose of obsolete technologies',
      D: 'It ensures that business and IT goals are aligned from planning through delivery'
    },
    answer: 'D'
  },
{
    question: 'What accurately describes future state capabilities?',
    options: {
      A: 'They are capabilities that have yet to be automated',
      B: 'They cannot appear in a capability map in any form',
      C: 'They have no place in a capability mapping discussion',
      D: 'They represent capabilities the business has no ability to perform'
    },
    answer: 'D'
  },
{
    question: 'Business architecture team principles are described as:',
    options: {
      A: 'A set of principles that guide the decisions of the business',
      B: 'An "elevator pitch" which describes a clear purpose for the business architecture team',
      C: 'An agreed upon set of truths that guide the actions of business architecture practitioners',
      D: 'An engagement model for how business and IT interacts with the business architecture team'
    },
    answer: 'C'
  },
{
    question: 'What is a business benefit of leveraging business architecture to design, deploy and manage SOA services?',
    options: {
      A: 'It enables IT solutions to more effectively implement business processes across multiple business\nunits',
      B: 'It helps articulate organizational mapping and alignment as a basis for scoping deployment of SOA\nservices',
      C: 'It provides a clear, unambiguous perspective of how to automate and deliver specific business\nsolutions across business units',
      D: 'It establishes a roadmap perspective for designing and deploying business architecture value\nstreams and value stream stages'
    },
    answer: 'C'
  },
{
    question: 'A business architecture practitioner helps an organization clarify how to change by:',
    options: {
      A: 'Developing a new business model',
      B: "Evaluating the organization's ability and commitment to change",
      C: "Assessing an organization's maturity in terms of business capabilities",
      D: 'Comparing a capability map to a best practices model from a similar business situation'
    },
    answer: 'C'
  },
{
    question: 'From which primary source are information concepts and definitions derived?',
    options: {
      A: 'Business units',
      B: 'Product inventories',
      C: 'Business capabilities',
      D: 'Value stream stage names'
    },
    answer: 'C'
  },
{
    question: 'Which discipline is considered to be a part of the extended business architecture?',
    options: {
      A: 'Strategy mapping',
      B: 'Capability mapping',
      C: 'Organization mapping',
      D: 'Business process modeling'
    },
    answer: 'A'
  },
{
    question: 'What is an appropriate tool for representing relationships among strategic objectives, initiatives and key performance indicators?',
    options: {
      A: 'SWOT diagrams',
      B: 'Hoshin Kanri diagrams',
      C: 'Porter Five Forces Model',
      D: 'Ansoff Product/Market Grid'
    },
    answer: 'B'
  },
{
    question: 'What provides the strongest indication of misaligned projects when performing an analysis of potential initiatives supporting a common strategy?',
    options: {
      A: 'The financial analysis identifies a negative net present value',
      B: 'There is little-to-no cross-business unit collaboration or coordination',
      C: 'The combined projects have a low opportunity for increased revenue',
      D: 'All of the projects address a single capability or its lower-level capabilities'
    },
    answer: 'B'
  },
{
    question: 'Which capability serves as a key focal point for deploying a case management environment?',
    options: {
      A: 'Fuel Management',
      B: 'Asset Management',
      C: 'Product Management',
      D: 'Agreement Management'
    },
    answer: 'D'
  },
{
    question: 'Which value does business architecture provide to case management?',
    options: {
      A: 'It identifies automation points for case management technology solutions',
      B: 'It establishes a business case for investing in case management technologies',
      C: 'It provides a context for modeling business processes that cross business units',
      D: 'It delivers a holistic framework for managing work associated with stakeholder value'
    },
    answer: 'D'
  },
{
    question: 'Within the context of business architecture, the term "governance" refers to:',
    options: {
      A: 'Decision authority and approval process',
      B: 'Oversight rules, rewards and consequences',
      C: 'Decisioning methodology, tools and documentation',
      D: 'Sponsorship, principles, standards, quality and escalation'
    },
    answer: 'D'
  },
{
    question: 'Which scenario should benefit from using a case management solution?',
    options: {
      A: 'Assembly-like workflow in a manufacturing scenario',
      B: 'Unpredictable work that involves multiple knowledge workers',
      C: 'Routine, repeatable business processes that can be predictably modeled',
      D: 'Straight through, predictable processing with manageable decision structures'
    },
    answer: 'B'
  },
{
    question: 'What constrains an organization map?',
    options: {
      A: 'The boundaries of the legal entity focal point',
      B: 'The executives sponsoring the mapping effort',
      C: 'The business unit running the mapping project',
      D: 'The boundaries of the business that is being mapped'
    },
    answer: 'D'
  },
{
    question: 'A well-structured business architecture value proposition contains:',
    options: {
      A: 'Business goals, timelines, delivery times, and skill sets',
      B: 'Customer satisfaction goals aligned to future state value streams',
      C: "Language that is concise and appeals to business leaders' strongest decision-making drivers",
      D: 'Business architecture deliverables aligned to key consumption points within the operational\nstrategy'
    },
    answer: 'C'
  },
{
    question: 'A product map should obtain product names from which source?',
    options: {
      A: 'Customers',
      B: 'The business',
      C: 'Industry literature',
      D: 'IT planning teams'
    },
    answer: 'B'
  },
{
    question: 'What is a valid business information concept candidate?',
    options: {
      A: 'Automobile',
      B: 'Agreement',
      C: 'AAA Towing',
      D: 'Application system'
    },
    answer: 'B'
  },
{
    question: 'What provides a clear indication that important information mapping relationships were IT Certification Guaranteed, The Easy Way! 35 poorly implemented in practice?',
    options: {
      A: 'Inability to visualize new workflow solutions flowing through a value stream',
      B: 'An inability to differentiate certain specialty customers from other types of customers',
      C: 'Repetition of customer information for every account and policy owned by that customer',
      D: 'Poor product and service innovation and deployment across product lines and business units'
    },
    answer: 'C'
  },
{
    question: "A central component of Porter's Five Forces Model is:",
    options: {
      A: 'Cost',
      B: 'Strategy',
      C: 'Efficiency',
      D: 'Competition'
    },
    answer: 'D'
  },
{
    question: 'A business wants to shift from a product line and business unit centric business model to a customer centric business model. This would involve major business as well as IT transformation. Which baseline business frame of reference will provide the best foundation for such a transformation?',
    options: {
      A: 'A well-defined information map and resulting conceptual and logical data architecture',
      B: 'A complete, detailed inventory of all business processes, application systems and databases',
      C: 'A mature capability map, value stream / capability mapping and business unit / capability mapping',
      D: 'A complete cross-mapping between the capability map and the current state application\narchitecture'
    },
    answer: 'C'
  },
{
    question: 'In a business architecture context, changes to facilities and equipment:',
    options: {
      A: "Result from an organization's strategic direction and operational issues",
      B: 'Accommodate different work habits as jobs evolve and culture changes',
      C: 'Are based on current operational need, not business architecture directives',
      D: 'Must be considered when new IT or production technology becomes available'
    },
    answer: 'A'
  },
{
    question: 'Which business architecture perspective is useful for identifying how to improve or capitalize on business model-defined Key Partnerships?',
    options: {
      A: 'Capability to value stream mapping',
      B: 'Business unit to capability mapping',
      C: 'Stakeholder to value stream mapping',
      D: 'Business objective to initiative mapping'
    },
    answer: 'C'
  },
{
    question: 'Which business architecture cross-mapping should be used as a starting point when implementing a regulation that prohibits the use of a confidential personal identifier?',
    options: {
      A: 'Capability / Application',
      B: 'Capability / Information',
      C: 'Organization / Capability',
      D: 'Value stream / Information'
    },
    answer: 'B'
  },
{
    question: 'How can utilizing business architecture help when shifting to a customer-centric business model?',
    options: {
      A: 'It provides guidance on selection of a new customer relationship management system',
      B: 'It provides a basis for current/future state perspectives needed to realign the business model',
      C: 'It identifies business units and capabilities required to better serve various customer segments',
      D: 'It puts the business architecture practitioner in the role of the customer to understand the\nexperience'
    },
    answer: 'B'
  },
{
    question: 'In business architecture, a service is:',
    options: {
      A: 'A pre-bundled sets of capabilities',
      B: 'An IT organization deliverable to a business unit',
      C: 'An intangible product, such as accounting or consultancy',
      D: 'A perspective on value stream stage to capability mapping'
    },
    answer: 'C'
  },
{
    question: 'Unlike business architecture, business requirements analysis describes what the business:',
    options: {
      A: 'Currently does',
      B: 'Needs and wants',
      C: 'Delivers to customers',
      D: 'Envisions as strategic objectives'
    },
    answer: 'B'
  },
{
    question: 'Which course of action will likely lead to effective policy compliance?',
    options: {
      A: 'Policy centralization',
      B: 'Policy to product mapping',
      C: 'Policy enforcement teams',
      D: 'Policy to business partner alignment'
    },
    answer: 'A'
  },
{
    question: 'A structured business architecture approach can reduce real and inherent costs resulting from:',
    options: {
      A: 'Discrepancies between culture and values\nIT Certification Guaranteed, The Easy Way!\n37',
      B: 'Silo-based, business unit specific budget models',
      C: 'Lack of formal requirements definition methodology',
      D: 'Miscommunication due to misaligned concepts and terminology'
    },
    answer: 'D'
  },
{
    question: 'Which business architecture perspective helps ensure that multiple business requirements teams utilize a common business vocabulary across multiple business units?',
    options: {
      A: 'Initiative',
      B: 'Product',
      C: 'Capability',
      D: 'Organization'
    },
    answer: 'C'
  },
{
    question: 'At which maturity level is an organization that has no formal business architecture mappings, business architects or business architecture function?',
    options: {
      A: 'Level 1',
      B: 'Level 2',
      C: 'Level 4',
      D: 'Level 5'
    },
    answer: 'A'
  },
{
    question: 'A business that uses The Open Group Architecture Framework (TOGAF) Architecture Development Method (ADM) wants to ensure that its value stream and capability based business architecture approach can be leveraged within its overall enterprise architecture. Which approach will accomplish this goal?',
    options: {
      A: 'Incorporate business architecture principles into TOGAF ADM Framework and Principles',
      B: 'Incorporate business strategy and initiative mapping into the TOGAF Architecture Vision, Phase A',
      C: 'Align business architecture information mapping to TOGAF Information Systems Architecture,\nPhase C',
      D: 'Map core business architecture perspectives to TOGAF Business Architecture, Phase B and\nleverage accordingly'
    },
    answer: 'D'
  },
{
    question: 'What is the impact of corporate governance on business architecture?',
    options: {
      A: 'It assigns responsibility and accountability for the issue escalation process to minimize project lag\ntime',
      B: 'It dictates the level and priority of management information required during implementation of a\nbusiness solution',
      C: 'It imposes security rules and restrictions to ensure that business solutions do not unduly impact\nbusiness components or projects',
      D: 'It provides the decision making and approval framework with review and validation at logical\nIT Certification Guaranteed, The Easy Way!\n38\ncheckpoints to ensure results meet expectations'
    },
    answer: 'D'
  },
{
    question: 'What is a benefit of leveraging business architecture as a distinct domain within enterprise architecture?',
    options: {
      A: 'It facilitates the integration of strategic planning through solution deployment',
      B: 'It establishes a more effective foundation for technical architecture and infrastructure',
      C: 'It enables business strategy to be shaped by IT-specific aspects of enterprise architecture',
      D: 'It provides a more effective way to incorporate business process modeling into enterprise\narchitecture'
    },
    answer: 'A'
  },
{
    question: 'In which circumstance should the Porter value chain be used instead of a business architecture value stream?',
    options: {
      A: 'A government agency wants to define an end-to-end perspective for motor vehicle licensing',
      B: 'A bank wants to represent how a loan default may be impacted by concurrent loan refinancing',
      C: 'A manufacturing company wants to distinguish between value creating and value supporting\nactivities',
      D: 'An insurance company wants to define a common claims processing perspective across business\nunits'
    },
    answer: 'C'
  },
{
    question: 'Work defined by a value stream:',
    options: {
      A: 'Represents a "happy path"',
      B: 'Triggers other value streams',
      C: 'Is shown as a business process diagram',
      D: 'Is a self-contained end-to-end perspective'
    },
    answer: 'D'
  },
{
    question: 'What is a major benefit of initiative mapping?',
    options: {
      A: 'It assists in tracking the achievement of strategic business objectives',
      B: 'It allows management to track stakeholder benefits tied to value streams',
      C: 'It helps define how various business units relate to business stakeholders',
      D: 'It enables portfolio decisions by capturing complex relationships among in flight programs'
    },
    answer: 'D'
  },
{
    question: 'What principle strictly constrains the business architecture value stream that differentiates it from a Lean Six Sigma value stream?',
    options: {
      A: 'Focus on business versus technology',
      B: 'Move left to right and decompose into lower level views',
      C: 'Serve as a means for defining ways to improve the business',
      D: 'Represent an end-to-end stakeholder triggered perspective'
    },
    answer: 'D'
  },
{
    question: 'What does a business architecture information map bring to data architecture?',
    options: {
      A: 'Detailed data attributing guidance in regards to given data values',
      B: 'Overall data governance from data mart or data warehouse perspective',
      C: 'Logical data modeling principles to guide approaches to refining a data model',
      D: 'Relationship perspectives that inform data architecture entity relationship mapping'
    },
    answer: 'D'
  },
{
    question: 'Which business situation should be analyzed using a value stream?',
    options: {
      A: 'Defining a detailed billing and collection process',
      B: 'Establishing a complete perspective of how to manage an account',
      C: 'Creating an end-to-end view of how an inventor would obtain a patent',
      D: 'Understanding all of the business units that have a claims management ability'
    },
    answer: 'C'
  },
{
    question: 'Which business architecture perspective augments capability-to-application mapping to further application portfolio consolidation analysis?',
    options: {
      A: 'Initiative',
      B: 'Strategy',
      C: 'Product',
      D: 'Business unit'
    },
    answer: 'D'
  }
];

export default function CBAQuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => quizData.sort(() => 0.5 - Math.random()));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setSelectedAnswer(option);
    setHasAnswered(true);
    setShowFeedback(true);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setHasAnswered(false);
  };

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {shuffledQuestions.length}</p>
      </div>
    );
  }

  const q = shuffledQuestions[currentQuestion];

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{q.question}</p>
      {Object.entries(q.options).map(([key, value]) => (
        <button
          key={key}
          onClick={() => handleAnswer(key)}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: 10,
            padding: 10,
            backgroundColor: selectedAnswer === key ? '#ccc' : '#eee',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
        >
          {key}. {value}
        </button>
      ))}
      {showFeedback && (
        <div style={{ marginTop: 20 }}>
          {selectedAnswer === q.answer ? (
            <p style={{ color: 'green' }}>Correct!</p>
          ) : (
            <p style={{ color: 'red' }}>Incorrect. The correct answer is {q.answer}: {q.options[q.answer]}</p>
          )}
          <button onClick={nextQuestion} style={{ marginTop: 10 }}>Next</button>
        </div>
      )}
    </div>
  );
}
