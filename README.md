# Response

**Group Memebers**

Davide Manzella 10522100 10522100@polimi.it
Umberto Messuti 10538507 10538507@polimi.it 
Mariano Pelagatti 10522120 10522120@polimi.it
Massimiliano Pellizzer 10560296 10560296@polimi.it

**Contributions**

Davide Manzella: Initial setup of the github repository and project, mostly focused on the database.
The E-R schema, the database input injection and the api for the retrieval of information from the database

Umberto Messuti: I have coded the template in HTML, CSS and JavaScript from which we have built the website. I have contributed to the implementation of most of the Vue components used in the website and I have also contributed to implement the connection between the front-end and the back-end. 

Mariano Pelagatti: I ran an attentive review of the UX and UI of the website, providing fixes and adjustments throughout the design and implementation of the front end, ensuring responsiveness and a pleasing mobile experience. I coded a few components (mostly Chatbot related), while also reworking and optimizing other ones, exploiting mixins to remove duplicate code. I also managed the drafting of both the Usability and Design reports (the one for the Chatbot too), documenting the process and all of our design choices. 

Massimiliano Pellizzer: I have designed the whole website, I drew most of the diagrams in the documentation (C-IDM large, C-IDM small, P-IDM, Wireframes), and I contributed to the implementation of Vue components and pages. I have reviewed and commented the code.

**Server and DB technologies used**

The choice of the backend's server and db was quite straghtforward following what was seen in the lectures, a simple server to implement the database connection and respective apis in node.js using express module.
The database chosen was the postgresql DBMS that is managed through an ORM called sequelize that is a nod.js module

**Components Developed**
- Chat.vue: A simple component implementing the logic of message exchange between the user and the chatbot. Initial code was provided to us, it was readapted to match the website needs, both at UI and features level (e.g it was tweaked in order to be responsive with autoscroll, as it originally stayed still on the first messages, not following the flow of new ones)
- Contacts.vue: Just 3 tiles showing 'Location', 'Phone Number' and 'Email Address'. No logic implemented.
- FormSection.vue: Just an html form with 4 fields (email, name, phone and a message), each connected with a 'v-model' directive to 4 string values ('email', 'user', 'phone', 'msg', respectively). The button for submission has a '@click.prevent=".."' directive, used to prevent the normal behaviour of the form submission, while also checking whether or not all the fields are completed.
- HalfShowCase.vue: This component is used to show an image and all useful info about an employee. The only logic implemented in this component is the usage of 'props' to externally pass name, surname, location, role, image and areaid. A function used to check whether or not there is an image to show: if the image is null then default one is shown.
- ListElements.vue: This component is a list populated with the 'v-for' directive using an array of elements externally provided through the props. In the props there are also a title, a section, a default image path and a boolean value used to define the wideness of the list (true => each element is as wide as the page, false => in each row of the list can be listed more tiles).
- LowBar.vue: This component is organized on a line divided in two parts
-> On the left we have a sort of breadcrumb (we always show predefined paths to tell the users where they are (i.e., the absolute path), NOT how they got there [suggested to us in a tutoring session]). To do so this component receives in a prop the path of the single page and the name of the page itself.
-> On the right we list the sections of the specific page the user is visiting: the component receives in an array (named 'something') the list of all sections which have to be shown. Each entry is just an href to a specific anchor.
On smaller devices this component will present on the left only the name of the actual page and on the right a button to show all the possible chapters.
- Paragraph.vue: This component is used to show a paragraph composed by a title, a text section and an image. Not all the sections need to be present. A 'v-for' directive inside the 'calling' page was used.
To dynamically change the style of the text (use bold/italic ecc) we had to use on both the title and the text section the directive 'v-html' which disables character escaping. It can raise an exception but there is no risk of XSS (cross-site scripting) because there are no possibilities of adding tuples to the db from the website (the only way is to manually gain access to the database and then add the tuple).
- ShowCase.vue: This page shows an image and a text section over it. This text section is composed by a title and a short introduction. Title, short introduction and the image path are sent to this component through props.
- SlideShow.vue: This component has a central part with at most 3 tiles and on both sides there is a button to show the next or the previous one. At first all the tiles are just created but not arranged. Then the arrangment of the tile is based on the total number of tiles. Once mounted, a listener to the width of the page is deployed: it wasn't possible to use just css because based on the number of the total tiles and on the width of the page there are different behaviours.
- Once the page is destroyed the listener is removed in order to prevent unwanted behaviour.
- SlideShowEmployee.vue: This component is exactly the same as SlideShow but has a different arrangement of the text on tiles.
- SlideShowSingle.vue: Aesthetically it's the same as SlideShow and SlideShowEmployee, but it shows a single tile.
- SocialBlock.vue: Just 5 tiles to show all the possible social links (we used a class to mimic the behaviour of a link only to dismiss the potential errors of WAVE). No logic implemented.
- TheFooter.vue: A simple footer with a paragraph.
- TopBar.vue: This component contains the whole navbar arranged in subsections (the links visible without the need of hovering) and submenus (all the links visible relative to the hover of an element of the navbar). On smaller screens the navbar is hidden and needs to be triggered with the 'Hamburger' button. All links are 'NuxtLink' and have a directive '@click="hideNav"' used to hide the navbar if on a smaller display.
- WideBox.vue: This is the hardcoded landing page. No logic is implemented.

**Best Practices**
- We have define and reused different components instead of "reinventing the wheel every time"
- In order to show a list of elements, the "V-for" statement has been used, assigning to each element its own key.
- Each interaction between the system and the user (where the user type some sort of text in the website) is managed through the "V-model" construct, in order to acquire the input correctly
- We have used different listeners (i.e. @keypress.enter=...) in order to let the user interact with different parts of the website



