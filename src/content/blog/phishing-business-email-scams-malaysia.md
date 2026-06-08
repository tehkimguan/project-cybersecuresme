---
title: "Phishing and business email scams in Malaysia: how SMEs get hit and how to stop it"
description: "Business email scams cost Malaysian SMEs real money. Learn how phishing and BEC attacks work, the local reporting channels, and the controls that cut your exposure fastest."
publishedAt: 2026-06-09
locale: en
author: Cyber Secure SME editorial team
tags: ["phishing", "business email compromise", "BEC Malaysia", "MyCERT", "email security"]
categories: ["cloud-security", "security-awareness"]
readingTime: 6
altLocaleSlug: penipuan-emel-perniagaan-pancingan-malaysia
draft: false
---

**Business email scams are one of the most common and costliest cyber threats for Malaysian SMEs.** The good news is that a combination of staff awareness and a few technical controls can stop the majority of attacks before they cause damage. This article explains how the attacks work, what you should do if one hits your business, and the steps that reduce your exposure most.

## How phishing and BEC attacks actually work

### Phishing

Phishing is the practice of sending emails, SMS messages, or WhatsApp messages that impersonate a trusted party in order to trick the recipient into clicking a link, downloading a file, or entering login credentials. The impersonated entity might be a bank, a government agency such as LHDN or MDEC, a logistics company, or even a colleague.

The link typically leads to a fake login page that captures your username and password. Once an attacker has those credentials, they can access your email, accounting software, or cloud storage, depending on which service was targeted.

### Business email compromise (BEC)

BEC is a more targeted form of fraud. Rather than mass-sending a generic email, the attacker studies your business first. They may monitor a compromised email account for weeks, learning your suppliers, payment terms, and communication style. Then they send a carefully crafted email that:

- Instructs your finance team to change a supplier's bank account details to one controlled by the attacker
- Impersonates your managing director to authorise an urgent payment to an unfamiliar account
- Pretends to be from a supplier asking you to update your records before the next invoice cycle

These emails are often convincing because they reference real relationships, real invoice amounts, and real timing. By the time the fraud is discovered, the money has moved through multiple accounts and is difficult to recover.

## Why Malaysian SMEs are a target

Several factors make Malaysian small businesses attractive targets. Businesses operating across multiple currencies or with cross-border supplier relationships are common BEC targets because international transfers are harder to recall quickly. Businesses that use free or basic email plans without additional security filtering receive fewer automatic warnings about suspicious messages. And staff who have not received specific training on these scams may not recognise the warning signs.

MyCERT, the computer emergency response team under CyberSecurity Malaysia, tracks cyber incidents across Malaysian organisations. Email-related scams consistently appear among the most frequently reported categories. If your business experiences an incident, reporting to MyCERT at mycert.org.my provides a record and may help them identify broader campaigns affecting other Malaysian businesses.

## The technical controls that help most

### Enable email authentication records

SPF, DKIM, and DMARC are three email authentication standards that help mail servers verify whether a message genuinely comes from the domain it claims to be from. Setting them up requires access to your domain's DNS records and typically takes an hour or less for a technical person. Without them, attackers can send email that appears to come from your domain, making it much easier to impersonate you to your own customers or suppliers.

If your business uses Microsoft 365 or Google Workspace, both platforms provide guidance on enabling these records. Many [cloud security providers](/providers/cloud-security) will configure them for you as part of an email security engagement.

### Apply anti-phishing filters to your email platform

Microsoft 365 and Google Workspace both include anti-phishing controls that are not always turned on by default. Safe Links (Microsoft) rewrites URLs in incoming email and checks them at click time. Safe Attachments opens email attachments in a sandboxed environment before delivering them. Google Workspace has equivalent features in the admin console under "Safety" settings. Review these settings with whoever manages your email platform.

### Use multi-factor authentication (MFA) on all email accounts

Even if an attacker obtains a staff member's email password through phishing, MFA prevents them from logging in without the second factor. Enable MFA for all accounts, prioritising those with access to financial systems or supplier contact records.

## The human controls that help most

### A phone-call verification rule for payment changes

Establish a firm policy: any request to change a bank account number, increase a payment amount, or make an urgent transfer must be verified by phone to a number already on file, not to a number provided in the email making the request. This single procedural control stops the majority of BEC attacks, because the attacker cannot answer the phone.

Make the rule explicit in writing and train every staff member who handles payments. Exceptions erode the policy, so apply it consistently even when the email appears to come from senior management.

### Phishing awareness training, done regularly

A one-time training session on phishing awareness fades quickly. A short monthly reminder, a simulated phishing test once a quarter, or a brief review of a real phishing example circulating in your industry keeps the topic current. Several [security awareness training providers](/providers/security-awareness) on this directory run programmes specifically designed for SME teams, including Bahasa Malaysia versions.

Use the [phishing risk self-check](/tools/phishing-risk-self-check) to score your current exposure and identify the gaps to address first.

## What to do if you receive a suspicious email or suspect a scam is in progress

1. Do not click any links or open any attachments in the suspicious email.
2. Contact the supposed sender through a separate channel to confirm whether they sent it.
3. If you believe you have already clicked a link or entered credentials, change your passwords immediately and enable MFA if it is not already active.
4. If money has been transferred fraudulently, contact your bank immediately. Speed matters; some transfers can be recalled if the bank is notified quickly.
5. Report the incident to MyCERT at mycert.org.my. You can submit reports online. For incidents involving personal data, consider whether your obligations under the Personal Data Protection Act 2010 (Act 709) require you to notify the Personal Data Protection Commissioner.

## The honest risk picture

Phishing and BEC attacks succeed primarily because they are designed to look normal. No technical control blocks every attack, and no training makes every staff member immune to a well-crafted scam. The goal is to make the attack harder, catch it faster when it does get through, and recover quickly. The controls above achieve that for most Malaysian SMEs at reasonable cost.

If you want a systematic view of your email security posture, the [cloud security providers](/providers/cloud-security) in this directory can review your Microsoft 365 or Google Workspace configuration and identify gaps.
