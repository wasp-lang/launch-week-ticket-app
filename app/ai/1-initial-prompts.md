### PRD / initial prompt - my 1st try

> I want to create a Wasp Launch Week ticket app with the current template project I'm in which uses Wasp. Leveraging Wasp's full-stack features (such as Auth), let's build the app based on the following spec:
- User has to log in with a GitHub account to generate a ticket. 
- When not logged in, there is a nice landing page announcing Launch Week #10. There is a CTA for user to log in with GitHub.
- Once logged in, user can click a "Generate my ticket" button and a nice ticket with his name and a ticket number will be generated. It will have Wasp's mascot, Da Boi, performing some action on it (e.g. riding a bike, swimming, ...). That will be randomly generated by AI.
- New features should be styled and created using the demo features in `src` (landing-page, auth, etc.) as examples.
- Use a modified vertical slice implmentation approach that's suitable for LLM-assisted coding. 


### Initial prompt refined with AI

I want to create a Wasp Launch Week ticket app using the current Wasp template project. The app should leverage Wasp's full-stack features, especially Auth. Here's the desired functionality:

User Flows:
- When not logged in, users see a landing page announcing Launch Week #10, with a prominent CTA to log in via GitHub.
- Users must log in with their GitHub account to generate a ticket.
- After logging in, users can click a "Generate my ticket" button.
- The ticket displays:
- The user's name (from GitHub)
- A unique ticket number (sequential or random, but unique per user)
- Wasp's mascot, Da Boi, performing a randomly chosen action (e.g., riding a bike, swimming), generated by AI.
- Users can download or share their ticket (optional, but preferred).

Technical/Design Notes:
- Use Wasp's built-in Auth with GitHub as the provider.
- Style new features to match the demo features in src (landing-page, auth, etc.).
- For the first iteration, the ticket image will be generated on the fly and not stored anywhere; each time the user requests their ticket, the image will be freshly generated.
- Use a vertical slice implementation approach suitable for LLM-assisted coding.
- If AI image generation fails, show a fallback mascot image.

Non-Functional Requirements:
- The app should be responsive and accessible.
- Handle errors gracefully (e.g., login failure, image generation issues).

Success Criteria:
- Users can log in with GitHub, generate a unique ticket, and see their ticket with a mascot image.
- The landing page and ticket page are visually appealing and consistent with the rest of the app.


> With this in mind, I want you to first evaluate the project template and think about a few possible PRD approaches before landing on the best one. Provide reasoning why this would be the best approach. Remember we're using Wasp, a full-stack framework with batteries included, that can do some of the heavy lifting for us, we don't need to create an enterprise-level app (it will be for personal use), and we want to use a vertical slice implementation approach so we can start with basic implementations of features first, and add on complexity from there

### Plan prompt

From this PRD, create an actionable, step-by-step plan that we can use as a guide for LLM-assisted coding. Before you create the plan, think about a few different plan styles that would be suitable for this project and the implementation style before selecting the best one. Give your reasoning for why you think we should use this plan style. Remember that we will constantly refer to this plan to guide our coding implementation so it should be well structured, concise, and actionable, while still providing enough information to guide the LLM.
Also, when you write the plan make sure to use checkboxes for tasks, so we can track our progress easily.