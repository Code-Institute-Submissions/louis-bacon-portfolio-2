<img src="./assets/images/project-screenshot.png" alt="Screenshot of the top of my portfolio website" style="margin: 0;">

## Louis Bacon Portfolio

Hello,

Welcome to my self-titled portfolio website. 

This website is a hub for me to promote the various products and services that I offer, both as a business and an individual.

I own a clothing brand, provide tuition, write books and guides on fitness and will soon design websites.

The user is immediately aware of this and can intuitively click through the different services to find out more about them.

My website gives an insight into my business and skills, and ensures the user can quickly and painlessly obtain what they need from me.

I have a varied and complex skillset, so a great deal of effort has been made to simplify this.

This website constitutes my First Milestone Project for the Full Stack Developer Course delivered by the <a href="https://codeinstitute.net" target="_blank">Code Institute</a>. 

## UX / design

Simple layout and colour scheme. Dark text on a lighter background, contrasted by a navbar with a dark background and light text.

The menu clearly sets out the different areas of the website making them easy to find.

Immediately below my name are clickable links to the different services I offer, taking the user directly to the respective page.

In text areas, the width is limited on larger screens so that the user does not have to read all the way across. No paragraph is more than a few lines long and there is adequate spacing between lines so that information is easily digestible to the reader.

Additionally, font sizes have been carefully chosen to reflect the importance of the text. A larger font with heavier lettering immediately strikes the user so that they know where to read first and immediately understand what a page or section is about.

<strong>Pages</strong>

Home

<ul>
<li>
    My brand logo at the very top of the page. This is the website's hero image.
</li>
<li>
    My name followed immediately by the different services that I provide, each service being a clickable link taking the user to the respective part of the site.
</li>
<li>
    General information about me and what I do, with an invitation to join my mailing list. This takes the user to the final section of the homepage where they can enter their e-mail address and click the susbcribe button to receive regular e-mails from me.
</li>
<li>
    Quotes from past and present clients and associates. Each quote is presented in a separate box with a white background to distinguish it from the site background. The size of the quote icons in relation to the text makes it abundantly clear to the user that this is a quote.
    The third quote disappears on a medium-sized screen as there is not enough screen real estate to incorporate all three in a horizontal format without making the layout look awkward. On small screen sizes and below, quotes are in a vertical layout as they appear more user-friendly in this way. The third quote re-appears on an extra-small screen.
</li>
<li>
    A brief preview of my clothing business with the price of each item clearly shown. Each image is a clickable link that will take the user to the merchandise page (<a href="merch.html">merch.html</a>) where they can look at all my clothing products. It was not practical to incorporate my other services into this section where they are acquired via a sign-up form, but the user has already been made aware of their existence at the top of the site.
</li>
<li>
    Another invitation to join my mailing list by inputting the user's e-mail address and a subscribe button. The input field and button fit nicely together on one line on medium and large screens, and the width of each is adjusted accordingly. This looks clunky on small and extra-small screens, so the code is adjusted to have each on a separate line at equal width, making it a seamless experience for the user. The large, bold heading also immediately catches the users attention, making them more likely to join a mailing list and become a customer.
</li>
</ul>

About

<ul>
    <li>
        My background
    </li>
    <li>
        img gallery
    </li>
    <li>
        mailing list invite
    </li>
</ul>

Shop

<ul>
    <li>
        Dropdown menu
    </li>
    <li>
        T-shirts
    </li>
    <li>
        Tutoring
    </li>
    <li>
        Web services
    </li>
</ul>

Merch

<ul>
    <li>
        All tees, code same as Shop
    </li>
</ul>

Tutoring

<ul>
    <li>
        Same info as Shop
    </li>
</ul>

Fitness

<ul>
    <li>
        Same info as Shop
    </li>
    <li>
        Coaching form
    </li>
</ul>

Web Services

<ul>
    <li>
        Coming soon banner, simple announcement
    </li>
</ul>

CV

<ul>
    <li>
        exp and edu 
    </li>
</ul>

contact

<ul>
    <li>
        Simple contact form
    </li>
</ul>

<strong>User Stories</strong>

## Technologies Used

The project uses the follwing coding languages:

- HTML
- CSS
- JavaScript

The following frameworks/libraries were also used:

- Bootstrap
- jQuery
- Font Awesome

## Credits

The following features on the site are based on <a href="https://getbootstrap.com" target="_blank">Bootstrap</a> documentation:

<ul>
<li>The Carousel used for the hero image at the top of the mobile page and for item scrolling on the T-shirts page</li>
<li>Sign-up and contact forms, as well as the e-mail subscription bar</li>
<li>Buttons</li>
</ul>

All icons used on the site were taken from <a href="https://fontawesome.com/start/" target="_blank">Font Awesome</a>.

The 'return to top' button feature at the bottom right of the page uses code based on recommendations from
<a href="https://w3schools.com/" target="_blank">W3Schools</a> and <a href="https://stackoverflow.com" target="_blank">Stack Overflow</a>.

## UX

## Styling

## Pages

## Testing

## Deployment

## Issues

Certain issues were encountered in the building phase of the project. These are:

<ul>
<li>Dropdown menu initially showing as row on mobile device before converting to col
</li>
<li>Items in the carousel on the Shop page initially appearing too low when coming onto the screen on a mobile device before moving up
</li>
<li>Carousel items on the Shop page not scrollable on a desktop device</li>
</ul>

We discovered the first issue arose because the .navbar-nav class had a style rule of flex direction: row. Removing this rule resolved the issue.

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

## Images

Some images from <a href="https://google.com/images" target="_blank">Google Images</a>.

Other images are logos, designs and mockups from my t-shirts website, <a href="https://lb17tees.com" target="_blank">LB17 Tees</a>.

---

Happy coding!
