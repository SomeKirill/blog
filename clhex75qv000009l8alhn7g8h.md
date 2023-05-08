---
title: "flaws.cloud level 1 walkthrough"
seoTitle: "flaws.cloud level 1 through"
datePublished: Mon May 08 2023 14:10:33 GMT+0000 (Coordinated Universal Time)
cuid: clhex75qv000009l8alhn7g8h
slug: flawscloud-level-1-walkthrough
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1683555703657/cd8a60a2-202b-4903-9caa-3580529896a2.png
tags: cloud, aws, security, aws-security, cloudsecurity

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683554912156/68ce4e15-1e66-4766-a859-a9f0306d6d0f.png align="center")

**Disclaimer:** The information provided in this post is for educational purposes only. The website creator and/or editor is not responsible for any misuse of the information provided. All the information in this post is meant to help readers develop penetration testing and vulnerability aptitude to prevent attacks discussed. Use information at your own risk. By continuing, you acknowledge the aforementioned user risk/responsibilities.

## **Introduction**

Amazon Web Services (AWS) is one of the most widely used cloud platforms for hosting web applications and services. However, like any other platform, AWS has its own set of vulnerabilities and security issues that can be exploited by attackers. To understand and identify these vulnerabilities, the flAWS challenge was created by Scott Piper of Summit Route, an independent AWS security consultant.

The flAWS challenge is a series of levels designed to teach individuals about common mistakes and gotchas when using AWS. Unlike traditional penetration testing, the challenges focus on AWS-specific issues like insecure S3 buckets, authentication, metadata services, and accessing EC2 instances.

## **Level 1: Enumerate AWS**

The first level of the flAWS challenge is designed to familiarize individuals with AWS and how to enumerate its components. The objective is to find the first sub-domain.

### **Step 1: Enumerate** [**flaws.cloud**](http://flaws.cloud)

The first step is to enumerate [flaws.cloud](http://flaws.cloud) using dig and nslookup commands to determine the IP address and AWS region where it is hosted.

```bash
nslookup flaws.cloud

nslookup 52.218.236.202
```

### **Step 2: Identify S3 Bucket**

The IP address discovered in Step 1 is then used to determine if the site is hosted as an S3 bucket.

```bash
S3 Bucket address translation http://flaws.cloud.s3-website-us-west-2.amazonaws.com/
```

### **Step 3: Install AWS CLI**

The AWS CLI is used to access the S3 bucket and retrieve its contents. To install AWS CLI, use the following commands:

```bash
bashCopy codecurl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

Check that AWS CLI has been successfully installed:

```bash
bashCopy codeaws --version
```

### **Step 4: Access S3 Bucket with AWS CLI**

Use AWS CLI to access the S3 bucket and list its contents:

```bash
bashCopy codeaws s3 ls s3://flaws.cloud/ --no-sign-request --region us-west-2
```

### **Step 5: Identify Interesting Files**

Identify interesting files within the S3 bucket:

```bash
bashCopy codefile secret-dd02c7c.html looks interesting.
```

### **Step 6: Access Interesting File**

Access the identified interesting file in the S3 bucket:

```bash
bashCopy codeNavigate to secret http://flaws.cloud/secret-dd02c7c.html
```

## **Conclusion**

The flAWS challenge is a great way to learn about common AWS security issues and vulnerabilities. The first level of the challenge is designed to familiarize individuals with AWS and how to enumerate its components. By completing this level, individuals can gain a better understanding of the tools and techniques used to identify insecure S3 buckets, authentication issues, metadata services, and accessing EC2 instances.