---
id: doc97
title: Cloudfront distribution, HTTPS & SSL certificates, and routing website traffic to it from registed domains 
---

The website only uses 1 Cloudfront distribution with 1 Default Cache Behaviour setting. Having anymore than this might very well make my head implode; not to mention that it's not exactly like I'm running the world's most popular blog here. Nevertheless, 
- "all Edge locations" price class is enabled for best performance
- logging is enabled with the cdn-logs/ prefix, including cookie logging. Dumped into the logs.lisachan.net S3 bucket
- Custom SSL client support for clients that Support Server Name Indication (SNI)
- TLSv1.2_2018 security policy
- HTTP/2, HTTP/1.1, HTTP/1.0 are supported versions
- IPv6 is enabled
- Origin domain name MUST NOT be set to the S3 bucket in the drop down list (as the AWS documentation states). i.e. NOT `s3-website-us-west-2`. But instead, MUST be set to point to website endpoint as provided in the S3 console i.e. `bucket-name.s3-website-region.amazonaws.com`. More on this below
- Behaviors are set to Redirect HTTP to HTTPS 
- Alternate Domain Names (CNAMEs) for both root domain (lisachan.net, icanlearnhowtocode.net) and subdomain (www.lisachan.net, www.icanlearnhowtocode.net) must be added. The SSL certificate is a pre-requisite for this
- SSL certificates are managed using Amazon Certificate Manager 

The developer guide for creating the Cloudfront distribution here here on [Amazon docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-cloudfront-walkthrough.html).

Since HTTPS is a must have for the site, an SSL certificate must be created and associated with the domain names. The user guide for getting the certificates is here on [Amazon docs](https://docs.aws.amazon.com/acm/latest/userguide/gs.html). This allows Alternate Domain Names (CNAMEs) to be added to the Cloudfront distribution. 

In order to route traffic to the Cloudfront distribution using the domain names, the 2 alias record sets that were created on Route 53 for each root domain and subdomain (4 in total in this case), are updated to point to the Cloudfront distribution instead of the S3 bucket. This is to ensure that when Route 53 receives a DNS query, it responds with the domain names that are associated with the Cloudfront distribution. The developer guide for that is here on [Amazon docs](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html).

Lastly, and very importantly, S3 buckets have 2 endpoints: REST and website. Only the website endpoint will do the magic needed to resolve index documents (e.g. index.html, docs.html), the REST one will not. This is why the origin domain name must be set to a Custom origin i.e. NOT `s3-website-us-west-2`. But set to point to website endpoint as provided in the S3 console i.e. `bucket-name.s3-website-region.amazonaws.com`. All the links failed on my site before I did this. More on this topic [here](https://stackoverflow.com/questions/34060394/cloudfront-s3-website-the-specified-key-does-not-exist-when-an-implicit-ind) and [here](https://cloudconfusing.com/2017/12/24/amazon-s3-website-vs-rest-api-endpoint/). 

