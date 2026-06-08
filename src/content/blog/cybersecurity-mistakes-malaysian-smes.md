---
title: "Top 5 cybersecurity mistakes Malaysian SMEs make (and how to avoid them)"
description: "Five common cybersecurity mistakes that cost Malaysian SMEs money and regulatory exposure, and the practical fixes that address each one without a large budget."
publishedAt: 2026-06-09
locale: en
author: Cyber Secure SME editorial team
tags: ["cybersecurity mistakes", "SME security", "PDPA compliance", "MyCERT", "password security"]
categories: ["managed-security", "security-awareness"]
readingTime: 5
draft: false
---

**Most cybersecurity incidents affecting Malaysian SMEs are not the result of sophisticated attacks.** They are the result of common, avoidable mistakes that create openings attackers routinely exploit. Fixing these does not require a large budget or a specialist team. It requires knowing what the mistakes are and setting aside time to address them.

Here are the five mistakes that come up most often, along with what to do about each one.

## Mistake 1: treating backups as optional until something goes wrong

Backups are frequently discussed but infrequently tested. Many Malaysian SMEs have a backup system running, but have never actually tried to restore from it. A backup that has never been restored is an assumption, not a safety net.

The two most common backup failures are:

- **Silent corruption or errors.** The backup job runs and reports success, but the data is incomplete or unreadable when you try to restore it.
- **Backups stored in the same location as the original data.** If ransomware encrypts your main system and the backup is on the same drive or in the same cloud account, the backup is encrypted too.

**What to do:** Schedule a restoration test at least once every quarter. Pick a random file or folder and confirm you can restore it from backup. Keep at least one copy of your backup in a location that is not connected to your main network, for example an offline drive stored offsite or a cloud account with a separate login. Providers listed under [data backup and protection](/providers/data-backup) on this directory offer managed backup services with verified restoration procedures.

## Mistake 2: sharing passwords and not using multi-factor authentication

Using the same password across multiple accounts, writing passwords in shared documents, or sharing a single login among multiple staff members are all extremely common in small businesses. They are also among the easiest things for an attacker to exploit.

When a data breach at any third-party service exposes a password, attackers test that password against other services automatically. If your staff member used the same password for their work email and a shopping site that was breached, both accounts are now at risk.

**What to do:** Enable multi-factor authentication (MFA) on every account that supports it, starting with email, accounting software, and cloud file storage. This single control blocks the majority of automated credential-stuffing attacks, because the attacker cannot provide the second factor even with the correct password. Use a password manager to generate and store unique passwords for each service.

## Mistake 3: assuming a data breach is someone else's problem

The Personal Data Protection Act 2010 (Act 709) applies to any Malaysian business that processes personal data in the course of commercial transactions. If you hold customer names, contact details, IC numbers, or payment information, you are subject to the Act. The 2024 amendments introduced mandatory breach notification obligations: if a breach occurs and personal data is compromised, you may be required to notify the Personal Data Protection Commissioner within a prescribed period.

Many SME owners are genuinely unaware of these obligations. Discovering them during an active incident, when time is short and decisions are made under pressure, is one of the most avoidable situations in cybersecurity.

**What to do:** Identify what personal data your business holds, who has access to it, and what you would do if it were compromised. CyberSecurity Malaysia publishes guidance on incident response. MyCERT at mycert.org.my is the reporting channel for cyber incidents affecting Malaysian organisations. If you are uncertain whether your data handling arrangements comply with the PDPA, a GRC consultant familiar with Malaysian law can review your processes in a few hours.

## Mistake 4: giving every staff member administrator rights

When every user account on a computer or cloud platform has full administrator rights, any compromise of any account gives the attacker full control. An employee who clicks a malicious link while logged in as an administrator can inadvertently grant that malicious software access to install itself, modify system files, or spread across the network.

This pattern is common in small businesses because it is convenient during setup and rarely questioned afterwards.

**What to do:** Review account permissions on your systems and apply the principle of least privilege - each staff member gets only the access they need to do their job. Administrators who need elevated access should use a separate account for administrative tasks and a standard account for day-to-day work. When a staff member leaves the company, revoke their access on the same day. The [security maturity self-assessment](/tools/security-maturity-assessment) covers access control as one of its scored domains.

## Mistake 5: skipping security awareness training because "our staff are careful"

This is perhaps the most expensive misconception in SME security. Phishing emails are specifically designed to fool careful, attentive people. Modern phishing attacks impersonate known contacts, use accurate company names and branding, reference real events (a delivery from a supplier you actually use, a payment from a customer you are expecting), and create time pressure to reduce the chance of verification.

Every Malaysian SME has staff who are not security specialists. Assuming that good general judgement protects against targeted social engineering attacks is a common and costly mistake.

**What to do:** A basic security awareness programme does not require a large training budget. A monthly five-minute reminder about common scams, a quarterly simulated phishing test, or a short onboarding module for new staff produces measurable improvement in click rates over time. [Security awareness training providers](/providers/security-awareness) on this directory offer programmes scaled to small teams, some with Bahasa Malaysia content.

## Putting it together

None of these five mistakes is difficult to address in isolation. The challenge for a small business owner is finding the time and knowing the priority order. If you are not sure where to start, the [security maturity self-assessment](/tools/security-maturity-assessment) scores your business across the key control areas and tells you which gaps are highest priority. It takes about ten minutes and is free.

Cybersecurity does not need to be expensive to be effective for an SME. Fixing these five common mistakes closes the gaps that attackers exploit most often, and it is a reasonable goal for any Malaysian small business within the next 90 days.
