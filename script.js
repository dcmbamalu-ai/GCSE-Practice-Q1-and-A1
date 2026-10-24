const subjects = [
	{ id: "physics", name: "Physics", mark: "PH", color: "blue", count: 5 },
	{ id: "chemistry", name: "Chemistry", mark: "CH", color: "coral", count: 5 },
	{ id: "maths", name: "Maths", mark: "M", color: "yellow", count: 5 },
	{ id: "biology", name: "Biology", mark: "BI", color: "green", count: 5 },
	{ id: "english", name: "English", mark: "EN", color: "violet", count: 5 }
];

const questions = [
	{ id: "p26", subject: "physics", year: 2026, topic: "Energy", marks: 3, prompt: "A 2 kg trolley is lifted vertically by 1.5 m. Calculate the increase in its gravitational potential energy. Use g = 9.8 N/kg.", answer: "Gravitational potential energy = mass × gravitational field strength × height. E = 2 × 9.8 × 1.5 = 29.4 J.", working: "Substitute values in E = mgh. The unit for energy is the joule (J)." },
	{ id: "p25", subject: "physics", year: 2025, topic: "Electricity", marks: 3, prompt: "A lamp has a potential difference of 12 V across it and a current of 0.5 A through it. Calculate its resistance.", answer: "R = V ÷ I = 12 ÷ 0.5 = 24 Ω.", working: "Use the equation V = IR, rearranged to R = V/I. Include the unit, ohms (Ω)." },
	{ id: "p24", subject: "physics", year: 2024, topic: "Motion", marks: 2, prompt: "A cyclist travels 150 m in 12 s at a steady speed. Calculate the cyclist's speed.", answer: "Speed = distance ÷ time = 150 ÷ 12 = 12.5 m/s.", working: "Use speed = distance/time and give the answer in metres per second." },
	{ id: "p23", subject: "physics", year: 2023, topic: "Waves", marks: 3, prompt: "A wave has a frequency of 8 Hz and a wavelength of 0.75 m. Calculate its speed.", answer: "Wave speed = frequency × wavelength = 8 × 0.75 = 6 m/s.", working: "Use v = fλ. A hertz is one wave per second, so the final unit is m/s." },
	{ id: "p22", subject: "physics", year: 2022, topic: "Density", marks: 3, prompt: "A metal block has a mass of 540 g and a volume of 200 cm³. Calculate its density.", answer: "Density = mass ÷ volume = 540 ÷ 200 = 2.7 g/cm³.", working: "Use density = mass/volume. Keep the units consistent with the values given." },

	{ id: "c26", subject: "chemistry", year: 2026, topic: "Atomic structure", marks: 2, prompt: "An atom has 17 protons, 18 neutrons and 17 electrons. State its atomic number and mass number.", answer: "Atomic number = 17. Mass number = 17 + 18 = 35.", working: "The atomic number is the number of protons. The mass number is protons plus neutrons." },
	{ id: "c25", subject: "chemistry", year: 2025, topic: "Formulae", marks: 2, prompt: "Magnesium forms Mg²⁺ ions and chlorine forms Cl⁻ ions. Write the formula of magnesium chloride.", answer: "MgCl₂.", working: "Two chloride ions, each with a −1 charge, balance one magnesium ion with a +2 charge." },
	{ id: "c24", subject: "chemistry", year: 2024, topic: "Rates of reaction", marks: 3, prompt: "Explain why powdered calcium carbonate reacts faster with dilute acid than the same mass of large chips.", answer: "The powder has a larger total surface area. More calcium carbonate particles are exposed to acid, so there are more frequent successful collisions per second.", working: "Link greater exposed surface area to collision frequency and then to the rate of reaction." },
	{ id: "c23", subject: "chemistry", year: 2023, topic: "Quantitative chemistry", marks: 2, prompt: "Calculate the relative formula mass, Mr, of CO₂. Relative atomic masses: C = 12, O = 16.", answer: "Mr(CO₂) = 12 + (2 × 16) = 44.", working: "Add the relative atomic masses of every atom shown in the formula." },
	{ id: "c22", subject: "chemistry", year: 2022, topic: "Acids and alkalis", marks: 2, prompt: "Hydrochloric acid reacts with sodium hydroxide. Name the salt formed and write the word equation.", answer: "The salt is sodium chloride. Hydrochloric acid + sodium hydroxide → sodium chloride + water.", working: "An acid reacting with an alkali produces a salt and water. The acid's name gives the chloride salt." },

	{ id: "m26", subject: "maths", year: 2026, topic: "Algebra", marks: 3, prompt: "Solve 3(2x − 1) = 21. Show your working.", answer: "3(2x − 1) = 21; 2x − 1 = 7; 2x = 8; x = 4.", working: "Expand first, or divide both sides by 3. Then isolate x using inverse operations." },
	{ id: "m25", subject: "maths", year: 2025, topic: "Percentages", marks: 3, prompt: "A jacket costs £64 and is reduced by 15%. Calculate its sale price.", answer: "15% of £64 = £9.60. Sale price = £64 − £9.60 = £54.40.", working: "Alternatively, multiply £64 by 0.85 to find 85% of the original price." },
	{ id: "m24", subject: "maths", year: 2024, topic: "Geometry", marks: 2, prompt: "A right-angled triangle has shorter sides of 6 cm and 8 cm. Find the length of its hypotenuse.", answer: "c² = 6² + 8² = 100, so c = 10 cm.", working: "Apply Pythagoras' theorem to the two perpendicular sides, then take the positive square root." },
	{ id: "m23", subject: "maths", year: 2023, topic: "Ratio", marks: 3, prompt: "Share £84 in the ratio 2:5. How much does each share receive?", answer: "There are 7 parts, so each part is £84 ÷ 7 = £12. The shares are £24 and £60.", working: "Add the ratio parts, divide the total by that number, then multiply by each ratio value." },
	{ id: "m22", subject: "maths", year: 2022, topic: "Statistics", marks: 2, prompt: "Find the median of 4, 9, 2, 7, 12, 6, 3.", answer: "In order: 2, 3, 4, 6, 7, 9, 12. The median is 6.", working: "Put the seven values in ascending order. The middle, fourth value is the median." },

	{ id: "b26", subject: "biology", year: 2026, topic: "Cells", marks: 2, prompt: "Name two structures found in a plant cell but not in an animal cell.", answer: "Any two of: cell wall, chloroplasts, or a permanent vacuole.", working: "Both plant and animal cells have a cell membrane, cytoplasm, nucleus and mitochondria, so choose two plant-specific structures." },
	{ id: "b25", subject: "biology", year: 2025, topic: "Photosynthesis", marks: 2, prompt: "Write the word equation for photosynthesis.", answer: "Carbon dioxide + water → glucose + oxygen.", working: "Light energy, absorbed by chlorophyll, is needed for this reaction. It is not a reactant in the word equation." },
	{ id: "b24", subject: "biology", year: 2024, topic: "Inheritance", marks: 3, prompt: "In a species, allele B is dominant to allele b. A heterozygous individual (Bb) reproduces with another heterozygous individual. What is the probability of offspring with genotype bb?", answer: "1 in 4, or 25%.", working: "The possible combinations are BB, Bb, Bb and bb. One of the four outcomes is bb." },
	{ id: "b23", subject: "biology", year: 2023, topic: "Organisation", marks: 2, prompt: "Explain how the small intestine is adapted for absorbing digested food molecules.", answer: "It has many villi, giving a large surface area, and a thin lining for a short diffusion distance. A good blood supply helps maintain a concentration gradient.", working: "Any two explained adaptations earn credit. Link the feature to faster or more effective absorption." },
	{ id: "b22", subject: "biology", year: 2022, topic: "Ecology", marks: 2, prompt: "In the food chain grass → rabbit → fox, identify the producer and explain why it has that role.", answer: "Grass is the producer because it makes its own glucose by photosynthesis.", working: "Producers form the base of a food chain by converting light energy into chemical energy in biomass." },

	{ id: "e26", subject: "english", year: 2026, topic: "Creative writing", marks: 6, prompt: "Original practice prompt: Describe a place just before a storm. Build atmosphere through precise sensory detail and vary your sentence lengths.", answer: "Example approach: Open with the sudden quiet, then focus on one sharp detail such as leaves turning pale underneath. Let shorter sentences build tension. End as the first rain arrives. There is no single model answer.", working: "For a strong response, select details rather than listing them, choose deliberate verbs, and shape a clear shift in mood. Check punctuation and paragraphing." },
	{ id: "e25", subject: "english", year: 2025, topic: "Language analysis", marks: 6, prompt: "Read this original sentence: “The wind shouldered its way down the empty street, scattering yesterday's leaves.” How does the writer use language to create an impression of the wind?", answer: "The personification “shouldered its way” makes the wind seem forceful and almost human, as if it is pushing through the street. “Scattering” suggests restless movement, while “empty” makes that movement feel more noticeable.", working: "Choose a short quotation, identify a specific word or method, and explain its effect in context. More than one interpretation can be valid." },
	{ id: "e24", subject: "english", year: 2024, topic: "Transactional writing", marks: 6, prompt: "Original practice prompt: Write the opening of a speech arguing that every student should have access to a quiet place to study. Address your audience directly.", answer: "Example opening: “Think about the last time you tried to concentrate while the television was on and people were talking around you. Now imagine having nowhere else to go. A quiet place to study is not a luxury; it is a fair chance to do your best.”", working: "A direct question or shared scenario can engage listeners. Establish your viewpoint early and support it with a clear reason." },
	{ id: "e23", subject: "english", year: 2023, topic: "Language analysis", marks: 5, prompt: "Read this original sentence: “At dawn, the harbour blinked awake: ropes creaked, gulls argued, and the first boats slipped out to sea.” Identify one language choice and explain how it presents the harbour.", answer: "“Blinked awake” personifies the harbour as if it is a sleepy person opening its eyes. This suggests a gradual, gentle start to the day. The active verbs then make the scene feel lively.", working: "Use evidence from the sentence and explain what the chosen words suggest, rather than simply naming a technique." },
	{ id: "e22", subject: "english", year: 2022, topic: "Creative writing", marks: 6, prompt: "Original practice prompt: Write a short description of a crowded station from the perspective of someone waiting for important news.", answer: "Example approach: Keep the narrator still while the station moves around them. Use clipped observations, such as shoes rushing past or a departure board changing, to create anticipation. Let one sound or message break the tension. There is no single model answer.", working: "A consistent viewpoint, carefully selected details and a deliberate change in pace help create tension. Proofread for accurate sentence boundaries." }
];

const subjectList = document.querySelector("#subject-list");
const questionList = document.querySelector("#question-list");
const yearFilter = document.querySelector("#year-filter");
const statusFilter = document.querySelector("#status-filter");
const searchInput = document.querySelector("#question-search");
const emptyState = document.querySelector("#empty-state");
const completionKey = "studyroom-completed-v1";
let activeSubject = "physics";
let completed = new Set();

try {
	completed = new Set(JSON.parse(localStorage.getItem(completionKey) || "[]"));
} catch {
	completed = new Set();
}

function renderSubjects() {
	subjectList.innerHTML = subjects.map((subject, index) => `
		<button class="subject-button ${subject.color} ${activeSubject === subject.id ? "active" : ""}" data-subject="${subject.id}" aria-pressed="${activeSubject === subject.id}">
			<span class="subject-mark">${subject.mark}</span><span class="subject-name">${subject.name}</span><span class="subject-arrow" aria-hidden="true">↗</span>
		</button>`).join("");

	subjectList.querySelectorAll("[data-subject]").forEach((button) => {
		button.addEventListener("click", () => {
			activeSubject = button.dataset.subject;
			renderSubjects();
			renderQuestions();
		});
	});
}

function renderQuestions() {
	const subject = subjects.find((item) => item.id === activeSubject);
	const subjectQuestions = questions.filter((question) => question.subject === activeSubject);
	const visibleQuestions = subjectQuestions.filter((question) => {
		const matchesYear = yearFilter.value === "all" || String(question.year) === yearFilter.value;
		const matchesStatus = statusFilter.value === "all" || (statusFilter.value === "done") === completed.has(question.id);
		const searchText = `${question.topic} ${question.prompt} ${question.year}`.toLowerCase();
		return matchesYear && matchesStatus && searchText.includes(searchInput.value.trim().toLowerCase());
	});
	const doneCount = subjectQuestions.filter((question) => completed.has(question.id)).length;

	document.querySelector("#subject-title").textContent = subject.name;
	document.querySelector("#subject-kicker").textContent = `${subject.id.toUpperCase()} / YOUR PRACTICE SET`;
	document.querySelector("#progress-count").textContent = `${doneCount} / ${subjectQuestions.length} done`;
	document.querySelector("#progress-fill").style.width = `${(doneCount / subjectQuestions.length) * 100}%`;
	document.querySelector("#result-count").textContent = `${visibleQuestions.length} ${visibleQuestions.length === 1 ? "QUESTION" : "QUESTIONS"}`;
	questionList.innerHTML = visibleQuestions.map((question, index) => {
		const isDone = completed.has(question.id);
		return `
			<article class="question-item ${isDone ? "is-done" : ""}" style="--item-index:${index}">
				<div class="question-topline"><span class="question-year">${question.year} <i>·</i> ${question.topic}</span><span class="question-marks">${question.marks} MARKS</span></div>
				<p class="question-prompt">${question.prompt}</p>
				<div class="question-actions">
					<button class="answer-toggle" aria-expanded="false" aria-controls="answer-${question.id}"><span aria-hidden="true">＋</span> Reveal answer</button>
					<button class="done-toggle" aria-pressed="${isDone}" data-complete="${question.id}"><span class="done-check" aria-hidden="true">${isDone ? "✓" : ""}</span>${isDone ? "Completed" : "Mark done"}</button>
				</div>
				<div class="answer-panel" id="answer-${question.id}" hidden><div class="answer-label">ANSWER</div><p>${question.answer}</p><div class="working-label">THINKING IT THROUGH</div><p class="working-copy">${question.working}</p></div>
			</article>`;
	}).join("");

	emptyState.hidden = visibleQuestions.length > 0;
	questionList.hidden = visibleQuestions.length === 0;

	questionList.querySelectorAll(".answer-toggle").forEach((button) => {
		button.addEventListener("click", () => {
			const panel = document.getElementById(button.getAttribute("aria-controls"));
			const opening = panel.hidden;
			panel.hidden = !opening;
			button.setAttribute("aria-expanded", String(opening));
			button.innerHTML = `<span aria-hidden="true">${opening ? "−" : "＋"}</span> ${opening ? "Hide answer" : "Reveal answer"}`;
		});
	});

	questionList.querySelectorAll("[data-complete]").forEach((button) => {
		button.addEventListener("click", () => {
			const id = button.dataset.complete;
			if (completed.has(id)) completed.delete(id);
			else completed.add(id);
			try {
				localStorage.setItem(completionKey, JSON.stringify([...completed]));
			} catch {
				// Progress remains available for this session when storage is disabled.
			}
			renderQuestions();
		});
	});
}

yearFilter.addEventListener("change", renderQuestions);
statusFilter.addEventListener("change", renderQuestions);
searchInput.addEventListener("input", renderQuestions);
renderSubjects();
renderQuestions();
