# Dynamic Copyright Year in Javascript

Dynamic year for footer copyright line. Useful on Javascript-based CMS platforms like Squarespace. 

## Example Use in the HTML

In most cases, I'll end up having to hand code the copyright line (or update the code). This includes WordPress (Elementor, Oxygen is excluded, Beaver, etc.), as well as platforms like Squarespace, Shopify, Magento, etc. 

###Here is an example of my HTML:

```html
<p>Copyright &copy; <span id="copyrightYear"></span> &middot; [Company_Name_Here] &middot; All Rights Reserved.</p>
```

### Here is what's happening with the HTML code

1. Create a new date with today's day (because nothing was used in between the parenthesis) and save it to the variable "today". Really this will create a date/time stamp (ex May 10 2020 01:00:00 AM), etc.

```js
const today = new Date();
```

2. Using the "today" variable, extract just the year and save it into the "year" variable. Which would be 2020 for today.

```js
const year = today.getFullYear();
```

3. Find the ID "copyrightYear" and insert the date's year that we saved into the "year" variable.

```js
$('#copyrightYear').html(year);
```

4. Here are a couple of explanations of the HTML used. Just in case.

```<p> & </p>``` = open and close paragraph

```&copy;``` = copyright symbol ( © )

```&middot;``` = middle dot symbol ( · )

```<span id="copyrightYear"></span>``` = where we insert the year

```[Company_Name_Here]``` = just a placeholder for you to input the company name
