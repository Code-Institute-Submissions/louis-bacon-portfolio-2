## Validators

**HTML**

The HTML code was passed through the [W3](https://validator.w3.org/) validator. One error and a number of warnings were found.

* Home page

![Screenshot of validator results for Home HTML](./libraries/testing/html-validator-home.png)

* About page

![Screenshot of validator results for About HTML](./libraries/testing/html-validator-about.png)

* Shop page

![Screenshot of validator results for Shop HTML](./libraries/testing/html-validator-shop.png)

* Merch (T-Shirts) page

![Screenshot of validator results for Merch HTML](./libraries/testing/html-validator-merch.png)

* Tutoring page

![Screenshot of validator results for Tutoring HTML](./libraries/testing/html-validator-tutoring.png)

* Fitness page

![Screenshot of validator results for Fitness HTML](./libraries/testing/html-validator-fitness.png)

* Web Services page

![Screenshot of validator results for Web Services HTML](./libraries/testing/html-validator-web-services.png)

* CV page 

![Screenshot of validator results for CV HTML](./libraries/testing/html-validator-cv.png)

* Contact page 

![Screenshot of validator results for Contact HTML](./libraries/testing/html-validator-contact.png)

* Cart page 

![Screenshot of validator results for Cart HTML](./libraries/testing/html-validator-cart.png)

* Additional HTML in JavaScript files that can potentially be run

![Screenshot of validator results for additional HTML in JavaScript files](./libraries/testing/html-validator-additional.png)

The warnings were ignored as these are design choices and do not affect the performance of the live site.

The error was resolved by changing the value attribute on all forms' DOB input fields to null.

**CSS**

The CSS code was passed through the [Jigsaw](https://jigsaw.w3.org/css-validator/) validator. No errors were found.

![Screenshot of CSS passing through validator with no issues](./libraries/testing/css-validator.png)

**JavaScript**

The JavaScript code was passed through the [JSHint](https://jshint.com) validator. Several warnings and no errors were found.

* Cart 

![Screenshot of validator results for cart.js file](./libraries/testing/js-validator-cart1.png)
![Screenshot of validator results for cart.js file 2](./libraries/testing/js-validator-cart2.png)
![Screenshot of validator results for cart.js file 3](./libraries/testing/js-validator-cart3.png)

* Main

![Screenshot of validator results for main.js file](./libraries/testing/js-validator-main.png)

* Mail

![Screenshot of validator results for mail.js file](./libraries/testing/js-validator-mail.png)

The warnings were ignored as these are design choices and do not affect the performance of the live site.

The website was tested in Brave Browser using the both Developer Tools and the Viewport Resizer extension. I took screenshots of each 
page using the Full Page Screen Capture extension.

See the screenshots below for the website layout on a Samsung Galaxy S5 (screen width of 360px) as an example:

![A screen capture of the home page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-homepage-galaxy-s5.png)

![A screen capture of the about page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-about-galaxy-s5.png)

![A screen capture of the shop (all items) page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-shop-galaxy-s5.png)

![A screen capture of the merchandise page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-merch-galaxy-s5.png)

![A screen capture of the tutoring page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-tutoring-galaxy-s5.png)

![A screen capture of the fitness page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-fitness-galaxy-s5.png)

![A screen capture of the web services page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-web-services-galaxy-s5.png)

![A screen capture of the CV page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-cv-galaxy-s5.png)

![A screen capture of the contact page on a Galaxy S5 using Developer Tools](./libraries/testing/screen-capture-contact-galaxy-s5.png)

Here are a couple of screenshots of the layout on an iPad (768px width):

![A screen capture of the home page on an iPad using Developer Tools](./libraries/testing/screen-capture-home-ipad.png)

![A screen capture of the shop page on an iPad using Developer Tools](./libraries/testing/screen-capture-shop-ipad.png)


Brave Browser is based entirely on Google Chrome and uses the Chrome webstore, so the functionality is exactly as it would be in Chrome. 

I used Developer Tools to test the website layout pixel by pixel as well as on all popular mobile and tablet devices, and the design 
was consistently responsive. The main difference is that the main menu collapses into a hamburger menu on xs sizes with the menu then 
opening downwards rather than across. This pushes down the hero image so that there is no overlay. See the screenshots below.

![A screenshot of the main menu as it would appear on a mobile device](./libraries/testing/screenshot-mobile-navbar-1.png)

![A screenshot of the main menu with the dropdown open as it would appear on a mobile device](./libraries/testing/screenshot-mobile-navbar-2.png)


The dropdown menu also works well on tablet and desktop devices, opening just below the main navbar with a deliberate but small amount 
of margin between the edges of each element. This gives a slightly more elegant feel. The dropdown hangs down over the hero image but 
does not obscure any text. See the screenshot below.

![A screenshot of the dropdown menu as it appears on tablet and desktop devices](./libraries/testing/screenshot-dropdown-menu.png)

Using the Viewport Resizer, I clicked the animate button to test the screen at different sizes on each page, and no layout issues were 
detected.

The width of the input text fields throughout the site adjusts at different screen sizes, but maintains an optimised position in 
relation to any adjacent label text or submit button.

All form elements were tested to ensure that submission is not possible without filling out all the required fields due to the 'required' 
attribute. Here is a screenshot of me attempting to susbcribe to my mailing list without an e-mail address:

![A screenshot of me trying to subscribe to my mailing list without an e-mail address](./libraries/testing/email-empty-input-screenshot.png)

Here are some screenshots of me attempting to submit incomplete contact forms, either with an empty input field or unselected option. 
The code is duplicated for each contact form on the website, so the result would be the same on any page.

![A screenshot of me being prompted to fill in the first name field](./libraries/testing/contact-form-empty-fname.png)

![A screenshot of me being prompted to fill in the last name field](./libraries/testing/contact-form-empty-lname.png)

![A screenshot of me being prompted to fill in the e-mail address field](./libraries/testing/contact-form-empty-email.png)

![A screenshot of me being prompted to fill in the phone number field](./libraries/testing/contact-form-empty-phone.png)

![A screenshot of me being prompted to select an option from three choices](./libraries/testing/contact-form-unselected-option.png)

![A screenshot of me being prompted to select an option from two choices](./libraries/testing/contact-form-unselected-option-2.png)

All external links navigate to their intended destination and open in a new browser tab.

**Issues**

The following issues were encountered during the testing phase:


* Dropdown mobile menu initially opened as row before moving to a vertical layout. I discovered this happened because the .navbar-nav 
class had a rule of 'flex-direction: row'. Removing the style rule resolved the issue.

* The border of the hamburger menu displayed a blue ring when selected. To resolve the issue, I added a rule of 'outline: none' to the 
pseudo class .navbar-toggler:focus

* In the mailing list section, the input text field misaligned with the submit button at certain screen sizes, meaning they were not 
the same width when on different lines or the input field was too narrow when on the same line. This was due to the 'width: auto' rule 
in the .form-control class. After many unsuccessful attempts to fix the issue, I finally managed to resolve it by giving the element a 
new .email-input class and using the '!important' property to set the width at various screen sizes.


* A blue rectangular border surrounded the Shop link when selected in the mobile dropdown menu when using Safari (both on a Mac at a 
reduced screen size and on an iPhone). I eventually resolved this by adding an 'outline: none' style rule to the a:focus pseudoelement 
(attempts to target by class or other more specific properties were unsuccessful).