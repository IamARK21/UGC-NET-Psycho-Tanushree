// =============================================
// PsychoPrep – Data Store
// UGC-NET JRF Psychology Question Bank & Syllabus
// =============================================

const SYLLABUS_UNITS = [
  {
    id: 1,
    title: "Emergence of Psychology",
    weight: "~8%",
    priority: "Medium",
    priorityClass: "badge-med",
    icon: "🏛️",
    color: "#8b5cf6",
    sections: [
      {
        title: "Eastern Psychological Thought",
        topics: ["Bhagavad Gita & Psychology", "Buddhist Psychology (Mind & Consciousness)", "Jain Psychology", "Sufism & Transpersonal Psychology", "Integral Yoga (Sri Aurobindo)", "Indian concept of Chitta, Manas, Buddhi, Ahamkara"]
      },
      {
        title: "Academic Psychology in India",
        topics: ["Pre-independence psychology", "Post-independence developments", "Indigenization of psychology", "Indian psychology associations", "NIMHANS contributions"]
      },
      {
        title: "Western Schools of Psychology",
        topics: ["Structuralism (Wundt, Titchener)", "Functionalism (William James, Dewey)", "Psychoanalysis (Freud, Jung, Adler)", "Gestalt Psychology (Wertheimer, Kohler, Koffka)", "Behaviourism (Watson, Skinner, Pavlov)", "Humanistic Psychology (Maslow, Rogers)", "Existential Psychology (Frankl, May)", "Transpersonal Psychology", "Cognitive Revolution (Neisser, Miller)", "Multiculturalism"]
      },
      {
        title: "Knowledge Paradigms",
        topics: ["Positivism & Post-positivism", "Social Constructionism", "Existential Phenomenology", "Critical Psychology", "Feminist Psychology"]
      }
    ],
    examTip: "Focus on the 'first person' of each school (e.g., Wundt for Structuralism, Watson for Behaviourism). Questions often ask which psychologist founded or contributed to a specific school. Eastern psychology questions from Bhagavad Gita concepts appear in almost every exam."
  },
  {
    id: 2,
    title: "Research Methodology and Statistics",
    weight: "~15%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "📊",
    color: "#ef4444",
    sections: [
      {
        title: "Research Designs",
        topics: ["Experimental vs Non-experimental designs", "True experimental design", "Quasi-experimental design", "Survey & Correlational research", "Case study method", "Longitudinal vs Cross-sectional design", "Mixed-methods research", "Action research", "Field experiments"]
      },
      {
        title: "Research Process",
        topics: ["Problem formulation", "Hypothesis (Null, Alternative, Directional)", "Sampling methods (Random, Stratified, Cluster, Purposive)", "Variables (IV, DV, Extraneous, Moderating)", "Operationalization", "Internal & External validity", "Threats to validity (confounds)"]
      },
      {
        title: "Qualitative Research",
        topics: ["Phenomenological inquiry", "Grounded theory (Glaser & Strauss)", "Ethnography", "Narrative analysis", "Content analysis", "Focus group", "Triangulation"]
      },
      {
        title: "Descriptive Statistics",
        topics: ["Measures of central tendency (Mean, Median, Mode)", "Measures of variability (Range, SD, Variance)", "Skewness & Kurtosis", "Percentiles & Quartiles", "Normal distribution & properties", "Frequency distribution"]
      },
      {
        title: "Inferential Statistics",
        topics: ["t-test (Independent & Paired)", "ANOVA (One-way, Two-way, MANOVA)", "Chi-square test", "Correlation (Pearson, Spearman, Point-biserial)", "Regression (Simple & Multiple)", "Non-parametric tests (Mann-Whitney, Wilcoxon, Kruskal-Wallis)", "Type I & Type II errors", "Power of a test", "Effect size (Cohen's d)"]
      }
    ],
    examTip: "This unit has the highest weightage. Master statistical test selection criteria (when to use t-test vs ANOVA vs non-parametric). Questions on Type I/II errors, degrees of freedom, and interpreting correlation/regression are very frequent. Know your null hypothesis logic well."
  },
  {
    id: 3,
    title: "Psychological Testing",
    weight: "~10%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "🧪",
    color: "#06b6d4",
    sections: [
      {
        title: "Nature & Types of Tests",
        topics: ["Intelligence tests (Stanford-Binet, Wechsler: WAIS, WISC, WPPSI)", "Personality tests (MMPI, NEO-PI-R, 16PF)", "Projective tests (Rorschach, TAT, CAT, DAP, HTP)", "Achievement tests", "Aptitude tests", "Neuropsychological tests (Bender-Gestalt, Luria-Nebraska)", "Culture-fair tests"]
      },
      {
        title: "Test Construction",
        topics: ["Item writing (Difficulty index, Discrimination index)", "Item analysis", "Standardization procedure", "Norm development (Age norms, Grade norms, Percentile norms, Standard scores)", "Test blueprint & table of specifications"]
      },
      {
        title: "Reliability",
        topics: ["Test-retest reliability", "Parallel forms reliability", "Internal consistency (Cronbach's α, KR-20, KR-21, Split-half)", "Inter-rater reliability", "Standard Error of Measurement (SEM)"]
      },
      {
        title: "Validity",
        topics: ["Content validity", "Criterion validity (Predictive, Concurrent)", "Construct validity", "Face validity", "Incremental validity", "Validity coefficient"]
      },
      {
        title: "Applications",
        topics: ["Educational assessment", "Clinical diagnosis", "Organizational selection", "Career guidance", "Forensic assessment", "Cross-cultural testing issues"]
      }
    ],
    examTip: "Know all types of reliability and validity and how they are measured. Questions on specific psychological tests (MMPI, Rorschach, TAT) and their authors appear every exam. Cronbach's alpha formula and interpretation are very important."
  },
  {
    id: 4,
    title: "Biological Basis of Behaviour",
    weight: "~10%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "🧬",
    color: "#10b981",
    sections: [
      {
        title: "Nervous System",
        topics: ["CNS (Brain & Spinal cord) structure & function", "PNS (Somatic & Autonomic nervous systems)", "Sympathetic vs Parasympathetic functions", "Spinal reflexes", "Brainstem (Medulla, Pons, Cerebellum)", "Reticular Activating System (RAS)"]
      },
      {
        title: "Brain Structure & Function",
        topics: ["Lobes of cortex (Frontal, Parietal, Temporal, Occipital) & functions", "Limbic system (Hippocampus, Amygdala, Hypothalamus)", "Corpus callosum & split-brain research", "Broca's area & Wernicke's area", "Basal ganglia", "Thalamus & Hypothalamus", "Hemispheric specialization (left vs right brain)"]
      },
      {
        title: "Neurons & Neurotransmission",
        topics: ["Neuron structure (Dendrites, Axon, Myelin sheath)", "Action potential & resting potential", "Synaptic transmission", "Neurotransmitters (Dopamine, Serotonin, GABA, Glutamate, Acetylcholine, Norepinephrine)", "Agonists & Antagonists", "Excitatory vs Inhibitory neurotransmitters"]
      },
      {
        title: "Endocrine System",
        topics: ["HPA axis (Hypothalamus-Pituitary-Adrenal)", "HPG axis & reproductive hormones", "Thyroid & Parathyroid functions", "Adrenal glands (Cortisol, Adrenaline)", "Insulin & Glucagon", "Melatonin & Circadian rhythms"]
      },
      {
        title: "Genetics & Brain Imaging",
        topics: ["Heritability concept", "Twin studies", "Gene-environment interaction", "EEG, fMRI, PET scan, CT scan", "Lesion studies", "TMS (Transcranial Magnetic Stimulation)"]
      }
    ],
    examTip: "Brain region-function mapping is heavily tested. Know which lobe/area is responsible for language (Broca's vs Wernicke's), memory (hippocampus), emotion (amygdala), etc. Neurotransmitter-disorder associations (low dopamine = Parkinson's; low serotonin = depression) are very common questions."
  },
  {
    id: 5,
    title: "Attention, Perception, Learning, Memory & Forgetting",
    weight: "~12%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "👁️",
    color: "#f59e0b",
    sections: [
      {
        title: "Attention",
        topics: ["Selective attention (Cherry's cocktail party effect)", "Bottleneck theories (Broadbent, Treisman, Deutsch-Norman)", "Attention vs Consciousness", "Divided attention", "Vigilance & Sustained attention", "Pre-attentive vs Attentive processing", "Inattentional blindness"]
      },
      {
        title: "Perception",
        topics: ["Gestalt principles (Figure-ground, Proximity, Similarity, Continuity, Closure)", "Depth perception (Monocular & Binocular cues)", "Motion perception", "Perceptual constancies (Size, Shape, Brightness, Color)", "Visual illusions (Müller-Lyer, Ponzo)", "Top-down vs Bottom-up processing", "Signal detection theory (SDT)"]
      },
      {
        title: "Learning",
        topics: ["Classical conditioning (Pavlov, acquisition, extinction, generalization, discrimination)", "Operant conditioning (Skinner, Thorndike – Law of Effect)", "Reinforcement schedules (FR, VR, FI, VI)", "Punishment (positive & negative)", "Social learning theory (Bandura – observational learning, self-efficacy)", "Latent learning (Tolman)", "Insight learning (Kohler)", "Taste aversion & Biological constraints on learning"]
      },
      {
        title: "Memory",
        topics: ["Atkinson-Shiffrin model (Sensory, STM, LTM)", "Working memory model (Baddeley & Hitch – phonological loop, visuospatial sketchpad, central executive)", "Levels of Processing (Craik & Lockhart)", "Encoding (elaborative, acoustic, semantic)", "Retrieval (recall, recognition, relearning)", "Explicit (Declarative: episodic & semantic) vs Implicit memory", "Procedural memory", "Prospective memory"]
      },
      {
        title: "Forgetting",
        topics: ["Ebbinghaus forgetting curve", "Decay theory", "Interference theory (Proactive & Retroactive)", "Retrieval failure (cue-dependent forgetting)", "Motivated forgetting (Freud)", "Amnesia (Anterograde & Retrograde)", "Misinformation effect (Loftus)"]
      }
    ],
    examTip: "Reinforcement schedules (especially which is most resistant to extinction = Variable Ratio) are a perennial favourite. Know Baddeley's working memory components. Ebbinghaus's findings and Gestalt principles are high-frequency topics."
  },
  {
    id: 6,
    title: "Thinking, Intelligence & Creativity",
    weight: "~10%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "💡",
    color: "#8b5cf6",
    sections: [
      {
        title: "Thinking & Reasoning",
        topics: ["Concepts & Categorization (prototype, exemplar models)", "Deductive reasoning", "Inductive reasoning", "Analogical reasoning", "Heuristics (availability, representativeness, anchoring)", "Cognitive biases", "Decision-making (prospect theory)", "Problem-solving (trial & error, algorithms, heuristics, insight)"]
      },
      {
        title: "Intelligence – Theories",
        topics: ["Spearman's Two-Factor theory (g & s factors)", "Thurstone's Primary Mental Abilities", "Guilford's Structure of Intellect (SI) model (150 factors)", "Cattell's Fluid (Gf) & Crystallized (Gc) Intelligence", "Vernon's Hierarchical model", "Gardner's Multiple Intelligences (8 types)", "Sternberg's Triarchic theory (Analytical, Creative, Practical)", "Emotional Intelligence (Salovey & Mayer, Goleman)", "PASS model (Das & Naglieri)"]
      },
      {
        title: "Intelligence – Measurement",
        topics: ["Binet-Simon scale history", "Stanford-Binet IQ (Terman)", "IQ formula (MA/CA × 100)", "Deviation IQ", "Wechsler scales (WAIS, WISC-IV)", "Intelligence & heritability", "Flynn effect", "Cultural bias in testing"]
      },
      {
        title: "Creativity",
        topics: ["Nature of creativity (4 Ps: Person, Process, Product, Press)", "Divergent vs Convergent thinking (Guilford)", "Torrance Tests of Creative Thinking (TTCT)", "Investment theory (Sternberg & Lubart)", "Intrinsic motivation & creativity", "Creative genius & personality traits"]
      }
    ],
    examTip: "Questions on intelligence theories are very direct – know each theorist and their model precisely. 'g factor' = Spearman, 'Multiple Intelligences' = Gardner, 'Triarchic' = Sternberg, 'Fluid vs Crystallized' = Cattell. Know Guilford's model as it combines thinking + creativity."
  },
  {
    id: 7,
    title: "Personality, Motivation, Emotion, Stress & Coping",
    weight: "~12%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "🎭",
    color: "#ec4899",
    sections: [
      {
        title: "Personality Theories",
        topics: ["Psychoanalytic (Freud: id, ego, superego; libido; defense mechanisms; stages)", "Analytical Psychology (Jung: archetypes, collective unconscious, introversion/extraversion)", "Individual Psychology (Adler: inferiority complex, birth order)", "Trait theories (Allport: cardinal, central, secondary; Cattell's 16PF; Eysenck's PEN model)", "Big Five (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)", "Humanistic (Rogers: self-concept, unconditional positive regard; Maslow: hierarchy of needs)", "Social-cognitive (Bandura: self-efficacy; Mischel: cognitive-affective system)", "Kelly's Personal Construct Theory"]
      },
      {
        title: "Motivation",
        topics: ["Maslow's Hierarchy of Needs", "McClelland's Need Theory (nAch, nAff, nPow)", "Herzberg's Two-Factor theory", "Expectancy theory (Vroom)", "Goal-setting theory (Locke & Latham)", "Self-Determination Theory (Deci & Ryan: intrinsic vs extrinsic motivation)", "Drive reduction theory", "Optimal arousal (Yerkes-Dodson Law)", "Incentive theory"]
      },
      {
        title: "Emotion",
        topics: ["James-Lange theory", "Cannon-Bard theory", "Schachter-Singer Two-Factor theory", "Cognitive Appraisal theory (Lazarus)", "Ekman's Basic Emotions (6 universal)", "Emotional regulation strategies", "Facial feedback hypothesis", "Valence-arousal model"]
      },
      {
        title: "Stress & Coping",
        topics: ["Types of stress (Eustress vs Distress, Acute vs Chronic)", "Life events & Daily hassles", "General Adaptation Syndrome – GAS (Selye: Alarm, Resistance, Exhaustion)", "Physiological responses to stress (HPA axis, cortisol)", "Coping strategies (Problem-focused vs Emotion-focused – Lazarus & Folkman)", "Social support as buffer", "Hardiness (Kobasa)", "Type A vs Type B personality", "Resilience & post-traumatic growth"]
      }
    ],
    examTip: "Know ALL defense mechanisms (repression, projection, rationalization, displacement, sublimation, reaction formation). Freud's psychosexual stages, Erikson's psychosocial stages, and the Big Five traits are asked every year. GAS stages by Selye is a very common question."
  },
  {
    id: 8,
    title: "Social Psychology",
    weight: "~10%",
    priority: "High",
    priorityClass: "badge-high",
    icon: "👥",
    color: "#06b6d4",
    sections: [
      {
        title: "Social Perception & Cognition",
        topics: ["Person perception & social schemas", "Attribution theory (Heider, Jones & Davis – Correspondent Inference, Kelley – Covariation model)", "Fundamental Attribution Error (FAE)", "Actor-Observer bias", "Self-serving bias", "Halo effect", "First impression formation (primacy vs recency)"]
      },
      {
        title: "Attitudes & Attitude Change",
        topics: ["Attitude formation & functions", "Cognitive Dissonance (Festinger)", "Balance theory (Heider)", "Elaboration Likelihood Model (Petty & Cacioppo)", "Fear appeals & persuasion", "Attitude-behaviour relation (Fishbein & Ajzen's TPB)", "Prejudice & stereotypes", "Discrimination & mechanisms"]
      },
      {
        title: "Group Dynamics",
        topics: ["Social facilitation (Zajonc)", "Social loafing (Latané)", "Groupthink (Janis)", "Deindividuation", "Conformity (Asch)", "Obedience (Milgram)", "Group cohesion & groupthink", "Brainstorming effectiveness", "Group decision-making polarization"]
      },
      {
        title: "Prosocial Behaviour & Aggression",
        topics: ["Bystander effect (Kitty Genovese; Darley & Latané)", "Diffusion of responsibility", "Factors in helping behaviour", "Frustration-Aggression hypothesis (Dollard et al.)", "Berkowitz's reformulation", "Social learning of aggression", "Altruism theories (kin selection, reciprocal altruism)"]
      },
      {
        title: "Interpersonal Relationships",
        topics: ["Attraction factors (proximity, similarity, physical attractiveness, reciprocity)", "Sternberg's Triangular Theory of Love", "Attachment styles (adult relationships)", "Social exchange theory", "Equity theory"]
      }
    ],
    examTip: "Milgram's obedience and Asch's conformity experiments are favourite topics. Know the exact percentages (Milgram: 65% went to maximum shock; Asch: 75% conformed at least once). Fundamental Attribution Error and cognitive dissonance are asked almost every year."
  },
  {
    id: 9,
    title: "Human Development & Interventions",
    weight: "~8%",
    priority: "Medium",
    priorityClass: "badge-med",
    icon: "🌱",
    color: "#10b981",
    sections: [
      {
        title: "Developmental Theories",
        topics: ["Piaget's Cognitive Development (Sensorimotor, Preoperational, Concrete, Formal)", "Vygotsky's Sociocultural theory (ZPD, scaffolding)", "Erikson's Psychosocial Stages (8 stages across lifespan)", "Bronfenbrenner's Ecological Systems theory", "Kohlberg's Moral Development", "Gilligan's critique of Kohlberg", "Attachment theories (Bowlby, Ainsworth's Strange Situation)"]
      },
      {
        title: "Lifespan Development",
        topics: ["Prenatal development & teratogens", "Infancy & early childhood milestones", "Adolescence (identity vs role confusion)", "Adulthood & midlife crisis", "Aging (cognitive decline, wisdom)", "Death & dying (Kübler-Ross stages)"]
      },
      {
        title: "Psychopathology",
        topics: ["DSM-5 & ICD-11 classification systems", "Mood disorders (Major Depression, Bipolar)", "Anxiety disorders (GAD, Panic, Phobia, OCD, PTSD)", "Schizophrenia spectrum disorders", "Personality disorders (Cluster A, B, C)", "Neurodevelopmental disorders (ADHD, Autism, Intellectual Disability)", "Substance use disorders", "Eating disorders"]
      },
      {
        title: "Psychological Interventions",
        topics: ["Psychoanalytic therapy (free association, dream analysis, transference)", "Behaviour therapy (systematic desensitization, exposure therapy, token economy)", "Cognitive-Behaviour Therapy (CBT – Beck's cognitive triad)", "REBT (Ellis – ABC model)", "Client-Centred Therapy (Rogers)", "Gestalt therapy (Perls)", "Family therapy & systems approach", "Community mental health", "Psychopharmacology basics"]
      }
    ],
    examTip: "Piaget's stages and their age ranges are asked very frequently. Know Erikson's 8 stages and their central conflicts (e.g., Trust vs Mistrust in infancy). DSM-5 diagnostic criteria overview and major therapy founders/techniques are high-priority."
  },
  {
    id: 10,
    title: "Emerging Areas in Psychology",
    weight: "~5%",
    priority: "Low",
    priorityClass: "badge-low",
    icon: "🚀",
    color: "#8b5cf6",
    sections: [
      {
        title: "Gender Psychology",
        topics: ["Sex vs Gender distinction", "Gender development theories", "Gender-role socialization", "Feminist psychology", "Psychology of LGBTQ+ communities", "Gender and mental health"]
      },
      {
        title: "Health Psychology",
        topics: ["Biopsychosocial model of health", "Health behaviours & health promotion", "Doctor-patient relationship", "Pain psychology", "Chronic illness coping", "Placebo effect"]
      },
      {
        title: "Technology & Psychology",
        topics: ["Cyberpsychology", "Internet addiction", "Social media effects on mental health", "Human-computer interaction", "Artificial intelligence in psychology", "Telepsychology & e-therapy"]
      },
      {
        title: "Applied Domains",
        topics: ["Forensic Psychology (criminal profiling, eyewitness testimony)", "Sports Psychology (peak performance, visualization)", "Environmental Psychology (behaviour-environment interaction, urban stress)", "Industrial-Organizational (I/O) Psychology", "Military psychology", "Aviation psychology"]
      },
      {
        title: "Positive Psychology",
        topics: ["Seligman's PERMA model", "Well-being theories", "Character strengths & VIA classification", "Flow experience (Csikszentmihalyi)", "Gratitude, hope, and resilience research", "Mindfulness-based interventions (MBSR)"]
      }
    ],
    examTip: "This unit is growing in importance. Positive psychology (Seligman's PERMA, Csikszentmihalyi's Flow), forensic psychology, and technology-psychology interface are new favourites. Biopsychosocial model of health is a recurring question."
  }
];

// =============================================
// COMPREHENSIVE PREVIOUS YEAR QUESTIONS (PYQs)
// =============================================
const PYQ_QUESTIONS = [
  // ==================== 2024 ====================
  { id: 1, year: 2024, paper: 2, unit: 2, question: "A researcher wants to study the effectiveness of a new therapy on reducing anxiety. She randomly assigns participants to either the therapy group or the control group. This is an example of:", options: ["Quasi-experimental design", "True experimental design", "Correlational design", "Ex-post-facto design"], answer: 1, explanation: "True experimental design requires random assignment of participants to groups (therapy vs control), making it the correct answer. This controls for confounding variables and allows causal inference." },
  { id: 2, year: 2024, paper: 2, unit: 7, question: "According to Selye's General Adaptation Syndrome (GAS), what is the correct sequence of stress response stages?", options: ["Resistance → Alarm → Exhaustion", "Alarm → Resistance → Exhaustion", "Exhaustion → Alarm → Resistance", "Alarm → Exhaustion → Resistance"], answer: 1, explanation: "Hans Selye's GAS has three stages: Alarm (immediate response to stressor), Resistance (body attempts to cope), and Exhaustion (resources depleted). This sequence is fundamental to stress physiology." },
  { id: 3, year: 2024, paper: 2, unit: 6, question: "Which of the following correctly matches the theorist with their theory of intelligence?", options: ["Sternberg – Two Factor Theory", "Spearman – Triarchic Theory", "Gardner – Multiple Intelligences", "Thurstone – Structure of Intellect"], answer: 2, explanation: "Howard Gardner proposed the Theory of Multiple Intelligences (1983), identifying 8 distinct intelligences. Spearman proposed the Two-Factor theory (g+s), Sternberg proposed Triarchic theory, and Guilford proposed Structure of Intellect." },
  { id: 4, year: 2024, paper: 2, unit: 5, question: "In classical conditioning, when the conditioned stimulus (CS) is repeatedly presented without the unconditioned stimulus (UCS), the conditioned response (CR) diminishes. This phenomenon is called:", options: ["Generalization", "Discrimination", "Extinction", "Spontaneous recovery"], answer: 2, explanation: "Extinction in classical conditioning occurs when the CS is repeatedly presented without the UCS, causing the CR to gradually weaken and disappear. Spontaneous recovery is the reappearance of the CR after a rest period." },
  { id: 5, year: 2024, paper: 2, unit: 4, question: "The 'fight or flight' response is primarily associated with which division of the nervous system?", options: ["Central Nervous System", "Somatic Nervous System", "Sympathetic Nervous System", "Parasympathetic Nervous System"], answer: 2, explanation: "The Sympathetic Nervous System (part of the Autonomic NS) activates the fight-or-flight response, releasing adrenaline and increasing heart rate, blood pressure, and blood glucose. The Parasympathetic NS promotes 'rest and digest'." },
  { id: 6, year: 2024, paper: 2, unit: 3, question: "Internal consistency of a psychological test is best measured by:", options: ["Test-retest method", "Parallel forms method", "Cronbach's Alpha", "Inter-rater reliability"], answer: 2, explanation: "Cronbach's Alpha (α) is the most widely used measure of internal consistency, indicating how well all items in a test measure the same construct. Values above 0.70 are generally considered acceptable." },
  { id: 7, year: 2024, paper: 2, unit: 8, question: "The 'Fundamental Attribution Error' refers to:", options: ["Overestimating situational factors while underestimating dispositional factors for others' behaviour", "Overestimating dispositional factors while underestimating situational factors for others' behaviour", "Blaming others for failures and taking credit for successes", "Attributing our own behaviour to external causes"], answer: 1, explanation: "FAE (also called 'correspondence bias') is the tendency to over-attribute others' behaviour to internal/dispositional factors (personality) and underestimate situational influences. For our own behaviour, we tend to do the opposite (actor-observer bias)." },
  { id: 8, year: 2024, paper: 2, unit: 1, question: "The concept of 'Chitta' in Indian psychology refers to:", options: ["Individual consciousness", "Storehouse of memories and impressions (samskaras)", "Ego or sense of self", "Pure awareness or witness consciousness"], answer: 1, explanation: "In Indian psychological tradition (especially Yoga and Samkhya philosophy), Chitta is the storehouse of all memories, impressions (samskaras), and latent tendencies (vasanas). It is distinct from Manas (mind), Buddhi (intellect), and Ahamkara (ego)." },
  { id: 9, year: 2024, paper: 2, unit: 9, question: "According to Piaget, a child who can think logically about concrete objects but cannot yet engage in abstract reasoning is in which stage?", options: ["Sensorimotor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage"], answer: 2, explanation: "The Concrete Operational stage (ages 7-11) is characterized by logical thinking about concrete objects, conservation abilities, and classification skills, but abstract hypothetical reasoning emerges only in the Formal Operational stage (12+)." },
  { id: 10, year: 2024, paper: 2, unit: 2, question: "In a research study, the probability of rejecting the null hypothesis when it is actually false is called:", options: ["Type I error (α)", "Type II error (β)", "Statistical power (1-β)", "Effect size"], answer: 2, explanation: "Statistical Power (1-β) is the probability of correctly rejecting a false null hypothesis. Type I error (α) is rejecting a true null hypothesis. Type II error (β) is failing to reject a false null hypothesis. Higher power means a better test." },
  { id: 11, year: 2024, paper: 2, unit: 5, question: "According to the Atkinson-Shiffrin multi-store model, information in Short-Term Memory (STM) is transferred to Long-Term Memory through:", options: ["Encoding", "Retrieval", "Rehearsal", "Chunking"], answer: 2, explanation: "In the Atkinson-Shiffrin model, rehearsal (particularly elaborative rehearsal) transfers information from STM to LTM. Maintenance rehearsal (simply repeating) keeps information in STM, while elaborative rehearsal (connecting to existing knowledge) promotes LTM encoding." },
  { id: 12, year: 2024, paper: 2, unit: 7, question: "The defense mechanism in which unacceptable impulses are redirected toward a more acceptable or safer target is called:", options: ["Projection", "Rationalization", "Displacement", "Sublimation"], answer: 2, explanation: "Displacement involves redirecting impulses (often anger or frustration) from the original target to a substitute target (e.g., yelling at a pet after a bad day at work). Sublimation is redirecting to socially acceptable activities. Projection is attributing one's own feelings to others." },

  // ==================== 2023 ====================
  { id: 13, year: 2023, paper: 2, unit: 2, question: "Which of the following is a non-parametric equivalent of the independent samples t-test?", options: ["Wilcoxon Signed-Rank test", "Mann-Whitney U test", "Kruskal-Wallis test", "Friedman test"], answer: 1, explanation: "Mann-Whitney U test is the non-parametric equivalent of the independent samples t-test. Wilcoxon Signed-Rank is the non-parametric equivalent of paired t-test. Kruskal-Wallis is the non-parametric equivalent of one-way ANOVA." },
  { id: 14, year: 2023, paper: 2, unit: 6, question: "Guilford's Structure of Intellect (SI) model proposes that intelligence consists of:", options: ["2 factors (g and s)", "7 primary mental abilities", "3 components (analytical, creative, practical)", "Up to 150 distinct intellectual abilities"], answer: 3, explanation: "J.P. Guilford's SI model is a three-dimensional model with Operations × Contents × Products, theoretically yielding up to 150 unique intellectual abilities. It's significant because it includes divergent thinking (creativity) as a cognitive ability." },
  { id: 15, year: 2023, paper: 2, unit: 8, question: "Milgram's obedience experiment demonstrated that approximately what percentage of participants delivered the maximum (450 volt) shock?", options: ["25%", "45%", "65%", "85%"], answer: 2, explanation: "In Milgram's classic 1963 study at Yale, approximately 65% (2/3) of participants continued to the maximum 450-volt level when ordered by the authority figure. This was a shocking finding about ordinary people's capacity for obedience." },
  { id: 16, year: 2023, paper: 2, unit: 4, question: "Damage to Broca's area results in:", options: ["Difficulty understanding speech (receptive aphasia)", "Difficulty producing fluent speech (expressive/non-fluent aphasia)", "Complete loss of speech and understanding", "Loss of memory for language"], answer: 1, explanation: "Broca's area (left frontal lobe) is crucial for speech production. Damage causes Broca's aphasia (expressive/non-fluent aphasia) – understanding is relatively intact but speech is slow, halting, and telegraphic. Wernicke's aphasia (temporal lobe damage) impairs comprehension." },
  { id: 17, year: 2023, paper: 2, unit: 3, question: "The Rorschach Inkblot Test is categorized as:", options: ["Objective personality test", "Projective personality test", "Achievement test", "Neuropsychological test"], answer: 1, explanation: "The Rorschach Inkblot Test is a projective test (developed by Hermann Rorschach in 1921). Projective tests present ambiguous stimuli and assume individuals project unconscious feelings onto them. Other projective tests include TAT (Murray), CAT, and DAP." },
  { id: 18, year: 2023, paper: 2, unit: 7, question: "Erikson's psychosocial stage of 'Intimacy vs. Isolation' occurs during:", options: ["Adolescence", "Young adulthood (early 20s to 40s)", "Middle adulthood", "Late adulthood"], answer: 1, explanation: "Erikson's 6th stage – Intimacy vs. Isolation – occurs in young adulthood (roughly 20s-40s). The central task is forming deep, committed relationships. Isolation results from inability to form intimate connections. Identity vs. Role Confusion precedes this (adolescence)." },
  { id: 19, year: 2023, paper: 2, unit: 5, question: "Which schedule of reinforcement is most resistant to extinction?", options: ["Fixed Ratio (FR)", "Variable Ratio (VR)", "Fixed Interval (FI)", "Variable Interval (VI)"], answer: 1, explanation: "Variable Ratio (VR) schedule produces the highest response rates and is most resistant to extinction because reinforcement is unpredictable. Gambling is a classic example. The unpredictability prevents the organism from detecting when reinforcement has stopped." },
  { id: 20, year: 2023, paper: 2, unit: 1, question: "The 'Cocktail Party Effect' was described by:", options: ["Donald Broadbent", "Edwin Cherry", "Anne Treisman", "Norman and Deutsch"], answer: 1, explanation: "Colin Cherry described the Cocktail Party Effect (1953) – the ability to focus on a single conversation in a noisy environment while filtering out other conversations. This led to research on selective attention and Broadbent's filter model." },
  { id: 21, year: 2023, paper: 2, unit: 9, question: "Which of the following is NOT a stage in Kübler-Ross's model of grief (death and dying)?", options: ["Denial", "Anger", "Bargaining", "Guilt"], answer: 3, explanation: "Kübler-Ross's 5 stages of grief (1969) are: Denial, Anger, Bargaining, Depression, Acceptance (DABDA). 'Guilt' is not a named stage, though it may be experienced. These stages are also applied to any major loss." },
  { id: 22, year: 2023, paper: 2, unit: 2, question: "In a study using Pearson's correlation, r = -0.85. This indicates:", options: ["A strong positive relationship", "A weak negative relationship", "A strong negative relationship", "No relationship"], answer: 2, explanation: "r = -0.85 indicates a strong negative (inverse) relationship. The magnitude (0.85) indicates strength, while the negative sign indicates direction – as one variable increases, the other decreases. r values: 0.00-0.30 = weak, 0.30-0.70 = moderate, 0.70-1.00 = strong." },
  { id: 23, year: 2023, paper: 2, unit: 7, question: "According to Maslow's hierarchy, 'esteem needs' include:", options: ["Safety and security", "Love, belonging, and friendship", "Self-respect, achievement, and recognition", "Self-actualization and peak experiences"], answer: 2, explanation: "Maslow's hierarchy (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-actualization. Esteem needs include self-esteem (confidence, achievement, mastery) and esteem from others (respect, recognition, status)." },
  { id: 24, year: 2023, paper: 2, unit: 8, question: "Cognitive Dissonance theory was proposed by:", options: ["Solomon Asch", "Leon Festinger", "Stanley Milgram", "Robert Zajonc"], answer: 1, explanation: "Leon Festinger (1957) proposed Cognitive Dissonance theory – the discomfort experienced when holding contradictory cognitions. To reduce dissonance, people change attitudes, behaviours, or add consonant cognitions. Classic example: smokers who know smoking is harmful." },
  { id: 25, year: 2023, paper: 2, unit: 4, question: "Which neurotransmitter is primarily associated with Parkinson's disease?", options: ["Serotonin", "GABA", "Dopamine", "Acetylcholine"], answer: 2, explanation: "Parkinson's disease is primarily caused by the degeneration of dopaminergic neurons in the substantia nigra. Low dopamine causes motor symptoms (tremors, rigidity, bradykinesia). Schizophrenia is linked to excess dopamine; depression to low serotonin/norepinephrine." },

  // ==================== 2022 ====================
  { id: 26, year: 2022, paper: 2, unit: 6, question: "The 'Flynn Effect' refers to:", options: ["Decline in IQ scores over generations", "Rise in IQ scores over generations", "Stability of IQ scores across cultures", "Hereditary nature of intelligence"], answer: 1, explanation: "The Flynn Effect (named after James Flynn) refers to the documented rise in IQ scores over the 20th century across many countries – about 3 IQ points per decade. Possible explanations include improved nutrition, education, and test familiarity." },
  { id: 27, year: 2022, paper: 2, unit: 7, question: "In Freud's structural model of personality, which component operates entirely on the 'pleasure principle'?", options: ["Ego", "Superego", "Id", "Preconscious"], answer: 2, explanation: "The Id operates entirely on the pleasure principle – seeking immediate gratification of instinctual urges without regard for reality. The Ego operates on the reality principle (mediates between id and reality). The Superego represents internalized moral standards." },
  { id: 28, year: 2022, paper: 2, unit: 5, question: "Baddeley and Hitch's Working Memory model includes which component responsible for integrating information from different sources?", options: ["Phonological loop", "Visuospatial sketchpad", "Central executive", "Episodic buffer"], answer: 3, explanation: "The Episodic Buffer (added by Baddeley in 2000) integrates information from the phonological loop, visuospatial sketchpad, and long-term memory into a unified episodic representation. The Central Executive controls attention and directs the slave systems." },
  { id: 29, year: 2022, paper: 2, unit: 8, question: "In Asch's conformity experiments, what percentage of participants conformed to the obviously incorrect answer at least once?", options: ["35%", "50%", "75%", "90%"], answer: 2, explanation: "In Asch's (1951) line judgment experiments, 75% of participants conformed to the clearly wrong majority answer at least once. On average, participants conformed on about 32% of the critical trials. This demonstrated powerful normative social influence." },
  { id: 30, year: 2022, paper: 2, unit: 9, question: "Vygotsky's concept of 'Zone of Proximal Development' (ZPD) refers to:", options: ["The range of tasks a child can do independently", "The gap between what a child can do alone vs with guidance", "The critical period for language acquisition", "The child's current cognitive stage"], answer: 1, explanation: "ZPD is the distance between what a child can accomplish independently (actual development level) and what they can accomplish with expert guidance (potential development level). Scaffolding (temporary support) helps children work within their ZPD." },
  { id: 31, year: 2022, paper: 2, unit: 3, question: "The Standard Error of Measurement (SEM) is associated with which property of psychological tests?", options: ["Validity", "Reliability", "Standardization", "Norms"], answer: 1, explanation: "SEM is directly related to reliability. SEM = SD × √(1 - reliability). A perfectly reliable test has SEM = 0. SEM helps define confidence intervals around obtained scores and indicates how much a score might vary due to measurement error alone." },
  { id: 32, year: 2022, paper: 2, unit: 2, question: "In a 2×3 factorial ANOVA design, the total number of conditions is:", options: ["2", "3", "5", "6"], answer: 3, explanation: "In a 2×3 factorial design, there are 2 levels of Factor A × 3 levels of Factor B = 6 total conditions. A factorial ANOVA can test main effects of A, main effects of B, and the A×B interaction. This is the most efficient way to study multiple IVs simultaneously." },
  { id: 33, year: 2022, paper: 2, unit: 7, question: "Carl Rogers' therapeutic approach emphasized:", options: ["Interpretation of unconscious conflicts", "Systematic desensitization", "Unconditional positive regard, empathy, and genuineness", "Modifying irrational beliefs"], answer: 2, explanation: "Carl Rogers' Client-Centred/Person-Centred therapy's three core conditions are: Unconditional Positive Regard (accepting the client completely), Empathy (understanding the client's frame of reference), and Genuineness/Congruence (therapist being authentic)." },
  { id: 34, year: 2022, paper: 2, unit: 4, question: "The hippocampus is most critically involved in:", options: ["Emotional processing and fear responses", "Voluntary movement and motor control", "Formation of new explicit memories", "Regulation of hunger and thirst"], answer: 2, explanation: "The hippocampus (in the medial temporal lobe) is critical for the consolidation of new explicit (declarative) memories. H.M. (Henry Molaison), who had his hippocampi removed, could not form new long-term memories but retained old ones and procedural memory." },
  { id: 35, year: 2022, paper: 2, unit: 1, question: "The Gestalt principle of 'figure-ground' refers to:", options: ["Perceiving similar elements as belonging together", "The tendency to perceive objects as complete", "The perceptual distinction between an object and its background", "Perceiving elements in proximity as a group"], answer: 2, explanation: "Figure-ground is the basic Gestalt principle that we perceive visual stimuli as having a 'figure' (the object we focus on) and a 'ground' (the background). The classic example is the Rubin vase which alternates between vase (figure) and two faces (ground)." },
  { id: 36, year: 2022, paper: 2, unit: 6, question: "Sternberg's Triarchic Theory of Intelligence identifies which three components?", options: ["Fluid, Crystallized, and Social", "Verbal, Numerical, and Spatial", "Analytical, Creative, and Practical", "Convergent, Divergent, and Evaluative"], answer: 2, explanation: "Sternberg's Triarchic Theory (1985) proposes three intelligences: Analytical (componential – problem-solving), Creative (experiential – novel situations), and Practical (contextual – adapting to real-world). These map to 'school smart', 'creative smart', and 'street smart'." },

  // ==================== 2021 ====================
  { id: 37, year: 2021, paper: 2, unit: 5, question: "According to Tolman, learning can occur without reinforcement. This is demonstrated by the concept of:", options: ["Latent learning", "Insight learning", "Observational learning", "Operant conditioning"], answer: 0, explanation: "Edward Tolman demonstrated latent learning – learning that occurs without obvious reinforcement and is not immediately demonstrated in performance. His maze studies showed rats formed cognitive maps even without food rewards, challenging strict behaviourist views." },
  { id: 38, year: 2021, paper: 2, unit: 8, question: "Social loafing refers to:", options: ["Working harder when in a group", "Reduced individual effort when working in a group", "The tendency to follow the majority in groups", "Enhanced performance on simple tasks in a group"], answer: 1, explanation: "Social loafing (Latané, 1979) is the tendency for people to exert less effort when working collectively than when working individually. It's more common on additive tasks, when individual contributions are not identifiable, and when group cohesion is low." },
  { id: 39, year: 2021, paper: 2, unit: 7, question: "The 'Big Five' personality traits (OCEAN) do NOT include:", options: ["Openness to experience", "Conscientiousness", "Introversion", "Agreeableness"], answer: 2, explanation: "The Big Five (OCEAN) traits are: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, Neuroticism. Note it's EXTRAVERSION (not introversion) – low scores on Extraversion indicate introversion. Introversion itself is not one of the 5 traits." },
  { id: 40, year: 2021, paper: 2, unit: 9, question: "Which therapeutic approach uses the 'ABC model' where A = Activating event, B = Beliefs, C = Consequences?", options: ["Psychoanalysis", "Client-centred therapy", "REBT (Rational Emotive Behaviour Therapy)", "Gestalt therapy"], answer: 2, explanation: "Albert Ellis developed REBT and its ABC model: A (Activating event), B (Beliefs – rational or irrational), C (Consequences – emotional/behavioural). The therapist challenges irrational beliefs (e.g., 'I must be perfect') to change maladaptive consequences." },
  { id: 41, year: 2021, paper: 2, unit: 2, question: "Which type of sampling ensures that every member of the population has an equal chance of being selected?", options: ["Stratified random sampling", "Cluster sampling", "Purposive sampling", "Simple random sampling"], answer: 3, explanation: "Simple random sampling gives every individual in the population an equal and independent chance of being selected. Stratified sampling divides the population into strata before random sampling. Purposive sampling selects participants based on researcher judgment." },
  { id: 42, year: 2021, paper: 2, unit: 4, question: "The corpus callosum connects:", options: ["The two hemispheres of the cerebrum", "The cerebrum and cerebellum", "The cerebral cortex and the limbic system", "The frontal lobe and temporal lobe"], answer: 0, explanation: "The corpus callosum is a thick band of nerve fibres (commissure) that connects the left and right cerebral hemispheres, allowing communication between them. Split-brain research (Sperry & Gazzaniga) involved severing the corpus callosum to study hemispheric functions." },
  { id: 43, year: 2021, paper: 2, unit: 3, question: "The Minnesota Multiphasic Personality Inventory (MMPI) is an example of:", options: ["Projective test", "Neuropsychological test", "Objective personality test", "Aptitude test"], answer: 2, explanation: "The MMPI (Hathaway & McKinley, 1943; MMPI-2 revised 1989) is an objective personality test using a true/false format with 567 items. It has 10 clinical scales (Hypochondriasis, Depression, Hysteria, etc.) and validity scales to detect response bias." },
  { id: 44, year: 2021, paper: 2, unit: 5, question: "The 'Spreading Activation' model of memory organization was proposed by:", options: ["Tulving", "Collins and Loftus", "Atkinson and Shiffrin", "Craik and Lockhart"], answer: 1, explanation: "Collins and Loftus (1975) proposed the Spreading Activation model of semantic memory, in which concepts are stored in a network and activation spreads from one concept to related concepts. This explains priming effects – activating 'bread' makes 'butter' more accessible." },
  { id: 45, year: 2021, paper: 2, unit: 7, question: "Yerkes-Dodson Law describes the relationship between:", options: ["Reinforcement and learning", "Arousal/anxiety and performance", "Emotion and memory", "Punishment and behaviour"], answer: 1, explanation: "The Yerkes-Dodson Law (1908) posits an inverted U-shaped relationship between arousal and performance. Optimal performance occurs at moderate arousal. The optimal level is lower for complex tasks and higher for simple tasks." },
  { id: 46, year: 2021, paper: 2, unit: 6, question: "Gardner's Theory of Multiple Intelligences identifies which of the following as one of the 8 intelligences?", options: ["Fluid intelligence", "Crystallized intelligence", "Naturalistic intelligence", "Analytical intelligence"], answer: 2, explanation: "Gardner's 8 intelligences: Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic (added 1999). Spiritual/Existential is sometimes proposed as a 9th. Fluid and crystallized are Cattell's concepts, not Gardner's." },

  // ==================== 2020 ====================
  { id: 47, year: 2020, paper: 2, unit: 8, question: "The 'bystander effect' suggests that help is less likely to be offered when:", options: ["The emergency is severe", "There are many bystanders present", "The victim is similar to the helper", "The bystander has first aid training"], answer: 1, explanation: "The bystander effect (Darley & Latané, 1968 – following Kitty Genovese case) shows that the more bystanders present, the less likely any one of them is to help. Diffusion of responsibility and pluralistic ignorance are the main mechanisms." },
  { id: 48, year: 2020, paper: 2, unit: 2, question: "Content validity of a test is best established through:", options: ["Correlating test scores with criterion scores", "Expert judgment of item representativeness", "Factor analysis", "Test-retest comparison"], answer: 1, explanation: "Content validity is established through systematic expert review of whether test items adequately represent the content domain being measured. It's particularly important for achievement tests. It does not rely on statistical analysis but on logical/rational analysis by subject matter experts." },
  { id: 49, year: 2020, paper: 2, unit: 1, question: "Wundt established the first psychological laboratory in:", options: ["Paris, 1875", "Leipzig, 1879", "Vienna, 1880", "London, 1890"], answer: 1, explanation: "Wilhelm Wundt established the world's first experimental psychology laboratory in Leipzig, Germany in 1879, marking the formal beginning of psychology as an independent science. He used introspection as his primary method to study consciousness/mental processes." },
  { id: 50, year: 2020, paper: 2, unit: 9, question: "In DSM-5, schizophrenia is characterized by the presence of at least two of its core symptoms for a significant portion of at least one month. Which of the following is a positive symptom of schizophrenia?", options: ["Flat affect", "Alogia", "Hallucinations", "Avolition"], answer: 2, explanation: "Positive symptoms (excesses or distortions) of schizophrenia include: hallucinations, delusions, and disorganized speech/behaviour. Negative symptoms (diminutions) include: flat affect, alogia (poverty of speech), avolition, anhedonia, and asociality." },
  { id: 51, year: 2020, paper: 2, unit: 7, question: "Which of the following is an example of 'sublimation' as a defense mechanism?", options: ["A person who is angry at their boss comes home and yells at their children", "A person channels sexual energy into artistic creation", "A person denies that they have a substance abuse problem", "A person forgets a traumatic childhood event"], answer: 1, explanation: "Sublimation (Freud's most mature defense mechanism) involves redirecting unacceptable impulses (e.g., sexual or aggressive energy) into socially acceptable activities (art, sports, creative work). Option A = displacement, C = denial, D = repression." },
  { id: 52, year: 2020, paper: 2, unit: 5, question: "Pavlov's dog experiment demonstrated:", options: ["Operant conditioning", "Social learning", "Classical conditioning", "Latent learning"], answer: 2, explanation: "Ivan Pavlov's experiment paired a neutral stimulus (bell/metronome) with an unconditioned stimulus (food) to produce a conditioned response (salivation to bell alone). This demonstrated classical (respondent) conditioning – learning through association of stimuli." },

  // ==================== 2019 ====================
  { id: 53, year: 2019, paper: 2, unit: 6, question: "Cattell distinguished between _______ intelligence (biological, problem-solving) and _______ intelligence (accumulated knowledge).", options: ["Primary, secondary", "Fluid, crystallized", "Analytical, practical", "Convergent, divergent"], answer: 1, explanation: "Raymond Cattell's Gf-Gc theory: Fluid intelligence (Gf) is biologically based, decreases with age, involves reasoning and novel problem-solving. Crystallized intelligence (Gc) is accumulated knowledge and skills from experience and education, and tends to increase or remain stable with age." },
  { id: 54, year: 2019, paper: 2, unit: 4, question: "Which of the following brain imaging techniques measures brain activity by detecting changes in blood oxygenation?", options: ["EEG (Electroencephalography)", "CT scan", "fMRI (functional MRI)", "PET scan"], answer: 2, explanation: "fMRI (functional Magnetic Resonance Imaging) measures brain activity by detecting changes in blood oxygenation level (BOLD signal – Blood Oxygen Level Dependent). It has high spatial resolution. EEG measures electrical activity; PET measures metabolic activity using radioactive tracers." },
  { id: 55, year: 2019, paper: 2, unit: 8, question: "Sternberg's Triangular Theory of Love suggests that consummate love (the ideal, complete form) consists of:", options: ["Intimacy alone", "Passion and commitment only", "Intimacy, passion, and commitment", "Commitment and intimacy only"], answer: 2, explanation: "Sternberg's theory identifies 7 types of love based on 3 components: Intimacy (emotional closeness), Passion (romantic/physical), Commitment (decision to maintain). Consummate love (all three present) is the complete love; romantic love = intimacy + passion; companionate = intimacy + commitment." },
  { id: 56, year: 2019, paper: 2, unit: 3, question: "Which type of validity assesses whether a test can predict future criterion performance?", options: ["Content validity", "Construct validity", "Predictive criterion validity", "Concurrent validity"], answer: 2, explanation: "Predictive validity (a type of criterion-related validity) evaluates how well test scores predict future performance on a criterion. Concurrent validity uses present criterion data. An aptitude test predicting future job performance would be assessed for predictive validity." },
  { id: 57, year: 2019, paper: 2, unit: 7, question: "According to Bowlby's Attachment Theory, what is 'secure attachment'?", options: ["Avoidance of caregiver in stressful situations", "Distress when separated but easily comforted upon reunion", "Extreme anxiety even when caregiver is present", "Inconsistent and confused attachment behaviour"], answer: 1, explanation: "In Ainsworth's Strange Situation (based on Bowlby's theory): Secure attachment – child is distressed when mother leaves but comforted when she returns. Insecure-Avoidant – not distressed by separation, ignores return. Insecure-Ambivalent – very distressed, not easily comforted. Disorganized – confused, contradictory behaviour." },
  { id: 58, year: 2019, paper: 2, unit: 2, question: "The degree to which a study's results can be generalized to other settings, populations, and conditions is called:", options: ["Internal validity", "External validity", "Ecological validity", "Construct validity"], answer: 1, explanation: "External validity refers to generalizability of research findings beyond the specific study conditions. Ecological validity is a specific type of external validity referring to how well findings apply to real-world settings. Internal validity refers to whether the IV truly caused changes in the DV." },
  { id: 59, year: 2019, paper: 2, unit: 9, question: "Beck's Cognitive Triad in depression consists of negative views about:", options: ["Past, present, and future", "Self, world, and future", "Self, others, and events", "Emotions, cognitions, and behaviours"], answer: 1, explanation: "Aaron Beck's Cognitive Triad (1979) identifies three domains of negative automatic thoughts in depression: (1) Negative view of SELF (I am worthless), (2) Negative view of the WORLD (Everything is unfair), (3) Negative view of the FUTURE (Nothing will improve). CBT targets these." },
  { id: 60, year: 2019, paper: 2, unit: 5, question: "The Müller-Lyer illusion illustrates the role of _______ cues in size perception.", options: ["Binocular depth", "Monocular depth (linear perspective)", "Motion parallax", "Texture gradient"], answer: 1, explanation: "The Müller-Lyer illusion (lines with inward vs outward arrowheads appearing different lengths) is explained by linear perspective as a monocular depth cue – arrowheads resemble corner angles, triggering automatic depth adjustments in size perception (Gregory's misapplied size constancy theory)." },

  // ==================== 2018 ====================
  { id: 61, year: 2018, paper: 2, unit: 1, question: "Who is considered the 'father of modern psychology' for establishing the first psychological laboratory?", options: ["William James", "Sigmund Freud", "Wilhelm Wundt", "Francis Galton"], answer: 2, explanation: "Wilhelm Wundt (1832-1920) is considered the father of experimental/modern psychology for establishing the first psychology laboratory at Leipzig (1879). He used the method of introspection to study conscious experience and is credited with making psychology an independent science." },
  { id: 62, year: 2018, paper: 2, unit: 7, question: "The 'Type A' personality pattern is characterized by:", options: ["Relaxed, patient, and easygoing behaviour", "Time urgency, competitiveness, and hostility", "Introverted and shy behaviour", "Creative and open to new experiences"], answer: 1, explanation: "Type A personality (Friedman & Rosenman) is characterized by: time urgency, competitiveness, achievement striving, and hostility/irritability. The hostility component has been most strongly linked to cardiovascular disease risk. Type B is the opposite – relaxed and non-competitive." },
  { id: 63, year: 2018, paper: 2, unit: 5, question: "Ebbinghaus discovered that forgetting is most rapid:", options: ["After a week of learning", "Immediately after learning and then slows", "Gradually over months", "Only after interference from other learning"], answer: 1, explanation: "Hermann Ebbinghaus's forgetting curve (1885) showed that forgetting is most rapid immediately after learning (exponential decay), then the rate of forgetting slows with time. He memorized lists of nonsense syllables and tested himself at various intervals." },
  { id: 64, year: 2018, paper: 2, unit: 8, question: "Prejudice differs from discrimination in that:", options: ["Prejudice is a behaviour while discrimination is an attitude", "Prejudice is an attitude while discrimination is a behaviour", "Both are attitudes", "Both are behaviours"], answer: 1, explanation: "Prejudice is an affective/attitudinal response (a preconceived negative attitude toward a group), while discrimination is a behavioural response (differential treatment based on group membership). One can be prejudiced without discriminating and can discriminate without explicit prejudice." },
  { id: 65, year: 2018, paper: 2, unit: 4, question: "The 'limbic system' is primarily associated with:", options: ["Motor coordination and balance", "Emotion, memory, and motivation", "Language production and comprehension", "Visual processing"], answer: 1, explanation: "The limbic system (including hippocampus, amygdala, hypothalamus, cingulate cortex, and fornix) is the brain's emotional center. It plays key roles in emotional processing, memory formation (hippocampus), fear and threat detection (amygdala), and motivated behaviour (hypothalamus)." },
  { id: 66, year: 2018, paper: 2, unit: 2, question: "A study finding that children who watch more violent TV have higher aggression levels illustrates:", options: ["Causation between TV violence and aggression", "A positive correlation between two variables", "A negative correlation between TV watching and aggression", "An experimental finding"], answer: 1, explanation: "This is a correlational finding – it shows a positive relationship (both variables increase together) but cannot establish causation. We don't know if TV violence causes aggression, aggression causes more TV watching, or a third variable (e.g., parenting) causes both." },
  { id: 67, year: 2018, paper: 2, unit: 6, question: "Which of the following tests is used to measure DIVERGENT thinking?", options: ["Stanford-Binet Intelligence Scale", "Wechsler Adult Intelligence Scale (WAIS)", "Torrance Tests of Creative Thinking (TTCT)", "Raven's Progressive Matrices"], answer: 2, explanation: "The Torrance Tests of Creative Thinking (TTCT, developed by E. Paul Torrance) measure divergent thinking – generating multiple creative responses to open-ended problems. It assesses fluency, flexibility, originality, and elaboration. WAIS and Stanford-Binet measure convergent/general intelligence." },
  { id: 68, year: 2018, paper: 2, unit: 9, question: "The DSM-5 replaced the multiaxial diagnostic system with:", options: ["A biaxial system", "A uniaxial categorical system", "A non-axial system with dimensional assessments", "A purely dimensional system"], answer: 2, explanation: "DSM-5 (2013) replaced the DSM-IV-TR's multiaxial system (Axes I-V) with a non-axial documentation approach (no separate axes). Clinical disorders, personality disorders, and medical conditions are listed together. The Global Assessment of Functioning (GAF) was also removed. Dimensional assessments were incorporated." },

  // ==================== PAPER I QUESTIONS ====================
  { id: 69, year: 2024, paper: 1, unit: 0, question: "Which of the following is NOT a characteristic of research?", options: ["Systematic", "Subjective", "Replicable", "Empirical"], answer: 1, explanation: "Research characteristics include: systematic (follows ordered steps), objective (not subjective), replicable (can be repeated), empirical (based on observation), and analytical. Subjectivity undermines research validity; good research aims for objectivity." },
  { id: 70, year: 2024, paper: 1, unit: 0, question: "The Socratic method of teaching involves:", options: ["Lecture-based instruction", "Question-and-answer dialogue to stimulate thinking", "Rote memorization", "Demonstration and imitation"], answer: 1, explanation: "The Socratic method uses guided questioning and dialogue to stimulate critical thinking and draw out ideas. Socrates believed the teacher's role is to help students discover knowledge themselves ('midwifery of ideas'). It encourages inquiry, reflection, and logical reasoning." },
  { id: 71, year: 2023, paper: 1, unit: 0, question: "Bloom's Taxonomy of educational objectives in the cognitive domain, from lowest to highest order, is:", options: ["Knowledge → Application → Comprehension → Analysis → Synthesis → Evaluation", "Knowledge → Comprehension → Application → Analysis → Synthesis → Evaluation", "Knowledge → Analysis → Comprehension → Application → Synthesis → Evaluation", "Comprehension → Knowledge → Application → Analysis → Evaluation → Synthesis"], answer: 1, explanation: "Bloom's original taxonomy (1956) cognitive levels: Knowledge (recall) → Comprehension (understand) → Application (apply) → Analysis (analyze) → Synthesis (create) → Evaluation (evaluate). Anderson & Krathwohl's revised version (2001) changed Synthesis to Creating and Evaluation to Evaluating, and reordered to place Creating highest." },
  { id: 72, year: 2022, paper: 1, unit: 0, question: "The 'Halo Effect' in teaching refers to:", options: ["Students performing better under artificial light", "Evaluators rating all aspects of a person positively based on one good trait", "The improvement of student performance due to teacher praise", "The positive effect of classroom environment on learning"], answer: 1, explanation: "The Halo Effect (Thorndike, 1920) is the tendency to let one positive attribute influence the overall evaluation of a person. In education, a teacher who knows a student is intelligent may unconsciously rate their other qualities (effort, behaviour) more favourably. The 'horn effect' is the negative equivalent." },
  { id: 73, year: 2021, paper: 1, unit: 0, question: "ICT stands for:", options: ["Integrated Communication Technology", "Information and Communication Technology", "International Computer Training", "Interactive Classroom Teaching"], answer: 1, explanation: "ICT stands for Information and Communication Technology – an umbrella term covering digital technologies used to access, process, store, and transmit information. In education, ICT encompasses computers, internet, smartphones, educational software, and online platforms." },
  { id: 74, year: 2020, paper: 1, unit: 0, question: "A plagiarism detection software that identifies similarity between submitted work and existing sources uses which type of algorithm?", options: ["Neural network", "String-matching and fingerprinting algorithm", "Decision tree", "Bayesian classification"], answer: 1, explanation: "Plagiarism detection software (like Turnitin) uses string-matching and document fingerprinting algorithms to compare submitted text with a database of existing sources. They tokenize text, generate fingerprints, and calculate similarity percentages." },
  { id: 75, year: 2019, paper: 1, unit: 0, question: "The 'peer review' process in research publication serves to:", options: ["Ensure research is published quickly", "Validate research methodology and ensure quality control", "Increase the researcher's citation count", "Guarantee positive results are published"], answer: 1, explanation: "Peer review is a quality control process where research manuscripts are critically evaluated by independent experts before publication. It checks methodology, validity, significance, and originality. However, it has limitations: publication bias, slow process, and possibility of reviewer error." },

  // ==================== MORE 2024 ====================
  { id: 76, year: 2024, paper: 2, unit: 10, question: "Seligman's PERMA model of well-being includes which of the following elements?", options: ["Pleasure, Emotion, Relationships, Meaning, Achievement", "Positive emotions, Engagement, Relationships, Meaning, Accomplishment", "Peace, Empathy, Resilience, Mindfulness, Awareness", "Positivity, Equilibrium, Rest, Motivation, Action"], answer: 1, explanation: "Seligman's PERMA model (2011) identifies five pillars of well-being: Positive emotions (feeling good), Engagement (flow/absorption), Relationships (positive social connections), Meaning (purpose, belonging to something larger), and Accomplishment (achievement, mastery)." },
  { id: 77, year: 2024, paper: 2, unit: 2, question: "When a researcher uses both qualitative and quantitative methods in a single study, this is called:", options: ["Multi-method research", "Mixed-methods research", "Triangulation research", "Integrative research"], answer: 1, explanation: "Mixed-methods research combines quantitative and qualitative approaches in a single study to provide a more complete understanding. Triangulation is a strategy within mixed-methods that uses multiple data sources/methods to enhance validity." },
  { id: 78, year: 2024, paper: 2, unit: 3, question: "The Thematic Apperception Test (TAT) was developed by:", options: ["Rorschach and Beck", "Murray and Morgan", "MMPI team at Minnesota", "Binet and Simon"], answer: 1, explanation: "The TAT was developed by Henry A. Murray and Christiana D. Morgan at Harvard (1935). Participants tell stories about ambiguous pictures, and these stories are analyzed for underlying themes, needs (especially nAch, nAff, nPow), and conflicts." },
  { id: 79, year: 2023, paper: 2, unit: 7, question: "According to Bandura, 'self-efficacy' refers to:", options: ["Actual ability to perform a task", "Belief in one's own capabilities to perform specific tasks", "Overall self-esteem and self-worth", "Internal locus of control"], answer: 1, explanation: "Self-efficacy (Bandura, 1977) is a person's belief in their own ability to succeed in specific situations or accomplish tasks. It's domain-specific (high in sports, low in math) and influences motivation, behaviour, and persistence. It's acquired through mastery experiences, vicarious learning, social persuasion, and physiological states." },
  { id: 80, year: 2023, paper: 2, unit: 10, question: "Csikszentmihalyi's concept of 'Flow' refers to:", options: ["A meditation technique for reducing stress", "A state of complete absorption and optimal experience in an activity", "A theory of unconscious mental processes", "The flow of information between neurons"], answer: 1, explanation: "Flow (Csikszentmihalyi, 1975, 1990) is a state of complete immersion in an optimally challenging activity where skills match challenges. Characteristics: intense concentration, loss of self-consciousness, distorted time perception, intrinsic reward. It occurs when challenge and skill are both high." },

  // ===== ADDITIONAL QUESTIONS FOR BREADTH =====
  { id: 81, year: 2022, paper: 2, unit: 1, question: "Sigmund Freud's psychoanalytic theory emerged from which city's medical tradition?", options: ["London", "Paris (Charcot's influence)", "Vienna", "Leipzig"], answer: 2, explanation: "Freud developed psychoanalysis in Vienna, Austria. He was influenced by Josef Breuer (cathartic method) and Jean-Martin Charcot (hypnosis for hysteria in Paris). Freud's Interpretation of Dreams (1900) is considered the foundational text of psychoanalysis." },
  { id: 82, year: 2022, paper: 2, unit: 9, question: "Systematic Desensitization, a behaviour therapy technique for phobias, was developed by:", options: ["John Watson", "B.F. Skinner", "Joseph Wolpe", "Albert Bandura"], answer: 2, explanation: "Joseph Wolpe developed systematic desensitization (1958) based on reciprocal inhibition. The procedure pairs progressive relaxation with gradual exposure to anxiety-provoking stimuli (from a hierarchy). It's highly effective for phobias and based on classical conditioning principles." },
  { id: 83, year: 2021, paper: 2, unit: 4, question: "Serotonin is primarily synthesized in which brain region?", options: ["Hippocampus", "Amygdala", "Raphe nuclei in the brainstem", "Basal ganglia"], answer: 2, explanation: "Serotonin (5-HT) is primarily synthesized in the raphe nuclei in the brainstem. These neurons project throughout the brain. Low serotonin is linked to depression, anxiety, and sleep problems. SSRIs (selective serotonin reuptake inhibitors) like fluoxetine increase serotonin availability." },
  { id: 84, year: 2020, paper: 2, unit: 6, question: "In Piaget's theory, 'object permanence' develops during which stage?", options: ["Preoperational stage", "Sensorimotor stage", "Concrete operational stage", "Formal operational stage"], answer: 1, explanation: "Object permanence – the understanding that objects continue to exist even when not visible – develops gradually during the Sensorimotor stage (0-2 years), becoming fully established around 8-12 months. Before this, 'out of sight = out of mind'." },
  { id: 85, year: 2019, paper: 2, unit: 8, question: "The 'sleeper effect' in persuasion refers to:", options: ["Messages being more effective when people are tired", "Initially discounted messages from low-credibility sources becoming more persuasive over time", "Sleep enhancing memory for persuasive messages", "Subliminal messaging during sleep"], answer: 1, explanation: "The sleeper effect occurs when a persuasive message from a low-credibility source (discounted initially) becomes more effective over time. This happens because people remember the message content but forget the discounting cue (source). Relevant to advertising and propaganda." },
  { id: 86, year: 2018, paper: 2, unit: 5, question: "According to Signal Detection Theory, the 'criterion' refers to:", options: ["The minimum stimulus intensity detectable", "The decision threshold used to decide when a signal is present", "The difference threshold between two stimuli", "The signal-to-noise ratio"], answer: 1, explanation: "In Signal Detection Theory (Green & Swets), the criterion (β) is the decision threshold set by the observer based on motivation, expectations, and payoff matrices. It determines the balance between hits (true positives) and false alarms. Liberals set low criteria; conservatives set high criteria." },
  { id: 87, year: 2023, paper: 2, unit: 2, question: "In which type of research design is the researcher part of the group being studied?", options: ["Case study", "Survey research", "Participant observation", "Experimental design"], answer: 2, explanation: "In participant observation (qualitative research), the researcher actively participates in the group/community being studied to gain insider perspective. Classic examples: Festinger studying a doomsday cult from within. Provides rich data but risks observer bias and going native." },
  { id: 88, year: 2024, paper: 2, unit: 9, question: "The concept of 'Unconditional Positive Regard' was central to which therapeutic approach?", options: ["Psychoanalysis", "Behaviour therapy", "Client-Centred Therapy", "Gestalt Therapy"], answer: 2, explanation: "Unconditional Positive Regard (UPR) is one of three core conditions in Carl Rogers' Client-Centred/Person-Centred Therapy. UPR means accepting and valuing the client completely without conditions. Along with empathy and genuineness, Rogers believed these created the therapeutic climate for growth." },
  { id: 89, year: 2022, paper: 2, unit: 10, question: "The 'biopsychosocial model' of health, proposed by Engel, suggests that illness is caused by:", options: ["Only biological factors", "Only psychological factors", "A combination of biological, psychological, and social factors", "Social factors primarily, with biological aspects secondary"], answer: 2, explanation: "George Engel's biopsychosocial model (1977) proposed that health and illness are determined by the interaction of biological factors (genetics, physiology), psychological factors (thoughts, emotions, behaviours), and social factors (relationships, culture, socioeconomic status). It replaced the purely biomedical model." },
  { id: 90, year: 2021, paper: 2, unit: 3, question: "In test construction, the 'Difficulty Index' (p) of an item indicates:", options: ["How well the item discriminates between high and low scorers", "The proportion of examinees who answered the item correctly", "The statistical reliability of the item", "The item's correlation with the total test score"], answer: 1, explanation: "The Difficulty Index (p or Facility Value) = Number who answered correctly ÷ Total number of examinees. Range: 0 (nobody got it right) to 1 (everyone got it right). Optimal p values for good items: 0.30-0.70. The Discrimination Index (D) measures how well an item differentiates high vs low scorers." },
  { id: 91, year: 2020, paper: 2, unit: 7, question: "The concept of 'collective unconscious' containing universal archetypes was proposed by:", options: ["Sigmund Freud", "Carl Jung", "Alfred Adler", "Erik Erikson"], answer: 1, explanation: "Carl Jung proposed the collective unconscious – a layer of the unconscious shared by all humans, containing archetypes (universal symbols/themes): the Self, Shadow, Anima/Animus, Persona, Great Mother, Wise Old Man, etc. This differentiates his Analytical Psychology from Freud's personal unconscious focus." },
  { id: 92, year: 2019, paper: 2, unit: 5, question: "The 'magic number 7 ± 2' proposed by George Miller refers to:", options: ["The number of long-term memory slots", "The capacity of short-term memory", "The optimal number of learning trials", "The number of basic emotions"], answer: 1, explanation: "George Miller's 1956 paper 'The Magical Number Seven, Plus or Minus Two' proposed that STM can hold approximately 7 (±2) chunks of information at once. Chunking (organizing information into meaningful units) can expand effective STM capacity (e.g., remembering phone numbers in groups)." },
  { id: 93, year: 2018, paper: 2, unit: 6, question: "Thorndike's 'Law of Effect' states:", options: ["Practice makes perfect", "Behaviours followed by satisfying consequences are more likely to recur", "Complex behaviours are built from simpler stimulus-response connections", "The effect of one learning situation generalizes to similar situations"], answer: 1, explanation: "Thorndike's Law of Effect (1898) states that responses followed by satisfying outcomes (rewards) are stamped in (strengthened), while responses followed by discomfort are stamped out (weakened). This was the precursor to Skinner's operant conditioning and the concept of reinforcement." },
  { id: 94, year: 2023, paper: 2, unit: 4, question: "Which part of a neuron receives information from other neurons?", options: ["Axon terminals", "Myelin sheath", "Dendrites", "Cell body (soma)"], answer: 2, explanation: "Dendrites are the tree-like branches extending from the cell body that receive synaptic input from other neurons. The axon carries the output signal away from the cell body toward axon terminals. The myelin sheath insulates the axon and speeds up signal transmission." },
  { id: 95, year: 2022, paper: 2, unit: 8, question: "The theory that aggression is a natural response to the blocking of goal-directed behaviour is called:", options: ["Social learning theory of aggression", "Frustration-Aggression hypothesis", "Excitation transfer theory", "General Aggression Model"], answer: 1, explanation: "The Frustration-Aggression hypothesis (Dollard et al., 1939) originally stated that frustration always leads to aggression and aggression is always caused by frustration. Berkowitz (1989) modified it: frustration leads to negative affect, which triggers aggression only in the presence of aggression cues." },
  { id: 96, year: 2021, paper: 2, unit: 2, question: "Grounded theory, as a qualitative research approach, was developed by:", options: ["Strauss and Corbin", "Husserl and Merleau-Ponty", "Miles and Huberman", "Glaser and Strauss"], answer: 3, explanation: "Grounded theory was developed by Barney Glaser and Anselm Strauss (1967) in 'The Discovery of Grounded Theory'. It's an inductive method where theory is developed from (grounded in) systematically gathered and analyzed data, rather than testing existing theory. Later, Strauss and Corbin (1990) elaborated the method." },
  { id: 97, year: 2020, paper: 2, unit: 9, question: "Kohlberg's highest stage of moral development (Stage 6) is characterized by:", options: ["Following rules to avoid punishment", "Upholding social contracts and laws", "Adherence to universal ethical principles", "Maintaining social order and law"], answer: 2, explanation: "Kohlberg's Stage 6 (Universal Ethical Principles – Postconventional Level) involves guiding behaviour by self-chosen universal principles of justice, human dignity, and rights – even when they conflict with laws. Martin Luther King Jr. is often cited as an example. Stage 4 is law and order; Stage 5 is social contract." },
  { id: 98, year: 2019, paper: 2, unit: 10, question: "Which of the following is associated with 'Positive Psychology'?", options: ["Studying mental illness and pathology", "Understanding flourishing, strengths, and optimal human functioning", "Behavioural conditioning and rewards", "Unconscious drives and conflicts"], answer: 1, explanation: "Positive Psychology (founded by Martin Seligman as APA president, 1998) focuses on what makes life worth living – studying strengths, virtues, happiness, resilience, and flourishing rather than pathology. Key concepts: PERMA model, character strengths (VIA), flow, and well-being." },
  { id: 99, year: 2018, paper: 2, unit: 3, question: "A test that measures what it is intended to measure has:", options: ["High reliability", "High validity", "Good standardization", "Established norms"], answer: 1, explanation: "Validity is the extent to which a test measures what it claims to measure. A test can be reliable (consistent) without being valid (e.g., consistently measuring the wrong thing). However, a test cannot be valid without being reliable. Validity is the most important property of a psychological test." },
  { id: 100, year: 2024, paper: 2, unit: 1, question: "Which Indian psychologist is known for developing the 'Indian adaptation of Binet-Simon Intelligence Scale'?", options: ["G.P. Malshe", "C.H. Rice", "Lalit Kumar Advani", "S.M. Mohsin"], answer: 1, explanation: "C.H. Rice developed the first standardized Indian adaptation of the Binet-Simon Intelligence Scale in 1929. This was a landmark in Indian psychology for developing culturally appropriate psychological assessment. Later adaptations include works by Bhatia and other Indian psychologists." }
];

// Blueprint Data
const BLUEPRINT_DATA = {
  units: [
    { name: "Research Methodology & Stats", shortName: "Unit 2", avgQ: 15, color: "#ef4444", percentage: 15 },
    { name: "Personality, Motivation & Emotion", shortName: "Unit 7", avgQ: 12, color: "#ec4899", percentage: 12 },
    { name: "Attention, Perception, Learning & Memory", shortName: "Unit 5", avgQ: 12, color: "#f59e0b", percentage: 12 },
    { name: "Biological Basis of Behaviour", shortName: "Unit 4", avgQ: 10, color: "#10b981", percentage: 10 },
    { name: "Thinking, Intelligence & Creativity", shortName: "Unit 6", avgQ: 10, color: "#8b5cf6", percentage: 10 },
    { name: "Psychological Testing", shortName: "Unit 3", avgQ: 10, color: "#06b6d4", percentage: 10 },
    { name: "Social Psychology", shortName: "Unit 8", avgQ: 10, color: "#0ea5e9", percentage: 10 },
    { name: "Human Development & Interventions", shortName: "Unit 9", avgQ: 8, color: "#14b8a6", percentage: 8 },
    { name: "Emergence of Psychology", shortName: "Unit 1", avgQ: 8, color: "#a78bfa", percentage: 8 },
    { name: "Emerging Areas", shortName: "Unit 10", avgQ: 5, color: "#f97316", percentage: 5 }
  ],
  years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  difficulty: [62, 65, 68, 70, 72, 71, 73], // % correct rate (lower = harder)
  topicMatrix: [
    { topic: "Research Design Types", unit: "Unit 2", frequency: "High", freqClass: "freq-high" },
    { topic: "Statistical Tests (t, ANOVA, Chi-square)", unit: "Unit 2", frequency: "High", freqClass: "freq-high" },
    { topic: "Personality Theories (Freud, Jung, Big Five)", unit: "Unit 7", frequency: "High", freqClass: "freq-high" },
    { topic: "GAS & Stress Coping", unit: "Unit 7", frequency: "High", freqClass: "freq-high" },
    { topic: "Conditioning (Classical & Operant)", unit: "Unit 5", frequency: "High", freqClass: "freq-high" },
    { topic: "Memory Models (Atkinson-Shiffrin, Baddeley)", unit: "Unit 5", frequency: "High", freqClass: "freq-high" },
    { topic: "Intelligence Theories (Spearman, Gardner, Sternberg)", unit: "Unit 6", frequency: "High", freqClass: "freq-high" },
    { topic: "Brain Structure & Function", unit: "Unit 4", frequency: "High", freqClass: "freq-high" },
    { topic: "Neurotransmitters & Disorders", unit: "Unit 4", frequency: "High", freqClass: "freq-high" },
    { topic: "Reliability & Validity", unit: "Unit 3", frequency: "High", freqClass: "freq-high" },
    { topic: "Conformity (Asch) & Obedience (Milgram)", unit: "Unit 8", frequency: "High", freqClass: "freq-high" },
    { topic: "Cognitive Dissonance (Festinger)", unit: "Unit 8", frequency: "High", freqClass: "freq-high" },
    { topic: "Piaget's Developmental Stages", unit: "Unit 9", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Erikson's Psychosocial Stages", unit: "Unit 9", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Psychotherapy Techniques", unit: "Unit 9", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Attribution Theory (FAE)", unit: "Unit 8", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Projective Tests (Rorschach, TAT)", unit: "Unit 3", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Western Schools of Psychology", unit: "Unit 1", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Eastern Psychology (Indian tradition)", unit: "Unit 1", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Reinforcement Schedules", unit: "Unit 5", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Sampling Methods", unit: "Unit 2", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Positive Psychology (PERMA, Flow)", unit: "Unit 10", frequency: "Medium", freqClass: "freq-med" },
    { topic: "Health Psychology (Biopsychosocial)", unit: "Unit 10", frequency: "Low", freqClass: "freq-low" },
    { topic: "Sports Psychology", unit: "Unit 10", frequency: "Low", freqClass: "freq-low" },
  ]
};

// Additional Paper I Questions for Full Mock
const PAPER1_QUESTIONS = [
  { id: 201, year: 2024, paper: 1, unit: 0, question: "The primary purpose of educational research is to:", options: ["Increase publication counts", "Develop new theories of cognition", "Improve educational practice and policy through systematic inquiry", "Validate existing pedagogical methods"], answer: 2, explanation: "Educational research aims to systematically investigate questions and problems in education to improve understanding, practice, and policy. Applied research solves practical problems; basic research advances theoretical understanding." },
  { id: 202, year: 2024, paper: 1, unit: 0, question: "Which of the following represents a correct use of a bar graph?", options: ["Showing the relationship between two continuous variables", "Displaying frequency distribution of a continuous variable", "Comparing categorical data across groups", "Showing proportions adding to 100%"], answer: 2, explanation: "Bar graphs are best for comparing discrete categories/groups. Scatter plots show relationships between continuous variables; histograms show continuous frequency distributions; pie charts show proportions summing to 100%." },
  { id: 203, year: 2023, paper: 1, unit: 0, question: "Which learning theory emphasizes the role of 'reinforcement' and 'punishment' in shaping behaviour?", options: ["Cognitive theory", "Humanistic theory", "Behaviourist theory", "Constructivist theory"], answer: 2, explanation: "Behaviourism (Skinner, Pavlov, Watson) focuses on observable behaviour shaped by environmental consequences – reinforcement strengthens behaviour, punishment weakens it. Cognitive theory focuses on mental processes; humanistic on self-actualization; constructivism on active knowledge construction." },
  { id: 204, year: 2023, paper: 1, unit: 0, question: "Formative assessment is assessment:", options: ["At the end of an instructional unit", "Before instruction begins", "During instruction to guide learning", "For research purposes"], answer: 2, explanation: "Formative assessment occurs DURING instruction to monitor student progress and provide feedback (e.g., quizzes, class discussions). Summative assessment occurs AT THE END to evaluate overall achievement (exams, final projects). Diagnostic assessment is conducted BEFORE instruction." },
  { id: 205, year: 2022, paper: 1, unit: 0, question: "The central tendency measure most appropriate for skewed data distributions is:", options: ["Mean", "Mode", "Median", "Standard deviation"], answer: 2, explanation: "The median (middle value) is the best measure of central tendency for skewed distributions because it is not affected by extreme values (outliers). The mean is influenced heavily by outliers and is best for normally distributed data. Mode is best for nominal/categorical data." },
  { id: 206, year: 2022, paper: 1, unit: 0, question: "Which of the following is an example of 'plagiarism'?", options: ["Paraphrasing with proper citation", "Directly quoting with quotation marks and citation", "Presenting someone else's ideas as your own without attribution", "Citing a secondary source"], answer: 2, explanation: "Plagiarism is the act of presenting others' work, ideas, or words as one's own without proper attribution. It's a serious academic integrity violation. Proper citation (even for paraphrasing), quotation marks for direct quotes, and attribution are ways to avoid plagiarism." },
  { id: 207, year: 2021, paper: 1, unit: 0, question: "In a normal distribution, what percentage of scores fall within ±1 standard deviation of the mean?", options: ["50%", "68%", "95%", "99.7%"], answer: 1, explanation: "In a normal (bell-shaped) distribution: ±1 SD = 68.26%, ±2 SD = 95.44%, ±3 SD = 99.74% (the empirical rule/68-95-99.7 rule). This is fundamental to understanding standard scores, z-scores, and IQ score interpretation." },
  { id: 208, year: 2021, paper: 1, unit: 0, question: "A research hypothesis that predicts the direction of an outcome (e.g., 'Group A will score higher than Group B') is called:", options: ["Null hypothesis", "Non-directional alternative hypothesis", "Directional (one-tailed) hypothesis", "Composite hypothesis"], answer: 2, explanation: "A directional hypothesis specifies the direction of the predicted effect (uses one-tailed test). Non-directional hypotheses predict a difference but not direction (two-tailed test). Null hypothesis (H₀) predicts no significant difference/relationship." },
  { id: 209, year: 2020, paper: 1, unit: 0, question: "Which of the following is the correct order of research steps?", options: ["Data collection → Problem identification → Analysis → Conclusion", "Problem identification → Review of literature → Methodology → Data collection → Analysis → Conclusion", "Literature review → Problem → Hypothesis → Data → Analysis", "Hypothesis → Problem → Data → Analysis → Review"], answer: 1, explanation: "The scientific research process: (1) Identify problem, (2) Review literature, (3) Formulate hypothesis, (4) Design methodology, (5) Collect data, (6) Analyze data, (7) Interpret and draw conclusions, (8) Report/publish findings." },
  { id: 210, year: 2020, paper: 1, unit: 0, question: "Distance education is characterized by:", options: ["Small class sizes and personalized instruction", "Geographic separation between teacher and learner", "Mandatory laboratory sessions", "Face-to-face instruction only"], answer: 1, explanation: "Distance education (distance learning) is defined by the physical separation of the teacher and learner, mediated by technology (mail, TV, internet). Key features: flexibility, asynchronous learning, self-paced study, use of technology. MOOCs are a modern form." },
  { id: 211, year: 2019, paper: 1, unit: 0, question: "The term 'digital divide' refers to:", options: ["The difference between digital and analog technology", "Inequality in access to digital technology between different groups", "The technical gap between hardware and software", "The division between IT professionals and non-professionals"], answer: 1, explanation: "The digital divide refers to the gap between those who have access to and benefit from digital technology and those who do not. This gap exists along lines of income, geography (urban vs rural), age, education, and gender, and has significant implications for equity in education and employment." },
  { id: 212, year: 2019, paper: 1, unit: 0, question: "In classroom communication, which of the following is a non-verbal cue?", options: ["Tone of voice", "Eye contact", "Vocabulary choice", "Speaking rate"], answer: 1, explanation: "Non-verbal communication includes: gestures, facial expressions, eye contact, body posture, proxemics (personal space), and appearance. Tone of voice is considered paralinguistic (quasi-verbal). Eye contact is a powerful non-verbal cue affecting authority, attention, and rapport." },
  { id: 213, year: 2018, paper: 1, unit: 0, question: "According to the UGC Act (1956), the primary function of UGC is:", options: ["Conducting NET examinations", "Promoting and coordinating university education and maintaining standards", "Establishing new central universities", "Regulating private educational institutions"], answer: 1, explanation: "The University Grants Commission (UGC) was established under the UGC Act (1956) with the mandate to: promote and coordinate university education, maintain and determine standards of teaching, examination and research, and disburse grants to universities and colleges." },
  { id: 214, year: 2018, paper: 1, unit: 0, question: "Which of the following is NOT included in Bloom's affective domain?", options: ["Receiving", "Responding", "Valuing", "Application"], answer: 3, explanation: "Bloom's Affective Domain taxonomy: Receiving → Responding → Valuing → Organization → Characterization. 'Application' belongs to the Cognitive Domain. The Psychomotor Domain covers physical skills. The affective domain focuses on emotions, attitudes, and values." },
  { id: 215, year: 2024, paper: 1, unit: 0, question: "A research article is considered 'peer-reviewed' when:", options: ["It has been read by the author's colleagues", "It has been evaluated by independent expert reviewers before publication", "It has been cited by other researchers", "It has been approved by the funding agency"], answer: 1, explanation: "Peer review (refereeing) means the manuscript was critically evaluated by independent experts (peers) in the same field before acceptance for publication. This ensures methodological soundness and scholarly validity. Double-blind peer review keeps both author and reviewer anonymous." },
  { id: 216, year: 2023, paper: 1, unit: 0, question: "The concept of 'lifelong learning' implies:", options: ["Learning only in formal educational settings throughout life", "Continuous self-initiated learning throughout a person's life beyond formal education", "Learning only technical and vocational skills", "Mandatory adult education programs"], answer: 1, explanation: "Lifelong learning is the continuous, voluntary, self-motivated pursuit of knowledge for personal and professional development throughout a person's entire life. It encompasses formal education, non-formal learning, and informal experiences. It's a core concept in knowledge economy contexts." },
  { id: 217, year: 2022, paper: 1, unit: 0, question: "Which of the following represents inductive reasoning?", options: ["All mammals are warm-blooded. A dog is a mammal. Therefore, a dog is warm-blooded.", "Observing that every crow seen is black → concluding all crows are black", "If P then Q. P is true. Therefore Q is true.", "Using mathematical axioms to prove a theorem"], answer: 1, explanation: "Inductive reasoning moves from specific observations to general conclusions (bottom-up). It's probabilistic, not certain. Deductive reasoning (options A, C, D) moves from general principles to specific conclusions (top-down) and is certain if premises are true." },
  { id: 218, year: 2021, paper: 1, unit: 0, question: "The primary difference between 'teaching' and 'training' is that teaching:", options: ["Focuses on practical skills", "Emphasizes understanding, critical thinking, and intellectual development", "Uses behavioural conditioning techniques", "Is more time-efficient than training"], answer: 1, explanation: "Teaching aims at developing understanding, critical thinking, values, and intellectual capabilities across broad knowledge domains. Training is more skill-specific and behaviour-focused (doing). Teaching fosters independent thinking; training ensures specific performance standards." },
  { id: 219, year: 2020, paper: 1, unit: 0, question: "Which measure of dispersion is NOT affected by extreme values (outliers)?", options: ["Range", "Standard deviation", "Variance", "Interquartile Range (IQR)"], answer: 3, explanation: "The Interquartile Range (IQR = Q3 - Q1) is not affected by extreme values because it only considers the middle 50% of data. Range (max-min) is most sensitive to outliers. Standard deviation and variance are also influenced by extreme values since they use the mean." },
  { id: 220, year: 2019, paper: 1, unit: 0, question: "Which of the following is the most reliable source of information for academic research?", options: ["Wikipedia", "Peer-reviewed journal articles", "News websites", "Social media posts"], answer: 1, explanation: "Peer-reviewed journal articles are the most reliable for academic research because they undergo rigorous expert evaluation before publication. Wikipedia can be edited by anyone and lacks primary research; news sources may be biased or simplified; social media lacks scholarly standards." },
  { id: 221, year: 2018, paper: 1, unit: 0, question: "'Brainstorming' as a creative problem-solving technique emphasizes:", options: ["Critical evaluation of each idea as it arises", "Quantity of ideas without judgment", "Working individually rather than in groups", "Using only proven methods"], answer: 1, explanation: "Brainstorming (Alex Osborn, 1939) rules: (1) Defer judgment/criticism, (2) Go for quantity over quality, (3) Build on others' ideas, (4) Welcome unusual/wild ideas. The critical evaluation comes AFTER idea generation. Research shows nominal brainstorming (individual) often outperforms group brainstorming." },
  { id: 222, year: 2023, paper: 1, unit: 0, question: "An example of 'convergent thinking' is:", options: ["Generating many different uses for a paperclip", "Solving a math problem that has one correct answer", "Free-associating to find creative ideas", "Designing a unique artwork"], answer: 1, explanation: "Convergent thinking (Guilford) involves finding the single correct solution to a well-defined problem. It's measured by traditional IQ tests. Divergent thinking generates multiple creative solutions. Brainstorming and finding multiple paperclip uses = divergent thinking." },
  { id: 223, year: 2022, paper: 1, unit: 0, question: "Which of the following best describes a 'hypothesis' in research?", options: ["A definitive conclusion based on data", "A testable prediction about the relationship between variables", "An observed fact in the real world", "A research method or procedure"], answer: 1, explanation: "A hypothesis is a specific, testable prediction (often stated as an if-then statement) about the expected relationship between variables. It must be falsifiable. Good hypotheses are based on theory/prior research and guide the research design and data collection." },
  { id: 224, year: 2021, paper: 1, unit: 0, question: "The acronym MOOC stands for:", options: ["Multiple Online Open Courses", "Massive Open Online Course", "Modern Online Operating Curriculum", "Multi-Optional Online Coaching"], answer: 1, explanation: "MOOC = Massive Open Online Course. Key features: massive (large number of participants), open (free/accessible to anyone), online (internet-based), course (structured educational experience). Examples: Coursera, edX, Swayam (India's national MOOC platform). MOOCs democratize access to education." },
  { id: 225, year: 2020, paper: 1, unit: 0, question: "In syllogistic reasoning, 'All A are B. All B are C. Therefore, all A are C' exemplifies:", options: ["Inductive reasoning", "Abductive reasoning", "Deductive reasoning", "Analogical reasoning"], answer: 2, explanation: "This is a classic categorical syllogism demonstrating deductive reasoning (Aristotle). Deduction moves from general premises to specific conclusions with logical certainty. If the premises are true, the conclusion must be true. Induction generalizes from specific cases; abduction finds the best explanation." }
];

// Export all data
const ALL_QUESTIONS = [...PYQ_QUESTIONS, ...PAPER1_QUESTIONS];
