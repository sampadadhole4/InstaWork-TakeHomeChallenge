# InstaWork-TakeHomeChallenge

Instructions
Create a public repository on your Github account.
Implement the spec below and push it to a new branch on your repository.
Create proper documentation for building and testing the project
Add sourabhdpunja as a collaborator to the github project.
We may leave some comments on the code with suggestions on how to improve the implementation.
Project
The project is to implement a simple team-member management application that allows the user to view, edit, add, and delete team members. The app consists of 3 screens that are documented below:


List screen

Add screen

Edit screen







List screen
This screen shows a list of all team members. Note that the subtitle should reflect the number of team members (the screenshot is wrong, it should say 4). Also note that if the team member is an admin, that is listed next to their name. Clicking a team member should show the Edit screen. Clicking the plus at the top should show the Add screen.

Add screen
The Add screen appears when the user clicks the plus on the List screen. The user enters a team member's first & last name, phone number, and email. Additionally, they can choose the team member's role (it defaults to regular). Hitting save adds the team member to the list and shows the List screen. Clicking the X at the top does not add the team member, and returns to the List screen.

Edit screen
The Edit screen appears when the user clicks a team member on the List screen. This shows a form where the user can edit the details of the team member, including changing their role. Clicking save edits the team member information and shows the List screen. Clicking the X at the top discards the edits and returns to the List screen. Clicking Delete removes the team member and returns to the List screen.

Notes
The app should be implemented either as a web page using React, or as a native mobile app using React Native.
You are allowed to use libraries to help with boilerplate, UI components, or state management.
If you want, you are allowed to use a library to help manage React state such as Redux, Recoil, or any other state management library.
Data should be stored on the client, and does not need to be persisted when the page or app is refreshed. You can structure the team member information however you want.
Don't worry too much about visual fidelity: it's ok if the fonts, colors, and icons don't look exactly like the screenshots. We just care about the layout, composition of React components, and how the state is managed in Redux.
Don't worry about transitions between the screens. It's ok to just replace the list content with the form, and vice-versa.



## Interactions
1. The first page show the number of team members added in the team and the details of the team members.
2. When we click on the Add button on the Team Members view page, new page 'add a team member' will be rendered. After you enter the details of the team members, i.e First Name, Last Name, Contact, Email Id and select the role, after we click save, the details are gonna be saved and will be visible on view Team members details.
3. If we want to edit the details of the team members added to the team, just click on the team members on the team members view and new page 'edit team members' will render. Which would let the user edit the details and save it
4. After clicking on save on the 'Edit team members view' the details on the team  member view will be upodated
