# What is Emmet
It generates code for you in VS Code
# what is appendChild() in javascript
It is used to add javascript elements into html
# How is the browser able to understand javascript commands?
Because all browsers have javascript engines but browser can't understand react so that is why we need to install it before using it in our projects
# What is CDN in React?
A CDN (Content Delivery Network) in React is a system of distributed servers that deliver web content to a user based on their geographic location. It is used to:

- Improve website load times by serving content from a server close to the user.
- Reduce bandwidth costs by caching content.
- Increase content availability and redundancy.
- Enhance website security by providing DDoS protection and other security features.

OR in other words 
CDN is the place where React library is already hosted and we use it to fetch react and directly use it in our projects
# What is crossorigin and why do we use it in script tag ?
The crossorigin attribute in the ```<script>``` tag is used to handle the CORS (Cross-Origin Resource Sharing) settings for the script. This attribute is important when you are loading scripts from a different origin (domain) than your own.

There are three possible values for the crossorigin attribute:

anonymous: This sends a request without credentials (cookies, client-side SSL certificates, or HTTP authentication).
use-credentials: This sends a request with credentials.
"" (empty string): This is the same as anonymous.
Why do we use it?
Security: It helps in enforcing security policies by controlling how resources are shared between different origins.
Error Reporting: When using crossorigin, it allows for better error reporting. If a script fails to load, the browser can provide more detailed error messages.
Resource Sharing: It enables the sharing of resources like scripts across different domains while adhering to the same-origin policy.
Example
In this example, the script is loaded from example.com without sending any credentials.
# What is the second and third parameter in this code? 
```javascript
 const heading = React.createElement('h1', {}, 'hello world! from react');
```
The second parameter which is an object is used to give attributes to the tag like "h1" in this case 
eg: 
```javascript
 const heading = React.createElement('h1', {id:"mainHeading", class:"textColorRed"}, 'hello world! from react');
```
and the third parameter is the children of the tag in this case 'h1' so the content 'hello world! from react' is the children of 'h1'