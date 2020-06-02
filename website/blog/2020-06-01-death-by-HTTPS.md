---
title: Death by HTTPS
author: Lisa Chan
authorURL: https://www.linkedin.com/in/lisa-chan-b448ab1b/
authorFBID: 522880964
---

OK so it took longer to setup Cloudfront and the goddamn HTTPS than it did to get the website itself done. The Cloudfront distribution itself was easy enough to setup, so were the record sets and routing policies on Route 53. But it took a bit of muddling around in different parts of the AWS documentation repo (prob larger than the Vatican library at this point) to get the SSL certs requested, the domain names verified, and then the fucking CNAMEs added to the Cloudfront distribution. Voila my website has a nice padlock next to the address!

Celebration shortlived: Now I realize that all the links in the (now HTTPS secure) website are broken. FML.
<!--truncate-->

which then led to the whole REST vs. website endpoint; apparently Cloudfront takes REST as a default and REST doesn't resolve index documents (e.g. index.html) so I had to change the origin domain name to a Custom one to get everything to work again. Praise the internet gods for Stack Overflow!